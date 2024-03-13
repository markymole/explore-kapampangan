import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroMap from "../components/hero/HeroMap";

export default function Page() {
  const links = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "Explore",
      link: "/explore",
    },
    {
      page: "Discover",
      link: "/discover",
    },
    {
      page: "Resources",
      link: "/resources",
    },
    {
      page: "About",
      link: "/about-us",
    },
  ];

  return (
    <main className="">
      <Header links={links} />
      <HeroMap />
      <Footer />
    </main>
  );
}
