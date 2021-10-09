export function optionalParam<TParam>(
  value: any,
  fallback: TParam,
  options: readonly TParam[]
): TParam {
  if (!value) return fallback;
  if (options.includes(value)) return value as TParam;
  throw new Error("invalid parameter value");
}

export function numericParam(value: string | undefined, fallback: number) {
  if (!value) return fallback;
  if (/^\d+$/.test(value)) return parseInt(value);
  throw new Error("invalid parameter number");
}
