# Step 1. Rebuild the source code only when needed
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# Omit --production flag for TypeScript devDependencies
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi


COPY . .
# COPY tsconfig.json .

# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030
ARG MKOBO_CL_WEBSITE=""
ENV MKOBO_CL_WEBSITE=${MKOBO_CL_WEBSITE}
# ARG MKOBO_BASE_API_URL=https://api.mkobobank.com/v1
ARG MKOBO_BASE_API_URL=http://46.101.32.157:6004/v1
ENV MKOBO_BASE_API_URL=${MKOBO_BASE_API_URL}

# Uncomment the following line to disable telemetry at build time
# ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# Step 2. Production image, copy all the files and run next
FROM node:18-alpine AS runner

WORKDIR /usr/src/app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.js .
COPY --from=builder /usr/src/app/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

# Environment variables must be redefined at run time
ARG MKOBO_CL_WEBSITE
ENV MKOBO_CL_WEBSITE=${MKOBO_CL_WEBSITE}
ARG MKOBO_BASE_API_URL=https://api.mkobobank.com/v1
ENV MKOBO_BASE_API_URL=${MKOBO_BASE_API_URL}

# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

CMD node server.js
