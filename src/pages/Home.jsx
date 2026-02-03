import Hero from "../components/Organisms/Hero";
import Banner from "../components/Organisms/home/BannerCTA";
import Statistik from "../components/Organisms/home/Statistik";
import Berita from "../components/Organisms/home/Berita";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Statistik />
      <Berita />
    </>
  );
}
