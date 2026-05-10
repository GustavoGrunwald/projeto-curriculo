export const conexoesStyle = {
  caixaPrincipal: "absolute pointer-events-none transition-all duration-500",

  svgArea: "absolute inset-0 w-full h-full pointer-events-none",
  poligonoLinha: (estaClicado: boolean) => `
    transition-all duration-300 
    ${
      estaClicado
        ? "drop-shadow-[0_0_5px_#A3E635]"
        : "drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]"
    }
  `,

  botaoContainer: "absolute pointer-events-auto cursor-pointer z-20",
  grupoFlex: "flex items-start gap-4 group",
  posicaoIcone: "relative",

  iconeMenos:
    "text-gray-900 bg-[#A3E635] rounded-full text-2xl shadow-[0_0_15px_#A3E635] relative z-10",
  iconeMais:
    "text-gray-900 bg-white rounded-full text-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:scale-110 transition-transform",
  efeitoPulso:
    "absolute inset-0 bg-[#A3E635] rounded-full animate-ping opacity-20",

  cartaoInfo: (posicaoTexto: string) => `
  flex flex-col bg-slate-900/95 backdrop-blur-md 
  border border-[#A3E635]/30 p-4 rounded-lg shadow-2xl 
  w-80 absolute z-50
  ${posicaoTexto}
`,

  cabecalhoCartao: "flex items-center gap-2 mb-3 opacity-70",
  pontoPulso: "w-2 h-2 bg-[#A3E635] rounded-full animate-pulse",
  tituloStatus:
    "text-[10px] text-[#A3E635] font-fira tracking-tighter uppercase",

  listaConteudo: "space-y-3",
  caixaTopico: "border-l-2 border-[#A3E635]/50 pl-3",
  tituloTopico: "text-[#A3E635] font-fira text-[11px] font-bold uppercase",
  descricaoTopico: "text-slate-200 text-xs",
  textoSimples: "text-slate-200 text-sm border-l-2 border-[#A3E635]/50 pl-3",

  wrapperAnimacao: "animate-in fade-in duration-300",
  sub: {
    containerGeral: "absolute pointer-events-none -top-35 left-6",
    wrapperItem: "flex items-start gap-3 group",
    iconeBase: "relative",
    botaoPlus:
      "text-gray-900 bg-white rounded-full text-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:scale-110 transition-transform duration-200",
    botaoMinus:
      "text-gray-900 bg-[#A3E635] rounded-full text-2xl shadow-[0_0_15px_#A3E635] z-20 relative",
    efeitoPing:
      "absolute inset-0 bg-[#A3E635] rounded-full animate-ping opacity-20",

    cartao:
      "flex flex-col bg-slate-900/90  border border-[#A3E635]/30 p-3 rounded-lg min-w-60 max-w-80 z-50",
    cabecalho: "flex items-center gap-2 mb-2",
    pontoStatus: "w-1.5 h-1.5 bg-[#A3E635] rounded-full animate-pulse",
    titulo: "text-[#A3E635] font-fira font-bold text-sm uppercase",

    corpo: "space-y-2 border-t border-slate-700 pt-2 mt-1",
    itemListaCaixa: "border-l border-[#A3E635]/30 pl-2",
    itemListaTitulo: "text-[#A3E635] text-[10px] font-fira uppercase font-bold",
    itemListaDesc: "text-slate-300 text-[11px] leading-tight",
    textoSimples: "text-slate-300 text-xs leading-relaxed font-sans",
    rodapeCodigo:
      "self-end mt-2 text-[9px] text-slate-500 font-fira opacity-50 italic",
  },
};
