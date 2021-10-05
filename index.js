function strictEquals(a, b) {
  return Object.is(a, b);
}

describe("Function strictEquals", () => {
  test("when you get 1 and 1, it swhould return true", () => {
    //Arrange
    const firstValue = 1;
    const secondValue = 1;
    const expected = true;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });
});
