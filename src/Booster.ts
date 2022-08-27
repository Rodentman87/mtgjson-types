export type Booster = Record<string, BoosterData> & {
  default: Omit<BoosterData, "name">;
};

interface BoosterData {
  /**
   * The name of the premium booster pack.
   */
  name: string;

  /**
   * Booster pack configurations.
   */
  boosters: {
    /**
     * Card contents of a booster pack. Each entry is the name of a sheet and how many cards are in the pack.
     */
    contents: Record<string, number>;
    /**
     * Odds of getting this configuration against other configurations
     */
    weight: number;
  }[];

  /**
   * Sum of all booster configurations weights
   */
  boostersTotalWeight: number;

  /**
   * All possible sheets of cards to use within booster packs
   */
  sheets: Record<string, SheetData>;
}

interface SheetData {
  /**
   * Whether or not the colors of the sheet need to be balanced
   */
  balanceColors: boolean;

  /**
   * The cards used in the sheet. Each entry is the uuid of a card with a weight as its value.
   */
  cards: Record<string, number>;

  /**
   * Is the sheet foiled
   */
  foil: boolean;

  /**
   * Sum of all card weights in the sheet
   */
  totalWeight: number;
}
