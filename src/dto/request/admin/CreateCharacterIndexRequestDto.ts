// Shared Create Character Index Request DTO for both Admin and Backend
export interface CreateCharacterIndexRequestDto {
  /** Account ID */
  accountId: string;
  /** Character ID */
  characterId: string;
  /** Class name */
  className: string;
  /** Character level */
  level: number;
  /** Character name */
  name: string;
  /** Race name */
  raceName: string;
  /** Realm ID */
  realmId: string;
}