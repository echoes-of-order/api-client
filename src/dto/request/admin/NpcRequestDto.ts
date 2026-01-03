// Shared NPC Request DTO for both Admin and Backend
export interface NpcRequestDto {
  /** Area ID */
  areaId: string;
  /** Playable Class ID */
  classId: string;
  /** NPC description */
  description: string;
  /** Dialog options */
  dialogOptions?: string[];
  /** Whether the NPC is active */
  isActive?: boolean;
  /** NPC level */
  level?: number;
  /** Movement pattern */
  movementPattern?: string;
  /** NPC name */
  name: string;
  /** NPC position */
  position: {
    facing: number;
    positionX: number;
    positionY: number;
    positionZ: number;
  };
  /** Playable Race ID */
  raceId: string;
  /** NPC type */
  type: string;
}