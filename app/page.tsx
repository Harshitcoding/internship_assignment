import Article from "@/components/Article";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Packageing from "@/components/Packageing";
import SecondColumn from "@/components/SecondColumn";
import SecondNavbar from "@/components/SecondNavbar";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <>
    <Navbar/>
    <SecondNavbar/>
    <Hero/>
    <Description/>
    <Article/>
   <SecondColumn/>
   <Packageing/>
   <SubscribeSection/>
   <Footer/>
    </>
  );
}
