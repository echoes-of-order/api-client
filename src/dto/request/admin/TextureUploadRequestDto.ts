// Shared Texture Upload Request DTO for both Admin and Backend
export interface TextureUploadRequestDto {
  /** Texture description */
  description?: string;
  /** Texture name */
  name: string;
  /** Texture settings */
  settings?: unknown;
}