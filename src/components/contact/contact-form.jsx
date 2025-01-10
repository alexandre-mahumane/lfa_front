import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();

  const inputStyle =
    "border w-full px-3 py-2 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all";
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        "service_bzngms8",
        "template_478zk85",
        formData,
        "tqdByWQC4N6RnkkMA"
      );

      if (response.status === 200) {
        setFormData({ user_name: "", user_email: "", message: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="space-y-6 p-6 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Entre em Contato</h2>

      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            placeholder={t("placeholders.var1")}
            className={inputStyle}
          />
        </div>

        <div>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            placeholder={t("placeholders.var2")}
            className={inputStyle}
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t("placeholders.var4")}
            className={inputStyle}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};
