import { describe, expect, it } from 'vitest';
import { ApiResponseDto } from './ApiResponseDto';

describe('ApiResponseDto', () => {
  describe('Konstruktor', () => {
    it('should create successful response with data', () => {
      const data = { id: 1, name: 'Test' };
      const response = new ApiResponseDto(true, data);

      expect(response.isSuccess()).toBe(true);
      expect(response.isError()).toBe(false);
      expect(response.getData()).toEqual(data);
      expect(response.getMessage()).toBeUndefined();
    });

    it('should create error response with message', () => {
      const message = 'Not found';
      const response = new ApiResponseDto(false, undefined, message);

      expect(response.isSuccess()).toBe(false);
      expect(response.isError()).toBe(true);
      expect(response.getMessage()).toBe(message);
      expect(response.getError()).toBe(message);
    });

    it('should create response without data or message', () => {
      const response = new ApiResponseDto(true);

      expect(response.isSuccess()).toBe(true);
      expect(response.getData()).toBeUndefined();
      expect(response.getMessage()).toBeUndefined();
    });
  });

  describe('Factory-Methoden', () => {
    describe('success()', () => {
      it('should create successful response with data', () => {
        const data = { user: 'test', age: 25 };
        const response = ApiResponseDto.success(data);

        expect(response).toBeInstanceOf(ApiResponseDto);
        expect(response.isSuccess()).toBe(true);
        expect(response.getData()).toEqual(data);
        expect(response.getMessage()).toBeUndefined();
      });

      it('should create successful response with typed data', () => {
        interface User {
          id: number;
          name: string;
        }

        const user: User = { id: 1, name: 'John' };
        const response = ApiResponseDto.success<User>(user);

        expect(response.getData()).toEqual(user);
        // TypeScript sollte das korrekt typisieren
        const data: User = response.getData();
        expect(data.id).toBe(1);
        expect(data.name).toBe('John');
      });
    });

    describe('error()', () => {
      it('should create error response with message', () => {
        const message = 'Validation failed';
        const response = ApiResponseDto.error(message);

        expect(response).toBeInstanceOf(ApiResponseDto);
        expect(response.isError()).toBe(true);
        expect(response.getError()).toBe(message);
        expect(response.getMessage()).toBe(message);
      });

      it('should create error response with generic type', () => {
        const response = ApiResponseDto.error<{ id: number }>('User not found');

        expect(response.isError()).toBe(true);
        expect(response.getError()).toBe('User not found');
        // Sollte trotzdem den generischen Typ haben
        expect(() => response.getData()).toThrow();
      });
    });
  });

  describe('Methoden-basierte API', () => {
    describe('isSuccess() und isError()', () => {
      it('should return correct success state', () => {
        const successResponse = new ApiResponseDto(true);
        const errorResponse = new ApiResponseDto(false);

        expect(successResponse.isSuccess()).toBe(true);
        expect(successResponse.isError()).toBe(false);

        expect(errorResponse.isSuccess()).toBe(false);
        expect(errorResponse.isError()).toBe(true);
      });
    });

    describe('getData()', () => {
      it('should return data for successful response', () => {
        const data = { result: 'success' };
        const response = new ApiResponseDto(true, data);

        expect(response.getData()).toEqual(data);
      });

      it('should throw error when accessing data on unsuccessful response', () => {
        const response = new ApiResponseDto(false, undefined, 'Error occurred');

        expect(() => response.getData()).toThrow('Cannot call getData() on unsuccessful response');
      });

      it('should handle undefined data gracefully', () => {
        const response = new ApiResponseDto(true, undefined);

        expect(response.getData()).toBeUndefined();
      });
    });

    describe('getMessage() und getError()', () => {
      it('should return message when provided', () => {
        const message = 'Operation completed';
        const response = new ApiResponseDto(true, { status: 'ok' }, message);

        expect(response.getMessage()).toBe(message);
        expect(response.getError()).toBe(message); // getError ist Alias
      });

      it('should return undefined when no message provided', () => {
        const response = new ApiResponseDto(true, { data: 'test' });

        expect(response.getMessage()).toBeUndefined();
        expect(response.getError()).toBeUndefined();
      });

      it('should return error message for error responses', () => {
        const errorMessage = 'Resource not found';
        const response = new ApiResponseDto(false, undefined, errorMessage);

        expect(response.getMessage()).toBe(errorMessage);
        expect(response.getError()).toBe(errorMessage);
      });
    });
  });

  describe('Typsicherheit', () => {
    it('should maintain generic type information', () => {
      interface UserData {
        id: number;
        email: string;
      }

      const userData: UserData = { id: 123, email: 'test@example.com' };
      const response = new ApiResponseDto(true, userData);

      // TypeScript sollte das korrekt typisieren
      const retrievedData: UserData = response.getData();

      expect(retrievedData.id).toBe(123);
      expect(retrievedData.email).toBe('test@example.com');
    });

    it('should work with primitive types', () => {
      const stringResponse = ApiResponseDto.success('Hello World');
      const numberResponse = ApiResponseDto.success(42);
      const booleanResponse = ApiResponseDto.success(true);

      expect(stringResponse.getData()).toBe('Hello World');
      expect(numberResponse.getData()).toBe(42);
      expect(booleanResponse.getData()).toBe(true);
    });

    it('should work with array types', () => {
      const arrayData = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const response = ApiResponseDto.success(arrayData);

      const retrievedArray = response.getData();
      expect(Array.isArray(retrievedArray)).toBe(true);
      expect(retrievedArray).toHaveLength(3);
      expect(retrievedArray[0].id).toBe(1);
    });
  });

  describe('Fehlerbehandlung', () => {
    it('should prevent data access on error responses', () => {
      const errorResponse = ApiResponseDto.error('Access denied');

      expect(errorResponse.isError()).toBe(true);
      expect(() => errorResponse.getData()).toThrow();
      expect(errorResponse.getError()).toBe('Access denied');
    });

    it('should handle edge cases gracefully', () => {
      // Response mit null data aber erfolgreich
      const responseWithNull = new ApiResponseDto(true, null);
      expect(responseWithNull.getData()).toBeNull();

      // Response mit undefined message
      const responseWithoutMessage = new ApiResponseDto(false, undefined, undefined);
      expect(responseWithoutMessage.getMessage()).toBeUndefined();
      expect(responseWithoutMessage.getError()).toBeUndefined();
    });
  });

  describe('Immutability', () => {
    it('should prevent modification of internal state', () => {
      const originalData = { count: 5, items: ['a', 'b'] };
      const response = new ApiResponseDto(true, originalData);

      // Daten sollten nicht modifizierbar sein
      const retrievedData = response.getData();
      expect(retrievedData).toEqual(originalData);

      // Änderungen an retrieved data sollten nicht die interne state beeinflussen
      if (retrievedData && typeof retrievedData === 'object') {
        (retrievedData as { count: number }).count = 10;
      }

      // Interne state sollte unverändert bleiben
      expect(response.getData()).toEqual(originalData);
    });
  });

  describe('Integration mit ApiClient', () => {
    it('should be compatible with ApiClient return types', () => {
      // Simuliert typische ApiClient-Nutzung
      const mockApiResponse = ApiResponseDto.success({
        userId: 123,
        username: 'testuser',
        roles: ['user', 'admin']
      });

      expect(mockApiResponse.isSuccess()).toBe(true);

      const userData = mockApiResponse.getData();
      expect(userData.userId).toBe(123);
      expect(userData.username).toBe('testuser');
      expect(userData.roles).toContain('admin');
    });

    it('should handle error responses from API calls', () => {
      const errorResponse = ApiResponseDto.error('Invalid credentials');

      expect(errorResponse.isError()).toBe(true);
      expect(errorResponse.getError()).toBe('Invalid credentials');
      expect(() => errorResponse.getData()).toThrow();
    });
  });
});