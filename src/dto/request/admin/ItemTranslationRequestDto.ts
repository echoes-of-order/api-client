// Shared ItemTranslation Request DTO for both Admin and Backend
export interface ItemTranslationRequestDto {
  description?: string;
  displayName?: string;
  id?: string;
  language: string;
  text?: string;
}
