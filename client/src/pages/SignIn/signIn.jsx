import Footer from "../../components/Footer/footer";
import Form from "../../components/Form/form";
import Navigation from "../../components/Navigation/navigation";

function SignIn() {
  return (
    <>
      <Navigation />
      <main className="page-container">
        <div className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle"></i>
            <h1>Sign In</h1>
            <Form />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
