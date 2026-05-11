import { HomeStyle } from "../styles/homeStyle";
import { useTypewriter } from "../hooks/functions";
import { TextoCompletoIntroducao } from "../data/dados";

const informativosIntroducao = [
  "16 anos (04/08/2009)",
  "grunwald.gustavo@gmail.com",
  "(41) 99209-6868",
  "Santa Felicidade, Curitiba - PR",
];

export function Introducao() {
  const textoExibido = useTypewriter(TextoCompletoIntroducao, 15);
  return (
    <div className={HomeStyle.containerConteudo + " h-100"}>
      <h1 className={HomeStyle.tituloPrincipalConteudo}>
        {"/>_Gustavo Grunwald"}
        <span className={HomeStyle.cursorPisca}>_</span>
      </h1>
      <div className={HomeStyle.containerIntrdocaoConteudo}>
        <p className={HomeStyle.paragrafoConteudo}>{textoExibido}</p>
        <div className={HomeStyle.linhaIntroducaoConteudo}></div>
        <div className="flex flex-col">
          {informativosIntroducao.map((texto) => (
            <p className={HomeStyle.paragrafoConteudo}>{texto}</p>
          ))}
          <a
            className={HomeStyle.linkSideBar}
            href="https://github.com/gustavogrunwald"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className={HomeStyle.linkSideBar}
            href="https://www.linkedin.com/in/gustavo-grunwald/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
