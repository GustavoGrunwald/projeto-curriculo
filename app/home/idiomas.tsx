import { ComponentsStyle } from "~/styles/componentsStyle";
import { HomeStyle } from "../styles/homeStyle";
import { useEffect, useState } from "react";
import { FaRightLong, FaLeftLong } from "react-icons/fa6";

const textoBotoes = ["Gustavo Grunwald", "Inglês", "Italiano", "Espanhol"];
const descricoesIdiomas = [
  "",
  "Avançado - 2 anos de curso na Wizard (B2) + Experiência no exterior",
  "Intermediário - Imersão na Itália ",
  "Básico - Aulas na escola",
];

function Switch({
  index,
  texto,
  estadoAtivo,
  onAlternar,
}: {
  index: number;
  texto: string;
  estadoAtivo: boolean;
  onAlternar: (idx: number) => void;
}) {
  return (
    <div className="flex gap-4 mt-4 justify-between items-center w-100 shrink-0">
      <h1
        className={
          estadoAtivo
            ? HomeStyle.idiomas.textoAtivo
            : HomeStyle.idiomas.textoInativo
        }
      >
        {texto}
      </h1>
      <div
        className={
          estadoAtivo
            ? ComponentsStyle.switch.ativo
            : ComponentsStyle.switch.inativo
        }
        onClick={() => onAlternar(index)}
      >
        <div
          className={
            estadoAtivo
              ? ComponentsStyle.bolinhaSwitch.ativo
              : ComponentsStyle.bolinhaSwitch.inativo
          }
        ></div>
      </div>
    </div>
  );
}

export function Idiomas() {
  const [estadosSwitch, setEstadosSwitch] = useState([
    { index: 0, estado: false },
    { index: 1, estado: false },
    { index: 2, estado: false },
    { index: 3, estado: false },
  ]);

  function alternarEstado(index: number) {
    setEstadosSwitch((prevEstados) => {
      let novosEstados;

      if (index === 0) {
        // Pega o estado inverso do index 0
        const estado = !prevEstados.find((i) => i.index === 0)?.estado;
        // Atualiza todos os estados pelo novo estado geral
        novosEstados = prevEstados.map((item) => ({
          ...item,
          estado: estado,
        }));
      } else {
        // Lógica de cada item
        novosEstados = prevEstados.map((item) =>
          item.index === index ? { ...item, estado: !item.estado } : item,
        );

        // Pega os estados dos idiomas, se todos tiverem true retorna true, se não retorna false
        const idiomas = novosEstados.filter((item) => item.index !== 0);
        const idiomasLigados = idiomas.every((item) => item.estado);

        // Atualiza o index 0 com base nos idiomas
        novosEstados = novosEstados.map((item) =>
          item.index === 0 ? { ...item, estado: idiomasLigados } : item,
        );
      }

      return novosEstados;
    });
  }

  function Descricoes({
    index,
    descricao,
    estadoAtivo,
  }: {
    index: number;
    descricao: string;
    estadoAtivo: boolean;
  }) {
    const [isClicked, setIsClicked] = useState(false);
    const [isGustavoLigado, setIsGustavoLigado] = useState(
      estadosSwitch[0].estado,
    );
    useEffect(() => {
      setIsGustavoLigado(estadosSwitch[0].estado);
    }, [estadosSwitch[0].estado]);
    function aparecerDescricao() {
      setIsClicked(!isClicked);
    }
    return index != 0 ? (
      <div className={"flex flex-row items-center pl-10 gap-5"}>
        <div
          className={
            isGustavoLigado
              ? isClicked
                ? ComponentsStyle.botaoDescricao.ativo
                : ComponentsStyle.botaoDescricao.semiativo
              : ComponentsStyle.botaoDescricao.inativo
          }
          onClick={aparecerDescricao}
        >
          <p
            className={
              isGustavoLigado
                ? isClicked
                  ? ComponentsStyle.iconDescricao.ativo
                  : ComponentsStyle.iconDescricao.semiativo
                : ComponentsStyle.iconDescricao.inativo
            }
          >
            {isClicked ? <FaLeftLong /> : <FaRightLong />}
          </p>
        </div>
        <p
          className={
            isClicked
              ? ComponentsStyle.textoDescicao.ativo
              : ComponentsStyle.textoDescicao.inativo
          }
        >
          {descricao}
        </p>
      </div>
    ) : (
      <div></div>
    );
  }
  return (
    <div className={HomeStyle.containerConteudo + " h-100"}>
      <h1 className={HomeStyle.tituloResumoProfissional}>Idiomas</h1>
      <div>
        <div className="flex flex-col w-full ">
          {textoBotoes.map((texto, index) => (
            <div
              key={index}
              className="
            shrink-0 flex"
            >
              <Switch
                index={index}
                texto={texto}
                estadoAtivo={estadosSwitch[index].estado}
                onAlternar={alternarEstado}
              />
              <Descricoes
                index={index}
                descricao={descricoesIdiomas[index]}
                estadoAtivo={estadosSwitch[index].estado}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
