import photo from "../assets/photo5.jpeg";
import { LinkComponent } from "./link-component";
import { motion } from "framer-motion";
export const Card = ({ variant, path, pic, title, text }) => {
  const type = `${variant != "N" ? "px-0" : "px-3"}`;
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true }}
      className="p-4 h-fit w-72 border-b border-black"
    >
      <div className="h-56">
        <img src={pic} className="w-full object-cover h-full" alt="" />
      </div>
      <div>
        <h3 className={`text-lg ${type} px-3 font-medium`}>{title}</h3>
        <p className="font-thin text-sm">{text}</p>
      </div>
      <LinkComponent path={path} />
    </motion.section>
  );
};
