// 테스트 전 후 작업

let num = 10;

// afterEach(() => {
//   num = 0;
// });

beforeEach(() => {
  num = 0;
});

test("0더하기 1은 1이야", () => {
  num = sum(num, 1);
  expect(num).toBe(1);
});
test("0더하기 2은 2이야", () => {
  num = sum(num, 2);
  expect(num).toBe(2);
});
test("0더하기 3은 3이야", () => {
  num = sum(num, 3);
  expect(num).toBe(3);
});
test.skip("0더하기 4은 4이야", () => {
  num = sum(num, 4);
  expect(num).toBe(4);
  num = 10;
});

// skip을 사용하면 skip 할 수 있다.
