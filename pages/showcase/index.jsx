import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// link
import Link from "next/link";

// image from next image
import Image from "next/image";

//animation
import fadeIn from "@/components/Variants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { projectsAPI } from "../../utils/api";

const Showcase = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await projectsAPI.getFeatured();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

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
          {loading ? (
            <SwiperSlide>
              <div className="flex flex-col items-center gap-y-4">
                <div className="flexCenter">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  <p className="text-gray-20 ml-4">Loading projects...</p>
                </div>
              </div>
            </SwiperSlide>
          ) : projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center gap-y-4">
                <div className="flexCenter">
                  <div className="relative overflow-hidden group rounded-lg cursor-pointer">
                    <div className="w-full">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        height={150}
                        width={350}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-l from-[#19974e] to-[#fe0000] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:top-[50%] opacity-0 transition-all duration-500 flex gap-4">
                      <Link
                        href={`/showcase/${project._id}`}
                        className="bg-secondary text-white p-3 rounded-full hover:bg-white hover:text-secondary transition-all duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Showcase;
