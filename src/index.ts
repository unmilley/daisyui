import type { CustomTheme, Theme } from "daisyui";
import themes from "daisyui/src/theming/themes.js";
import { camelToKebab } from "./_utils";
import type { Options } from "./types";

const toKebabCaseEntries = (
  obj: Record<string, any>,
  prefix: string = "",
): any => {
  return Object.entries(obj).map(([key, val]) => {
    if (typeof val === "string") return [prefix + camelToKebab(key), val];
    return [key, Object.fromEntries(toKebabCaseEntries(val))];
  });
};

export const defineTheme = (opt: Options): CustomTheme => {
  const basedOn = opt.extends
    ? typeof opt.extends === "string" && !Array.isArray(opt.extends)
      ? themes[opt.extends]
      : Object.values(opt.extends as Theme[]).reduce(
          (acc, ext) => ({ ...acc, ...themes[ext] }),
          {},
        )
    : {};
  const variables = Object.fromEntries(
    toKebabCaseEntries(opt.variables ?? {}, "--"),
  );
  const customClasses = Object.fromEntries(
    toKebabCaseEntries(opt.customClasses ?? {}),
  );
  const colors = Object.fromEntries(toKebabCaseEntries(opt.colors ?? {}));
  const fontFamily: object = opt.fontFamily
    ? { "font-family": opt.fontFamily }
    : {};
  const colorScheme: object = opt.colorScheme
    ? { "color-scheme": opt.colorScheme }
    : {};

  return {
    ...basedOn,
    ...variables,
    ...customClasses,
    ...colors,
    ...fontFamily,
    ...colorScheme,
  };
};

export { type CustomTheme, type Theme } from "daisyui";
export {
  type AdditionalClasses,
  type Colors,
  type ColorScheme,
  type FontFamily,
  type Options,
  type Variables,
} from "./types";
