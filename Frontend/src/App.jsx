
import BlogSection from "./components/BlogSection";
import ChooseListeo from "./components/ChooseListeo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/howitworks";
import LocalDeals from "./components/LocalDeals";
import Navbar from "./components/Navbar";
import PopularCategories from "./components/PopularCategories";
import TrendingListings from "./components/TrendingListings";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <PopularCategories/>
      <TrendingListings/>
      <LocalDeals/>
      <HowItWorks/>
      <ChooseListeo/>
      <BlogSection/>
      <Footer/>
    </>
  );
}
