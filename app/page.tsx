import CardDeck from "./components/carddeck";
import Header from "./components/header";
import Hero from "./components/hero";
import Slidebox from "./components/slidebox";
import { lorem } from "./components/slidebox/featured.data";

export default function Home() {
  const links = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "Explore",
      link: "/",
    },
    {
      page: "Discover",
      link: "/",
    },
    {
      page: "About",
      link: "/",
    },
  ];

  return (
    <main className="">
      <Header links={links} />
      <Hero
        heading="Discover and explore the flavors of Kapampangan Cuisine"
        description={lorem}
        button="Get Started"
        layout="grid"
      />
      <Slidebox />
      <CardDeck />
    </main>
  );
}
