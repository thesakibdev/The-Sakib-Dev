import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// data
import { showcase } from "@/app/constant/data";
// link
import Link from "next/link";
// icon
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

// image from next image
import Image from "next/image";

//animation
import fadeIn from "@/components/Variants";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <section className="padding-container max-container py-12 xl:py-32 flex flex-col md:flex-row  md:gap-8 lg:gap-20 xl:gap-28">
      {/* title */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="md:max-w-[45%]"
      >
        <div className="pb-12 text-center uppercase">
          <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal uppercase">
            Work<span className="text-secondary">s</span>
            <span className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
              My ShowCase
            </span>
          </h3>
          <p className="text-center max-w-md mx-auto text-gray-20 mt-12">
            A glimpse of my recent projects — from innovative startups to
            dynamic web platforms. Explore the work that reflects my passion for
            coding, design, and functionality.
          </p>
        </div>
      </motion.div>

      {/* swiper */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full sm:max-w-[65%]"
      >
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="sm:mt-16 "
        >
          {showcase.slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center gap-y-4">
                {slide.images.map((image, i) => (
                  <div className="flexCenter" key={i}>
                    <div className="relative overflow-hidden group rounded-lg cursor-pointer">
                      <div className="w-full">
                        <Image
                          src={image.url}
                          alt="working"
                          height={150}
                          width={350}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-l from-[#19974e] to-[#fe0000] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <Link
                        href={"/"}
                        className="absolute top-[100%] left-1/2 text-2xl -translate-x-1/2 group-hover:opacity-100 group-hover:top-[50%] opacity-0 transition-all duration-500"
                      >
                        <FaExternalLinkAlt />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Showcase;
