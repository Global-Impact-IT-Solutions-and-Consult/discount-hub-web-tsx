// global.d.ts
export {};

declare global {
  interface Window {
    google: any;
    scraper: any;
    FB: any; // You can be more specific if you know the exact shape of `google`
  }
  declare namespace google {
    namespace accounts {
      namespace id {
        function initialize(options: {
          client_id: string;
          callback: (response: { credential: string }) => void;
          context?: string;
          ux_mode?: string;
          login_uri?: string;
          auto_select?: boolean;
          itp_support?: boolean;
          auto_prompt?: boolean;
        }): void;

        function renderButton(
          element: HTMLElement,
          options: {
            theme: string;
            size: string;
            text?: string;
            shape?: string;
            logo_alignment?: string;
            width?: string;
          }
        ): void;

        function prompt(): void;
      }
    }
  }
}
