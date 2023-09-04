import React from "react";

const Footer = () => {
  const windowWidth = window.innerWidth;

  return (
    <footer>
      <a href="https://multigraphic.fr/mentions-legales/" target="_blank">
        Mentions légales
      </a>
      {windowWidth > 768 && <p> / </p>}
      <a
        href="https://multigraphic.fr/conditions-generales-de-vente/"
        target="_blank"
      >
        Conditions générales de vente
      </a>
      {windowWidth > 768 && <p> / </p>}
      <a
        href="https://multigraphic.fr/politique-de-confidentialite/"
        target="_blank"
      >
        Politique de confidentialité
      </a>
    </footer>
  );
};

export default Footer;
