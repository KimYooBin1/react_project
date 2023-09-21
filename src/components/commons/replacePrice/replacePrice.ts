export const replacePrice = (str: string): string => {
  str = String(str);

  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};
