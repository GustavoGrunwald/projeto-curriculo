import { useState } from "react";
import { chatStyles } from "~/styles/chatSyles";

export function CaixaTexto({
  enviarMensagem,
  isGerandoResposta,
}: {
  enviarMensagem: (texto: string) => void;
  isGerandoResposta: boolean;
}) {
  const [mensagem, setMensagem] = useState("");

  function enviarMensagemLocal() {
    if (!mensagem.trim()) return;
    enviarMensagem(mensagem);

    setMensagem("");
  }

  return (
    <div className="w-full px-4 py-4">
      <div className={chatStyles.caixatexto.container}>
        <textarea
          disabled={isGerandoResposta}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              enviarMensagemLocal();
            }
          }}
          placeholder={
            isGerandoResposta ? "Gerando Resposta..." : "Digite sua mensagem..."
          }
          rows={1}
          className={chatStyles.caixatexto.textarea}
        />

        <button
          className={chatStyles.caixatexto.button}
          onClick={() => enviarMensagemLocal()}
          disabled={isGerandoResposta}
        >
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12 20 4 13 20 11 13 4 12Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
