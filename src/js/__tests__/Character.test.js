import Character from '../Character';

test('Проверка создания персонажа', () => {
  const character = new Character('Some Name', 'Daemon');

  expect({
    health: 100, level: 1, name: 'Some Name', type: 'Daemon',
  }).toEqual(character);
});
