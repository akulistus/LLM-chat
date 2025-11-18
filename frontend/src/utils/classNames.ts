export const classNames = (cls: string, optional: string[] = []) => {
  return [cls, ...optional].join(" ");
}