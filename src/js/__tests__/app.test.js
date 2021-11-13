import { Team } from '../app';
import Character from '../Character';

test('Добавление персонажа в команду', () => {
  const team = new Team();
  const pers = new Character('Some Name', 'Daemon');
  team.add(pers);
  expect(team.members.has(pers)).toBeTruthy();
});

test('Массовое добавление в команду персонажей', () => {
  const team = new Team();
  const pers = new Character('Some Name', 'Daemon');
  const pers2 = new Character('Some Name2', 'Daemon');

  team.addAll(pers, pers2);
  expect(team.members.has(pers)).toBeTruthy();
  expect(team.members.has(pers2)).toBeTruthy();
  expect(team.members.size).toBe(2);
});

test('Ошибка при добавлении существующего персонажа', () => {
  const team = new Team();
  const pers = new Character('Some Name', 'Daemon');
  team.add(pers);
  const addAlreadyExist = () => {
    team.add(pers);
  };

  expect(addAlreadyExist).toThrowError(new Error('This object already exists'));
});

test('Представление команды персонажей массивом', () => {
  const team = new Team();
  const pers1 = new Character('Some name1', 'Daemon');
  const pers2 = new Character('Some name2', 'Daemon');
  const pers3 = new Character('Some name3', 'Daemon');
  team.addAll(pers1, pers2, pers3);
  expect(Array.isArray(team.toArray())).toBeTruthy();
});
