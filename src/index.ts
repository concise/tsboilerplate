function foobar(
  arg0: number,
  arg1: number,
  arg2: number,
  arg3: number,
  arg4: number
): number {
  return arg0 + arg1 + arg2 + arg3 + arg4;
}

function thisIsJustOneFunctionWhoseNameIsSuperLong(someParam: number): string {
  return '' + someParam;
}

export const hello = 'world' + foobar(5, 6, 7, 8, 9);

export const happyWorld = thisIsJustOneFunctionWhoseNameIsSuperLong(
  943537587788699
);
