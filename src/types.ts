import type { DataType, Properties } from "csstype";
import type { Theme } from "daisyui/src";

const _colorKeys = [
  "primary",
  "primaryContent",
  "secondary",
  "secondaryContent",
  "accent",
  "accentContent",
  "neutral",
  "neutralContent",
  "base100",
  "base200",
  "base300",
  "baseContent",
  "info",
  "infoContent",
  "success",
  "successContent",
  "warning",
  "warningContent",
  "error",
  "errorContent",
] as const;

const _variableDaisyKeys = [
  "roundedBox",
  "roundedBtn",
  "roundedBadge",
  "animationBtn",
  "animationInput",
  "btnFocusScale",
  "borderBtn",
  "tabBorder",
  "tabRadius",
] as const;

type HexColor = `#${string}`;
type RgbColor = `rgb(${number},${number},${number})`;
type HslColor = `hsl(${number},${number}%,${number}%)`;
type HclColor = `hcl(${number},${number}%,${number}%)`;
type OklchColor =
  | `oklch(${number}%,${number},${number})`
  | `oklch(${number},${number},${number})`;

type NamedColor =
  | HexColor
  | RgbColor
  | HslColor
  | HclColor
  | OklchColor
  | DataType.NamedColor;

type Colors = { [K in (typeof _colorKeys)[number]]?: NamedColor };
type AdditionalClasses = { [className: `.${string}`]: Properties };
type Variables = { [V in (typeof _variableDaisyKeys)[number]]?: string };
type FontFamily = string;
type ColorScheme = "dark" | "light";

type Options = {
  extends?: Theme | Theme[];
  variables?: Variables;
  colors?: Colors;
  fontFamily?: FontFamily;
  customClasses?: AdditionalClasses;
  colorScheme?: ColorScheme;
};

export type {
  AdditionalClasses,
  Colors,
  ColorScheme,
  FontFamily,
  Options,
  Variables,
};
