import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  test("Password with less than 8 chars is invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  test("Password with more than 8 chars is ok", () => {
    const actual = sut.checkPassword("12345678Aa");
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  test("Password with no upper case letter is invalid", () => {
    const actual = sut.checkPassword("1234abcd");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  test("Password with an upper case is valid", () => {
    const actual = sut.checkPassword("1234aBCD");
    expect(actual.valid).toBe(true);
    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
  });

  test("Password with no lower case is invalid", () => {
    const actual = sut.checkPassword("1234ABCD");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  test("Password with lower case letter is valid", () => {
    const actual = sut.checkPassword("Amanda1234");
    expect(actual.valid).toBe(true);
    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
  });

  test("Complex password is valid", () => {
    const actual = sut.checkAdminPassword("1234avcD");
    expect(actual.reasons).toHaveLength(0);
    expect(actual.valid).toBe(true);
  });

  test("Admin password with no number is invalid", () => {
    const actual = sut.checkAdminPassword("absasasadsdA");
    expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    expect(actual.valid).toBe(false);
  });

  test("Admin password with number is valid", () => {
    const actual = sut.checkAdminPassword("1234abcD");
    expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
    expect(actual.valid).toBe(true);
  });
});
