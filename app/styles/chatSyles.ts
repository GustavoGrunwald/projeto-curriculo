export const chatStyles = {
  batepapo: {
    container:
      "  mx-auto  flex h-170   w-full   max-w-5xl  flex-col overflow-hidden rounded-3xl  border  border-cyan-400/10 bg-gray-900",
    mensagens:
      "  flex-1  overflow-y-auto  bg-linear-to-b  from-[#020817]  to-[#07111f]  px-2  py-6",
  },
  caixatexto: {
    container:
      "flex items-center gap-3 rounded-2xl border border-cyan-400/10 bg-[#0b1220] px-4 py-3 shadow-[0_0_10px_rgba(0,140,255,0.08)]",
    textarea:
      "flex-1 resize-none bg-transparent text-sm text-gray-200 placeholder:text-gray-500 outline-none",
    button:
      "flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 text-white transition-all duration-300 hover:scale-105",
  },
  mensagem: {
    conatiner: (isIA: any) =>
      isIA
        ? ` relative max-w-[78%] overflow-hidden rounded-2xl rounded-bl-sm border border-cyan-400/20 bg-[#07111f] px-5 py-4 text-sm text-gray-100 shadow-[0_0_10px_rgba(0,180,255,0.15)] backdrop-blur-xl`
        : `relative max-w-[78%] overflow-hidden rounded-2xl rounded-br-sm border border-blue-500/20 bg-[#07111f] px-5 py-4 text-sm text-gray-100 shadow-  [0_0_10px_rgba(59,130,246,0.15)] backdrop-blur-xl`,

    glow: " absolute inset-0 bg-linear-to-br from-cyan-400/5 via-blue-500/5 to-indigo-500/5 pointer-events-none ",

    barraLateral: (isIA: any) =>
      isIA
        ? ` absolute left-0 top-0 h-full w-1 bg-linear-to-b from-cyan-400 to-blue-600 `
        : ` absolute right-0 top-0 h-full w-1 bg-linear-to-b from-blue-400 to-indigo-600 `,
    conteudo:
      " relative z-10 whitespace-pre-line font-mono leading-7 tracking-wide text-gray-200 ",
    footer:
      " mt-4 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] text-cyan-300/50 ",
    grid: " pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[24px_24px] ",
  },
};
