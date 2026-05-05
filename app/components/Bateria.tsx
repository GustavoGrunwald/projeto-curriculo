import { useState } from "react";
import { BarraBateria } from "./BarraBateria";
import { ComponentsStyle } from "~/styles/componentsStyle";

export function Bateria() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="flex items-center">
      <div
        className={
          isHovering
            ? ComponentsStyle.bateria.ativo
            : ComponentsStyle.bateria.inativo
        }
        onMouseEnter={() => setIsHovering(true)}
        style={{ animationDelay: isHovering ? "1200ms" : "0ms" }}
      >
        <div className={ComponentsStyle.bateria.brilho} />
        <div className={ComponentsStyle.bateria.mask} />

        <div className="relative z-10 flex items-center w-full h-full">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <BarraBateria key={index} isHovering={isHovering} index={index} />
            ))}
          <div
            className={
              isHovering
                ? ComponentsStyle.barraVazia.ativa
                : ComponentsStyle.barraVazia.inativa
            }
          >
            <p>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
