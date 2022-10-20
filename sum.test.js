const sum = require("./sum");

test("이더하기이는 사다", () => {
  expect(sum(2, 2)).toBe("4");
});

test("이더하기이는 사다", () => {
  const data = { one: 1 };
  expect(data).toStrictEqual({ one: 1 });
});

test("null", () => {
  const n = 0;
  //   expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
});

test("소수점 숫자", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

test("정규식으로 문자열 보기", () => {
  expect("Christoph").toMatch("/stop/");
});
const List = ["a", "b", "c"];
test("리스트 안의 문자 있냐없냐", () => {
  expect(List).toContain("d");
});
