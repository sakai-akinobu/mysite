import { ReactElement } from "react";

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
