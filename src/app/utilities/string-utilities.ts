export function limitWithEllipsis(str: string, limit: number): string {
  if (str.length > limit) {
    return str.slice(0, limit - 1) + '…';
  } else {
    return str;
  }
}

export function replaceAll(
  target: string,
  search: string,
  replacement: string): string {
  return target.split(search).join(replacement);
}
