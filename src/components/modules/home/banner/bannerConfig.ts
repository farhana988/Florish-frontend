const bannerConfig: {
  [key: string]: {
    imageUrl: string;
    title: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
  };
} = {
  "/": {
    imageUrl: "/banner/banner.jpg",
    title: "Beautiful Greens with Care\nDelivered Straight to Your Door",
    subtitle: "Welcome to Florish",
    buttonText: "Shop now",
    buttonLink: "/shop",
  },
  "/shop": {
    imageUrl: "/banner/shop-banner.jpg",
    title: "Shop All Plants",
    subtitle: "Freshness at your fingertips",
  },
  "/about": {
    imageUrl: "/banner/about-banner.jpg",
    title: "About Us",
    subtitle: "Learn more about who we are",
  },
  "/plant-care": {
    imageUrl: "/banner/plant-care-banner.jpg",
    title: "Plant & Garden Care",
    subtitle: "Discover tips, tricks, and advice for healthy plants",
  },

  "/contact": {
    imageUrl: "/banner/contact-banner.jpg",
    title: "Contact Us",
    subtitle: "We’re here to help",
  },
};

export default bannerConfig;
