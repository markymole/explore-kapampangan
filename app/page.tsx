import CardDeck from "./components/carddeck";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Newsletter from "./components/newsletter";
import Slidebox from "./components/slidebox";
import { lorem } from "./components/slidebox/featured.data";
import Switchback from "./components/switchback";

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
      <Switchback
        heading="Discover food shops around the province with our built-in food locator"
        description={lorem}
        image="/images/featured/minindal-explore.png"
        layout="switch"
        button={{
          text: "Take me there",
          link: "discover",
        }}
      />
      <Slidebox />
      <Switchback
        heading="Explore town culinary history and specialties through our explore page"
        description={lorem}
        image="/images/featured/featured_4.jpg"
        layout="default"
      />
      <CardDeck />
      <Newsletter
        heading="Get our latest updates"
        description="Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in
        a week on every friday so subscribe to get latest news and updates."
        button={{ text: "Subscribe" }}
      />
      <Footer />
    </main>
  );
}
