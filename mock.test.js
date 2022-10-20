// mock

const mockFn = jest.fn();

mockFn();
mockFn(1);

// 함수가 몇번 호출되었는가 함수가 적용될 때 들어간 인수

test("dd", () => {
  console.log(mockFn.mock.calls);
  expect("dd").toBe("dd");
});
test("함수는 2번 호출됩니다.", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});
test("2번째로 호출된 함수에 전달된 인수는 1이다.", () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});
