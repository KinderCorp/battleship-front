import type { ImageProps } from "@shared/Image/models";
import type { SyntheticEvent } from "react";

export interface ItemProps {
  className?: string;
  isLocked: boolean; //pas débloqué par le joueur
  isSelected: boolean, //choisi pour tirer
  isDisabled : boolean, //pas choisi dans les paramètres ou plus de tirs dispo
  numberOfUses : number | string, // - 1 sera égal à infini
  src : ImageProps['src'],
  onClick: (event: SyntheticEvent<EventTarget>) => void;
}
