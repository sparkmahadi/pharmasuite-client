import Image from "next/image";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Home/Homepage";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </main>
  );
}
