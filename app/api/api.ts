import { GoogleGenAI } from "@google/genai";
import curriculo from "../api/curriculo.md?raw";
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

//INTERFACE
interface MensagemHistorico {
  texto: string;
  isIA: boolean;
}

export async function gerarResposta({
  mensagem,
  historico,
}: {
  mensagem: string;
  historico: MensagemHistorico[];
}): Promise<string> {
  const historicoFormatado = historico.slice(1).map((msg) => ({
    role: msg.isIA ? ("model" as const) : ("user" as const),
    parts: [{ text: msg.texto }],
  }));
  try {
    const chat = await ai.chats.create({
      model: "gemini-2.5-flash",
      history: historicoFormatado,
      config: {
        systemInstruction: `
          Você é o assistente virtual do Gustavo. Responda perguntas de recrutadores com base no currículo dele.
          
          DADOS DO GUSTAVO:
          """
          ${curriculo}
          """
          
          Regras:
          1. Responda sempre na terceira pessoa (ex: "O Gustavo trabalhou com...").
          2. Se não souber ou não estiver no arquivo, diga para entrar em contato com ele.
          3. Seja breve e profissional.
        `,
      },
    });
    const response = await chat.sendMessage({
      message: mensagem,
    });
    return response.text || "Sem resposta.";
  } catch (error) {
    console.error("Erro ao gerar resposta", error);
    throw error;
  }
}
