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
    imageUrl: "/banner.jpg",
    title: "Beautiful Greens with Care\nDelivered Straight to Your Door",
    subtitle: "Welcome to Flora",
    buttonText: "Shop now",
    buttonLink: "/shop",
  },
  "/shop": {
    imageUrl: "/shop-banner.jpg",
    title: "Shop All Products",
    subtitle: "Freshness at your fingertips",
  },
  "/about": {
    imageUrl: "/about-banner.jpg",
    title: "About Us",
    subtitle: "Learn more about who we are",
  },
  "/contact": {
    imageUrl: "/contact-banner.jpg",
    title: "Contact Us",
    subtitle: "We’re here to help",
  },
};

export default bannerConfig;
