"use client";

import { CacheProvider } from "@emotion/react";
import { useEmotionCache, MantineProvider } from "@mantine/core";
import { useServerInsertedHTML } from "next/navigation";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          colors: {
            brand: [
              "#F8F8FD",
              "#D1D6F6",
              "#ACB5F2",
              "#8694F2",
              "#6074F6",
              "#3A54FD",
              "#2541F3",
              "#1833E4",
              "#2134AB",
              "#243394",
            ],
            dark: [
              "#c1c1c3",
              "#a2a2aa",
              "#96969d",
              "#6b6b72",
              "#37383c",
              "#282930",
              "#282930", /* #222328 */
              "#24262F",
              "#141417",
              "#111215",
            ],
          },
          primaryColor: "brand",
          primaryShade: 5,
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
