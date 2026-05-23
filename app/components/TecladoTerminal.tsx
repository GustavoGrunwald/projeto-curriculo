import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
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

  const executarComando = () => {
    setIsDescrevendo(false);
    setIsListando(false);
    atualizarHistorico();
    handleClique();
  };

  useEffect(() => {
    const dispararEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        executarComando();
      }
    };

    window.addEventListener("keydown", dispararEnter);

    return () => {
      window.removeEventListener("keydown", dispararEnter);
    };
  }, [isListando, isDescrevendo, atualizarHistorico]);

  const obterEstiloComando = (expNome: string) => {
    if (expNome === "Experiencias") {
      return isListando
        ? experienciaStyle.teclado.comandoAtivo
        : experienciaStyle.teclado.comandoDesativo;
    }

    if (isDescrevendo) {
      return experienciaStyle.teclado.comandoAtivo;
    }

    return !isExperienciaClicked
      ? experienciaStyle.teclado.comandoInativo
      : experienciaStyle.teclado.comandoDesativo;
  };

  return (
    <div className={experienciaStyle.teclado.container}>
      <h1 className={experienciaStyle.teclado.titulo}>Terminal de Comando</h1>

      <div className={experienciaStyle.teclado.layoutFlex}>
        <div className={experienciaStyle.teclado.colunaBotoes}>
          <button
            className={experienciaStyle.teclado.comandoAtivo}
            onClick={() => {
              setComando("list");
              setIsListando(true);
              setIsDescrevendo(false);
              if (!isListando) setExperiencia("");
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
              if (!isDescrevendo) setExperiencia("");
            }}
            disabled={!isExperienciaClicked}
          >
            Describe
          </button>
        </div>
        <div className="flex">
          <div className={experienciaStyle.teclado.divisorVertical}></div>
          <div className={experienciaStyle.teclado.colunaBotoes}>
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
          <div className={experienciaStyle.teclado.colunaBotoes}>
            <button
              title="Pressione Enter para rodar"
              className={experienciaStyle.teclado.botaoPlay}
              onClick={executarComando}
            >
              <FaPlay className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
