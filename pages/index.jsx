import { motion } from "framer-motion";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

//image
import Banner from "@/app/asset/banner.png";

const Home = () => {
  return (
    <section className="padding-container max-container page flex flex-col gap-4 flexCenter py-24 pb-32 lg:flex-row lg:gap-32">
      {/* left side */}
      <div className="flex-1 flexCenter flex-col lg:items-start">
        <h2 className="h2">
          Hi I&apos;m <span className="text-secondary">Sakib</span>
        </h2>
        <h4 className="bold-24">
          A
          <span className="pl-2">
            <Typewriter
              words={["FrontEnd Developer", "Passionate Programer"]}
              loop={true}
              cursor
              cursorStyle={"_"}
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam
          sit nisi consectetur eius. Incidunt sit laborum fuga.
        </p>

        {/* social icons */}
        <SocialIcons />
      </div>
      {/* right side */}
      <div className="flex flex-1 relative">
        <Image
          src={Banner}
          alt="banner"
          width={400}
          height={400}
          className="w-[277px] lg:w-[500px]  mx-auto relative"
        />
        <motion.span
          className="bg-secondary h-60 w-60 lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] absolute top-4 right-0 rounded-br-none rounded-full -z-10 lg:top-12 lg:right-10"
          animate={{
            backgroundColor: ["#08d9d6", "#f08a5d", "#ff2e63", "#f9ed69", "#5272f2", "#6a2c70", "#b835e5", "#eaeaea"],
            transition: {duration: 10, repeat: Infinity, ease: 'easeInOut'}
          }}
        ></motion.span>
      </div>
    </section>
  );
};

export default Home;
