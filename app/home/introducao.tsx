import { useEffect, useState } from "react";
import { HomeStyle } from "../styles/homeStyle";
import { useTypewriter } from "../hooks/functions";

export function Introducao() {
  const textoCompleto =
    "Meu nome é Gustavo Grunwald, sou apaixonado por tecnologia e programação. Desde cedo, sempre tive uma curiosidade insaciável sobre como as coisas funcionam, o que me levou a explorar o mundo da tecnologia. Atualmente, estou cursando o ensino médio e tenho me dedicado a aprender cada vez mais sobre desenvolvimento de software, inteligência artificial e outras áreas relacionadas à tecnologia. Por isso, por meio desse site pretendo compartilhar um pouco da minha jornada, meus projetos e minhas experiências no mundo da tecnologia.";

  const textoExibido = useTypewriter(textoCompleto, 15);
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
          <p>16 anos (04/08/2009)</p>
          <p>grunwald.gustavo@gmail.com</p>
          <p>(41) 99209-6868</p>
          <p>Santa Felicidade, Curitiba - PR</p>
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
