// Shared Game Asset Request DTO for both Admin and Backend
export interface GameAssetRequestDto {
  /** Base asset identifier */
  baseAsset?: string;
  /** Connection points for the asset */
  connectionPoints: {
    bottom: boolean;
    left: boolean;
    right: boolean;
    top: boolean;
  };
  /** CSS code for styling the asset */
  cssCode: string;
  /** Description of the asset */
  description?: string;
  /** Asset height */
  height: number;
  /** HTML code for the asset */
  htmlCode: string;
  /** Whether the asset is active */
  isActive: boolean;
  /** JavaScript code for the asset */
  jsCode: string;
  /** Asset name */
  name: string;
  /** Asset settings */
  settings?: unknown;
  /** Asset texture URL */
  textureUrl?: string;
  /** Asset texture data URL */
  textureDataUrl?: string;
  /** Asset type */
  type: string;
  /** Asset width */
  width: number;
}