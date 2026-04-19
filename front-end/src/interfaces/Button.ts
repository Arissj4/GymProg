export type ButtonType = "orange" | "white";

export interface ButtonModel {
  text: string,
  type: ButtonType,
  size?: string,
  clickEvent: () => void,
}