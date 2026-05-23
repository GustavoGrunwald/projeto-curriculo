import { HomeStyle } from "../styles/homeStyle";
import { useTypewriter } from "../hooks/functions";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bateria } from "~/components/Bateria";

export function Formacao() {
  const texto =
    "{ \n 'escola': 'Instituto Federal do Paraná', \n 'curso': 'Técnico em Informática', \n 'inicio-fim': '2024 - 2027', \n 'periodo': 'Manhã' \n }";
  const textoExibido = useTypewriter(texto, 15, 0);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacidadeGeral = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0],
  );
  const escalaGeral = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0.95, 1, 1, 0.95],
  );
  const rotacaoX = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [10, 0, 0, -10],
  );

  const movimentoYTexto = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [180, 0, -180],
  );

  const movimentoXBateria = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [300, 0, -100],
  );

  return (
    <div
      ref={containerRef}
      className="w-full relative py-32 flex items-center justify-center"
      style={{ perspective: 1500 }}
      id="formacao"
    >
      <motion.div
        style={{
          scale: escalaGeral,
          opacity: opacidadeGeral,
          rotateX: rotacaoX,
          transformOrigin: "center center",
          transformStyle: "preserve-3d",
        }}
        className={`${HomeStyle.containerConteudo} h-auto min-h-[40vh] grid grid-cols-1 md:grid-cols-12 gap-8 items-center will-change-transform subpixel-antialiased`}
      >
        <motion.div
          style={{ y: movimentoYTexto }}
          className="md:col-span-7 w-full text-left"
        >
          <h1 className={`${HomeStyle.tituloResumoProfissional} mb-6`}>
            Formação Acadêmica
          </h1>
          <p
            className={`${HomeStyle.textoInformativoResumoProfissional} font-mono whitespace-pre-wrap`}
          >
            {textoExibido}
          </p>
        </motion.div>

        <motion.div
          style={{ x: movimentoXBateria }}
          className="md:col-span-5 flex justify-center items-center flex-col w-full"
        >
          <div className="w-full max-w-60">
            <div className="flex items-center justify-between text-gray-400">
              <p className="text-xs m-1">2024</p>
              <p className="text-xs m-1">2025</p>
              <p className="text-xs m-1">2026</p>
              <p className="text-xs m-1">2027</p>
            </div>
          </div>

          <div className="w-full max-w-60 mb-2">
            <div className="flex items-center justify-between opacity-50">
              {Array.from({ length: 4 }).map((_, i) => (
                <p key={i} className="text-xs m-1 text-white">
                  |
                </p>
              ))}
            </div>
          </div>
          <Bateria />
        </motion.div>
      </motion.div>
    </div>
  );
}
