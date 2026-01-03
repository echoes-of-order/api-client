# @echoes-of-order/api-client

Eine geteilte HTTP-Client-Bibliothek für alle Echoes of Order-Projekte.

## Installation

```bash
# Lokal installieren (entwicklung)
cd external-repos/api-client
yarn build
cd ../../frontend  # oder backend/admin
yarn add file:../shared-libs/eoo-api-client

# Oder über privates NPM-Registry (produktion)
yarn add @eoo/api-client
```

## Verwendung

```typescript
import { ApiClient, ApiMethods } from '@eoo/api-client';

// Client initialisieren
const apiClient = new ApiClient({
  baseUrl: 'http://api.eoo.local',
  timeout: 5000,
  defaultHeaders: {
    'X-API-Version': '1.0'
  }
});

// GET-Request
const users = await apiClient.get<User[]>('/users');

// POST-Request mit typsicheren RequestDto-Typen
import type { CreateItemRequestDto } from '@eoo/api-client';

const itemData: CreateItemRequestDto = {
  name: 'Magic Sword',
  level: 10,
  active: true,
  qualityId: 'rare-quality-id',
  itemClassId: 'weapon-class-id'
};

const newItem = await apiClient.post<Item>('/items', itemData);

// Traditionelle Verwendung bleibt möglich
const newUser = await apiClient.post<User>('/users', {
  name: 'John Doe',
  email: 'john@example.com'
});

// Mit benutzerdefinierten Headers
const data = await apiClient.get<Data>('/protected', {
  headers: {
    'Authorization': 'Bearer token123'
  }
});

// Mit Timeout
const data = await apiClient.post<Data>('/slow-endpoint', payload, {
  timeout: 30000
});
```

## Features

- ✅ TypeScript-Support
- ✅ Typsichere RequestDto-Unterstützung
- ✅ Automatische JSON-Serialisierung/Deserialisierung
- ✅ Konfigurierbare Timeouts
- ✅ Bessere Fehlerbehandlung
- ✅ Anpassbare Headers
- ✅ AbortController-Support
- ✅ Credentials-Support für Cross-Origin-Requests

## API

### ApiClient

#### Constructor
```typescript
new ApiClient(config?: ApiClientConfig)
```

#### Methoden
- `get<T>(url: string, config?: RequestConfig): Promise<T>`
- `post<T>(url: string, data?: RequestDto | Record<string, unknown>, config?: RequestConfig): Promise<T>`
- `put<T>(url: string, data?: RequestDto | Record<string, unknown>, config?: RequestConfig): Promise<T>`
- `patch<T>(url: string, data?: RequestDto | Record<string, unknown>, config?: RequestConfig): Promise<T>`
- `delete<T>(url: string, config?: RequestConfig): Promise<T>`
- `setBaseUrl(url: string): void`
- `getBaseUrl(): string`

### Interfaces

```typescript
interface ApiClientConfig {
  baseUrl?: string;
  timeout?: number;
  defaultHeaders?: Record<string, string>;
}

interface RequestConfig {
  timeout?: number;
  headers?: Record<string, string>;
  withCredentials?: boolean;
  baseUrl?: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
```

## RequestDto-Unterstützung

Der ApiClient unterstützt typsichere RequestDto-Typen für bessere TypeScript-Entwicklungserfahrung.

### Verfügbare RequestDto-Typen

```typescript
import type {
  CreateItemRequestDto,
  UpdateItemRequestDto,
  ItemStatRequestDto,
  ItemTranslationRequestDto,
  // ... weitere DTOs
} from '@eoo/api-client';
```

### Typsichere Verwendung

```typescript
import { ApiClient } from '@eoo/api-client';
import type { CreateItemRequestDto } from '@eoo/api-client';

const apiClient = new ApiClient({ baseUrl: 'http://api.eoo.local' });

// Typsicheres POST mit RequestDto
const createItemData: CreateItemRequestDto = {
  name: 'Magic Sword',
  level: 10,
  active: true,
  qualityId: 'rare-quality-id',
  itemClassId: 'weapon-class-id',
  stats: [
    { typeId: 'damage-type-id', value: 25 },
    { typeId: 'durability-type-id', value: 100 }
  ]
};

const newItem = await apiClient.post<Item>('/items', createItemData);
// TypeScript erkennt automatisch die korrekten Eigenschaften von CreateItemRequestDto
```

### Rückwärtskompatibilität

Der ApiClient bleibt rückwärtskompatibel mit `Record<string, unknown>` für benutzerdefinierte DTOs:

```typescript
// Traditionelle Verwendung funktioniert weiterhin
const customData = { customField: 'value' };
await apiClient.post('/custom', customData);
```

### Type Guards

```typescript
import { isRequestDto } from '@eoo/api-client';

// Überprüfung, ob ein Objekt ein gültiges RequestDto ist
if (isRequestDto(data)) {
  // Typsichere Verwendung
  await apiClient.post('/endpoint', data);
}
```

## Migration von der alten Api.ts

```typescript
// Vorher
import api from './utilities/Api';
const data = await api.get('/users');

// Nachher
import { ApiClient } from '@eoo/api-client';
const apiClient = new ApiClient({ baseUrl: 'http://api.eoo.local' });
const data = await apiClient.get('/users');
```

## Entwicklung

```bash
# Abhängigkeiten installieren
yarn install

# Build
yarn build

# Entwicklungsmodus (watch)
yarn dev

# Tests ausführen
yarn test

# Linting
yarn lint
```

## Publishing

```bash
# Version erhöhen
yarn version patch  # oder minor/major

# Build und publish
yarn build
yarn publish
```
