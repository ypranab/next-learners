const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B900%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2024/09/17/30401_PCL_1_Book_Club_Colored_Television_09_17_24.jpg%5D&scale=options%5Blimit%5D,size%5B900x10000%5D&sink=format%5Bwebp%5D"
          className="max-w-xs w-3/4 rounded-lg shadow-2xl"
        />
        <div className="flex-col">
          <h1 className="text-5xl font-bold">Welcome</h1>
          <p className="py-6">
            Unlock a World of Stories – Find Your Next Favorite Book at eLibrary
          </p>
          <button className="btn btn-primary">Buy Book</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
