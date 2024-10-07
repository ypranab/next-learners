import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Guidelines from "../components/Guidelines";
import ImageSection from "../components/ImageSection";

const HomePage = () => {
  return (
    <div className="mx-auto">
      <Banner></Banner>
      <h1 className="px-3 text-4xl font-extrabold text-center text-red-400 mt-10">
        Lets Explore new skills!!
      </h1>
      <Guidelines></Guidelines>
      <ImageSection></ImageSection>
      <hr />
      <Contact></Contact>
      <AboutUs></AboutUs>
    </div>
  );
};

export default HomePage;
