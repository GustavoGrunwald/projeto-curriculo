import { Introducao } from "~/home/introducao";
import { AppBar } from "../home/appbar";
import { ResumoProfissional } from "~/home/resumoprofissional";
import { Formacao } from "~/home/formacao";
import { Idiomas } from "~/home/idiomas";
import { Informatica } from "~/home/informatica";

export default function Home() {
  return (
    <div>
      <AppBar />
      <Introducao />
      <ResumoProfissional />
      <Formacao />
      <Idiomas />
      <Informatica />
    </div>
  );
}
