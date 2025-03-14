import { FaWhatsapp } from "react-icons/fa";

export const WhatsApp = () => {
  return (
    <>
      <a
        href="https://wa.me/+258877499115"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};
