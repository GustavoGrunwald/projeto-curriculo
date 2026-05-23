import { HomeStyle } from "../styles/homeStyle";
import { useTypewriter } from "../hooks/functions";
import { TextoCompletoIntroducao } from "../data/dados";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const informativosIntroducao = [
  "16 anos (04/08/2009)",
  "grunwald.gustavo@gmail.com",
  "(41) 99209-6868",
  "Santa Felicidade, Curitiba - PR",
];

export function Introducao() {
  const textoExibido = useTypewriter(TextoCompletoIntroducao, 15);
  const secaoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secaoRef,
    offset: ["start start", "end start"],
  });

  const escala = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacidade = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <motion.div
      ref={secaoRef}
      className={HomeStyle.containerConteudo + " will-change-transform mt-50"}
      style={{
        scale: escala,
        opacity: opacidade,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className={HomeStyle.tituloPrincipalConteudo}>
        {"/>_Gustavo Grunwald"}
        <span className={HomeStyle.cursorPisca}>_</span>
      </h1>
      <div className={HomeStyle.containerIntrdocaoConteudo}>
        <p className={HomeStyle.paragrafoConteudo}>{textoExibido}</p>
        <div className={HomeStyle.linhaIntroducaoConteudo}></div>
        <div className="flex flex-col">
          {informativosIntroducao.map((texto) => (
            <p key={texto} className={HomeStyle.paragrafoConteudo}>
              {texto}
            </p>
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
    </motion.div>
  );
}
