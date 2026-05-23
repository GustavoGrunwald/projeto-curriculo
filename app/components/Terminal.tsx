import { useEffect, useState, useRef } from "react";
import { FaMinus, FaRegSquare } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { TecladoTerminal } from "./TecladoTerminal";
import { resultadosExperiencias } from "~/data/dados";
import { experienciaStyle } from "~/styles/experienciaStyle";
import { motion, useScroll, useTransform } from "framer-motion";
const resultados = resultadosExperiencias;

export function Terminal() {
  const [comando, setComando] = useState("|");
  const [experiencia, setExperiencia] = useState("");
  var textoInicial =
    "O Windows PowerShell \nCopyright (C) Microsoft Corporation. \n\nTodos os direitos reservados. \n\nInstale o PowerShell mais recente para obter novos recursos e aprimoramentos! https://aka.ms/PSWindows";

  const [historico, setHistorico] = useState<
    {
      caminho: string;
      comando: string;
      experiencia: string;
      descricao: string;
    }[]
  >([]);

  const containerRef = useRef(null);

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
    [0, 0.35, 0.65, 1],
    [20, 0, 0, -20],
  );

  function atualizarHistorico() {
    if (comando === "clear") {
      setHistorico([]);
      return;
    }
    setHistorico((prev) => [
      ...prev,
      {
        caminho: "PS C:\\Users\\Gustavo >",
        comando,
        experiencia,
        descricao:
          comando === "help"
            ? "Comandos disponíveis: \nlist -> Lista experiências \ndescribe -> Descreve experiência \nhelp -> Exibe ajuda \nclear -> Limpa o terminal"
            : comando === "list"
              ? resultados.map((r) => r.nome).join("\n")
              : resultados.find((r) => r.nome === experiencia)?.descricao ||
                "Comando não reconhecido. Use 'help' para ver os comandos disponíveis.",
      },
    ]);
    setComando("|");
    setExperiencia("");
  }

  return (
    <div
      ref={containerRef}
      className="w-full relative py-32 flex flex-col items-center justify-center"
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
        className={`${experienciaStyle.terminal.container} mb-10 w-full overflow-hidden will-change-transform antialiased subpixel-antialiased`}
      >
        <div className="flex-1 flex flex-col min-h-0">
          <div className={experienciaStyle.terminal.header}>
            <FaMinus className="text-gray-500 h-3" />
            <FaRegSquare className="text-gray-500 h-3" />
            <FaX className="text-gray-500 h-3" />
          </div>
          <div className={experienciaStyle.terminal.body}>
            <p className={experienciaStyle.terminal.linha}>{textoInicial}</p>
            <div>
              {historico.map((linha, index) => (
                <div key={index}>
                  <div
                    className={`${experienciaStyle.terminal.linha} flex items-center`}
                  >
                    <span>{linha.caminho}</span>
                    <span
                      className={`${experienciaStyle.terminal.linha} text-lime-200 ml-1`}
                    >
                      {linha.comando + " "}
                    </span>
                    <span
                      className={`${experienciaStyle.terminal.linha} text-lime-200`}
                    >
                      {linha.experiencia}
                    </span>
                  </div>
                  <p
                    className={`${experienciaStyle.terminal.linha} text-pink-400 whitespace-pre-wrap`}
                  >
                    {`\n${linha.descricao}\n\n`}
                  </p>
                </div>
              ))}

              <div
                className={`${experienciaStyle.terminal.linha} flex items-center`}
              >
                <span>{`PS C:\\Users\\Gustavo >`}</span>
                <span
                  className={
                    comando === "|"
                      ? "cursor-pisca ml-1"
                      : `${experienciaStyle.terminal.linha} text-lime-200 ml-1`
                  }
                >
                  {comando + " "}
                </span>
                <span
                  className={`${experienciaStyle.terminal.linha} text-lime-200`}
                >
                  {experiencia}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <TecladoTerminal
        setComando={setComando}
        setExperiencia={setExperiencia}
        resultados={resultados}
        atualizarHistorico={atualizarHistorico}
      />
    </div>
  );
}
