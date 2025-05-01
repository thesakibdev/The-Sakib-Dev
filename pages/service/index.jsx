import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// data
import { ServiceData } from "@/app/constant/data";
// link
import Link from "next/link";
// icon
import { FaArrowRight } from "react-icons/fa";

//animation
import fadeIn from "@/components/Variants";
import { motion } from "framer-motion";

const service = () => {
  return (
    <section className="padding-container max-container py-12 xl:py-32 flex flex-col  md:gap-8 lg:gap-20 xl:gap-28">
      {/* title */}
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="pb-12 text-center"
      >
        <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal uppercase">
          Service<span className="text-secondary">s</span>
          <span className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
            My Service
          </span>
        </h3>
        <p className="text-center max-w-md mx-auto text-gray-20 mt-12">
          {`Delivering modern, scalable, and efficient web solutions using the latest technologies.
        From backend APIs to frontend experiences, I provide end-to-end development that drives business growth.`}
        </p>
      </motion.div>

      {/* swiper */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full sm:max-w-[95%]"
      >
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            880: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="h-[288px]"
        >
          {ServiceData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-tertiary px-8 py-12 rounded-lg h-max flex flex-col gap-4 relative hover:bg-secondary w-[70%] sm:w-full max-h-[183px] mx-auto group">
                {/* icon */}
                <div className="place-self-end text-secondary text-5xl group-hover:text-white">
                  {item.icon}
                </div>
                {/* title */}
                <h3 className="bold-14 uppercase max-w-[80%]">{item.title}</h3>
                {/* link */}
                <Link
                  href={"/"}
                  className="font-extrabold text-secondary bg-tertiary border-secondary border-[2px] h-10 w-10 flexCenter rounded-full absolute left-1/2 -bottom-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all duration-500 -rotate-45"
                >
                  <FaArrowRight />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default service;
