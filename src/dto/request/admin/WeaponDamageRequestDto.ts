// Shared WeaponDamage Request DTO for both Admin and Backend
export interface WeaponDamageRequestDto {
  attackSpeed: number;
  damageClassTypeId?: string;
  dps?: number;
  id?: string;
  maxValue: number;
  minValue: number;
}
