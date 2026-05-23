import { useEffect, useState } from "react";
import { FaPause, FaPlay, FaRunning } from "react-icons/fa";
import { experienciaStyle } from "~/styles/experienciaStyle";

export function TecladoTerminal({
  setComando,
  setExperiencia,
  resultados,
  atualizarHistorico,
}: {
  setComando: (comando: string) => void;
  setExperiencia: (experiencia: string) => void;
  resultados: { nome: string; descricao: string }[];
  atualizarHistorico: () => void;
}) {
  const [isListando, setIsListando] = useState(false);
  const [isDescrevendo, setIsDescrevendo] = useState(false);
  const [isExperienciaClicked, setIsExperienciaClicked] = useState(false);
  const handleClique = () => {
    if (isListando) {
      setIsExperienciaClicked(true);
    }
  };

  const obterEstiloComando = (expNome: string) => {
    if (expNome === "Experiencias") {
      if (isListando) {
        return experienciaStyle.teclado.comandoAtivo;
      } else {
        return experienciaStyle.teclado.comandoDesativo;
      }
    }
    if (expNome !== "Experiencias") {
      if (isDescrevendo) {
        return experienciaStyle.teclado.comandoAtivo;
      } else {
        if (!isExperienciaClicked) {
          return experienciaStyle.teclado.comandoInativo;
        }
        return experienciaStyle.teclado.comandoDesativo;
      }
    }
  };
  return (
    <div className={experienciaStyle.teclado.container}>
      <div className="flex justify-between">
        <div className="p-5 flex-col flex gap-2">
          <button
            className={experienciaStyle.teclado.comandoAtivo}
            onClick={() => {
              setComando("list");
              setIsListando(true);
              setIsDescrevendo(false);
              if (!isListando) {
                setExperiencia("");
              }
            }}
          >
            List
          </button>
          <button
            className={experienciaStyle.teclado.comandoAtivo}
            onClick={() => {
              setComando("help");
              setIsListando(false);
              setIsDescrevendo(false);
              setExperiencia("");
            }}
          >
            Help
          </button>
          <button
            className={experienciaStyle.teclado.comandoAtivo}
            onClick={() => {
              setComando("clear");
              setIsListando(false);
              setIsDescrevendo(false);
              setExperiencia("");
            }}
          >
            Clear
          </button>
          <button
            className={experienciaStyle.teclado.comandoAtivo}
            onClick={() => {
              setComando("describe");
              setIsDescrevendo(true);
              setIsListando(false);
              if (!isDescrevendo) {
                setExperiencia("");
              }
            }}
            disabled={!isExperienciaClicked}
          >
            Describe
          </button>
        </div>
        <div className="flex">
          <div className="h-50 w-0.5 bg-gray-600"></div>
          <div className="p-5 flex-col flex gap-2">
            {resultados.map((exp) => (
              <button
                key={exp.nome}
                className={obterEstiloComando(exp.nome)}
                onClick={() => setExperiencia(exp.nome)}
                disabled={
                  (exp.nome === "Experiencias" && !isListando) ||
                  (exp.nome !== "Experiencias" && !isDescrevendo)
                }
              >
                {exp.nome}
              </button>
            ))}
          </div>
        </div>
        <div className="flex">
          <div className="p-5 flex-col flex gap-2">
            <button
              className="h-2"
              onClick={() => {
                setIsDescrevendo(false);
                setIsListando(false);
                atualizarHistorico();
                handleClique();
              }}
            >
              <FaPlay />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
