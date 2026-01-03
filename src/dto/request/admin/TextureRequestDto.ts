// Shared Texture Request DTO for both Admin and Backend
export interface TextureRequestDto {
  /** Description of the texture */
  description?: null | string;
  /** File path of the texture */
  filePath?: null | string;
  /** Unique identifier of the texture */
  id: string;
  /** Name of the texture */
  name: string;
}