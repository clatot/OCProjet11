import Banner from "../../components/Banner/banner";
import Feature from "../../components/Feature/feature";
import Footer from "../../components/Footer/footer";
import Navigation from "../../components/Navigation/navigation";

function Home() {
  const featureContent = [
    {
      id: 1,
      image: "./src/assets/images/icon-chat.png",
      title: "You are our #1 priority",
      content:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      id: 2,
      image: "./src/assets/images/icon-money.png",
      title: "More savings means higher rates",
      content:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      id: 3,
      image: "./src/assets/images/icon-security.png",
      title: "Security you can trust",
      content:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <Banner />
        <section className="features">
          {featureContent.map((feature) => (
            <Feature
              key={feature.id}
              imageSrc={feature.image}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
