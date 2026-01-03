// Export all DTO interfaces for type safety between frontend and backend
export type {
  // Item DTOs
  CreateItemRequestDto,
  UpdateItemRequestDto,
  ItemStatRequestDto,
  ItemTranslationRequestDto,
  ItemBackpackRequestDto,
  WeaponDamageRequestDto,

  // Item management DTOs
  CreateItemBindingRequestDto,
  UpdateItemBindingRequestDto,
  CreateItemQualityRequestDto,
  UpdateItemQualityRequestDto,
  CreateItemSubclassRequestDto,
  UpdateItemSubclassRequestDto,
  CreateItemStatsTypeRequestDto,
  UpdateItemStatsTypeRequestDto,
  CreateInventoryTypeRequestDto,
  UpdateInventoryTypeRequestDto,
  QueryItemRequestDto,

  // Additional DTOs
  CategoryRequestDto,
  AbilityRequestDto,
  LanguageRequestDto,
  MapRequestDto,
  NpcRequestDto,
  AreaNpcRequestDto,
  TextureRequestDto,
  TextureUploadRequestDto,
  TextureFileMapRequestDto,
  TextureMapsRequestDto,
  GameAssetRequestDto,
  MonsterRequestDto,
  RaceStartingStatsRequestDto,
  AuraDefinitionRequestDto,
  CreateCharacterIndexRequestDto,

  // Legacy (for backward compatibility)
  ItemRequestDto,
} from './request/admin';