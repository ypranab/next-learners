import userPic from "../assests/user.png";

const AboutUs = () => {
  return (
    <div className="bg-slate-200">
      <div className="hero w-3/4 bg-slate-200 mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img src={userPic} className="max-w-sm rounded-full shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Pranab Singha</h1>
            <p className="py-6">
              As a Full Stack Web Developer, I am experienced in creating
              visually appealing and user friendly web apps while keeping up
              with industry trends, best practices and technologies and
              contributing values to projects and organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
