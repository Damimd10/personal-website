import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";
import State from "../src/context/state";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <State>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/basic.css" />
        <link rel="stylesheet" href="css/layout.css" />
        <link rel="stylesheet" href="css/blogs.css" />
        <link rel="stylesheet" href="css/ionicons.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/gradient.css" />

        <title>Dra. Luciana Correa Tellechea - Abogada</title>
        <meta name="description" content="Dra. Luciana Correa Tellechea - Abogada de Montevideo, Uruguay. Servicios legales especializados en derecho penal, derecho empresarial y más." />
        <meta name="keywords" content="abogada, Montevideo, Uruguay, derecho penal, derecho empresarial, servicios legales, Luciana Correa Tellechea" />
        <meta name="author" content="Dra. Luciana Correa Tellechea" />
        <link rel="shortcut icon" href="images/favicons/favicon.ico" />
      </Head>
      <PreLoader />
      <Component {...pageProps} />
    </State>
  );
}

export default MyApp;
