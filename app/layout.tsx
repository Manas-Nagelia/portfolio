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
                link: "#feature",
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
          />
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
