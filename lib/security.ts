import bcrypt from "bcrypt";

class Security {
  static seed: string = "";
  static salt: number = 10;

  static hash(string): Promise<string> {
    return bcrypt.hash(string, this.salt);
  }

  static compare(string, hash): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      if (await bcrypt.compare(string, hash)) resolve(true);
      else reject();
    });
  }
}

export default Security;
