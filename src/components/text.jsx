<>
  <h1
    className={`text-center text-${
      themeMode === "dark" ? "white" : "black"
    } text-2xl font-bold my-4`}
  >
    NewsUmbrella - Top {capitalizeFirstLetter(category)} Headlines
  </h1>
  {loading && <Spinner />}
  <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length !== totalResults}
    loader={<Spinner />}
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-2 my-2">
        {articles.map((element, index) => (
          <div
            className="w-full md:w-1/3 px-2 mb-4"
            key={`${element.url} - ${index}`}
          >
            <NewsItem
              title={element.title || ""}
              description={element.description || ""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
              source={element.source.name}
            />
          </div>
        ))}
      </div>
    </div>
  </InfiniteScroll>
</>;
