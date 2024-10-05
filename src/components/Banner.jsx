const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img-b.udemycdn.com/course/750x422/6035102_7d1a.jpg"
          className="max-w-xl w-3/4 rounded-lg shadow-2xl"
        />
        <div className="flex-col">
          <h1 className="text-5xl font-bold">Welcome</h1>
          <p className="py-6">Learn New Skills at Next Learners</p>
          <button className="btn btn-primary">Explore course</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
