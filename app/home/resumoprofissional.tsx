import { HomeStyle } from "../styles/homeStyle";
import { useTypewriter } from "../hooks/functions";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { FaMinus } from "react-icons/fa";
import { FaRegSquare, FaX } from "react-icons/fa6";
import { resumoProfissionalStyle } from "~/styles/resumoProfissionalSyle";

interface FragmentoTexto {
  texto: string;
  classe: string;
  tipoElemento: "span" | "p";
}

function BlocoDigitado({
  bloco,
  index,
  vel,
  delay,
  eInView,
}: {
  bloco: FragmentoTexto;
  index: number;
  vel: number;
  delay: number;
  eInView: boolean;
}) {
  const textoExibido = useTypewriter(
    bloco.texto,
    vel,
    eInView ? delay : 9999999,
  );

  if (bloco.tipoElemento === "span") {
    return <span className={bloco.classe}>{eInView ? textoExibido : ""}</span>;
  }

  return (
    <p className={bloco.classe}>
      {eInView ? textoExibido : ""}
      {index === 4 && <span className={HomeStyle.cursorPisca}>_</span>}{" "}
    </p>
  );
}

export function ResumoProfissional() {
  const vel = 10;
  const containerRef = useRef(null);
  const estaNaTela = useInView(containerRef, { once: true, amount: 0.2 });

  const blocosTexto: FragmentoTexto[] = [
    {
      texto: "public class ",
      classe: HomeStyle.codigosResumoProfissional,
      tipoElemento: "span",
    },
    {
      texto: "ResumoProfissional",
      classe: HomeStyle.tituloResumoProfissional,
      tipoElemento: "span",
    },
    {
      texto:
        ' {\n  public static void main(String[] args) {\n    System.out.print("',
      classe: HomeStyle.codigosResumoProfissional,
      tipoElemento: "span",
    },
    {
      texto:
        "Sou um estudante de ensino médio apaixonado por tecnologia e programação, com uma curiosidade insaciável sobre como as coisas funcionam. Tenho me dedicado a aprender cada vez mais sobre desenvolvimento de software, inteligência artificial e outras áreas relacionadas à tecnologia. Por meio deste site, compartilho minha jornada, projetos e experiências no mundo da tecnologia.",
      classe: HomeStyle.textoInformativoResumoProfissional,
      tipoElemento: "p",
    },
    {
      texto: '");\n  }\n}',
      classe: HomeStyle.codigosResumoProfissional,
      tipoElemento: "p",
    },
  ];

  let delayAcumulado = 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacidade = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0],
  );

  const escala = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0.8, 1.05, 1.05, 0.8],
  );

  const rotacaoX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.65, 1],
    [20, 0, 0, -20],
  );

  return (
    <div
      ref={containerRef}
      className="w-full relative py-32 flex items-center justify-center"
      style={{ perspective: 1500 }}
    >
      <motion.div
        style={{
          scale: escala,
          opacity: opacidade,
          rotateX: rotacaoX,
          transformOrigin: "center center",
          transformStyle: "preserve-3d",
        }}
        className={`${HomeStyle.containerConteudo} ${resumoProfissionalStyle.container}`}
      >
        <div className={resumoProfissionalStyle.containerCard}>
          <div className={resumoProfissionalStyle.editorBar}>
            <span className={resumoProfissionalStyle.editorBarItem}>File</span>
            <span className={resumoProfissionalStyle.editorBarItem}>Edit</span>
            <span className={resumoProfissionalStyle.editorBarItem}>
              Selection
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400 font-mono text-[11px]">
              ResumoProfissional.java
            </span>
          </div>

          <div className="flex h-full items-center text-gray-400">
            <button
              className={`${resumoProfissionalStyle.controlButton} hover:bg-gray-700/40`}
            >
              <FaMinus size={10} />
            </button>
            <button className={`${resumoProfissionalStyle.controlButton}`}>
              <FaRegSquare size={10} />
            </button>
            <button className={`${resumoProfissionalStyle.controlButton}`}>
              <FaX size={10} />
            </button>
          </div>
        </div>

        <div className="p-8 font-mono whitespace-pre-wrap leading-relaxed text-left">
          {blocosTexto.map((bloco, index) => {
            const delayAtual = delayAcumulado;
            delayAcumulado += bloco.texto.length * vel;

            return (
              <BlocoDigitado
                key={index}
                bloco={bloco}
                index={index}
                vel={vel}
                delay={delayAtual}
                eInView={estaNaTela}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
