export const experienciaStyle = {
  terminal: {
    container:
      "h-150 w-250 bg-gray-950 mt-10 border border-gray-600 rounded-2xl justify-between flex-col flex ",
    header:
      "w-full h-6 bg-gray-900 rounded-t-2xl items-center flex gap-2 px-3 justify-end shrink-0",
    body: "flex-1 overflow-y-auto p-4 custom-scrollbar",
    linha: "text-sm font-fira whitespace-pre-wrap",
  },
  teclado: {
    container:
      "bg-gray-950 w-full h-50 rounded-b-2xl border-t-2 border-gray-600",
    comandoAtivo: "font-fira border-gray-700 border-2 px-2 py-1",
    comandoDesativo:
      "font-fira border-gray-900 border-2 px-2 py-1 text-gray-500",
    comandoInativo: "hidden",
  },
};
