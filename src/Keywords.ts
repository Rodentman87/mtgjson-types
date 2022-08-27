import { AbilityWords, KeywordAbilities, KeywordActions } from "./Enums";

export interface KeywordsData {
  /**
   * A list of ability words found in rules text on cards.
   */
  abilityWords: AbilityWords[];

  /**
   * A list of keyword abilities found in rules text on cards.
   */
  keywordAbilities: KeywordAbilities[];

  /**
   * A list of keyword actions found in rules text on cards.
   */
  keywordActions: KeywordActions[];
}
