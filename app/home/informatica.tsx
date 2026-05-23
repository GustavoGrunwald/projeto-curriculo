import { HomeStyle } from "../styles/homeStyle";
import imagem from "../images/imagem_brain_ia.png";
import { LinhaConexao } from "../components/LinhasConexao";
import { conexoes } from "../data/dados";
import { useRef } from "react";
import { useScroll } from "framer-motion";

export function Informatica() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      className={HomeStyle.containerConteudo + " h-150 mb-50"}
      ref={containerRef}
      id="informatica"
    >
      <div>
        <h1 className={HomeStyle.tituloResumoProfissional}>Informática</h1>

        <div className="flex items-center justify-center relative mt-20">
          <div className="relative w-150 h-100 flex items-center justify-center">
            <img
              className="opacity-85 z-0 w-full h-auto object-contain"
              src={imagem}
              alt="Brain IA"
            />

            {conexoes.map((conexao: any) => (
              <div key={conexao.id}>
                <LinhaConexao
                  pontos={conexao.ponto}
                  localizacaoMais={conexao.localizacaoMais}
                  localizacao={conexao.localizacao}
                  conteudo={conexao.conteudo}
                  localizacaoTexto={conexao.localizacaoTexto}
                  scrollProgress={scrollYProgress}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
