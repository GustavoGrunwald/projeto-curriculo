import type { index } from "@react-router/dev/routes";
import { Component } from "react";
import { ComponentsStyle } from "~/styles/componentsStyle";

export function BarraBateria(props: { isHovering: boolean; index: number }) {
  const delay = props.isHovering ? `${props.index * 300}ms` : `0ms`;
  return (
    <div
      className={
        props.isHovering
          ? ComponentsStyle.barraBateria.ativo
          : ComponentsStyle.barraBateria.inativo
      }
      style={{ transitionDelay: delay, animationDelay: delay }}
    ></div>
  );
}
