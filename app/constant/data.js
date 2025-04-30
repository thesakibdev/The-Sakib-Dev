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
  { name: "service", path: "/service", icon: <HiRectangleGroup /> },
  { name: "showcase", path: "/showcase", icon: <HiSquare2Stack /> },
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
    icon: <FaFigma />,
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium",
  },
  {
    icon: <RxDesktop />,
    title: "Web Development",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium",
  },
  {
    icon: <FaReact />,
    title: "App Development",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium",
  },
  {
    icon: <BiBug />,
    title: "Bug Fixing",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium",
  },
  {
    icon: <FaNodeJs />,
    title: "BackEnd Development",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium",
  },
];

//showcase
const showcase = {
  slides: [
    {
      images: [
        {
          url: "/ShowCase/Chemistrywala.png",
          link: "https://chemistrywalah.com",
        },
        {
          url: "/ShowCase/Theislamics.png",
          link: "https://theislamics.com",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/Jon_Carter_Portfolio.png",
          link: "https://thesakibdev.github.io/Jon-carter",
        },
        {
          url: "/ShowCase/My_Folio.png",
          link: "https://thesakibdev.github.io/MY-FOLIO",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/CofeStar.png",
          link: "https://coffee-star.vercel.app",
        },
        {
          url: "/ShowCase/Coral.png",
          link: "https://coral-ecommerce-dun.vercel.app",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/Social_Links.png",
          link: "https://thesakibdev.github.io/Social-links-profile",
        },
        {
          url: "/ShowCase/Recipe_Page.png",
          link: "https://thesakibdev.github.io/Recipe-page",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/Random_Image_Render.png",
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
    url: "/user-info/banner.png",
    name: "John Deo",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
  },
  {
    url: "/user-info/banner.png",
    name: "John Deo",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
  },
  {
    url: "/user-info/banner.png",
    name: "John Deo",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
  },
  {
    url: "/user-info/banner.png",
    name: "John Deo",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
  },
  {
    url: "/user-info/banner.png",
    name: "John Deo",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
  },
  {
    url: "/user-info/banner.png",
    name: "John Deo",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
  },
  {
    url: "/user-info/banner.png",
    name: "John Deo",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?",
  },
];

module.exports = {
  navData,
  aboutData,
  ServiceData,
  showcase,
  testimonialData,
};
