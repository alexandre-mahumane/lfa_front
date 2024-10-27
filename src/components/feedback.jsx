import { useState } from "react";
import axios from "axios";
import { TitleComponent } from "./title";
import { api } from "../api";

export const FeedbackComponent = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && comment) {
      setIsSubmitting(true);

      const newFeedback = {
        name,
        comment,
        // date: new Date().toLocaleDateString(),
      };

      try {
        const response = await api.post("/feedback/insert", newFeedback);

        setFeedbacks([response.data, ...feedbacks]);

        setName("");
        setComment("");
      } catch (error) {
        console.error("Erro ao enviar feedback:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <TitleComponent text={"Deixe seu Feedback"} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg mb-2" htmlFor="name">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-lg mb-2" htmlFor="comment">
            Comentário:
          </label>
          <textarea
            id="comment"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Feedback"}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">
          Comentários Recentes
        </h3>
        {feedbacks.length > 0 ? (
          <ul className="space-y-4">
            {feedbacks.map((feedback) => (
              <li key={feedback.id} className="p-4 bg-white rounded-lg shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold">{feedback.name}</h4>
                  <span className="text-sm text-gray-500">{feedback.date}</span>
                </div>
                <p className="text-gray-700">{feedback.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            Nenhum comentário ainda. Seja o primeiro a deixar um feedback!
          </p>
        )}
      </div>
    </div>
  );
};
