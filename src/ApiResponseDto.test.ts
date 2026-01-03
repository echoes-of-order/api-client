import { describe, expect, it } from 'vitest';
import { ApiResponseDto } from './ApiResponseDto';

describe('ApiResponseDto', () => {
  describe('success responses', () => {
    it('should create successful response with data', () => {
      const data = { id: 1, name: 'Test' };
      const response = ApiResponseDto.success(data);

      expect(response.isSuccess()).toBe(true);
      expect(response.isError()).toBe(false);
      expect(response.getData()).toEqual(data);
      expect(response.getData(true)).toEqual(data); // Überladene Version
    });

    it('should handle successful response with null data', () => {
      const response = ApiResponseDto.success(null);

      expect(response.isSuccess()).toBe(true);
      expect(response.getData()).toBeNull();
      expect(response.getData(true)).toBeNull();
    });

    it('should handle successful response with undefined data', () => {
      const response = ApiResponseDto.success(undefined as any);

      expect(response.isSuccess()).toBe(true);
      expect(response.getData()).toBeUndefined();
      expect(response.getData(true)).toBeUndefined();
    });
  });

  describe('error responses', () => {
    it('should create error response with message', () => {
      const message = 'Something went wrong';
      const response = ApiResponseDto.error(message);

      expect(response.isSuccess()).toBe(false);
      expect(response.isError()).toBe(true);
      expect(response.getData()).toBeUndefined();
      expect(response.getError()).toBe(message);
      expect(response.getMessage()).toBe(message);
    });

    it('should throw error when calling getData(true) on error response', () => {
      const response = ApiResponseDto.error('Error occurred');

      expect(() => {
        response.getData(true);
      }).toThrow('Cannot call getData(true) on unsuccessful response');
    });
  });

  describe('method overloading', () => {
    it('should allow getData() to return T | undefined normally', () => {
      const successResponse = ApiResponseDto.success('test');
      const errorResponse = ApiResponseDto.error('error');

      // Normale getData() calls
      expect(successResponse.getData()).toBe('test');
      expect(errorResponse.getData()).toBeUndefined();
    });

    it('should allow getData(true) to guarantee T for successful responses', () => {
      const response = ApiResponseDto.success('test');

      // TypeScript sollte hier T garantieren
      const data: string = response.getData(true);
      expect(data).toBe('test');
    });

    it('should throw when getData(true) is called on error response', () => {
      const response = ApiResponseDto.error('error');

      expect(() => response.getData(true)).toThrow();
    });
  });

  describe('type guard', () => {
    it('should correctly identify success responses with type guard', () => {
      const successResponse = ApiResponseDto.success({ id: 1 });
      const errorResponse = ApiResponseDto.error('error');

      expect(ApiResponseDto.isSuccessResponse(successResponse)).toBe(true);
      expect(ApiResponseDto.isSuccessResponse(errorResponse)).toBe(false);

      if (ApiResponseDto.isSuccessResponse(successResponse)) {
        // Nach isSuccess() check können wir getData(true) verwenden
        const data = successResponse.getData(true);
        expect(data.id).toBe(1);
      }
    });

    it('should narrow types correctly with type guard', () => {
      const responses: ApiResponseDto<string>[] = [
        ApiResponseDto.success('success'),
        ApiResponseDto.error('error')
      ];

      const successResponses = responses.filter(ApiResponseDto.isSuccessResponse);

      expect(successResponses).toHaveLength(1);
      expect(successResponses[0].getData()).toBe('success');

      // Nach isSuccess() check können wir getData(true) verwenden
      const data = successResponses[0].getData(true);
      expect(data).toBe('success');
    });
  });

  describe('generic types', () => {
    it('should work with different generic types', () => {
      const stringResponse = ApiResponseDto.success('string data');
      const numberResponse = ApiResponseDto.success(42);
      const objectResponse = ApiResponseDto.success({ key: 'value' });

      expect(stringResponse.getData(true)).toBe('string data');
      expect(numberResponse.getData(true)).toBe(42);
      expect(objectResponse.getData(true)).toEqual({ key: 'value' });
    });

    it('should maintain type safety with error responses', () => {
      const errorResponse = ApiResponseDto.error<number>('error');

      expect(errorResponse.getData()).toBeUndefined();
      expect(() => errorResponse.getData(true)).toThrow();
    });
  });

  describe('message handling', () => {
    it('should handle messages in success responses', () => {
      // Success responses können auch eine message haben (unüblich aber möglich)
      const response = new ApiResponseDto(true, 'data', 'Optional message');

      expect(response.isSuccess()).toBe(true);
      expect(response.getData()).toBe('data');
      expect(response.getMessage()).toBe('Optional message');
    });

    it('should handle messages in error responses', () => {
      const response = ApiResponseDto.error('Error message');

      expect(response.isError()).toBe(true);
      expect(response.getError()).toBe('Error message');
      expect(response.getMessage()).toBe('Error message');
    });
  });
});