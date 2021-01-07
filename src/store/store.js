import { createStore } from "vuex";

const store = createStore({
  state: {
    menuItems: [
      {
        id: 1,
        name: "Home",
        route: "/",
        icon: "home",
        isActive: true,
      },
      {
        id: 2,
        name: "Latest Collection",
        route: "/collection/latest/",
        icon: "ninja",
        isActive: false,
      },
      {
        id: 3,
        name: "Archive",
        route: "/collection/archive/",
        icon: "package",
        isActive: false,
      },
      {
        id: 4,
        name: "Contact Us",
        route: "/contact-us/",
        icon: "human",
        isActive: false,
      },
    ],
    socialLinks: [
      {
        id: 1,
        name: 'website',
        icon: 'globe',
        url: '#0'
      },
      {
        id: 2,
        name: 'Instagram',
        icon: 'instagram',
        url: '#0'
      }
    ]
  },
});

export default store;
