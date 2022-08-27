import { CardPrinted } from "./CardBase";

type TokenOmittedValues =
  | "convertedManaCost"
  | "edhrecRank"
  | "faceConvertedManaCost"
  | "faceManaValue"
  | "flavorName"
  | "foreignData"
  | "hand"
  | "hasAlternativeDeckLimit"
  | "hasContentWarning"
  | "isAlternative"
  | "isOverSized"
  | "isRebalanced"
  | "isReserved"
  | "isStarter"
  | "isStorySpotlight"
  | "isTextless"
  | "isTimeshifted"
  | "leadershipSkills"
  | "legalities"
  | "life"
  | "manaCost"
  | "manaValue"
  | "originalPrintings"
  | "originalReleaseDate"
  | "originalText"
  | "originalType"
  | "printings"
  | "purchaseUrls"
  | "rarity"
  | "rebalancedPrintings"
  | "rulings"
  | "variations";

export interface CardToken extends Omit<CardPrinted, TokenOmittedValues> {
  /**
   * The names of the cards that produce this card.
   */
  reverseRelated: Array<string>;
}
