import { useTypewriter } from "../hooks/functions";

export function Apresentacao() {
  const titulo = "Bem vindo ao Chat IA!";
  const tituloExibido = useTypewriter(titulo, 15, 0);
  const subtitulo =
    "Pergunte qualquer coisa e deixe a inteligência artificial responder para você!";
  const subtituloExibido = useTypewriter(
    subtitulo,
    15,
    tituloExibido.length * 15 + 500,
  );
  return (
    <div className="mt-30 mb-10">
      <h1 className="text-4xl font-bold mb-4 text-center">{tituloExibido}</h1>
      <p className="text-lg text-gray-400 text-center">
        {tituloExibido === titulo ? subtituloExibido : ""}
      </p>
    </div>
  );
}
