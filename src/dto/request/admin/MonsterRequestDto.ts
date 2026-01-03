// Shared Monster Request DTO for both Admin and Backend
export interface MonsterRequestDto {
  /** Area ID */
  areaId: string;
  /** Monster experience points */
  experiencePoints: number;
  /** Monster health */
  health: number;
  /** Whether the monster is active */
  isActive?: boolean;
  /** Monster level */
  level: number;
  /** Monster name */
  name: string;
  /** Monster position */
  position: {
    facing: number;
    positionX: number;
    positionY: number;
    positionZ: number;
  };
  /** Monster type */
  type: string;
}