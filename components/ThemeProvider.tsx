"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { PropsWithChildren } from "react";

type Props = {};

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps & PropsWithChildren) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
