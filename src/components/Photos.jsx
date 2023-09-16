import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "../styles/Photos.css"

const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.5,ease: [1,1,.8,1]} },
    hidden: { opacity: 0, scale: 1, x: 100},
  };
  
const boxVariantInvert = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.5,ease: [1,1,.8,1]} },
    hidden: { opacity: 0, scale: 1, x: -100},
  };

const Photos = ({ src, id }) => {
  


    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        className="photo"
        variants={id % 2 === 0 ? boxVariant : boxVariantInvert}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        <img src={require(`../assets/Images/${src}`)} alt={src}></img>
      </motion.div>
    );
  };

export default Photos;