import { motion } from "framer-motion";
export const TitleComponent = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex  items-center space-x-4"
    >
      <div className="w-12 h-1 bg-blue-600"></div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">
        {text}
      </h2>
    </motion.div>
  );
};
