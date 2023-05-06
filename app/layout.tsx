import { ReactElement } from "react";
import "../src/styles/global.css";
import "../src/styles/variables.css";

const title = "Akinobu Sakai | Front End Developer";
const description = "Front-end developer working in Tokyo.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    type: "website",
    url: "https://www.akinobusakai.com",
    siteName: title,
    description,
  },
  twitter: {
    card: "summary",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactElement;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
        ></link>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
