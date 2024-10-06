const ImageSection = () => {
  return (
    <div className="hero bg-teal-50 w-4/5 mt-4 mx-auto">
      <div className="hero-content grid grid-cols-4 grid-rows-2 gap-2">
        <div className="row-span-2 col-span-2">
          <img
            src="https://img-b.udemycdn.com/course/750x422/6035102_7d1a.jpg"
            className=""
          />
        </div>
        <img
          src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-2x-v2.jpg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageSection;
