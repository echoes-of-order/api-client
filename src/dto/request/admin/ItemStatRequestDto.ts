// Shared ItemStat Request DTO for both Admin and Backend
export interface ItemStatRequestDto {
  id?: string;
  typeId: string;
  value: number;
}
