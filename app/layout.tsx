import RootStyleRegistry from "./emotion";
import { HeaderMenu } from "./header";
import localFont from "next/font/local";

export const metadata = {
  title: "Manas Nagelia - Portfolio",
  description: "A showcase of Manas Nagelia's projects and portfolios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/images/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#3a54fd"
        ></link>
        <meta name="msapplication-TileColor" content="#24262f"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body>
        <RootStyleRegistry>
          <HeaderMenu
            links={[
              {
                link: "/portfolio",
                label: "Portfolio",
              },
              {
                link: "#skills",
                label: "Skills",
              },
              {
                link: "#blogs",
                label: "Blogs",
              },
              {
                link: "/invest",
                label: "Investor",
              },
            ]}
          />
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
