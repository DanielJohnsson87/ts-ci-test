import foo from "./jsmodule";

function test(s: string): string {
  const a = foo();
  return a;
}

export { test };
