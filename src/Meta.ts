export interface MetaData {
  /**
   * The current release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the MTGJSON build.
   */
  date: string;

  /**
   * The current [SemVer](https://semver.org/) version for the MTGJSON build appended with the build date.
   */
  version: string;
}
