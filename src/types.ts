export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface RequestConfig {
  timeout?: number;
  headers?: Record<string, string>;
  withCredentials?: boolean;
  baseUrl?: string;
  signal?: AbortSignal;
}

export interface ApiClientConfig {
  baseUrl?: string;
  timeout?: number;
  defaultHeaders?: Record<string, string>;
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

export interface KeyValuePair {
  key: string;
  value: string;
}

export type RequestDto =
  // Item DTOs
  | import('./dto/request/admin').CreateItemRequestDto
  | import('./dto/request/admin').UpdateItemRequestDto
  | import('./dto/request/admin').ItemStatRequestDto
  | import('./dto/request/admin').ItemTranslationRequestDto
  | import('./dto/request/admin').ItemBackpackRequestDto
  | import('./dto/request/admin').WeaponDamageRequestDto

  // Item management DTOs
  | import('./dto/request/admin').CreateItemBindingRequestDto
  | import('./dto/request/admin').UpdateItemBindingRequestDto
  | import('./dto/request/admin').CreateItemQualityRequestDto
  | import('./dto/request/admin').UpdateItemQualityRequestDto
  | import('./dto/request/admin').CreateItemSubclassRequestDto
  | import('./dto/request/admin').UpdateItemSubclassRequestDto
  | import('./dto/request/admin').CreateItemStatsTypeRequestDto
  | import('./dto/request/admin').UpdateItemStatsTypeRequestDto
  | import('./dto/request/admin').CreateInventoryTypeRequestDto
  | import('./dto/request/admin').UpdateInventoryTypeRequestDto
  | import('./dto/request/admin').QueryItemRequestDto

  // Additional DTOs
  | import('./dto/request/admin').CategoryRequestDto
  | import('./dto/request/admin').AbilityRequestDto
  | import('./dto/request/admin').LanguageRequestDto
  | import('./dto/request/admin').MapRequestDto
  | import('./dto/request/admin').NpcRequestDto
  | import('./dto/request/admin').AreaNpcRequestDto
  | import('./dto/request/admin').TextureRequestDto
  | import('./dto/request/admin').TextureUploadRequestDto
  | import('./dto/request/admin').TextureFileMapRequestDto
  | import('./dto/request/admin').TextureMapsRequestDto
  | import('./dto/request/admin').GameAssetRequestDto
  | import('./dto/request/admin').MonsterRequestDto
  | import('./dto/request/admin').RaceStartingStatsRequestDto
  | import('./dto/request/admin').AuraDefinitionRequestDto
  | import('./dto/request/admin').CreateCharacterIndexRequestDto

  // Legacy DTOs
  | import('./dto/request/admin').ItemRequestDto

  // Fallback for backward compatibility and custom DTOs
  | Record<string, unknown>;
