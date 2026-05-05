export const ComponentsStyle = {
  barraBateria: {
    ativo:
      "h-full w-1/4 bg-lime-500 m-1 mr-0 shadow-[0_0_20px_rgba(163,230,53,0.7)] rounded-sm border-t border-white/20 transition-all duration-400 ease-in animar-pulo-barra",
    inativo:
      "h-full w-1/4 bg-transparent m-1 mr-0  border-transparent transition-all duration-400 ease-in",
  },
  barraVazia: {
    ativa:
      "h-full w-1/4 bg-transparent m-1 rounded-sm border border-zinc-800 p-2 text-sm items-end flex justify-end trasition-all duration-400 ease-in",
    inativa:
      "h-full w-1/4 bg-transparent text-transparent m-1 p-2 rounded-sm items-end flex justify-end trasition-all duration-400 ease-in",
  },
  bateria: {
    brilho:
      "absolute inset-[-250%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_45%,#fff_50%,transparent_55%,transparent_100%)] animate-spin-slow opacity-100 transition-opacity duration-500",
    mask: "absolute inset-[2px] bg-zinc-950 rounded-[5px] z-0",
    ativo:
      "animar-pulo-bateria relative overflow-hidden group bg-transparent h-35 w-90 border border-white flex items-center p-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] rounded-md",
    inativo:
      "relative overflow-hidden group bg-transparent h-35 w-90 border border-white flex items-center p-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] rounded-md",
  },
};
