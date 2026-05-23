import { HomeStyle } from "../styles/homeStyle";

export function SideBar({ isOpen }: { isOpen: boolean }) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div
      className={`${HomeStyle.containerSideBar} ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-10`}
    >
      <div className={HomeStyle.containerContentSideBar}>
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>

        <a
          href="#resumo"
          onClick={(e) => handleScroll(e, "resumo")}
          className={HomeStyle.linkSideBar}
        >
          {" public void objetivoProfissional(){ "}
        </a>

        <a
          href="#formacao"
          onClick={(e) => handleScroll(e, "formacao")}
          className={HomeStyle.linkSideBar}
        >
          CREATE TABLE tbFormacaoEscolar
        </a>

        <a
          href="#idiomas"
          onClick={(e) => handleScroll(e, "idiomas")}
          className={HomeStyle.linkSideBar}
        >
          {" const idiomas = ['en-US', 'it-IT'] "}
        </a>

        <a
          href="#informatica"
          onClick={(e) => handleScroll(e, "informatica")}
          className={HomeStyle.linkSideBar}
        >
          git checkout informatica
        </a>

        <a
          href="#experiencias"
          onClick={(e) => handleScroll(e, "experiencias")}
          className={HomeStyle.linkSideBar}
        >
          {"</ExperienciasComplementares> "}
        </a>
      </div>
    </div>
  );
}
