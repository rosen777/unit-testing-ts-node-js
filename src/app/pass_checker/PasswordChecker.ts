export enum PasswordErrors {
  SHORT = "Password is too short!",
  NO_UPPER_CASE = "Upper case letter required!",
  NO_LOWER_CASE = "Lower case letter required!",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[] | "Success";
}

class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm;
    if (password.match(regex)) {
      return {
        valid: reasons.length > 0 ? false : true,
        reasons: reasons,
      };
    }

    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
    if (password === password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
    if (password === password.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }

    return {
      valid: false,
      reasons: reasons,
    };
  }
}

export { PasswordChecker };
