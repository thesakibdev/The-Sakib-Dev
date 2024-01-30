// images 
import Work1 from '@/public/ShowCase/Buntus-food-restaurent-PSD-template.jpg'
// icons
import {
  HiHome,
  HiUser,
  HiSquare2Stack,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { RxDesktop } from "react-icons/rx";
import { BiBug } from "react-icons/bi";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// nav data

export const navData = [
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
export const aboutData = [
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
export const ServiceData = [
  {
    icon: <FaFigma/>,
    title: 'UI/UX Design',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium'
  },
  {
    icon: <RxDesktop/>,
    title: 'Web Development',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium'
  },
  {
    icon: <FaReact/>,
    title: 'App Development',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium'
  },
  {
    icon: <BiBug/>,
    title: 'Bug Fixing',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium'
  },
  {
    icon: <FaNodeJs/>,
    title: 'BackEnd Development',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium'
  },
];


//showcase
export const showcase = {
  slides: [
    {
      images: [
        {
          url: "/ShowCase/Whats-New.png",
        },
        {
          url: "/ShowCase/Buntus-food-restaurent-PSD-template.jpg",
        },
      ]
    },
    {
      images: [
        {
          url: "/ShowCase/CleanSign.png",
        },
        {
          url: "/ShowCase/Our-Trainers.png",
        },
      ]
    },
    {
      images: [
        {
          url: "/ShowCase/Paint-Header-Style.jpeg",
        },
        {
          url: "/ShowCase/PlumbMan.jpg",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/Portfolio.jpg",
        },
        {
          url: "/ShowCase/Sellcrowd-—-Landing-Page.png",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/sybite-cover.png",
        },
        {
          url: "/ShowCase/The-Diary-Multipurpose-Blog-Concept.png",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/TWC-Features-Section.png",
        },
        {
          url: "/ShowCase/TWC-Pricing-Section.png",
        },
      ],
    },
    {
      images: [
        {
          url: "/ShowCase/View-I-AM-—-Youtuber-Portfolio.png",
        },
        {
          url: "/ShowCase/Web-Vcard.jpg",
        },
      ],
    },
  ],
};

//testimonialData
export const testimonialData = [
  {
    url: "/user-info/banner.png",
    name: 'John Deo',
    position: "Customer",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?"
  },
  {
    url: "/user-info/banner.png",
    name: 'John Deo',
    position: "Customer",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?"
  },
  {
    url: "/user-info/banner.png",
    name: 'John Deo',
    position: "Customer",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?"
  },
  {
    url: "/user-info/banner.png",
    name: 'John Deo',
    position: "Customer",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?"
  },
  {
    url: "/user-info/banner.png",
    name: 'John Deo',
    position: "Customer",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?"
  },
  {
    url: "/user-info/banner.png",
    name: 'John Deo',
    position: "Customer",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?"
  },
  {
    url: "/user-info/banner.png",
    name: 'John Deo',
    position: "Customer",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nobis?"
  },
];
