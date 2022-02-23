function keys(length, indicator, multi = 10, negative = false) {
  const obj = {};

  for (let i = 0; i < length; i++) {
    obj[i * multi] = `${i * multi}${indicator}`;
    if (negative) obj[`-${i * multi}`] = `-${i * multi}${indicator}`;
  }

  return obj;
}

module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        ...keys(40, "px", 50),
        full: "100%",
        screen: "100vw",
        unset: "unset",
      },
      maxWidth: {
        ...keys(40, "px", 50),
        full: "100%",
        screen: "100vw",
        unset: "unset",
      },
      minHeight: {
        ...keys(40, "px", 50),
        full: "100%",
        screen: "100vh",
        unset: "unset",
      },
      maxHeight: {
        ...keys(40, "px", 50),
        full: "100%",
        screen: "100vh",
        unset: "unset",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
