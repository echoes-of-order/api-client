// Shared Update Item Subclass Request DTO for both Admin and Backend
export interface UpdateItemSubclassRequestDto {
  /** Name of the item subclass */
  name: string;
  /** ID of the item class */
  itemClassId: string;
}