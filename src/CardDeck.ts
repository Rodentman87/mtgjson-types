import { CardPrinted } from "./CardBase";

export interface CardDeck extends CardPrinted {
  /**
   * The count of how many of this card exists in a relevant deck.
   */
  count: number;

  /**
   * The indicator for which duel deck the card is in.
   * @example "a" | "b"
   */
  duelDeck?: boolean;

  /**
   * If the card is in foil.
   */
  isFoil: boolean;
}
