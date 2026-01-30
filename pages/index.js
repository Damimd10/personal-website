import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Services from "../src/components/Services";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import Quote from "../src/components/sections/Quote";
import ServicesSection from "../src/components/sections/Services";
import { SkillsLawyer } from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
          <strong>¡Hola! Soy la Dra. Luciana Correa Tellechea.</strong><br>
Abogada de Montevideo, Uruguay. Estoy licenciada por el estado en el que ejerzo para asesorar y representar a clientes en asuntos legales, incluyendo derechos de los animales.
</p>`;

const serviceList = [
  {
    icon: "fa fa-balance-scale",
    title: "Derecho Penal",
    desc: "Regula la conducta percibida como amenazante, dañina o que ponga en peligro la propiedad.",
  },
  {
    icon: "fa fa-bank",
    title: "Derecho Empresarial",
    desc: "Gobierna los negocios y el comercio y a menudo se considera una rama del derecho civil.",
  },
  {
    icon: "fa fa-gavel",
    title: "Servicios Legales",
    desc: "Proporciona una amplia gama de servicios legales en todas las regiones de Londres.",
  },
  {
    icon: "fa fa-money",
    title: "Finanzas",
    desc: "Proporciona una amplia gama de servicios financieros en todas las regiones de Londres.",
  },
];

const headerMenus = [
  { title: "Sobre Mí", link: "about", icon: "icon ion-person" },
  { title: "Servicios", link: "services", icon: "icon ion-android-list" },
  { title: "Charlas", link: "blog", icon: "icon ion-ios-paper" },
  { title: "Contacto", link: "contacts", icon: "icon ion-paper-airplane" },
];

const Index6 = () => {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-6-colors.css" />
      </Head>
      <Header menus={headerMenus} noSideBarBtn={true} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/luciana.jpeg)" }}
          />
          {/* profile titles */}
          <div className="title">Dra. Luciana Correa Tellechea</div>
          <div className="subtitle">Abogada</div>
          {/* profile socials */}
          <div className="social">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <span className="fa fa-instagram" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://wa.me/59898632366">
              <span className="fa fa-whatsapp" />
            </a>
            <a target="_blank" rel="noreferrer" href="mailto:Lucianacorrea823@gmail.com">
              <span className="fa fa-envelope" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="mailto:Lucianacorrea823@gmail.com" className="lnk discover">
              <span className="text">Contáctame</span>
              <span className="ion ion-android-contact" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Clients />
          <Quote />
        </About>
        <Services>
          <ServicesSection serviceList={serviceList} />
          <SkillsLawyer />
          <Testimonials />
        </Services>
        {/* <Work>
          <RecentWorks user={"lawyer"} />
        </Work> */}
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index6;
