export const add = (a: number, b: number) => {
  return a + b;
};

// 앞부분 string은 테스트 제목이며, 실패시에 어디서 실패했는지 보여주는 부분이 됩니다.
it("2와 3이 주어졌을 때, 5가 나와야 한다.", () => {
  // 테스트 할 내용 -> 문제도 정답도 본인이 만들어야 합니다.
  const result = add(2, 3);
  expect(result).toBe(5);
});
