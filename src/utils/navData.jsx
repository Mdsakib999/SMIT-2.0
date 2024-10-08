import { services } from "./service";

const servicesChildren = services.map((item, index) => {
  const link = item.title.split(' ').join('-').toLocaleLowerCase()
  return {
    id: index + 1,
    title: item.title,
    link: `/service/${link}`
  }
})

export const navData = [
  {
    id: "1",
    title: "Home",
    link: "/",
    isCols: true,
    // dowArrowText: "home",
    // children: [
    //   {
    //     id: "1",
    //     title: "Home",
    //     link: "/",
    //   },
    // ],
  },
  {
    id: "3",
    title: "Service",
    link: "/services",
    children: servicesChildren
  },
  {
    id: "2",
    title: "About",
    link: "/about",
    // children: [
    //   {
    //     id: "1",
    //     title: "Home",
    //     link: "/",
    //   },
    //   {
    //     id: "3",
    //     title: "About",
    //     link: "/",
    //   },
    // ],
  },
  {
    id: "4",
    title: "Career",
    link: "/career",
  }

  // {
  //   id: "4",
  //   title: "Contact",
  //   link: "/contact",
  //   isButton: true,
  // },
];
