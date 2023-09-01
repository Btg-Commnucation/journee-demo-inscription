import BannerBottom from "./components/BannerBottom";
import Footer from "./components/Footer";
import FormComponents from "./components/FormComponents";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <article>
        <div className="container-narrow">
          <FormComponents />
          <div className="informations">
            <h3>Informations</h3>
            <a href="mailto:web@multigraphic.fr">web@multigraphic.fr</a>
            <a href="tel:+33145067688">Tel. 0145067688</a>
          </div>
        </div>
      </article>
      <BannerBottom />
      <Footer />
    </>
  );
}

export default App;
