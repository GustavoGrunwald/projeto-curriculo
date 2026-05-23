import { ComponentsStyle } from "~/styles/componentsStyle";
import { HomeStyle } from "~/styles/homeStyle";

export function Switch({
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
    <div className="flex mt-4 justify-between items-center w-100 shrink-0">
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
