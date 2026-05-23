import { Terminal } from "~/components/Terminal";
import { HomeStyle } from "~/styles/homeStyle";

export function Experiencia() {
  return (
    <div className={HomeStyle.containerConteudo + " h-150"}>
      <h1 className={HomeStyle.tituloResumoProfissional}>
        Experiência Complementares
      </h1>
      <div className="flex justify-center">
        <Terminal />
      </div>
    </div>
  );
}
