import { useTypewriter } from "~/hooks/functions";
import { IdiomasStyle } from "~/styles/idiomasStyle";

interface PalavraQuery {
  texto: string;
  cor: string;
}

export function PainelBancoDados({
  idioma,
  descricao,
}: {
  idioma: string;
  descricao: string;
}) {
  const vel = 15;

  const palavras: PalavraQuery[] = [
    { texto: "SELECT", cor: "text-amber-500 pl-2" },
    { texto: "*", cor: "text-blue-500" },
    { texto: "FROM", cor: "text-amber-500" },
    { texto: "tbIdiomas", cor: "text-white" },
    { texto: "WHERE", cor: "text-amber-500" },
    { texto: "nome_idioma", cor: "text-blue-500" },
    { texto: "=", cor: "text-amber-500" },
    { texto: `'${idioma}'`, cor: "text-green-500" },
  ];
  let delayAcumulado = 0;

  return (
    <div className={IdiomasStyle.painel.container}>
      <div className={IdiomasStyle.painel.header}>
        <div className={IdiomasStyle.painel.linhaComando}>
          <p className="px-2 text-sm">1</p>
        </div>

        <div className="flex">
          {palavras.map((item, index) => {
            const delayAtual = delayAcumulado;
            delayAcumulado += item.texto.length * vel;
            const textoExibido = useTypewriter(item.texto, vel, delayAtual);
            return (
              <span
                key={index}
                className={`px-1 text-sm font-fira ${item.cor}`}
              >
                {textoExibido}
              </span>
            );
          })}
        </div>
      </div>

      <div className="w-150">
        <p className="p-3 text-sm font-fira text-amber-500">RESULTADO:</p>
        <div className="flex">
          <div className="border-r-2 border-r-gray-800">
            <div>
              <p className="text-sm font-fira p-3 text-transparent">1</p>
            </div>
            <div>
              <p className="text-sm font-fira p-3">1</p>
            </div>
          </div>
          <div className="w-30 border-r-2 border-r-gray-800">
            <div className="border-r-gray-800 border-b-2 border-b-gray-800">
              <p className="text-sm font-fira p-3">nome_idioma</p>
            </div>
            <div className="w-30 border-r-2 border-r-gray-800">
              <p className="text-sm font-fira p-3">{idioma}</p>
            </div>
          </div>
          <div>
            <div className="w-111 border-b-2 border-b-gray-800">
              <p className="text-sm font-fira p-3">descricao</p>
            </div>
            <div className="w-110">
              <p className="text-sm font-fira p-3">{descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
