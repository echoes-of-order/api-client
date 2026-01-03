// Shared Query Item Request DTO for both Admin and Backend
export interface QueryItemRequestDto {
  /** Maximum number of items to return */
  limit?: string;
  /** Number of items to skip for pagination */
  offset?: string;
}