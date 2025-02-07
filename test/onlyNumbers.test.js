const ValidationFunctions = require('../validationFunctions');

describe('ValidationFunctions.onlyNumbers', () => {
  it('should remove all non-numeric characters', () => {
    expect(ValidationFunctions.onlyNumbers('123abc456')).toBe('123456');
    expect(ValidationFunctions.onlyNumbers('abc123def456ghi789')).toBe('123456789');
    expect(ValidationFunctions.onlyNumbers('!@#123$%^456&*()')).toBe('123456');
  });

  it('should return empty string when no numbers present', () => {
    expect(ValidationFunctions.onlyNumbers('abc')).toBe('');
    expect(ValidationFunctions.onlyNumbers('!@#$%^')).toBe('');
    expect(ValidationFunctions.onlyNumbers('')).toBe('');
  });

  it('should handle special characters and spaces', () => {
    expect(ValidationFunctions.onlyNumbers('123 456 789')).toBe('123456789');
    expect(ValidationFunctions.onlyNumbers('1.2.3')).toBe('123');
    expect(ValidationFunctions.onlyNumbers('1-2-3')).toBe('123');
  });

  it('should handle mixed content correctly', () => {
    expect(ValidationFunctions.onlyNumbers('Phone: (123) 456-7890')).toBe('1234567890');
    expect(ValidationFunctions.onlyNumbers('Price: $12.99')).toBe('1299');
    expect(ValidationFunctions.onlyNumbers('ID#123-ABC-456')).toBe('123456');
  });

  it("should only include certain characters", () => {
    expect(ValidationFunctions.includeOnlyTheseCharacters("$drew$%", ["$", "%"])).toBe("$$%");
    expect(ValidationFunctions.includeOnlyTheseCharacters("123abc456", ["1", "2", "3"])).toBe("123");
    expect(ValidationFunctions.includeOnlyTheseCharacters("abc123def456ghi789", ["7", "8", "9"])).toBe("789");
    expect(ValidationFunctions.includeOnlyTheseCharacters("!@#123$%^456&*()", ["4", "5", "6"])).toBe("456");
    expect(ValidationFunctions.includeOnlyTheseCharacters("abc", ["1", "2", "3"])).toBe("");
  });
});
