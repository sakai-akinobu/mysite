import * as React from "react";

const Head: React.FC = () => {
  return (
    <head>
      <title>Akinobu Sakai | Front End Developer</title>
      <meta name="description" content="Front-end developer working in Tokyo."></meta>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <meta property="og:title" content="Akinobu Sakai | Front End Developer" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.akinobusakai.com" />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content="Akinobu Sakai | Front End Developer" />
      <meta property="og:description" content="Front-end developer working in Tokyo." />
      <meta name="twitter:card" content="summary"></meta>
      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
      <link rel="stylesheet" href="/dist/bundle.css"></link>
      <script src="/dist/bundle.js" defer></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-7106314-14"></script>
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-7106314-14');
      `}}>
      </script>
      <script src="https://unpkg.com/scrollreveal@4.0.5/dist/scrollreveal.js"></script>
    </head>
  );
}

export default Head;
