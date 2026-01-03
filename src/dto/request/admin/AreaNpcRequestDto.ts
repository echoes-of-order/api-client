// Shared Area NPC Request DTO for both Admin and Backend
export interface AreaNpcRequestDto {
  /** Area ID where the NPC is located */
  areaId: string;
  /** Movement pattern */
  movementPattern?: string;
  /** NPC template ID */
  npcId: string;
  /** X coordinate position */
  positionX: number;
  /** Y coordinate position */
  positionY: number;
}