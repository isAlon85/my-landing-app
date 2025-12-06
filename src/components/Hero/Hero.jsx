import { useTranslation } from "react-i18next";
import NewsletterCTA from "../NewsletterCTA/NewsletterCTA";
import "./Hero.scss";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{t("heroTitle")}</h1>
          <p className="hero-subtitle">{t("heroSubtitle")}</p>
          <NewsletterCTA />
        </div>
      </div>
    </section>
  );
};

export default Hero;
