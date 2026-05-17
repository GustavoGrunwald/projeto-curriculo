import { useEffect, useRef, useState } from "react";
import { CaixaTexto } from "~/components/CaixaTexto";
import { Mensagem } from "~/components/Mensagem";
import { gerarResposta } from "../api/api";
import { chatStyles } from "../styles/chatSyles";

export function BatePapo() {
  const [isGerandoResposta, setIsGerandoResposta] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [mensagens, setMensagens] = useState(() => {
    if (typeof window !== "undefined") {
      const salvas = localStorage.getItem("chat_mensagens");
      if (salvas) {
        try {
          return JSON.parse(salvas);
        } catch (e) {
          console.error("Erro ao ler localStorage", e);
        }
      }
    }
    return [
      {
        texto:
          "Olá! Eu sou o Chat IA, um assistente virtual projetado para ajudar você com suas perguntas e fornecer informações úteis.",
        isIA: true,
      },
    ];
  });
  useEffect(() => {
    localStorage.setItem("chat_mensagens", JSON.stringify(mensagens));
  }, [mensagens]);

  async function enviarMensagem(texto: string) {
    if (!texto.trim() || isGerandoResposta) return;
    setIsGerandoResposta(true);
    const novaMensagemUsuario = { texto, isIA: false };

    const historicoAtualizado = [...mensagens, novaMensagemUsuario];

    setMensagens(historicoAtualizado);

    try {
      const respostaIA = await gerarResposta({
        mensagem: texto,
        historico: historicoAtualizado,
      });

      setMensagens((prev: any) => [
        ...prev,
        {
          texto: respostaIA,
          isIA: true,
        },
      ]);
    } catch (error) {
      console.error("Erro ao obter resposta:", error);
      setMensagens((prev: any) => [
        ...prev,
        {
          texto: "Desculpe, ocorreu um erro ao processar sua resposta.",
          isIA: true,
        },
      ]);
    } finally {
      setIsGerandoResposta(false);
    }
  }
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [mensagens]);
  return (
    <div className={chatStyles.batepapo.container}>
      <div className={chatStyles.batepapo.mensagens}>
        {mensagens.map((msg: any, index: any) => (
          <Mensagem key={index} texto={msg.texto} isIA={msg.isIA} />
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-white/5 bg-[#07111f]">
        <CaixaTexto
          enviarMensagem={enviarMensagem}
          isGerandoResposta={isGerandoResposta}
        />
      </div>
    </div>
  );
}
