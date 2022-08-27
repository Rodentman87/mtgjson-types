import { Subtypes, Supertypes } from "./Enums";

export interface Types {
  /**
   * A list of all available subtypes of a type.
   */
  subTypes: Array<Subtypes>;

  /**
   * A list of all available supertypes of a type.
   */
  superTypes: Array<Supertypes>;
}
