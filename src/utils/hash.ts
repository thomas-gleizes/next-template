import createHash from "create-hash";

export const sha512 = (stringToHash: string) => {
  const hash = createHash("sha512");

  hash.update(stringToHash + process.env.SECRET_SEED);
  const hashedString: string = hash.digest().toString("hex");
  hash.end();

  return hashedString;
};
