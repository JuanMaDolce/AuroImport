import '../styles/Text.css'
import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const textVariant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 2,ease: [0,1,.8,1]}},
    hidden: { opacity: 0, scale: 1, y:100 }
  };

const Text = () => {
  
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
        <div className="text">
            <motion.p 
            ref={ref}
            variants={textVariant}
            initial="hidden"
            exit={{x: 200, opacity: 0}}
            animate={control} 
            >
              <p>
                Con años de trayectoria en el mercado, priorizamos la calidad de nuestros productos, así como el servicio que presetamos, para alcanzar la máxima satisfacción para nuestros clientes.
              </p>
              <p>
                 En busca de marcar la diferencia en el mercado, comercializamos todo tipo de productos a nivel nacional e internacional, garantizando la seguridad, innovación y con el 
                compromismo necesario para crear vínculos a largo plazo.
              </p>
            </motion.p>
        </div>
    );
  };

  export default Text;