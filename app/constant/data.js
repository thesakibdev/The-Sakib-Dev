// icons
const {
  HiHome,
  HiUser,
  HiSquare2Stack,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} = require("react-icons/hi2");
const { RxDesktop } = require("react-icons/rx");
const { BiBug } = require("react-icons/bi");
const {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
} = require("react-icons/fa");

const {
  SiNextdotjs,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiRedux,
} = require("react-icons/si");
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

// nav data

const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "service", path: "/service", icon: <HiSquare2Stack /> },
  { name: "showcase", path: "/showcase", icon: <HiRectangleGroup /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];

//about
const aboutData = [
  {
    title: "Languages",
    info: [
      {
        title: "Frontend",
        icon: [<FaHtml5 />, <FaCss3 />, <FaJs />, <SiTypescript />],
      },
      {
        title: "Backend",
        icon: [
          <FaNodeJs />,
          <IoLogoFirebase />,
          <SiMongodb />,
          <SiMysql />,
          <SiPostgresql />,
          <SiSqlite />,
          <SiPrisma />,
        ],
      },
    ],
  },
  {
    title: "Technologies",
    info: [
      {
        title: "Ui Related",
        icon: [<SiTailwindcss />, <FaBootstrap />, <SiShadcnui />],
      },
      {
        title: "Backend Related",
        icon: [
          <SiExpress />,
          <SiPrisma />,
          <SiMongodb />,
          <SiMysql />,
          <SiPostgresql />,
          <SiSqlite />,
        ],
      },
      {
        title: "Front-End Related",
        icon: [
          <FaReact />,
          <SiNextdotjs />,
          <TbBrandReactNative />,
          <SiRedux />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Chief Technology Officer - The Islamics Center",
        year: "2025",
      },
      {
        title: "Full Stack Developer ( Intern ) - Luminox Labs AI",
        year: "2025",
      },
      {
        title: "Mern Stack Developer - Chemistrywala",
        year: "2025",
      },
      {
        title: "FrontEnd Web Developer - Creative It Institute",
        year: "2023 - 2024",
      },
      {
        title: "Freelancer - Fiver",
        year: "2023 - 2024",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Web Dev Cohort - Chaicode ( By Hitesh Chowdury )",
        year: "2024",
      },
      {
        title: "Mern Stack Developer - Creative It Institute",
        year: "2024",
      },
      {
        title: "FrontEnd Web Developer - Creative It Institute",
        year: "2023",
      },
      {
        title: "JavaScript  - Creative It Institute",
        year: "2023",
      },
      {
        title: "Html Css  - udamy",
        year: "2022",
      },
    ],
  },
];

// service
const ServiceData = [
  {
    icon: <FaReact />,
    title: "Mern Stack Development",
    desc: "Full-stack MERN development with React, Node.js, Express, and MongoDB solutions.",
  },
  {
    icon: <BiBug />,
    title: "Bug Fixing",
    desc: "Fast and efficient bug fixing services to optimize your web applications.",
  },
  {
    icon: <RxDesktop />,
    title: "Full Stack Development",
    desc: "Professional website design and development tailored to your business goals.",
  },
  {
    icon: <FaNodeJs />,
    title: "BackEnd Development",
    desc: "Robust backend development with Node.js for scalable and secure applications.",
  },
  {
    icon: <FaFigma />,
    title: "Figma To HTML/React Conversion",
    desc: "Pixel-perfect conversion from Figma designs to responsive HTML or React apps.",
  },
];

//showcase
const showcase = {
  slides: [
    {
      images: [
        {
          id: "chemistrywala",
          url: "/ShowCase/Chemistrywala.webp",
          link: "https://chemistrywalah.com",
          title: "Chemistrywala",
          description:
            "A comprehensive educational platform for chemistry students with interactive learning modules, practice tests, and progress tracking.",
          github: "https://github.com/thesakibdev/chemistrywala",
          technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Tailwind CSS",
          ],
          features: [
            "User authentication and authorization",
            "Interactive learning modules",
            "Progress tracking system",
            "Practice tests and quizzes",
            "Responsive design",
            "Real-time updates",
          ],
          duration: "3 months",
          teamSize: "Solo Developer",
          category: "Educational Platform",
        },
        {
          id: "theislamics",
          url: "/ShowCase/Theislamics.webp",
          link: "https://theislamics.com",
          title: "The Islamics Center",
          description:
            "A comprehensive Islamic learning platform with prayer times, Quran recitation, and educational resources.",
          github: "https://github.com/thesakibdev/theislamics",
          technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Tailwind CSS",
          ],
          features: [
            "Prayer time calculations",
            "Quran recitation player",
            "Islamic articles and resources",
            "User profiles and preferences",
            "Mobile responsive design",
            "Admin dashboard",
          ],
          duration: "4 months",
          teamSize: "Solo Developer",
          category: "Religious Platform",
        },
      ],
    },
    {
      images: [
        {
          id: "jon-carter-portfolio",
          url: "/ShowCase/Jon_Carter_Portfolio.webp",
          link: "https://thesakibdev.github.io/Jon-carter",
          title: "Jon Carter Portfolio",
          description:
            "A professional portfolio website for Jon Carter with modern design and smooth animations.",
          github: "https://github.com/thesakibdev/Jon-carter",
          technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
          features: [
            "Smooth scroll animations",
            "Project showcase",
            "Contact form",
            "Responsive design",
            "Modern UI/UX",
            "Performance optimized",
          ],
          duration: "3 weeks",
          teamSize: "Solo Developer",
          category: "Portfolio",
        },
        {
          id: "my-folio",
          url: "/ShowCase/My_Folio.webp",
          link: "https://thesakibdev.github.io/MY-FOLIO",
          title: "My Portfolio",
          description:
            "A personal portfolio website showcasing my skills, projects, and professional experience.",
          github: "https://github.com/thesakibdev/MY-FOLIO",
          technologies: ["HTML", "CSS", "JavaScript"],
          features: [
            "Personal branding",
            "Project showcase",
            "Skills section",
            "Contact information",
            "Responsive design",
            "Clean UI/UX",
          ],
          duration: "2 weeks",
          teamSize: "Solo Developer",
          category: "Portfolio",
        },
      ],
    },
    {
      images: [
        {
          id: "coffee-star",
          url: "/ShowCase/CofeStar.webp",
          link: "https://coffee-star.vercel.app",
          title: "Coffee Star",
          description:
            "A modern coffee shop website with online ordering, menu management, and customer reviews.",
          github: "https://github.com/thesakibdev/coffee-star",
          technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
          features: [
            "Online menu ordering",
            "Customer review system",
            "Responsive design",
            "Smooth animations",
            "Contact form",
            "Social media integration",
          ],
          duration: "6 weeks",
          teamSize: "Solo Developer",
          category: "E-commerce",
        },
        {
          id: "coral-ecommerce",
          url: "/ShowCase/Coral.webp",
          link: "https://coral-ecommerce-dun.vercel.app",
          title: "Coral E-commerce",
          description:
            "A modern e-commerce platform with product catalog, shopping cart, and payment integration.",
          github: "https://github.com/thesakibdev/coral-ecommerce",
          technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
          features: [
            "Product catalog",
            "Shopping cart",
            "Payment integration",
            "User authentication",
            "Responsive design",
            "Admin dashboard",
          ],
          duration: "8 weeks",
          teamSize: "Solo Developer",
          category: "E-commerce",
        },
      ],
    },
    {
      images: [
        {
          id: "social-links",
          url: "/ShowCase/Social_Links.webp",
          link: "https://thesakibdev.github.io/Social-links-profile",
          title: "Social Links Profile",
          description:
            "A social media link aggregator with customizable themes and analytics tracking.",
          github: "https://github.com/thesakibdev/Social-links-profile",
          technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
          features: [
            "Customizable themes",
            "Link management",
            "Analytics tracking",
            "Mobile responsive",
            "Dark/light mode",
            "Easy customization",
          ],
          duration: "2 weeks",
          teamSize: "Solo Developer",
          category: "Social Media",
        },
        {
          id: "recipe-page",
          url: "/ShowCase/Recipe_Page.webp",
          link: "https://thesakibdev.github.io/Recipe-page",
          title: "Recipe Page",
          description:
            "A beautiful recipe sharing platform with search functionality and user-friendly interface.",
          github: "https://github.com/thesakibdev/Recipe-page",
          technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
          features: [
            "Recipe search functionality",
            "Detailed recipe views",
            "Ingredient lists",
            "Cooking instructions",
            "Responsive design",
            "API integration",
          ],
          duration: "3 weeks",
          teamSize: "Solo Developer",
          category: "Food & Recipe",
        },
      ],
    },
    {
      id: "image-gallery",
      url: "/ShowCase/Random_Image_Render.webp",
      link: "https://image-gallery-two-omega-47.vercel.app",
      title: "Image Gallery",
      description:
        "A dynamic image gallery with search, filtering, and beautiful image display capabilities.",
      github: "https://github.com/thesakibdev/image-gallery",
      technologies: ["React", "Next.js", "API Integration", "CSS"],
      features: [
        "Image search and filtering",
        "Responsive gallery layout",
        "Image optimization",
        "Lazy loading",
        "Category filtering",
        "Modern UI design",
      ],
      duration: "4 weeks",
      teamSize: "Solo Developer",
      category: "Gallery",
    },
    // {
    //   images: [
    //     {
    //       url: "/ShowCase/TWC-Features-Section.png",
    //     },
    //     {
    //       url: "/ShowCase/TWC-Pricing-Section.png",
    //     },
    //   ],
    // },
    // {
    //   images: [
    //     {
    //       url: "/ShowCase/View-I-AM-—-Youtuber-Portfolio.png",
    //     },
    //     {
    //       url: "/ShowCase/Web-Vcard.jpg",
    //     },
    //   ],
    // },
  ],
};

//testimonialData
const testimonialData = [
  {
    url: "/Testimonials/customer_1.jpg",
    name: "seozach",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
    screenshotUrl: "/Testimonials/feedback_7.webp",
  },
  {
    url: "/Testimonials/customer_9.jpg",
    name: "evelyn",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
    screenshotUrl: "/Testimonials/feedback_9.webp",
  },
  {
    url: "",
    name: "georgla_IIam",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
    screenshotUrl: "/Testimonials/feedback_1.webp",
  },
  {
    url: "",
    name: "mark_danle",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
    screenshotUrl: "/Testimonials/feedback_2.webp",
  },
  {
    url: "",
    name: "san_d_paul",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
    screenshotUrl: "/Testimonials/feedback_3.webp",
  },
  {
    url: "",
    name: "arthur_m_dawe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
    screenshotUrl: "/Testimonials/feedback_4.webp",
  },
  {
    url: "",
    name: "jerry_g_poteet",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
    screenshotUrl: "/Testimonials/feedback_5.webp",
  },
  {
    url: "",
    name: "cristianraynov",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
    screenshotUrl: "/Testimonials/feedback_6.webp",
  },
  {
    url: "",
    name: "Puya Turkiyan",
    position: "Customer",
    message: `Sakib has literally helped me solve all my problems in less time than some of the most advanced coders I’ve worked with. He has helped me with speeding up my website, setting up new features, customizing the front-end, coding custom design.`,
    screenshotUrl: "",
  },
];

module.exports = {
  navData,
  aboutData,
  ServiceData,
  showcase,
  testimonialData,
};
