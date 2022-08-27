import {
	Availability,
	BorderColor,
	CardTypes,
	ColorIdentity,
	ColorIndicator,
	Colors,
	Finishes,
	FrameEffects,
	FrameVersion,
	Layout,
	PromoTypes,
	Rarity,
	SecurityStamp,
	Subtypes,
	Supertypes,
	Watermark,
} from "./Enums";
import { ForeignData } from "./ForeignData";
import { Identifiers } from "./Identifiers";
import { LeadershipSkills } from "./LeadershipSkills";
import { Legalities } from "./Legalities";
import { PurchaseUrls } from "./PurchaseUrls";
import { Ruling } from "./Rulings";

export interface CardBase {
	/**
	 * The [ASCII](https://www.asciitable.com/) (Basic/128) code formatted card name with no special unicode characters.
	 */
	asciiName: string;

	/**
	 * A list of all the colors found in `manaCost`, `colorIndicator`, and `text`.
	 */
	colorIdentity: Array<ColorIdentity>;

	/**
	 * A list of all the colors in the color indicator (The symbol prefixed to a card's `types`).
	 */
	colorIndicator?: Array<ColorIndicator>;

	/**
	 * A list of all the colors in `manaCost` and `colorIndicator`. Some cards may not have values, such as cards with "Devoid" in its `text`.
	 */
	colors: Array<Colors>;

	/**
	 * The converted mana cost of the card.
	 * @deprecated Use the `manaValue` property.
	 */
	convertedManaCost: number;

	/**
	 * The card rank on [EDHRec](https://www.edhrec.com/).
	 */
	edhrecRank: number;

	/**
	 * The converted mana cost or mana value for the face for either half or part of the card.
	 * @deprecated Use the `faceManaValue` property.
	 */
	faceConvertedManaCost: number;

	/**
	 * The mana value of the face for either half or part of the card. Formally known as "converted mana cost".
	 */
	faceManaValue: number;

	/**
	 * The name on the face of the card.
	 */
	faceName: string;

	/**
	 * A list of data properties in other languages.
	 * @see ForeignData
	 */
	foreignData: Array<ForeignData>;

	/**
	 * The starting maximum hand size total modifier. A `+` or `-` character precedes an integer.
	 */
	hand?: string;

	/**
	 * If the card allows a value other than 4 copies in a deck.
	 */
	hasAlternativeDeckLimit?: boolean;

	/**
	 * A list of identifiers associated to a card.
	 * @see Identifiers
	 */
	identifiers: Identifiers;

	/**
	 * If the card is part of a funny set.
	 */
	isFunny?: boolean;

	/**
	 * If the card is on the Magic: The Gathering [Reserved List](https://magic.wizards.com/en/articles/archive/official-reprint-policy-2010-03-10).
	 */
	isReserved?: boolean;

	/**
	 * A list of keywords found on the card.
	 */
	keywords?: Array<string>;

	/**
	 * The type of card layout.
	 */
	layout: Layout;

	/**
	 * A list of formats the card is legal to be a commander in.
	 * @see LeadershipSkills
	 */
	leadershipSkills?: LeadershipSkills;

	/**
	 * A list of play formats the card the card is legal in.
	 * @see Legalities
	 */
	legalities: Legalities;

	/**
	 * The starting life total modifier. A plus or minus character precedes an integer. Used only on cards with `"Vanguard"` in its `types`.
	 */
	life?: string;

	/**
	 * The starting loyalty of the card. Used only on cards with `"Planeswalker"` in its `types`.
	 */
	loyalty?: string;

	/**
	 * The mana cost of the card wrapped in brackets for each value.
	 * @example `{1}{B}`
	 */
	manaCost?: string;

	/**
	 * The mana value of the card. Formally known as "converted mana cost".
	 */
	manaValue: number;

	/**
	 * The name of the card. Cards with multiple faces, like "Split" and "Meld" cards are given a delimiter.
	 * @example "Wear // Tear"
	 */
	name: string;

	/**
	 * The power of the card.
	 */
	power?: string;

	/**
	 * A list of set printing codes the card was printed in, formatted in uppercase.
	 */
	printings?: Array<string>;

	/**
	 * Links that navigate to websites where the card can be purchased.
	 * @see PurchaseUrls
	 */
	purchaseUrls?: PurchaseUrls;

	/**
	 * The official rulings of the card.
	 * @see Ruling
	 */
	rulings: Array<Ruling>;

	/**
	 * The identifier of the card side. Used on cards with multiple faces on the same card.
	 * @example "a", "b", "c"
	 */
	side?: string;

	/**
	 * A list of card subtypes found after em-dash.
	 */
	subtypes: Array<Subtypes>;

	/**
	 * A list of card supertypes found before em-dash.
	 */
	supertypes: Array<Supertypes>;

	/**
	 * The rules text of the card.
	 */
	text?: string;

	/**
	 * The toughness of the card.
	 */
	toughness?: string;

	/**
	 * The type of the card as visible, including any supertypes and subtypes.
	 */
	type: string;

	/**
	 * A list of all card types of the card, including Un‑sets and gameplay variants.
	 */
	types?: Array<CardTypes>;
}

export interface CardPrinted extends CardBase {
	/**
	 * The name of the artist that illustrated the card art.
	 */
	artist?: string;

	/**
	 * A list of the card's available printing types.
	 */
	availability: Array<Availability>;

	/**
	 * The color of the card border.
	 */
	borderColor: BorderColor;

	/**
	 * A list of card names associated to this card, such as "Meld" card face names.
	 */
	cardParts?: Array<string>;

	/**
	 * The flavor name on the face of the card.
	 */
	faceFlavorName?: string;

	/**
	 * The finishes of the card.
	 */
	finishes: Array<Finishes>;

	/**
	 * The promotional card name printed above the true card name on special cards that has no game function.
	 */
	flavorName?: string;

	/**
	 * The italicized text found below the rules text that has no game function.
	 */
	flavorText?: string;

	/**
	 * The visual frame effects.
	 */
	frameEffects?: Array<FrameEffects>;

	/**
	 * The version of the card frame style.
	 */
	frameVersion?: FrameVersion;

	/**
	 * If the card marked by [Wizards of the Coast](https://company.wizards.com/en) for having sensitive content. Cards with this property may have missing or degraded properties and values. See this [official article](https://magic.wizards.com/en/articles/archive/news/depictions-racism-magic-2020-06-10) for more information.
	 */
	hasContentWarning?: boolean;

	/**
	 * If the card can be found in foil.
	 * @deprecated Use the `finishes` property.
	 */
	hasFoil: boolean;

	/**
	 * If the card can be found in non-foil.
	 * @deprecated Use the `finishes` property.
	 */
	hasNonFoil: boolean;

	/**
	 * If the card is an alternate variation to an original printing.
	 */
	isAlternative?: boolean;

	/**
	 * If the card has full artwork.
	 */
	isFullArt?: boolean;

	/**
	 * If the card is only available in online game variations.
	 */
	isOnlineOnly?: boolean;

	/**
	 * If the card is oversized.
	 */
	isOverSized?: boolean;

	/**
	 * If the card is a promotional printing.
	 */
	isPromo?: boolean;

	/**
	 * If the card is [rebalanced](https://magic.wizards.com/en/articles/archive/magic-digital/alchemy-rebalancing-philosophy-2021-12-02) for the [Alchemy](https://magic.wizards.com/en/articles/archive/magic-digital/introducing-alchemy-new-way-play-mtg-arena-2021-12-02) play format.
	 */
	isRebalanced?: boolean;

	/**
	 * If the card has been reprinted.
	 */
	isReprint?: boolean;

	/**
	 * If the card is found in a starter deck such as Planeswalker/Brawl decks.
	 */
	isStarter?: boolean;

	/**
	 * If the card is a [Story Spotlight](https://mtg.fandom.com/wiki/Story_Spotlight) card.
	 */
	isStorySpotlight?: boolean;

	/**
	 * If the card does not have a text box.
	 */
	isTextless?: boolean;

	/**
	 * If the card is "timeshifted", a feature of certain sets where a card will have a different `frameVersion`.
	 */
	isTimeshifted?: boolean;

	/**
	 * The number of the card. Can be prefixed or suffixed with a * or other characters for promotional sets.
	 */
	number: string;

	/**
	 * A list of card UUID's to original printings of the card if this card is somehow different from its original, such as [rebalanced](https://magic.wizards.com/en/articles/archive/magic-digital/alchemy-rebalancing-philosophy-2021-12-02) cards.
	 */
	originalPrintings?: Array<string>;

	/**
	 * The original release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for a promotional card printed outside of a cycle window, such as Secret Lair Drop promotions.
	 */
	originalReleaseDate?: string;

	/**
	 * The text on the card as originally printed.
	 */
	originalText?: string;

	/**
	 * The type of the card as originally printed. Includes any supertypes and subtypes.
	 */
	originalType?: string;

	/**
	 * A list of card UUID's to this card's counterparts, such as transformed or melded faces.
	 */
	otherFaceIds: Array<string>;

	/**
	 * A list of promotional types for a card.
	 */
	promoTypes?: Array<PromoTypes>;

	/**
	 * The card printing rarity. Rarity `bonus` relates to cards that have an alternate availability in booster packs, while `special` relates to "Timeshifted" cards.
	 */
	rarity: Rarity;

	/**
	 * A list of card UUID's to printings that are [rebalanced](https://magic.wizards.com/en/articles/archive/magic-digital/alchemy-rebalancing-philosophy-2021-12-02) versions of this card.
	 */
	rebalancedPrintings?: Array<string>;

	/**
	 * The security stamp printed on the card.
	 */
	securityStamp?: SecurityStamp;

	/**
	 * The set printing code that the card is from.
	 */
	setCode: string;

	/**
	 * The name of the signature on the card.
	 */
	signature?: string;

	/**
	 * The universal unique identifier (v5) generated by MTGJSON. Each entry is unique.
	 */
	uuid: string;

	/**
	 * A list of card UUID's of this card with alternate printings in the same set. Excludes Un‑sets.
	 */
	variations: Array<string>;

	/**
	 * The name of the watermark on the card.
	 */
	watermark?: Watermark;
}
