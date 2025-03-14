import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing/index.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="mt-16 lg:mt-6">
        <BrandsLogo />
      </div>
      <Services />
      <Pricing />
      <Testimonial />
      <BlogsComp />
      <Footer />
    </div>
  );
};

export default App;
