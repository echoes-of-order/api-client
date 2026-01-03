// Shared Texture File Map Request DTO for both Admin and Backend
export interface TextureFileMapRequestDto {
  /** Ambient map files */
  ambientMap?: unknown[];
  /** Displacement map files */
  displacementMap?: unknown[];
  /** Emission map files */
  emissionMap?: unknown[];
  /** Height map files */
  heightMap?: unknown[];
  /** Main texture files */
  mainFile?: unknown[];
  /** Metalness map files */
  metalnessMap?: unknown[];
  /** Normal map files */
  normalMap?: unknown[];
  /** Roughness map files */
  roughnessMap?: unknown[];
  /** Specular map files */
  specularMap?: unknown[];
}