import Hero from "../components/Organisms/Hero";
import Banner from "../components/Organisms/home/BannerCTA";
import Statistik from "../components/Organisms/home/Statistik";
import Artikel from "../components/Organisms/home/Artikel";
import Berita from "../components/Organisms/home/Berita";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Statistik />
      <Artikel />
      <Berita />
    </>
  );
}
