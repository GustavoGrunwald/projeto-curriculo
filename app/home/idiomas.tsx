import { HomeStyle } from "../styles/homeStyle";
import { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { PainelBancoDados } from "~/components/PainelBancoDados";
import { Switch } from "~/components/Switch";
import { motion, useScroll, useTransform } from "framer-motion";
const idiomas = [
  { nome: "Gustavo Grunwald", descricao: "" },
  {
    nome: "Inglês",
    descricao: "Avançado - 2 anos Wizard (B2) + Experiência no exterior",
  },
  { nome: "Italiano", descricao: "Intermediário - Imersão na Itália " },
  { nome: "Espanhol", descricao: "Básico - Aulas na escola" },
];

export function Idiomas() {
  const [estadosSwitch, setEstadosSwitch] = useState([
    { index: 0, estado: false },
    { index: 1, estado: false },
    { index: 2, estado: false },
    { index: 3, estado: false },
  ]);
  const [idiomaSelecionado, setIdiomaSelecionado] = useState({
    nome: "",
    descricao: "",
  });
  const [isPainelOpended, setIsPainelOpended] = useState(false);

  function abrirPainel({
    idioma,
    descricao,
  }: {
    idioma: string;
    descricao: string;
  }) {
    setIsPainelOpended((prevAberto) => {
      if (prevAberto && idiomaSelecionado.nome === idioma) {
        return false;
      }
      setIdiomaSelecionado({ nome: idioma, descricao: descricao });
      return true;
    });
  }

  function alternarEstado(index: number) {
    setEstadosSwitch((prevEstados) => {
      let novosEstados;

      if (index === 0) {
        const estado = !prevEstados.find((i) => i.index === 0)?.estado;
        novosEstados = prevEstados.map((item) => ({
          ...item,
          estado: estado,
        }));

        if (!estado) {
          setIsPainelOpended(false);
        }
      } else {
        novosEstados = prevEstados.map((item) =>
          item.index === index ? { ...item, estado: !item.estado } : item,
        );

        const idiomasFiltrados = novosEstados.filter(
          (item) => item.index !== 0,
        );
        const idiomasLigados = idiomasFiltrados.every((item) => item.estado);

        novosEstados = novosEstados.map((item) =>
          item.index === 0 ? { ...item, estado: idiomasLigados } : item,
        );

        const switchModificado = novosEstados.find(
          (item) => item.index === index,
        );
        const nomeIdiomaModificado = idiomas[index].nome;

        if (
          switchModificado &&
          !switchModificado.estado &&
          idiomaSelecionado.nome === nomeIdiomaModificado
        ) {
          setIsPainelOpended(false);
        }
      }

      return novosEstados;
    });
  }

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacidade = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0],
    { clamp: false },
  );
  return (
    <div
      className={HomeStyle.containerConteudo + " h-100"}
      ref={containerRef}
      id="idiomas"
    >
      <motion.div
        style={{
          opacity: opacidade,
        }}
      >
        <h1 className={HomeStyle.tituloResumoProfissional}>Idiomas</h1>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col w-1/2">
            {idiomas.map((idioma, index) => (
              <div key={index} className="shrink-0 flex items-center gap-10">
                <Switch
                  index={index}
                  texto={idioma.nome}
                  estadoAtivo={estadosSwitch[index].estado}
                  onAlternar={alternarEstado}
                />
                {index !== 0 && (
                  <p className={HomeStyle.idiomas.textoAtivo}>
                    {estadosSwitch.every((item) => item.estado) ? (
                      <FaArrowRightLong
                        className="inline cursor-pointer"
                        onClick={() =>
                          abrirPainel({
                            idioma: idioma.nome,
                            descricao: idioma.descricao,
                          })
                        }
                      />
                    ) : (
                      " "
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="items-center flex">
            {isPainelOpended && (
              <PainelBancoDados
                key={idiomaSelecionado.nome}
                idioma={idiomaSelecionado.nome}
                descricao={idiomaSelecionado.descricao}
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
