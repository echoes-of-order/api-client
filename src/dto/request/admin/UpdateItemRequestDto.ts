import { ItemBackpackRequestDto } from "./ItemBackpackRequestDto";
import { ItemStatRequestDto } from "./ItemStatRequestDto";
import { ItemTranslationRequestDto } from "./ItemTranslationRequestDto";
import { WeaponDamageRequestDto } from "./WeaponDamageRequestDto";

// Shared Update Item Request DTO for both Admin and Backend
export interface UpdateItemRequestDto {
  /** Whether the item is active */
  active: boolean;
  /** Item binding ID */
  bindingId: string;
  /** Item durability */
  durability: number;
  /** Inventory type ID */
  inventoryTypeId: string;
  /** Whether the item is equippable */
  isEquippable: boolean;
  /** Whether the item is purchasable */
  isPurchasable: boolean;
  /** Whether the item is sellable */
  isSellable: boolean;
  /** Whether the item is stackable */
  isStackable: boolean;
  /** Whether the item is a starting item */
  isStartingItem: boolean;
  /** Item class ID */
  itemClassId: string;
  /** Item subclass ID */
  itemSubclassId: string;
  /** Item level */
  level: number;
  /** Maximum count of the item */
  maxCount: number;
  /** Media ID for the item */
  mediaId: number;
  /** Item name */
  name: string;
  /** Purchase price of the item */
  purchasePrice?: null | number;
  /** Purchase quantity */
  purchaseQuantity: number;
  /** Item quality ID */
  qualityId: string;
  /** Required level to use this item */
  requiredLevel?: number;
  /** Sell price of the item */
  sellPrice?: null | number;
  /** Item stats */
  stats: ItemStatRequestDto[];
  /** Item translations */
  translations: ItemTranslationRequestDto[];
  /** Item backpack data */
  itemBackpack?: null | ItemBackpackRequestDto;
  /** Weapon damage data */
  weapon?: null | WeaponDamageRequestDto;
}