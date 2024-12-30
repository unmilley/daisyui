export const kebabToCamel = (kebabStr: string): string => {
  return kebabStr
    .split("-")
    .map((word, index) => {
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};

export const camelToKebab = (camelStr: string): string => {
  return camelStr
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([0-9]+)/g, "-$1")
    .toLowerCase();
};
