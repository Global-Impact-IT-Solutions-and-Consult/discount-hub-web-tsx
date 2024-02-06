{
  /* <div className="py-8 w-full">
  <SectionTopBar title={"Latest Deals"} linkText={"VIEW ALL"} link={"/deals"} />
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-8">
    {loading ? (
      <Spinner />
    ) : (
      apiData.map((item, i) => (
        <div className="flex flex-col h-full" key={i}>
          <DealCard
            title={item.products.title}
            image={item.products.image?.sourceUrl}
            description={item.products.summary}
            location={item.products.location}
            store={item.products.store?.title}
            price={item.products.price}
            link={item.databaseId}
          />
        </div>
      ))
    )}
  </div>
</div> */
}
