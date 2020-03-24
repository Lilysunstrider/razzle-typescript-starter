export const runtimeConfig =
  typeof window !== "undefined" ? window.env : process.env;
