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
import { FaExternalLinkAlt } from "react-icons/fa";

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
            My Work<span className="text-secondary">s</span>
            <span className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
              ShowCase
            </span>
          </h3>
          <p className="text-center max-w-md mx-auto text-gray-20 mt-12">
            A GLIMPSE OF MY RECENT PROJECTS — FROM INNOVATIVE STARTUPS TO
            DYNAMIC WEB PLATFORMS. EXPLORE THE WORK THAT REFLECTS MY PASSION FOR
            CODING, DESIGN, AND FUNCTIONALITY.
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
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="sm:mt-16"
        >
          {showcase?.slides?.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="flex flex-col items-center gap-y-6">
                {slide?.images?.map((image, imageIndex) => (
                  <div className="flexCenter" key={imageIndex}>
                    <div className="relative overflow-hidden group rounded-lg cursor-pointer">
                      <div className="w-full">
                        <Image
                          src={image.url}
                          alt={image.title || "project"}
                          height={200}
                          width={350}
                          className="w-full h-auto"
                        />
                      </div>
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-green-500/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <Link
                          href={`/showcase/${image.id}`}
                          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                          View Details
                        </Link>
                      </div>
                      
                      {/* Project info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h4 className="text-lg font-bold mb-1">{image.title}</h4>
                        <p className="text-sm text-gray-300">{image.category}</p>
                      </div>
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
