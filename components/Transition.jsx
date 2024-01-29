import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    with: "100%",
  },
  animate: {
    x: "0%",
    with: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    with: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 right-full w-screen h-screen z-30 bg-secondary"
      ></motion.div>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
        className="fixed top-0 right-full w-screen h-screen z-20 bg-primary"
      ></motion.div>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 right-full w-screen h-screen z-10 bg-tertiary"
      ></motion.div>
    </>
  );
};

export default Transition;
