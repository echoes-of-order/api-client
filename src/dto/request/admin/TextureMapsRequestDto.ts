// Shared Texture Maps Request DTO for both Admin and Backend
export interface TextureMapsRequestDto {
  /** Ambient map file path */
  ambient?: string;
  /** Displacement map file path */
  displacement?: string;
  /** Emission map file path */
  emission?: string;
  /** Height map file path */
  height?: string;
  /** Main texture file path */
  main?: string;
  /** Metalness map file path */
  metalness?: string;
  /** Normal map file path */
  normal?: string;
  /** Roughness map file path */
  roughness?: string;
  /** Specular map file path */
  specular?: string;
}