export type AllPricesData = Record<string, FormatData>;

export type FormatData = Record<string, ProviderData>;

export interface ProviderData {
  /**
   * Provider buylist values
   */
  buylist: {
    /**
     * The price of the card in foil, each key is a date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    foil: Record<string, number>;

    /**
     * The price of the card in non-foil, each key is a date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    normal: Record<string, number>;
  };

  /**
   * The currency of the provider.
   */
  currency: string;

  /**
   * Provider retail values
   */
  retail: {
    /**
     * The price of the card in foil, each key is a date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    foil: Record<string, number>;

    /**
     * The price of the card in non-foil, each key is a date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    normal: Record<string, number>;
  };
}
