import { Introducao } from "~/home/Introducao";
import { AppBar } from "../home/Appbar";
import { ResumoProfissional } from "~/home/Resumoprofissional";
import { Formacao } from "~/home/Formacao";
import { Idiomas } from "~/home/Idiomas";
import { Informatica } from "~/home/Informatica";
import { Experiencia } from "~/home/Experiencia";

export default function Home() {
  return (
    <div>
      <AppBar />
      <Introducao />
      <ResumoProfissional />
      <Formacao />
      <Idiomas />
      <Informatica />
      <Experiencia />
    </div>
  );
}
