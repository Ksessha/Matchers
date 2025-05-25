const sortCharactersByHealth = require('../sortCharactersByHealth');

describe('Sort Characters By Health', () => {
  it('Sorts an array of characters by descending health', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expectedOutput = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortCharactersByHealth(input);

    expect(result).toEqual(expectedOutput);
  });

  it('Handles empty arrays gracefully', () => {
    const input = [];
    const expectedOutput = [];

    const result = sortCharactersByHealth(input);
    expect(result).toEqual(expectedOutput);
  });

  it('Does not modify the original array', () => {
    const input = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 30 },
    ];

    const originalInputCopy = JSON.parse(JSON.stringify(input));

    sortCharactersByHealth(input);

    expect(input).toEqual(originalInputCopy); 
  });
});