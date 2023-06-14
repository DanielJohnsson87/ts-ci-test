import foo from "./jsmodule";

function test(s: string): string {
  const a = foo();
  return a;
}

function thisShouldFail(value: number) {
  return value.toLocaleLowerCase();
}

export { test };
