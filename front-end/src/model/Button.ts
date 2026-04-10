export type ButtonType = "accept" | "cancel";

export interface ButtonModel {
  text: string,
  type: ButtonType,
  clickEvent: () => void,
}