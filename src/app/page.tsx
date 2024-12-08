import Image from "next/image";
import Hero from "./components/hero";
import SideTable from "./components/sideTable";
import Picks from "./components/picks";
import NewArrivals from "./components/newArrivals";
import MyBlogs from "./components/blogs";
import OurInstagram from "./components/ourInstagram";

export default function Home() {
  return (
    <>
    <Hero/>
    <SideTable/>
    <Picks/>
    <NewArrivals/>
    <MyBlogs/>
    <OurInstagram/>
    </>
  );
}
