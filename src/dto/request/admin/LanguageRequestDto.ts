// Shared Language Request DTO for both Admin and Backend
export interface LanguageRequestDto {
  /** Language code */
  code: string;
  /** Whether the language is active */
  isActive?: boolean;
  /** Language name */
  name: string;
  /** Language sort order */
  sortOrder?: number;
}