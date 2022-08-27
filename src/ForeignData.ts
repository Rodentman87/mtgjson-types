import { Language } from "./Enums";

export interface ForeignData {
  /**
   * The foreign name on the face of the card.
   */
  faceName?: string;

  /**
   * The foreign flavor text of the card.
   */
  flavorText?: string;

  /**
   * The foreign language of the card.
   */
  language: Language;

  /**
   * The foreign multiverse identifier of the card.
   */
  multiverseId?: number;

  /**
   * The foreign name of the card.
   */
  name: string;

  /**
   * The foreign text ruling of the card.
   */
  text?: string;

  /**
   * The foreign type of the card. Includes any supertypes and subtypes.
   */
  type?: string;
}
