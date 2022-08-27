import { DeckType } from "./Enums";

export interface DeckListData {
	/**
	 * The set code for the deck.
	 */
	code: string;

	/**
	 * The file name for the deck. Combines the `name` and `code` fields to avoid namespace collisions and are given a delimiter of `_`.
	 */
	fileName: string;

	/**
	 * The name of the deck.
	 */
	name: string;

	/**
	 * The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set. Returns null if the set was not formally released as a product.
	 */
	releaseDate: string | null;

	/**
	 * The type of deck.
	 */
	type: DeckType;
}
