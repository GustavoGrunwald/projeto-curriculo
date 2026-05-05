import { useEffect, useState } from "react";

export function useTypewriter(texto, velocidade = 15, delay = 0) {
  const [textoExibido, setTextoExibido] = useState("");

  useEffect(() => {
    const timeoutInicial = setTimeout(() => {
      let posicao = 0;
      const intervalo = setInterval(() => {
        setTextoExibido(texto.slice(0, posicao + 1));
        posicao++;
        if (posicao >= texto.length) clearInterval(intervalo);
      }, velocidade);

      return () => clearInterval(intervalo);
    }, delay);

    return () => clearTimeout(timeoutInicial);
  }, [texto, velocidade, delay]);

  return textoExibido;
}
