// Shared Race Starting Stats Request DTO for both Admin and Backend
export interface RaceStartingStatsRequestDto {
  /** Starting agility value */
  agility?: number;
  /** Starting intelligence value */
  intelligence?: number;
  /** Starting spirit value */
  spirit?: number;
  /** Starting stamina value */
  stamina?: number;
  /** Starting strength value */
  strength?: number;
}