// Shared Ability Request DTO for both Admin and Backend
export interface AbilityRequestDto {
  /** Ability cooldown in seconds */
  cooldown?: number;
  /** Ability description */
  description: string;
  /** Ability icon */
  icon?: string;
  /** Ability level */
  level: number;
  /** Ability mana cost */
  manaCost?: number;
  /** Ability name */
  name: string;
  /** Ability range */
  range?: number;
}