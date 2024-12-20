import photo from "../assets/photo5.jpeg";
import { LinkComponent } from "./link-component";
import { motion } from "framer-motion";

export const Card = ({ variant, path, pic, title, text }) => {
  const type = `${variant !== "N" ? "px-0" : "px-3"}`;
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true }}
      className="p-4 h-fit w-72 md:w-full border-b border-black"
    >
      <div className="h-56 md:h-96 w-full">
        <img src={pic} className="w-full object-cover h-full" alt="" />
      </div>
      <div className="space-y-2 mt-3">
        <h3 className={`text-lg ${type} px-3 font-bold truncate`} title={title}>
          {title}
        </h3>
        <p className="font-thin text-sm line-clamp-3">{text}</p>
      </div>
      <LinkComponent path={path} />
    </motion.section>
  );
};
