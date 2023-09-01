const Header = () => {
  return (
    <header>
      <div className="container">
        {/* Si cela devient une image complète, supprime à partir de ce commentaire */}
        <div className="blue-background__container">
          {/* S'il faut juste changer le contenu du fond bleu ça passe ici */}
          <div className="top">
            <img src="/logo_allonge_blanc.png" alt="Logo Multigraphic" />
            <img src="/logo-hp.svg" alt="Logo HP" />
            <img src="/hexis.svg" alt="Logo d'hexis" />
          </div>
          <img src="/imprimante.png" alt="Photo d'une imprimante textile" />
          {/* Fin du changement du contenu fond bleu */}
        </div>
        {/* Fin de la suppression */}
      </div>
    </header>
  );
};

export default Header;
