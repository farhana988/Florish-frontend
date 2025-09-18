export interface FAQ {
  value: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQ[];
}

const faqData: FAQCategory[] = [
  {
    title: "Plant Care FAQs",
    items: [
      {
        value: "plant-care-1",
        question: "How do I care for my indoor plants?",
        answer:
          "Ensure your plants get enough sunlight and water. Regularly check the soil moisture to prevent overwatering.",
      },
      {
        value: "plant-care-2",
        question: "Can I use tap water for my plants?",
        answer:
          "It depends on your plant species. Some plants are sensitive to the minerals in tap water, so consider using filtered water.",
      },
      {
        value: "plant-care-3",
        question: "How often should I repot my plants?",
        answer:
          "Most indoor plants should be repotted every 1-2 years or when roots start growing out of the drainage holes.",
      },
      {
        value: "plant-care-4",
        question: "What is the best soil for houseplants?",
        answer:
          "A well-draining potting mix is usually best. Some plants need specialty soil like cactus mix or orchid bark.",
      },
    ],
  },
  {
    title: "Online Plant Store FAQs",
    items: [
      {
        value: "store-1",
        question: "Do you offer plant delivery?",
        answer:
          "Yes, we deliver plants across the country. Check our shipping policy for more details.",
      },
      {
        value: "store-2",
        question: "What types of plants do you sell?",
        answer:
          "We sell a wide variety of indoor and outdoor plants, including succulents, ferns, and flowering plants.",
      },
      {
        value: "store-3",
        question: "Can I return a plant if it arrives damaged?",
        answer:
          "Absolutely. If your plant arrives damaged, please contact us within 48 hours for a replacement or refund.",
      },
      {
        value: "store-4",
        question: "Do you sell plant care accessories?",
        answer:
          "Yes, we offer pots, watering cans, soil mixes, fertilizers, and other care tools in our accessories section.",
      },
    ],
  },
  {
    title: "Ordering & Payment FAQs",
    items: [
      {
        value: "order-1",
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, PayPal, Apple Pay, and Google Pay.",
      },
      {
        value: "order-2",
        question: "Can I cancel or modify my order?",
        answer:
          "You can cancel or change your order within 2 hours of placing it. Contact our support team immediately.",
      },
      {
        value: "order-3",
        question: "Is my payment information secure?",
        answer:
          "Yes, we use SSL encryption and secure payment gateways to protect your information.",
      },
    ],
  },
  {
    title: "Shipping FAQs",
    items: [
      {
        value: "shipping-1",
        question: "How long does shipping take?",
        answer:
          "Shipping typically takes 3–7 business days depending on your location.",
      },
      {
        value: "shipping-2",
        question: "Do you offer express delivery?",
        answer:
          "Yes, we offer express shipping options at checkout for an additional fee.",
      },
      {
        value: "shipping-3",
        question: "How are the plants packaged for shipping?",
        answer:
          "Plants are carefully wrapped and boxed to prevent damage. We use eco-friendly packaging materials whenever possible.",
      },
    ],
  },
];

export default faqData;
