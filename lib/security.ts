import bcrypt from "bcrypt";

class Security {
  private static seed: string = process.env.NODE_PASS_SEED;
  private static salt: number = 10;

  static hash(str: string): Promise<string> {
    return bcrypt.hash(this.seed + str, this.salt);
  }

  static compare(str: string, encrypted: string): Promise<boolean> {
    return bcrypt.compare(this.seed + str, encrypted);
  }
}

export default Security;
