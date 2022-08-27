import { CardSet } from "./CardSet";
import { MetaData } from "./Meta";
import { Set } from "./Set";
import { AllPricesData } from "./AllPrices";
import { CardAtomic } from "./CardAtomic";
import { CardTypesData } from "./CardTypes";
import { DeckListData } from "./DeckList";
import { KeywordsData } from "./Keywords";
import { Deck } from "./Deck";

interface BaseFile {
	/**
	 * The meta data for the file.
	 */
	meta: MetaData;
}

interface AtomicFileBase extends BaseFile {
	/**
	 * An object containing the atomic data for cards with their names as keys.
	 */
	data: Record<string, CardAtomic>;
}

interface SetsFile extends BaseFile {
	/**
	 * An object containing sets and their cards with the set code as the key.
	 */
	data: Record<string, Set>;
}

/**
 * File containing all Card (Set) cards, including all printings and variations, categorized by set.
 */
export interface AllPrintingsFile extends SetsFile {}

/**
 * File containing all Card (Set) cards organized by card UUID.
 */
export interface AllIdentifiersFile extends BaseFile {
	/**
	 * An object containing all cards with their uuids as keys.
	 */
	data: Record<string, CardSet>;
}

/**
 * File containing all prices of cards in various formats.
 */
export interface AllPricesFile extends BaseFile {
	/**
	 * An object containing prices for all cards with their uuids as keys.
	 */
	data: Record<string, AllPricesData>;
}

/**
 * File containing every Card (Atomic) card.
 */
export interface AtomicCardsFile extends AtomicFileBase {}

/**
 * File containing every card type of any type of card.
 */
export interface CardTypesFile extends BaseFile {
	data: CardTypesData;
}

/**
 * File containing all individual outputs from MTGJSON, such as AllPrintings, CardTypes, etc.
 *
 * **Note:** This file does not contain data for this outputs, only string references to their existence. Generally, this data is used for documenting data on this website, but is also available to the public.
 */
export interface CompiledListFile extends BaseFile {
	data: Array<string>;
}

/**
 * File containing all individual Deck data.
 */
export interface DeckListFile extends BaseFile {
	/**
	 * An array of metadata about each deck.
	 */
	data: Array<DeckListData>;
}

/**
 * File containing known property values for various Data Models.
 *
 * **Note:** Generally, this data is used for documenting data on this website, but is also available to the public.
 */
export interface EnumValuesFile extends BaseFile {
	/**
	 * A record of object names. Inside each object is a key for each property name and the possible values for that enum as an array.
	 */
	data: Record<string, Record<string, Array<string>>>;
}

/**
 * File containing a list of possible all keywords used on all cards.
 */
export interface KeywordsFile extends BaseFile {
	/**
	 * An object containing all keywords, grouped by type.
	 */
	data: KeywordsData;
}

/**
 * File containing all Set cards, restricted to sets legal in the Legacy format.
 */
export interface LegacyFile extends SetsFile {}

/**
 * File containing all Card (Atomic) cards, restricted to sets legal in the Legacy format.
 */
export interface LegacyAtomicFile extends AtomicFileBase {}

/**
 * File containing the metadata object with ISO 8601 dates for latest build and SemVer specifications of the MTGJSON release.
 */
export interface MetaFile extends BaseFile {
	data: MetaData;
}

/**
 * File containing all Set cards, restricted to sets legal in the Modern format.
 */
export interface ModernFile extends SetsFile {}

/**
 * File containing all Card (Atomic) cards, restricted to sets legal in the Modern format.
 */
export interface ModernAtomicFile extends AtomicFileBase {}

/**
 * File containing all Card (Atomic) cards, restricted to cards legal in the Pauper format.
 */
export interface PauperAtomicFile extends AtomicFileBase {}

/**
 * File containing all Set cards, restricted to cards legal in the Pioneer format.
 */
export interface PioneerFile extends SetsFile {}

/**
 * File containing all Card (Atomic) cards, restricted to cards legal in the Pioneer format.
 */
export interface PioneerAtomicFile extends AtomicFileBase {}

/**
 * File containing a list of meta data for all Set data.
 */
export interface SetListFile extends BaseFile {
	data: Array<Omit<Set, "cards" | "tokens">>;
}

/**
 * File containing all Set cards, restricted to cards legal in the Standard format.
 */
export interface StandardFile extends SetsFile {}

/**
 * File containing all Card (Atomic) cards, restricted to cards legal in the Standard format.
 */
export interface StandardAtomicFile extends AtomicFileBase {}

export interface TcgplayerSkuEntry {
	condition: string;
	language: string;
	printing: string;
	productId: number;
	skuId: number;
}
/**
 * File containing TCGplayer SKU information based on card UUIDs.
 */
export interface TcgplayerSkusFile extends BaseFile {
	data: Record<string, TcgplayerSkuEntry>;
}

/**
 * File containing all Set cards, restricted to sets legal in the Vintage format.
 */
export interface VintageFile extends SetsFile {}

/**
 * File containing all Card (Atomic) cards, restricted to sets legal in the Vintage format.
 */
export interface VintageAtomicFile extends AtomicFileBase {}

/**
 * This interface covers all the sets downloaded from the [All Sets page](https://mtgjson.com/downloads/all-sets/)
 */
export interface IndividualSetFile extends BaseFile {
	data: Set;
}

/**
 * This interface covers all the sets downloaded from the [All Decks page](https://mtgjson.com/downloads/all-decks/)
 */
export interface IndividualDeckFile extends BaseFile {
	data: Deck;
}
