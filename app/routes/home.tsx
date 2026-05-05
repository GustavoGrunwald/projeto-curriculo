import { Introducao } from "~/home/introducao";
import { AppBar } from "../home/appbar";
import { ResumoProfissional } from "~/home/resumoprofissional";
import { Formacao } from "~/home/formacao";

export default function Home() {
  return (
    <div>
      <AppBar />
      <Introducao />
      <ResumoProfissional />
      <Formacao />
    </div>
  );
}
