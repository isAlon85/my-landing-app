import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const useNewsletterSubscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();

  const subscribeToNewsletter = async (email) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post(`${BACKEND_URL}/newsletter/subscribe`, { email });
      setSuccess(true);
      return { success: true };
    } catch (err) {
      setError(t("newsletterError"));
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    subscribeToNewsletter,
    isLoading,
    error,
    success,
    reset: () => {
      setError(null);
      setSuccess(false);
    },
  };
};
