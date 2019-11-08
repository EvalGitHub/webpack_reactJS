import {sum, forEach} from './sum';

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);
expect(mockCallback.mock.calls.length).toBe(2);


beforeAll(() => {
  console.log('开始测试');
});
beforeEach(() => {
  console.log('每一个测试开始了');
});
afterEach(() => console.log('每一个测试结束'));
afterAll(() => console.log('所有测试结束'));

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
})

