import { aboutData } from "@/app/constant/data";
import CountUp from "react-countup";
import { useState } from "react";

//animation
import fadeIn from "@/components/Variants";
import { motion } from "framer-motion";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="padding-container max-container flex flex-col gap-8 py-8 lg:flex-row lg:py-40 lg:gap-32">
      {/* left side */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className=" flex flex-1 flex-col flexCenter lg:justify-start"
      >
        <h3 className="h3">
          FrontEnd <span className="text-secondary">Web</span> Developer.
        </h3>
        <p className="hidden sm:block text-center lg:text-start">
          {`I'm Sakib, a dedicated Full Stack Web Developer with a focus on the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy transforming ideas into real-world web applications that are fast, scalable, and user-friendly. With expertise in modern technologies like Next.js, I help businesses and individuals achieve their digital goals.`}
        </p>

        {/* counter */}
        <div>
          <div className="hidden lg:flex flex-1 mt-8 gap-2">
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={100} end={150} duration={5} delay={1} />
                K+
                <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                  Happy Client
                </p>
              </h4>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={80} end={100} duration={5} delay={1} />+
                <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                  Project done
                </p>
              </h4>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={50} end={80} duration={5} delay={1} />
                K+
                <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                  Client reviews
                </p>
              </h4>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={0} end={2} duration={5} delay={1} />+
                <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                  Year experience
                </p>
              </h4>
            </div>
          </div>
        </div>
      </motion.div>
      {/* right side */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col w-full xl:max-w-[47%] h-[488px]"
      >
        {/* skill */}
        <div className="mb-4 lg:mb-16 flex flex-col gap-3 mx-auto min-w-[90%] xl:ml-0">
          <div className="">
            <div className="flexBetween text-sm text-gray-20">
              <span>html css JavaScript</span>
              <span>95%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[95%] bg-[#f9ed69] rounded-full animate-pulse"></span>
            </div>
          </div>
          <div className="">
            <div className="flexBetween text-sm text-gray-20">
              <span>React Js</span>
              <span>90%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[90%] bg-[#f08a5d] rounded-full animate-pulse"></span>
            </div>
          </div>

          <div className="">
            <div className="flexBetween text-sm text-gray-20">
              <span>Next Js</span>
              <span>85%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[85%] bg-[#b83b5e] rounded-full animate-pulse"></span>
            </div>
          </div>

          <div className="">
            <div className="flexBetween text-sm text-gray-20">
              <span>Express Js</span>
              <span>90%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[85%] bg-[#b83b5e] rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* tab */}
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mt-8 sm:mt-0">
          {aboutData.map((item, i) => (
            <div
              key={i}
              className={`${
                index === i &&
                "after:w-[100%] after:!bg-secondary after:transition-all after:duration-500"
              } capitalize medium-16 relative after:absolute after:h-[2px] after:w-9 after:bg-white after:left-0 after:-bottom-1 cursor-pointer`}
              onClick={() => setIndex(i)}
            >
              {item.title}
            </div>
          ))}
        </div>
        {/* tap data */}
        <div className="py-6 xl:py-8 flex flex-col gap-2 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex flex-1 flex-col md:flex-row gap-x-3 items-center text-white/60"
            >
              <div className="">{item.title}</div>
              <div className="hidden lg:flex">-</div>
              <div className="">{item.year}</div>
              {/* icons */}
              <div className="flex gap-x-2">
                {item.icon?.map((icon, itemIndex) => (
                  <div className="" key={itemIndex}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
