import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/imagens/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section className="logo">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
          alt=""
        />
      </section>
      <section>
        <p>Desenvolvido por POKIMAO.</p>
      </section>
    </footer>
  );
};

export default Footer;
