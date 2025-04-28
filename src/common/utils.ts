export function stringify(value: any) {
  return JSON.stringify(value, (_k, v) =>
    typeof v === 'bigint' ? v.toString() : v,
  );
}
