const BannerBottom = () => {
  return (
    <section className="banner">
      <div className="container">
        <strong>
          4 et 5 octobre 2023 <span>TOULOUSE - Domaine de Montjoie</span>
        </strong>
        <div className="img-container">
          <img
            src="/logo_allonge_blanc.png"
            alt="Logo Multigraphic"
            className="logomulti"
          />
          <img src="/logo-hp.svg" alt="Logo HP" className="logo-hp" />
          <img src="/hexis.svg" alt="Logo Hexis" className="logo-hexis" />
        </div>
      </div>
    </section>
  );
};

export default BannerBottom;
