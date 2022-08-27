import { SetType } from "./Enums";
import { SealedProduct } from "./SealedProduct";
import { Translations } from "./Translations";

export interface SetListEntry {
	/**
	 * The number of cards in the set. This will default to `totalSetSize` if not available. [Wizards of the Coast](https://company.wizards.com/en) sometimes prints extra cards beyond the set size into promos or supplemental products.
	 */
	baseSetSize: number;

	/**
	 * The block name the set was in.
	 */
	block?: string;

	/**
	 * The set code for the set.
	 */
	code: string;

	/**
	 * The alternate set code [Wizards of the Coast](https://company.wizards.com/en) uses for a select few duel deck sets.
	 */
	codeV3?: string;

	/**
	 * If the set is available only outside the United States of America.
	 */
	isForeignOnly?: boolean;

	/**
	 * If the set is only available in foil.
	 */
	isFoilOnly: boolean;

	/**
	 * If the set is only available in non-foil.
	 */
	isNonFoilOnly?: boolean;

	/**
	 * If the set is only available in online game variations.
	 */
	isOnlineOnly: boolean;

	/**
	 * If the set is only available in paper.
	 */
	isPaperOnly?: boolean;

	/**
	 * If the set is still in preview (spoiled). Preview sets do not have complete data.
	 */
	isPartialPreview?: boolean;

	/**
	 * The matching [Keyrune](https://keyrune.andrewgioia.com/) code for set image icons.
	 */
	keyruneCode: string;

	/**
	 * The [Magic Card Market](https://www.cardmarket.com/en/Magic) set identifier.
	 */
	mcmId?: number;

	/**
	 * The split [Magic Card Market](https://www.cardmarket.com/en/Magic) set identifier if a set is printed in two sets. This identifier represents the second set's identifier.
	 */
	mcmIdExtras?: number;

	/**
	 * The [Magic Card Market](https://www.cardmarket.com/en/Magic) set name.
	 */
	mcmName?: string;

	/**
	 * The set code for the set as it appears on [Magic: The Gathering Online](https://magic.wizards.com/en/mtgo).
	 */
	mtgoCode?: string;

	/**
	 * The name of the set.
	 */
	name: string;

	/**
	 * The parent set code for set variations like promotions, guild kits, etc.
	 */
	parentCode?: string;

	/**
	 * The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set.
	 */
	releaseDate: string;

	/**
	 * The sealed product information for the set.
	 */
	sealedProduct?: SealedProduct;

	/**
	 * The group identifier of the set on [TCGplayer](https://www.tcgplayer.com/).
	 */
	tcgplayerGroupId?: number;

	/**
	 * The total number of cards in the set, including promotional and related supplemental products but excluding [Alchemy](https://magic.wizards.com/en/articles/archive/magic-digital/introducing-alchemy-new-way-play-mtg-arena-2021-12-02) modifications - however those cards are included in the set itself.
	 */
	totalSetSize: number;

	/**
	 * The translated set name by language.
	 */
	translations: Translations;

	/**
	 * The expansion type of the set.
	 */
	type: SetType;
}
