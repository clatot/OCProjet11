import Banner from "../../components/Banner/banner";
import Feature from "../../components/Feature/feature";
import Footer from "../../components/Footer/footer";
import Navigation from "../../components/Navigation/navigation";

function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <section className="features">
        <Feature
          imageSrc=".\src\assets\images\icon-chat.png"
          title="You are our #1 priority"
        >
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </Feature>
        <Feature
          imageSrc=".\src\assets\images\icon-money.png"
          title="More savings means higher rates"
        >
          The more you save with us, the higher your interest rate will be!
        </Feature>
        <Feature
          imageSrc=".\src\assets\images\icon-security.png"
          title="Security you can trust"
        >
          We use top of the line encryption to make sure your data and money is
          always safe.
        </Feature>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
