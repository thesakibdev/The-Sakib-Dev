import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// data
import { testimonialData } from "@/app/constant/data";

//animation
import fadeIn from "@/components/Variants";
import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const colorList = [
    "#ec4899", // pink-500
    "#3b82f6", // blue-500
    "#22c55e", // green-500
    "#a855f7", // purple-500
    "#eab308", // yellow-500
    "#ef4444", // red-500
  ];

  const [bgColors, setBgColors] = useState([]);

  useEffect(() => {
    if (testimonialData && colorList) {
      const colors = testimonialData.map(() => {
        const randomIndex = Math.floor(Math.random() * colorList.length);
        return colorList[randomIndex];
      });
      setBgColors(colors);
    } else {
      console.error("testimonialData অথবা colorList অনুপস্থিত।");
    }
  }, [colorList.length]);

  return (
    <section className="padding-container max-container py-12 xl:py-32 flex flex-col md:flex-row  md:gap-8 lg:gap-28 md:py-32 xl:gap-40">
      {/* title */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="md:max-w-[35%]"
      >
        <div className="pb-12 text-center uppercase">
          <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal uppercase">
            Testimonial<span className="text-secondary">s</span>
            <span className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
              People Says
            </span>
          </h3>
        </div>
        <p className="text-left max-w-md mx-auto text-gray-20 mb-16 ">
          {`Testimonial Page Description Hear from my happy clients and collaborators! I pride myself on delivering high-quality work, maintaining strong communication, and always going the extra mile to meet project needs. Your success is my success.`}
        </p>
      </motion.div>

      {/* swiper */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full sm:max-w-[65%] xl:mr-8"
      >
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[300px] sm:h-[320px] md:h-[350px] lg:h-[400px]"
        >
          {testimonialData.map((testimonial, i) => {
            const avatar = testimonial.name
              .split(" ")
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
              .toUpperCase();
            return (
              <SwiperSlide key={i}>
                <div className="relative bg-tertiary p-4 rounded-lg flexCenter flex-col group max-h-[350px]">
                  {/* user info */}
                  {testimonial.url ? (
                    <div className="flex gap-4">
                      <Image
                        src={testimonial.url}
                        width={77}
                        height={77}
                        alt="testimonialIMG"
                        className="rounded-full"
                      />
                    </div>
                  ) : (
                    <div
                      style={{ backgroundColor: bgColors[i] }}
                      className="w-[77px] h-[77px] rounded-full overflow-hidden text-white flex items-center justify-center"
                    >
                      <h1 className="text-xl font-bold font-mono">{avatar}</h1>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="medium-20 capitalize">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-50 ">{testimonial.position}</div>
                  </div>
                  <hr className="border-none bg-gray-50 h-[1px] w-[80%] my-4 mx-auto text-center" />

                  {testimonial.screenshotUrl ? (
                    <div className="screenshot w-full h-[150px]">
                      <Image
                        src={testimonial.screenshotUrl}
                        alt="thesakibdev"
                        width={100}
                        height={100}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                  ) : (
                    <p className="text-gray-20 text-center italic">
                      {testimonial.message}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;
