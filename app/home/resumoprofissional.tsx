import { HomeStyle } from "../styles/homeStyle";
import { useTypewriter } from "../hooks/functions";

export function ResumoProfissional() {
  const vel = 15;
  const texto1 = `public class`;
  const texto2 = `ResumoProfissional`;
  const texto3 = `() {\n public void main(String[] args) { {\n    System.out.println("`;
  const texto4 = `Sou um estudante de ensino médio apaixonado por tecnologia e programação, com uma curiosidade insaciável sobre como as coisas funcionam. Tenho me dedicado a aprender cada vez mais sobre desenvolvimento de software, inteligência artificial e outras áreas relacionadas à tecnologia. Por meio deste site, compartilho minha jornada, projetos e experiências no mundo da tecnologia.`;
  const texto5 = `");\n  }\n}`;
  const texto1Exibido = useTypewriter(texto1, vel, 0);

  const delay2 = texto1.length * vel;
  const texto2Exibido = useTypewriter(texto2, vel, delay2);

  const delay3 = delay2 + texto2.length * vel;
  const texto3Exibido = useTypewriter(texto3, vel, delay3);

  const delay4 = delay3 + texto3.length * vel;
  const texto4Exibido = useTypewriter(texto4, vel, delay4);

  const delay5 = delay4 + texto4.length * vel;
  const texto5Exibido = useTypewriter(texto5, vel, delay5);

  return (
    <div className={HomeStyle.containerConteudo + " h-80"}>
      <p className={HomeStyle.codigosResumoProfissional}>
        <span>{texto1Exibido} </span>

        {/* O Nome da Classe com estilo de Título */}
        <span className={HomeStyle.tituloResumoProfissional}>
          {texto2Exibido}
        </span>

        <span>{texto3Exibido}</span>
      </p>

      {/* O texto informativo (o conteúdo do println) */}
      <p className={HomeStyle.textoInformativoResumoProfissional}>
        {texto4Exibido}
      </p>

      {/* Fechamento do código */}
      <p className={HomeStyle.codigosResumoProfissional}>
        {texto5Exibido}
        {/* Cursor piscando opcional no final de tudo */}
        <span className={HomeStyle.cursorPisca}>_</span>
      </p>
    </div>
  );
}
