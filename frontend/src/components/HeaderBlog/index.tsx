import logozito from "../../assets/img/LareiraMagica-1.png";
import "./styles.css";

function HeaderBlog() {
  return (
    <>
      <header id="topo">
        <section className="container">
          <div className="logo">
            <a>
              <img src={logozito} alt="Lareira Mágica" />
            </a>
          </div>

          <section className="menuzito">
            <nav id="menu_1" className="menu">
              <div className="menu-menu-esquerda-container">
                <ul id="menu-menu-esquerda" className="menu">
                  <li>
                    <a href="https://www.estantediagonal.com.br/resenhas">
                      Resenhas
                    </a>
                  </li>
                  <li>
                    <a href="https://www.estantediagonal.com.br/series">
                      Séries
                    </a>
                  </li>
                  <li>
                    <a href="https://www.estantediagonal.com.br/entrevistas">
                      Entrevistas
                    </a>
                  </li>
                  <li>
                    <a href="https://www.estantediagonal.com.br/filmes">
                      Filmes
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="menu_2" className="menu">
              <div className="menu-menu-direita-container">
                <ul id="menu-menu-direita" className="menu">
                  <li>Lançamentos</li>
                  <li>Parceiras</li>
                  <li>
                    <a href="https://www.estantediagonal.com.br/contato">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </section>
        </section>
      </header>
    </>
  );
}

export default HeaderBlog;
