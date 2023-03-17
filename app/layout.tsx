import RootStyleRegistry from "./emotion";
import { HeaderMenu } from "./header";

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
      <body>
        <RootStyleRegistry>
          <HeaderMenu
            links={[
              {
                link: "/features",
                label: "Features",
              },
              {
                link: "#1",
                label: "Learn",
                links: [
                  {
                    link: "/docs",
                    label: "Documentation",
                  },
                  {
                    link: "/resources",
                    label: "Resources",
                  },
                  {
                    link: "/community",
                    label: "Community",
                  },
                  {
                    link: "/blog",
                    label: "Blog",
                  },
                ],
              },
              {
                link: "/about",
                label: "About",
              },
              {
                link: "/pricing",
                label: "Pricing",
              },
              {
                link: "#2",
                label: "Support",
                links: [
                  {
                    link: "/faq",
                    label: "FAQ",
                  },
                  {
                    link: "/demo",
                    label: "Book a demo",
                  },
                  {
                    link: "/forums",
                    label: "Forums",
                  },
                ],
              },
            ]}
          ></HeaderMenu>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
