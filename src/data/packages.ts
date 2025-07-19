export const packageData = {
  photography: [
    {
      id: 1,
      name: "Basic Photography",
      price: "20,000 NPR",
      duration: "3 hours",
      description: "Perfect for small events or portrait sessions.",
      features: [
        { id: 1, text: "High-resolution images" },
        { id: 2, text: "Basic editing & retouching" },
        { id: 3, text: "Online gallery delivery" },
      ],
    },
    {
      id: 2,
      name: "Standard Photography",
      price: "40,000 NPR",
      duration: "6 hours",
      description: "Ideal for weddings and medium events.",
      features: [
        { id: 1, text: "Full event coverage" },
        { id: 2, text: "Professional editing & retouching" },
        { id: 3, text: "USB with all photos" },
        { id: 4, text: "2 photographers" },
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Premium Photography",
      price: "70,000 NPR",
      duration: "Full day",
      description: "Comprehensive package for large weddings and events.",
      features: [
        { id: 1, text: "Unlimited photoshoot time" },
        { id: 2, text: "Advanced editing & retouching" },
        { id: 3, text: "Photo album included" },
        { id: 4, text: "Drone photography" },
      ],
    },
  ],

  videography: [
    {
      id: 1,
      name: "Basic Videography",
      price: "25,000 NPR",
      duration: "3 hours",
      description: "Ideal for short events and highlights.",
      features: [
        { id: 1, text: "Full HD video coverage" },
        { id: 2, text: "Basic editing & color correction" },
        { id: 3, text: "1 final video (3-5 mins)" },
      ],
    },
    {
      id: 2,
      name: "Standard Videography",
      price: "50,000 NPR",
      duration: "6 hours",
      description: "Perfect for weddings and medium events.",
      features: [
        { id: 1, text: "Full event coverage" },
        { id: 2, text: "Professional editing & effects" },
        { id: 3, text: "2 final videos (highlight + full)" },
        { id: 4, text: "Drone shots included" },
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Premium Videography",
      price: "90,000 NPR",
      duration: "Full day",
      description: "Complete videography with cinematic style.",
      features: [
        { id: 1, text: "Unlimited filming time" },
        { id: 2, text: "Cinematic editing & color grading" },
        { id: 3, text: "Multiple video formats" },
        { id: 4, text: "Teasers & trailers" },
      ],
    },
  ],

  addons: [
    {
      id: 1,
      name: "Additional Photographer",
      price: 15000,
      description: "Add an extra photographer to your package for wider coverage.",
    },
    {
      id: 2,
      name: "Drone Photography",
      price: 20000,
      description: "Aerial shots and videos using drone technology.",
    },
    {
      id: 3,
      name: "Photo Album",
      price: 18000,
      description: "Premium quality photo album with custom design.",
    },
    {
      id: 4,
      name: "Express Editing",
      price: 10000,
      description: "Receive your photos or videos within 3 days.",
    },
  ],
};
