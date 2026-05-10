import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import { subConexoesData } from "../data/dados.js";
import { conexoesStyle } from "../styles/conexoesStyle";

const TOTAL_ALTURA = 300;
const RANGE_ALTURA = 290;

function CalcularAltura(index: number, total: number) {
  return 5 + (RANGE_ALTURA / (total - 1)) * index;
}

function CalcularAlturaPonto(index: number, total: number) {
  return (RANGE_ALTURA / (total - 1)) * index - 5;
}

function LinhaSubConexao({ index, total, topico, texto }: any) {
  const [isSubClicked, setSubIsClicked] = useState(false);

  return (
    <div>
      <svg className={conexoesStyle.svgArea} style={{ zIndex: 5 }}>
        <polyline
          points={`50,${TOTAL_ALTURA / 2} 50,${CalcularAltura(index, total)} 150,${CalcularAltura(index, total)}`}
          fill="none"
          stroke={isSubClicked ? "#A3E635" : "#fff"}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          className={conexoesStyle.poligonoLinha(isSubClicked)}
        />
      </svg>

      <div
        className="absolute left-40 pointer-events-auto cursor-pointer"
        style={{ top: `${CalcularAlturaPonto(index, total)}px`, zIndex: 10 }}
        onClick={(e) => {
          e.stopPropagation();
          setSubIsClicked(!isSubClicked);
        }}
      >
        {isSubClicked ? (
          <div className={conexoesStyle.sub.wrapperItem}>
            <div className={conexoesStyle.sub.iconeBase}>
              <FaMinusCircle className={conexoesStyle.sub.botaoMinus} />
              <div className={conexoesStyle.sub.efeitoPing}></div>
            </div>

            <div className={conexoesStyle.sub.cartao}>
              <div className={conexoesStyle.sub.cabecalho}>
                <div className={conexoesStyle.sub.pontoStatus}></div>
                <h1 className={conexoesStyle.sub.titulo}>{topico}</h1>
              </div>

              <div className={conexoesStyle.sub.corpo}>
                {Array.isArray(texto) ? (
                  texto.map((sub, i) => (
                    <div key={i} className={conexoesStyle.sub.itemListaCaixa}>
                      <p className={conexoesStyle.sub.itemListaTitulo}>
                        {sub.titulo}
                      </p>
                      <p className={conexoesStyle.sub.itemListaDesc}>
                        {sub.descricao}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className={conexoesStyle.sub.textoSimples}>{texto}</p>
                )}
              </div>
              <div className={conexoesStyle.sub.rodapeCodigo}>
                // module_id: {topico.toLowerCase().replace(/\s/g, "_")}
              </div>
            </div>
          </div>
        ) : (
          <div className={conexoesStyle.sub.botaoPlus}>
            <FaPlusCircle />
          </div>
        )}
      </div>
    </div>
  );
}

export function SubConexao() {
  return (
    <div
      className={conexoesStyle.sub.containerGeral}
      style={{ width: "200px", height: `${TOTAL_ALTURA}px` }}
    >
      <svg className={conexoesStyle.svgArea} style={{ zIndex: 5 }}>
        <polyline
          points={`0,${TOTAL_ALTURA / 2} 50,${TOTAL_ALTURA / 2}`}
          fill="none"
          stroke={"#A3E635"}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          className={conexoesStyle.poligonoLinha(true)}
        />
      </svg>

      {subConexoesData.map((item: any) => (
        <LinhaSubConexao
          key={item.index}
          index={item.index}
          total={subConexoesData.length}
          topico={item.topico}
          texto={item.texto}
        />
      ))}
    </div>
  );
}
