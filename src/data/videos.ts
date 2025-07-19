export interface Video {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export const videoData: Video[] = [
  {
    id: "wedding-1",
    title: "Elegant Wedding Highlights",
    category: "Wedding",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    thumbnailUrl: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
  },
  {
    id: "event-1",
    title: "Corporate Event Recap",
    category: "Event",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    id: "commercial-1",
    title: "Product Commercial",
    category: "Commercial",
    videoUrl: "https://www.youtube.com/embed/J---aiyznGQ",
    thumbnailUrl: "https://img.youtube.com/vi/J---aiyznGQ/hqdefault.jpg",
  },
  // add more as needed
];
