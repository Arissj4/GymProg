import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ButtonType = "orange" | "white";

export interface ButtonModel {
  text: string,
  type: ButtonType,
  icon?: IconProp,
  style?: React.CSSProperties,
  clickEvent: () => void,
}