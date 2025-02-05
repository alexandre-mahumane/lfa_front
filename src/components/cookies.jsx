import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(true);
  };

  return (
    isVisible && (
      <div className="fixed z-50 bottom-4 left-4 right-4 md:left-8 md:right-8 bg-gray-900 text-white p-4 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center w-1/2 justify-between gap-4">
        <p className="text-sm">
          🍪 Este site usa cookies para melhorar sua experiência.{" "}
          <Link
            to="/terms-of-use"
            className="underline text-blue-400 hover:text-blue-300"
          >
            Saiba mais
          </Link>
          .
        </p>
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-xl transition-all"
        >
          Aceitar
        </button>
      </div>
    )
  );
};

export default CookieConsent;
