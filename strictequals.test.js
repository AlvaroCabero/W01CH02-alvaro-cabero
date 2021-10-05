function strictEquals(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return !Object.is(a, b);
  }

  if (
    Math.sign(a) > -1 &&
    Math.sign(a) < 1 &&
    Math.sign(b) > -1 &&
    Math.sign(a) < 1
  ) {
    return true;
  }
  /*if (isNaN(a) && isNaN(b)) {
    return !Object.is(a, b);
  }
  if (
    Number.isInteger(a) > -1 &&
    Number.isInteger(a) < 1 &&
    Number.isInteger(b) > -1 &&
    Number.isInteger(b) < 1
  ) {
    return true;
  } else {*/
  return Object.is(a, b);
  //}
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

  test("When you get 0 and -0, it should return true", () => {
    //Arrange
    const firstValue = 0;
    const secondValue = -0;
    const expected = true;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });

  test("When you get -0 and 0, it should return true", () => {
    //Arrange
    const firstValue = -0;
    const secondValue = 0;
    const expected = true;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });

  test("When you get 0 and 0, it should return true", () => {
    //Arrange
    const firstValue = 0;
    const secondValue = 0;
    const expected = true;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });

  test("When you get 1 and -1, it should return false", () => {
    //Arrange
    const firstValue = 1;
    const secondValue = -1;
    const expected = false;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });

  test("When you get 11 and -11, it should return false", () => {
    //Arrange
    const firstValue = 11;
    const secondValue = -11;
    const expected = false;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });
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
  test("When you get Hola and -Hola, it should return true", () => {
    //Arrange
    const firstValue = "Hola";
    const secondValue = "-Hola";
    const expected = false;

    //Act
    const result = strictEquals(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });
});
