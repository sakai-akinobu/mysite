import App from "../App";
import Head from "../Script";

const Html: React.FC = () => {
  return (
    <>
      <html lang="en">
        <Head />
        <body>
          <div id="app">
            <App />
          </div>
        </body>
      </html>
    </>
  );
};

export default Html;
