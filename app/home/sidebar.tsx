import { HomeStyle } from "../styles/homeStyle";

export function SideBar({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`${HomeStyle.containerSideBar} ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className={HomeStyle.containerContentSideBar}>
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <a href="" className={HomeStyle.linkSideBar}>
          {" public void objetivoProfissional(){ "}
        </a>
        <a href="" className={HomeStyle.linkSideBar}>
          CREATE TABLE tbFormacaoEscolar
        </a>
        <a href="" className={HomeStyle.linkSideBar}>
          {" const idiomas = ['en-US', 'it-IT'] "}
        </a>
        <a href="" className={HomeStyle.linkSideBar}>
          git checkout informatica
        </a>
        <a href="" className={HomeStyle.linkSideBar}>
          {"GET /api/v1/cursos HTTP/1.1"}
        </a>
        <a href="" className={HomeStyle.linkSideBar}>
          {"</ExperienciasComplementares> "}
        </a>
      </div>
    </div>
  );
}
