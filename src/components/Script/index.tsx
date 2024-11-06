import NextScript from "next/script";

const scriptForGA = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-7106314-14');
`;

export const Script: React.FC = () => {
  return (
    <>
      <NextScript
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-7106314-14"
      ></NextScript>
      <NextScript
        dangerouslySetInnerHTML={{
          __html: scriptForGA,
        }}
      ></NextScript>
    </>
  );
};
