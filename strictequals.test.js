function strictEquals(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return !Object.is(a, b);
  }
  if (!isNaN(a) && !isNaN(b)) {
    return Object.is(a, b);
  }
  if (a == -0 && b == 0) {
    return;
  } else {
    return Object.is(a, b);
  }
}

describe("Function strictEquals", () => {
  test("When you get 1 and 1, it should return true", () => {
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

describe("Function strictEquals", () => {
  test("When you get 1 and '1', it should return false", () => {
    //Arrange
    const firstValue = 1;
    const secondValue = "1";
    const expected = false;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });
});

describe("Function strictEquals", () => {
  test("When you get true and false, it should return false", () => {
    //Arrange
    const firstValue = true;
    const secondValue = false;
    const expected = false;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });
});

describe("Function strictEquals", () => {
  test("When you get false and false, it should return true", () => {
    //Arrange
    const firstValue = false;
    const secondValue = false;
    const expected = true;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });
});

describe("Function strictEquals", () => {
  test("When you get Water and oil, it should return false", () => {
    //Arrange
    const firstValue = "Water";
    const secondValue = "oil";
    const expected = false;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });
});

describe("Function strictEquals", () => {
  test("When you get NaN and NaN, it should return false", () => {
    //Arrange
    const firstValue = NaN;
    const secondValue = NaN;
    const expected = false;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });
});

describe("Function strictEquals", () => {
  test("When you get Hola and Hola, it should return true", () => {
    //Arrange
    const firstValue = "Hola";
    const secondValue = "Hola";
    const expected = true;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });
});
