import { theme } from "@chakra-ui/core";

export const baseTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    sans: `'Raleway', "Source Sans Pro", sans-serif`
  },
  radii: {
    ...theme.radii,
    xl: ".75rem"
  },
  borders: {
    ...theme.borders,
    "5px": "5px solid",
    "6px": "6px solid",
    gray: {
      "1px": `1px solid ${theme.colors.gray[300]}`,
      "2px": `2px solid ${theme.colors.gray[300]}`,
      "3px": `3px solid ${theme.colors.gray[300]}`
    }
  }
} as const;
