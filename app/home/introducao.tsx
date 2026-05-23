import { HomeStyle } from "../styles/homeStyle";
import { useTypewriter } from "../hooks/functions";
import { TextoCompletoIntroducao } from "../data/dados";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedinIn, FaMinus, FaRegSquare } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { introducaoStyle } from "../styles/introducaoStyle";

const informativosIntroducao = [
  "16 anos (04/08/2009)",
  "grunwald.gustavo@gmail.com",
  "Curitiba - PR",
];

export function Introducao() {
  const textoExibido = useTypewriter(TextoCompletoIntroducao, 15);
  const secaoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: secaoRef,
    offset: ["start start", "end start"],
  });

  const escala = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacidade = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  return (
    <motion.div
      ref={secaoRef}
      className={`${HomeStyle.containerConteudo} ${introducaoStyle.containerPrincipal}`}
      style={{
        scale: escala,
        opacity: opacidade,
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="introducao"
    >
      <h1 className={introducaoStyle.tituloCodigo}>
        {"const dev = 'Gustavo Grunwald';"}
        <span className={`${HomeStyle.cursorPisca} ${introducaoStyle.cursor}`}>
          _
        </span>
      </h1>

      <div className={introducaoStyle.gridEstrutura}>
        <div className={introducaoStyle.colunaTexto}>
          <p className={introducaoStyle.paragrafoTexto}>{textoExibido}</p>
        </div>
        <div className={introducaoStyle.cardJson}>
          <div className={introducaoStyle.cardHeader}>
            <span className={introducaoStyle.cardNomeArquivo}>
              contato.json
            </span>
            <div className={introducaoStyle.cardBotoesControle}>
              <FaMinus className={introducaoStyle.iconeControle} />
              <FaRegSquare className={introducaoStyle.iconeControle} />
              <FaX className={introducaoStyle.iconeControle} />
            </div>
          </div>

          <div className={introducaoStyle.containerDados}>
            {informativosIntroducao.map((texto) => (
              <p key={texto} className={introducaoStyle.linhaDado}>
                <span className={introducaoStyle.marcadorSeta}>➔</span> {texto}
              </p>
            ))}
          </div>

          <div className={introducaoStyle.divisorCard} />
          <div className={introducaoStyle.containerLinks}>
            <a
              className={introducaoStyle.botaoLink}
              href="https://github.com/gustavogrunwald"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={introducaoStyle.iconeGithub} /> GitHub
            </a>
            <a
              className={introducaoStyle.botaoLink}
              href="https://www.linkedin.com/in/gustavo-grunwald/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className={introducaoStyle.iconeLinkedin} />{" "}
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
