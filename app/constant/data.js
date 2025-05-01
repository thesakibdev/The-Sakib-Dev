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
} = require("react-icons/fa");

const { SiNextdotjs, SiFramer } = require("react-icons/si");

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
    title: "expertise",
    info: [
      {
        title: "Web Development",
        icon: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
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
          url: "/ShowCase/Chemistrywala.webp",
          link: "https://chemistrywalah.com",
        },
        {
          url: "/ShowCase/Theislamics.webp",
          link: "https://theislamics.com",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/Jon_Carter_Portfolio.webp",
          link: "https://thesakibdev.github.io/Jon-carter",
        },
        {
          url: "/ShowCase/My_Folio.webp",
          link: "https://thesakibdev.github.io/MY-FOLIO",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/CofeStar.webp",
          link: "https://coffee-star.vercel.app",
        },
        {
          url: "/ShowCase/Coral.webp",
          link: "https://coral-ecommerce-dun.vercel.app",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/Social_Links.webp",
          link: "https://thesakibdev.github.io/Social-links-profile",
        },
        {
          url: "/ShowCase/Recipe_Page.webp",
          link: "https://thesakibdev.github.io/Recipe-page",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/Random_Image_Render.webp",
          link: "https://image-gallery-two-omega-47.vercel.app",
        },
        // {
        //   url: "/ShowCase/The-Diary-Multipurpose-Blog-Concept.png",
        //   link: "https://image-gallery-two-omega-47.vercel.app"
        // },
      ],
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
