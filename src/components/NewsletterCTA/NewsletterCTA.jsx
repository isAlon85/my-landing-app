import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNewsletterSubscription } from "@/hooks/useNewsletterSubscription";
import "./NewsletterCTA.scss";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const { subscribeToNewsletter, isLoading, error, success, reset } =
    useNewsletterSubscription();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await subscribeToNewsletter(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (success || error) reset();
  };

  return (
    <div className="newsletter-cta">
      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder={t("newsletterInputPlaceholder")}
            className="email-input"
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            className="cta-button"
            disabled={isLoading || !email}
          >
            {isLoading ? "..." : t("ctaButton")}
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{t("newsletterSuccess")}</p>}
      </form>
    </div>
  );
};

export default NewsletterCTA;
