// Shared Category Request DTO for both Admin and Backend
export interface CategoryRequestDto {
  /** Description of the category */
  description: string;
  /** Unique identifier of the category */
  id: string;
  /** Name of the category */
  name: string;
}