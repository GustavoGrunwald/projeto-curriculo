import { FaMinusCircle, FaPlusCircle, FaRegSquare } from "react-icons/fa";
import { useState } from "react";
import { SubConexao } from "../components/SubConexao";
import { conexoesStyle } from "../styles/conexoesStyle";
import { motion, MotionValue, useTransform } from "framer-motion";

interface PropriedadesLinha {
  pontos: string;
  localizacaoMais: string;
  localizacao: string;
  conteudo: any;
  localizacaoTexto: string;
  scrollProgress: MotionValue<number>;
}

export function LinhaConexao({
  pontos,
  localizacaoMais,
  localizacao,
  conteudo,
  localizacaoTexto,
  scrollProgress,
}: PropriedadesLinha) {
  const [estaClicado, setEstaClicado] = useState(false);

  const progressoLinha = useTransform(
    scrollProgress,
    [0, 0.1, 0.3, 0.75, 0.95],
    [0, 0, 1, 1, 0],
  );
  const converterPontosParaPath = (stringDePontos: string) => {
    const pares = stringDePontos.trim().split(/\s+/);
    return pares.reduce((acc, par, index) => {
      const [x, y] = par.split(",");
      return acc + (index === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`);
    }, "");
  };

  const pathData = converterPontosParaPath(pontos);
  return (
    <div
      className={`${conexoesStyle.caixaPrincipal} ${localizacao}`}
      style={{ width: "250px", height: "200px" }}
    >
      <svg className={conexoesStyle.svgArea} style={{ zIndex: 5 }}>
        <motion.path
          d={pathData}
          fill="none"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          className={conexoesStyle.poligonoLinha(estaClicado)}
          style={{ pathLength: progressoLinha }}
        />
      </svg>
      <motion.div
        style={{
          opacity: useTransform(progressoLinha, [0.8, 1], [0, 1]),
        }}
        className={`${conexoesStyle.botaoContainer} ${localizacaoMais}`}
        onClick={(e) => {
          e.stopPropagation();
          setEstaClicado(!estaClicado);
        }}
      >
        <div className={conexoesStyle.grupoFlex}>
          <div className={conexoesStyle.posicaoIcone}>
            {estaClicado ? (
              <>
                <FaMinusCircle className={conexoesStyle.iconeMenos} />
                <div className={conexoesStyle.efeitoPulso}></div>
              </>
            ) : (
              <FaPlusCircle className={conexoesStyle.iconeMais} />
            )}
          </div>

          {estaClicado && (
            <div className="z-50">
              {conteudo &&
              (Array.isArray(conteudo)
                ? conteudo.length > 0
                : conteudo !== "") ? (
                <div className={conexoesStyle.cartaoInfo(localizacaoTexto)}>
                  <div className={conexoesStyle.cabecalhoCartao}>
                    <div className={conexoesStyle.botoesTerminal}>
                      <div
                        className={`${conexoesStyle.botaoRedondo} bg-[#ff5f56]`}
                      />
                      <div
                        className={`${conexoesStyle.botaoRedondo} bg-[#ffbd2e]`}
                      />
                      <div
                        className={`${conexoesStyle.botaoRedondo} bg-[#27c93f]`}
                      />
                    </div>
                    <span className={conexoesStyle.tituloTerminal}>
                      bash — node_modules
                    </span>
                    <FaRegSquare className="text-slate-500 text-[10px]" />
                  </div>

                  <div className={conexoesStyle.listaConteudo}>
                    {Array.isArray(conteudo) ? (
                      conteudo.map((item, idx) => (
                        <div key={idx} className={conexoesStyle.caixaTopico}>
                          <h4 className={conexoesStyle.tituloTopico}>
                            <span className={conexoesStyle.prompt}>&gt;</span>
                            {item.titulo}
                          </h4>
                          <p className={conexoesStyle.descricaoTopico}>
                            {item.descricao}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="flex">
                        <span className={conexoesStyle.prompt}>$</span>
                        <p className={conexoesStyle.textoSimples}>{conteudo}</p>
                      </div>
                    )}
                    <span className="inline-block w-1 h-4 bg-white/80 cursor-pisca ml-1" />
                  </div>
                </div>
              ) : (
                <SubConexao />
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
