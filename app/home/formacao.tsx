import { HomeStyle } from "../styles/homeStyle";
import { useTypewriter } from "../hooks/functions";
import { Bateria } from "~/components/Bateria";

export function Formacao() {
  const texto =
    "{ \n 'escola': 'Instituto Federal do Paraná', \n 'curso': 'Técnico em Informática', \n 'inicio-fim': '2024 - 2027' \n 'periodo': 'Manhã' \n }";
  const textoExibido = useTypewriter(texto, 15, 0);
  return (
    <div className={HomeStyle.containerConteudo + " h-100 flex items-center "}>
      <div className="w-full">
        <h1 className={HomeStyle.tituloResumoProfissional}>
          Formação Acadêmica
        </h1>
        <p className={HomeStyle.textoInformativoResumoProfissional}>
          {textoExibido}
        </p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className=" w-90 mr-4">
          <div className="flex items-center px-3 justify-around">
            <p className="text-sm m-1">2024</p>
            <p className="text-sm m-1 ">2025</p>
            <p className="text-sm m-1 ">2026</p>
            <p className="text-sm m-1">2027</p>
          </div>
        </div>
        <div className=" w-90 mr-4">
          <div className="flex items-center px-3 justify-around">
            {Array.from({ length: 4 }).map((_, i) => (
              <p key={i} className="text-sm m-1 mr-0 text-white">
                |
              </p>
            ))}
          </div>
        </div>
        <Bateria />
      </div>
    </div>
  );
}
