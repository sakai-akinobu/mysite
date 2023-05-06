import { ReactElement } from "react";
import "../src/styles/global.css";
import "../src/styles/variables.css";

type RootLayoutProps = Readonly<{
  children: ReactElement;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
