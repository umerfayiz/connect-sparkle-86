import creator1 from "@/assets/creator-1.jpg";
import creator2 from "@/assets/creator-2.jpg";
import creator3 from "@/assets/creator-3.jpg";
import postImage from "@/assets/post-image.jpg";
import videoThumb from "@/assets/video-thumb.jpg";
import user1 from "@/assets/user-1.jpg";

export type Creator = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  niche: string;
  badge?: "top" | "rising" | "verified";
  bio: string;
  followers: string;
  following: string;
  socials: { platform: "instagram" | "youtube" | "tiktok" | "twitter"; followers: string }[];
  rates: { platform: string; type: string; price: number }[];
};

export const creators: Creator[] = [
  {
    id: "aria",
    name: "Aria Bennett",
    username: "@ariabennett",
    avatar: creator1,
    niche: "Fashion & Lifestyle",
    badge: "top",
    bio: "Curating timeless style. Brand collabs open. Based in Milan ✈️",
    followers: "1.2M",
    following: "342",
    socials: [
      { platform: "instagram", followers: "820K" },
      { platform: "youtube", followers: "210K" },
      { platform: "tiktok", followers: "1.4M" },
      { platform: "twitter", followers: "98K" },
    ],
    rates: [
      { platform: "Instagram", type: "Reel", price: 3000 },
      { platform: "Instagram", type: "Story (3 frames)", price: 1200 },
      { platform: "YouTube", type: "Integration (60s)", price: 5500 },
      { platform: "TikTok", type: "Branded video", price: 2500 },
    ],
  },
  {
    id: "marcus",
    name: "Marcus Reed",
    username: "@marcusreed",
    avatar: creator2,
    niche: "Fitness & Wellness",
    badge: "top",
    bio: "Certified coach. Helping you build the body you want.",
    followers: "684K",
    following: "180",
    socials: [
      { platform: "instagram", followers: "510K" },
      { platform: "youtube", followers: "320K" },
      { platform: "tiktok", followers: "240K" },
    ],
    rates: [
      { platform: "Instagram", type: "Reel", price: 2200 },
      { platform: "YouTube", type: "Dedicated video", price: 6000 },
    ],
  },
  {
    id: "sofia",
    name: "Sofia Lane",
    username: "@sofialane",
    avatar: creator3,
    niche: "Food & Travel",
    badge: "top",
    bio: "Cooking my way around the world 🍝 Recipes & travel guides.",
    followers: "412K",
    following: "210",
    socials: [
      { platform: "instagram", followers: "300K" },
      { platform: "youtube", followers: "150K" },
      { platform: "tiktok", followers: "190K" },
    ],
    rates: [
      { platform: "Instagram", type: "Reel", price: 1800 },
      { platform: "Instagram", type: "Carousel", price: 1000 },
      { platform: "YouTube", type: "Integration", price: 4200 },
    ],
  },
];

export type Post = {
  id: string;
  authorId: string;
  type: "text" | "image" | "video";
  content: string;
  media?: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
};

export const posts: Post[] = [
  {
    id: "p1",
    authorId: "aria",
    type: "text",
    content:
      "Quick thought: the best collabs aren't transactions, they're stories. The brands I love most are the ones that trust creators with their voice. What was the last collab that genuinely moved you? 💭",
    likes: 1284,
    comments: 92,
    shares: 41,
    time: "2h",
  },
  {
    id: "p2",
    authorId: "sofia",
    type: "image",
    content: "Spring drop is here ☀️ All the small things that make a Tuesday feel like Saturday.",
    media: postImage,
    likes: 4820,
    comments: 312,
    shares: 188,
    time: "5h",
  },
  {
    id: "p3",
    authorId: "marcus",
    type: "video",
    content: "5 movements I do every morning to wake my body up. Save this for tomorrow 💪",
    media: videoThumb,
    likes: 9120,
    comments: 540,
    shares: 720,
    time: "1d",
  },
];

export const reviews = [
  { brand: "Lume Skincare", logo: "LS", rating: 5, text: "Aria delivered a stunning campaign — 3.2x ROAS and the most engaged content we've ever shipped." },
  { brand: "North Apparel", logo: "NA", rating: 5, text: "Pro from start to finish. Briefs were nailed first try, communication was flawless." },
  { brand: "Aerie Coffee", logo: "AC", rating: 4, text: "Beautiful storytelling, on-brand voice. Would absolutely book again." },
];

export const portfolio = [
  { brand: "Lume Skincare", platform: "Instagram Reel", views: "2.1M", thumb: postImage },
  { brand: "North Apparel", platform: "YouTube Integration", views: "840K", thumb: videoThumb },
  { brand: "Aerie Coffee", platform: "TikTok Series", views: "3.4M", thumb: postImage },
  { brand: "Verde Wellness", platform: "Instagram Carousel", views: "1.2M", thumb: videoThumb },
];

export const profileTabs = {
  videos: [videoThumb, videoThumb, videoThumb, videoThumb, videoThumb, videoThumb],
  images: [postImage, postImage, postImage, postImage, postImage, postImage],
  blogs: [
    { title: "How I plan a 30-day content calendar", excerpt: "My exact framework for batching, ideating and scheduling.", time: "5 min read" },
    { title: "Negotiating brand deals (without burning out)", excerpt: "The 3 questions I ask before any partnership.", time: "8 min read" },
    { title: "Why authenticity scales better than reach", excerpt: "Lessons from 5 years of working with brands.", time: "6 min read" },
  ],
};

export const me = {
  name: "Alex Carter",
  username: "@alexcarter",
  avatar: user1,
};

export const conversations = [
  { id: "aria", lastMessage: "Sounds great — can we do the brief on Friday?", time: "2m" },
  { id: "marcus", lastMessage: "I sent over the contract draft.", time: "1h" },
  { id: "sofia", lastMessage: "Loved the moodboard 🙌", time: "1d" },
];

export const sampleMessages = [
  { from: "them", text: "Hey Alex! Thanks for reaching out — happy to chat about a collab." },
  { from: "me", text: "Hi Aria! We're launching a new spring capsule and would love to feature you." },
  { from: "them", text: "Love the brand. What's the rough scope you're thinking?" },
  { from: "me", text: "1 Reel + 3 Stories + a carousel. Budget around $4.5K — open to negotiate." },
  { from: "them", text: "Sounds great — can we do the brief on Friday?" },
];

export const digitalProducts = [
  { id: "dp1", title: "Creator Brand Kit", author: "Aria Bennett", price: 49, cover: postImage, sales: 1280 },
  { id: "dp2", title: "12-Week Hypertrophy Program", author: "Marcus Reed", price: 79, cover: videoThumb, sales: 3120 },
  { id: "dp3", title: "Lightroom Travel Presets", author: "Sofia Lane", price: 24, cover: postImage, sales: 5420 },
  { id: "dp4", title: "Negotiation Playbook (PDF)", author: "Aria Bennett", price: 19, cover: videoThumb, sales: 980 },
];

export function getCreator(id: string) {
  return creators.find((c) => c.id === id) ?? creators[0];
}