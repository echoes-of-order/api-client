// Shared Aura Definition Request DTO for both Admin and Backend
export interface AuraDefinitionRequestDto {
  /** Whether this can proc from another proc */
  canProcFromProc?: boolean;
  /** Aura category */
  category: string;
  /** Default duration of the aura in seconds */
  defaultDuration: number;
  /** Aura description */
  description: string;
  /** Aura effects */
  effects: unknown[];
  /** Whether the aura has a hidden tooltip */
  hasHiddenTooltip?: boolean;
  /** Aura icon path */
  icon?: string;
  /** Whether the aura is a debuff */
  isDebuff?: boolean;
  /** Whether the aura is a passive effect */
  isPassive?: boolean;
  /** Aura max stacks */
  maxStacks?: number;
  /** Aura name */
  name: string;
  /** Aura priority for sorting */
  priority?: number;
  /** Aura spell ID */
  spellId: string;
  /** Aura tags for filtering */
  tags?: string[];
}