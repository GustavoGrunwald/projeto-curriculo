import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import { SubConexao } from "../components/SubConexao";
import { conexoesStyle } from "../styles/conexoesStyle";

interface PropriedadesLinha {
  pontos: string;
  localizacaoMais: string;
  localizacao: string;
  conteudo: any;
  localizacaoTexto: string;
}

export function LinhaConexao({
  pontos,
  localizacaoMais,
  localizacao,
  conteudo,
  localizacaoTexto,
}: PropriedadesLinha) {
  const [estaClicado, setEstaClicado] = useState(false);

  return (
    <div
      className={`${conexoesStyle.caixaPrincipal} ${localizacao}`}
      style={{ width: "250px", height: "200px" }}
    >
      <svg className={conexoesStyle.svgArea} style={{ zIndex: 5 }}>
        <polyline
          points={pontos}
          fill="none"
          stroke={estaClicado ? "#A3E635" : "#fff"}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          className={conexoesStyle.poligonoLinha(estaClicado)}
        />
      </svg>

      <div
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
            <div className={conexoesStyle.wrapperAnimacao}>
              {conteudo &&
              (Array.isArray(conteudo)
                ? conteudo.length > 0
                : conteudo !== "") ? (
                <div className={conexoesStyle.cartaoInfo(localizacaoTexto)}>
                  <div className={conexoesStyle.cabecalhoCartao}>
                    <div className={conexoesStyle.pontoPulso}></div>
                    <span className={conexoesStyle.tituloStatus}>
                      Dados_Saida
                    </span>
                  </div>

                  <div className={conexoesStyle.listaConteudo}>
                    {Array.isArray(conteudo) ? (
                      conteudo.map((item, idx) => (
                        <div key={idx} className={conexoesStyle.caixaTopico}>
                          <h4 className={conexoesStyle.tituloTopico}>
                            {item.titulo}
                          </h4>
                          <p className={conexoesStyle.descricaoTopico}>
                            {item.descricao}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className={conexoesStyle.textoSimples}>{conteudo}</p>
                    )}
                  </div>
                </div>
              ) : (
                <SubConexao />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
