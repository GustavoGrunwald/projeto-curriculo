export const conexoesStyle = {
  caixaPrincipal: "absolute pointer-events-none transition-all duration-500",

  svgArea: "absolute inset-0 w-full h-full pointer-events-none",
  poligonoLinha: (ativo: any) => `
  transition-all duration-500 ease-in-out
  ${
    ativo
      ? "stroke-[#3b82f6] drop-shadow-[0_0_8px_#3b82f6]"
      : "stroke-slate-200 opacity-40"
  }
`,

  botaoContainer: "absolute pointer-events-auto cursor-pointer z-20",
  grupoFlex: "flex items-start gap-4 group",
  posicaoIcone: "relative",

  iconeMenos:
    "text-gray-900 bg-[#3b82f6] rounded-full text-2xl shadow-[0_0_15px_#3b82f6] relative z-10",
  iconeMais:
    "text-gray-900 bg-slate-100 rounded-full text-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:scale-110 transition-transform",
  efeitoPulso:
    "absolute inset-0 bg-[#3b82f6] rounded-full animate-ping opacity-20",

  cabecalhoCartao:
    "flex items-center justify-between bg-[#333] px-3 py-1.5 rounded-t-lg border-b border-white/10",
  botoesTerminal: "flex gap-1.5",
  botaoRedondo: "w-3 h-3 rounded-full",
  tituloTerminal:
    "text-[10px] text-slate-400 font-fira uppercase tracking-widest",

  cartaoInfo: (localizacao: any) =>
    `bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl overflow-hidden ${localizacao} w-80`,

  listaConteudo: "p-4 space-y-4 font-fira",
  caixaTopico:
    "group border-l border-[#A3E635]/30 pl-4 hover:border-[#A3E635] transition-colors",
  prompt: "text-[#A3E635] mr-2",
  tituloTopico: "text-[#A3E635] text-[11px] font-bold flex items-center",
  descricaoTopico: "text-slate-300 text-xs mt-1 leading-relaxed",
  textoSimples: "text-slate-200 text-sm border-l-2 border-[#A3E635]/50 pl-3",

  sub: {
    containerGeral: "absolute pointer-events-none -top-35 left-6",
    wrapperItem: "flex items-start gap-3 group",
    iconeBase: "relative",
    botaoPlus:
      "text-gray-900 bg-white rounded-full text-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:scale-110 transition-transform duration-200",
    botaoMinus:
      "text-gray-900 bg-[#3b82f6] rounded-full text-2xl shadow-[0_0_15px_#3b82f6] z-20 relative",
    efeitoPing:
      "absolute inset-0 bg-[#3b82f6] rounded-full animate-ping opacity-20",

    cartao:
      "flex flex-col bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl min-w-[280px] max-w-[350px] z-50 overflow-hidden",
    cabecalho:
      "flex items-center justify-between bg-[#333] px-3 py-1.5 border-b border-white/10",
    botoesJanela: "flex gap-1",
    circulo: "w-2 h-2 rounded-full",

    titulo:
      "text-slate-400 font-fira text-[9px] uppercase tracking-widest font-bold",
    corpo: "p-3 space-y-3 font-fira",
    itemListaCaixa:
      "border-l border-[#A3E635]/30 pl-3 hover:border-[#A3E635] transition-colors",
    itemListaTitulo:
      "text-[#A3E635] text-[10px] font-bold flex items-center gap-1",
    itemListaDesc: "text-slate-300 text-[11px] leading-relaxed mt-0.5",

    textoSimples:
      "text-slate-300 text-[11px] leading-relaxed pl-3 border-l border-[#A3E635]/30",
    rodapeCodigo:
      "bg-[#222] px-3 py-1 text-[8px] text-slate-500 font-fira italic border-t border-white/5 flex justify-between items-center",
  },
};
