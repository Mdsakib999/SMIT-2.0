import {
  FaReact,
  FaChartLine,
  FaPaintBrush,
  FaMobileAlt,
  FaShoppingCart,
  FaPenNib,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
// import { SiMongodb, SiRedux, SiNodeDotJs, SiExpress } from "react-icons/si";

export const services = [
  {
    title: "Web Development",
    logo: FaReact,
    category: "Development",
    description:
      "Building modern, scalable web applications using MongoDB, Express.js, React.js, and Node.js for full-stack development.",
    details:
      "Our MERN stack development service offers end-to-end solutions for creating powerful web applications. We specialize in crafting responsive frontends with React, robust backends with Node.js and Express.js, and scalable databases with MongoDB. Whether you're starting a new project or scaling an existing one, our expertise ensures your application is built to perform and grow.",
    features: [
      "Custom web applications tailored to your business needs",
      "Scalable architecture to handle growing user bases",
      "Responsive design for optimal user experience across devices",
      "Seamless integration with third-party APIs and services",
    ],

    relatedServices: [
      {
        title: "Mobile App Development",
        logo: FaMobileAlt,
        link: "/service/mobile-app-development",
      },
      {
        title: "Cloud Solutions",
        logo: FaCloud,
        link: "/service/cloud-solutions",
      },
    ],
  },
  {
    title: "Digital Marketing",
    logo: FaChartLine,
    category: "Marketing",
    description:
      "Enhance brand visibility through SEO, SEM, and social media campaigns.",
    details:
      "Our Digital Marketing service helps your brand stand out in a crowded market. We employ a mix of SEO, SEM, and social media marketing to drive traffic, generate leads, and increase conversions. Our data-driven approach ensures that every campaign is optimized for maximum return on investment, helping you achieve your marketing goals efficiently.",
    features: [
      "Targeted SEO strategies to improve search engine rankings",
      "Effective SEM campaigns for higher conversion rates",
      "Social media management to build brand awareness",
      "Comprehensive analytics and reporting for data-driven decisions",
    ],

    relatedServices: [
      {
        title: "Content Creation",
        logo: FaPenNib,
        link: "/service/content-creation",
      },
      {
        title: "UI/UX Design",
        logo: FaPaintBrush,
        link: "/service/ui-ux-design",
      },
    ],
  },
  {
    title: "UI UX Design",
    logo: FaPaintBrush,
    category: "Design",
    description:
      "Create intuitive and engaging user interfaces with a focus on UX and visual design.",
    details:
      "Our UI/UX Design service focuses on creating user-centered designs that are both beautiful and functional. We prioritize the user's experience, ensuring that every interaction is intuitive and enjoyable. From wireframes to final designs, we work closely with you to bring your vision to life with a focus on aesthetics and usability.",
    features: [
      "User-centered design approach for optimal usability",
      "Custom wireframes and prototypes to visualize concepts",
      "Collaborative design process with client feedback",
      "Aesthetic designs that enhance user engagement",
    ],

    relatedServices: [
      {
        title: "Web Development",
        logo: FaReact,
        link: "/service/web-development",
      },
      {
        title: "Digital Marketing",
        logo: FaChartLine,
        link: "/service/digital-marketing",
      },
    ],
  },
  {
    title: "Mobile App Development",
    logo: FaMobileAlt,
    category: "Development",
    description:
      "Responsive and efficient mobile applications for iOS and Android platforms.",
    details:
      "Our Mobile App Development service covers everything from initial concept to final deployment. We create responsive and high-performance mobile applications for both iOS and Android platforms, ensuring your app meets user expectations and delivers a seamless experience. Our team focuses on scalability, security, and user engagement.",
    features: [
      "Cross-platform development for iOS and Android",
      "High-performance applications with optimal load times",
      "Secure coding practices for data protection",
      "User-friendly interfaces designed for mobile experiences",
    ],

    relatedServices: [
      {
        title: "Web Development",
        logo: FaReact,
        link: "/service/web-development",
      },
      {
        title: "Cloud Solutions",
        logo: FaCloud,
        link: "/service/cloud-solutions",
      },
    ],
  },
  {
    title: "E commerce Solutions",
    logo: FaShoppingCart,
    category: "Development",
    description:
      "Robust e-commerce platforms with seamless payment integration and user-friendly interfaces.",
    details:
      "Our E-commerce Solutions service is designed to create powerful online stores that drive sales and enhance customer experience. We build e-commerce platforms with features like seamless payment integration, inventory management, and a user-friendly interface. Our solutions are scalable and customizable to fit your business needs.",
    features: [
      "Custom-built online stores with unique features",
      "Secure payment gateways for safe transactions",
      "User-friendly interfaces that encourage sales",
      "Scalable solutions to accommodate growing businesses",
    ],

    relatedServices: [
      {
        title: "Digital Marketing",
        logo: FaChartLine,
        link: "/service/digital-marketing",
      },
      {
        title: "Content Creation",
        logo: FaPenNib,
        link: "/service/content-creation",
      },
    ],
  },
  {
    title: "Content Creation",
    logo: FaPenNib,
    category: "Marketing",
    description:
      "High-quality content that engages audiences and supports your brand’s marketing goals.",
    details:
      "Our Content Creation service provides you with compelling content that resonates with your target audience. From blog posts and articles to social media content and video scripts, we create content that aligns with your brand's voice and marketing strategy, helping you build a stronger online presence.",
    features: [
      "Engaging blog posts and articles",
      "Social media content tailored to your audience",
      "Professional video scripts and storyboards",
      "Content that aligns with your brand's voice and goals",
    ],

    relatedServices: [
      {
        title: "Digital Marketing",
        logo: FaChartLine,
        link: "/service/digital-marketing",
      },
      {
        title: "UI/UX Design",
        logo: FaPaintBrush,
        link: "/service/ui-ux-design",
      },
    ],
  },
  {
    title: "Cloud Solutions",
    logo: FaCloud,
    category: "Development",
    description:
      "Scalable cloud computing solutions to enhance data storage, processing, and security.",
    details:
      "Our Cloud Solutions service helps you leverage the power of cloud computing to improve your business operations. We provide scalable solutions for data storage, processing, and security, ensuring that your business can grow without constraints. Whether you're migrating to the cloud or optimizing existing cloud infrastructure, we've got you covered.",
    features: [
      "Cloud migration services for seamless transitions",
      "Scalable storage solutions for growing data needs",
      "Secure cloud environments with top-notch encryption",
      "Optimized cloud infrastructure for performance efficiency",
    ],

    relatedServices: [
      {
        title: "Cybersecurity Services",
        logo: FaShieldAlt,
        link: "/service/cybersecurity-services",
      },
      {
        title: "Web Development",
        logo: FaReact,
        link: "/service/web-developmen",
      },
    ],
  },
  {
    title: "Cybersecurity Services",
    logo: FaShieldAlt,
    category: "Security",
    description:
      "Protecting digital assets with comprehensive cybersecurity strategies.",
    details:
      "Our Cybersecurity Services ensure that your digital assets are protected from threats. We offer comprehensive strategies that include threat detection, risk management, and data encryption, keeping your business secure. Our approach is proactive, helping you stay ahead of potential security challenges.",
    features: [
      "Threat detection and monitoring",
      "Risk assessment and management",
      "Data encryption for sensitive information",
      "Proactive security measures to prevent breaches",
    ],

    relatedServices: [
      {
        title: "Cloud Solutions",
        logo: FaCloud,
        link: "/service/cloud-solutions",
      },
      {
        title: "Web Development",
        logo: FaReact,
        link: "/service/web-development",
      },
    ],
  },
];

// export default services;
