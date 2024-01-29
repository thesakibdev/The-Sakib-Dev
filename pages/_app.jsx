import Layout from "@/app/layout";
import Transition from "@/components/Transition";
// animation 
import { motion, AnimatePresence } from "framer-motion";
//router 
import { useRouter } from "next/router";

const Portfolio = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default Portfolio;
