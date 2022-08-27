import { Types } from "./Types";

export interface CardTypesData {
  /**
   * All the possible subtypes and supertypes for Artifact cards.
   * @see Types
   */
  artifact: Types;

  /**
   * All the possible subtypes and supertypes for Conspiracy cards.
   * @see Types
   */
  conspiracy: Types;

  /**
   * All the possible subtypes and supertypes for Creature cards.
   * @see Types
   */
  creature: Types;

  /**
   * All the possible subtypes and supertypes for Enchantment cards.
   * @see Types
   */
  enchantment: Types;

  /**
   * All the possible subtypes and supertypes for Instant cards.
   * @see Types
   */
  instant: Types;

  /**
   * All the possible subtypes and supertypes for Land cards.
   * @see Types
   */
  land: Types;

  /**
   * All the possible subtypes and supertypes for Phenomenon cards.
   * @see Types
   */
  phenomenon: Types;

  /**
   * All the possible subtypes and supertypes for Plane cards.
   * @see Types
   */
  plane: Types;

  /**
   * All the possible subtypes and supertypes for Planeswalker cards.
   * @see Types
   */
  planeswalker: Types;

  /**
   * All the possible subtypes and supertypes for Scheme cards.
   * @see Types
   */
  scheme: Types;

  /**
   * All the possible subtypes and supertypes for Sorcery cards.
   * @see Types
   */
  sorcery: Types;

  /**
   * All the possible subtypes and supertypes for Tribal cards.
   * @see Types
   */
  tribal: Types;

  /**
   * All the possible subtypes and supertypes for Vanguard cards.
   * @see Types
   */
  vanguard: Types;
}
