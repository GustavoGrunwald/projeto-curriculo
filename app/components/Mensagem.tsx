import { chatStyles } from "~/styles/chatSyles";

export function Mensagem({ texto, isIA }: { texto: string; isIA: boolean }) {
  return (
    <div
      className={
        isIA
          ? "flex w-full justify-start px-4 py-3"
          : "flex w-full justify-end px-4 py-3"
      }
    >
      <div className={chatStyles.mensagem.conatiner(isIA)}>
        <div className={chatStyles.mensagem.glow} />

        <div className={chatStyles.mensagem.barraLateral(isIA)} />
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />

          <span className="ml-2 text-[11px] text-cyan-300/70">
            {isIA ? "assistant.tsx" : "user.tsx"}
          </span>
        </div>

        <p className={chatStyles.mensagem.conteudo}>{texto}</p>

        <div className={chatStyles.mensagem.footer}>
          <span>{isIA ? "AI RESPONSE" : "USER MESSAGE"}</span>

          <div className="flex items-center gap-1">
            {!isIA && <span>✓✓</span>}
          </div>
        </div>

        <div className={chatStyles.mensagem.grid} />
      </div>
    </div>
  );
}
