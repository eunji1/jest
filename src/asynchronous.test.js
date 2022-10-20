// 콜백
const getName = (callback) => {
  const name = "Mike";
  setTimeout(() => {
    callback(name);
  }, 3000);
};
// done을 실행시켜야 비동기적으로 callback을 실행시킬 수 있다.
test("마이크를 받아오자", (done) => {
  callback = (name) => {
    expect(name).toBe("Mik");
    done();
  };
  getName(callback);
});
// 프로미스
const getAge = () => {
  const age = 30;
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(age);
    }, 2000);
  });
};
// async await
test("2초후 30", async () => {
  console.log(expect(getAge()).resolves.toBe(30));
  //   await expect(getAge()).resolves.toBe(30);
});
