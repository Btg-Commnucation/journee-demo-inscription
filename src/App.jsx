import BannerBottom from "./components/BannerBottom";
import Footer from "./components/Footer";
import FormComponents from "./components/FormComponents";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <article>
        <FormComponents />
      </article>
      <BannerBottom />
      <Footer />
    </>
  );
}

export default App;
