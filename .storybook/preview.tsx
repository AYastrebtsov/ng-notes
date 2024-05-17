import type { Preview } from "@storybook/react";

import { withThemeProvider } from "storybook-addon-theme-provider";
import { initialize, mswLoader } from "msw-storybook-addon";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React, { ReactNode } from "react";
import { PrimeReactProvider } from "primereact/api";
import { twMerge } from "tailwind-merge";
import { componentsTheme } from "../app/componentsTheme";

import "../app/tailwind.css";
import "../app/fonts.css";

const queryClient = new QueryClient();

initialize();

export const Provider = ({ children }: { children?: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider
        value={{
          unstyled: true,
          pt: componentsTheme,
          ripple: true,
          ptOptions: {
            mergeSections: true,
            mergeProps: true,
            classNameMergeFunction: twMerge,
          },
        }}
      >
        {children}
      </PrimeReactProvider>
    </QueryClientProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider(Provider)],
  loaders: [mswLoader],
};

export default preview;
