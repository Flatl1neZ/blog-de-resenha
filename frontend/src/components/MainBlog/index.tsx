import sociedade from "../../assets/img/sociedade.svg";
import capaLotr from "../../assets/img/capa-lotr.jpg";
import "./styles.css";

function MainBlog() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />

      <div className="containerMain">
        <div className="colLeft">
          <section>
            <div className="postItem">
              <header>
                <div className="thumb">
                  <img
                    src={capaLotr}
                    className="attachment-850x200x1 size-850x200x1 wp-post-image lazy-loaded"
                    alt="Capa Lotr"
                  />
                  <div className="overlay"></div>
                </div>
                <div className="alinha">
                  <h1 className="titleColor">
                    A Sociedade do Anel | Uma pequena reflexão
                  </h1>
                </div>
              </header>
              <article>
                <p></p>
                <p>
                  - Estava pensando nisso - disse Frodo. - Mas temos que tentar
                  chegar até lá; e isso não se faz sentando e pensando. Então,
                  receio que devemos ir. Somos imensamente gratos por sua
                  gentileza! Tive pavor do senhor e de seus cachorros por mais
                  de trinta anos, Sr. Magote, apesar de o senhor poder rir do
                  que digo. É uma pena. Perdi um grande amigo. E agora sinto em
                  partir tão depressa. Mas voltarei, quem sabe, um dia, se tiver
                  uma chance.
                </p>
                <p>
                  <img
                    loading="lazy"
                    src={sociedade}
                    className="alignCenter size-full wp-image-27211 lazy-loaded"
                  />
                </p>
                <p>
                  - Será bem-vindo quando vier - disse Magote. - Mas agora tive
                  uma idéia. Já está quase no fim do dia, e nós vamos cear, pois
                  nos deitamos logo depois do sol. Se o senhor e o Sr. Peregrin
                  e os outros pudessem ficar e comer alguma coisa conosco,
                  ficaríamos satisfeitos.
                </p>
                <p>
                  - Nós também ficaríamos - disse Frodo. - Mas temo que devamos
                  partir imediatamente. Mesmo assim estará escuro antes de
                  chegarmos à balsa.
                </p>
                <p>
                  - Ah! mas esperem um minuto! Eu ia dizer: depois de uma
                  pequena ceia, eu pego uma carroça e levo vocês todos até a
                  balsa. Isso vai poupar uma boa caminhada, e também pode
                  poupá-los de problemas de outro tipo.
                </p>
                <p></p>
              </article>
              <footer></footer>
            </div>
          </section>
        </div>
        <aside className="colRight">
          <div className="sidebar">
            <div className="widget-area">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default MainBlog;
