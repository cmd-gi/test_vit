export type Project = { title: string; description: string; tools: string; tags: string[]; media: string; duration?: string; link?: string };

export const videos: Project[] = [
  { title: "Neon Genesis Showreel", description: "AI-assisted cinematic montage with dynamic color grading.", tools: "Premiere Pro · Runway · After Effects", tags: ["Cinematic", "AI Video"], media: "https://images.unsplash.com/photo-1478720568477-152d9b164e26", duration: "01:42" },
  { title: "Orbit Promo", description: "Futuristic product promo combining 3D motion graphics and VFX.", tools: "Blender · AE · Midjourney", tags: ["Promo", "Motion"], media: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30", duration: "00:55" },
];

export const photos: Project[] = [
  { title: "Synthetic Muse", description: "Editorial portrait blending human expression with AI surrealism.", tools: "Photoshop · SDXL", tags: ["Portrait", "AI Art"], media: "https://images.unsplash.com/photo-1544717305-2782549b5136" },
  { title: "Crimson Skyline", description: "Fine-art cityscape with cinematic relighting and texture work.", tools: "Lightroom · Generative Fill", tags: ["Poster", "City"], media: "https://images.unsplash.com/photo-1469474968028-56623f02e42e" },
];

export const webProjects: Project[] = [
  { title: "Pulse Commerce", description: "Immersive landing page with animated storytelling and conversion-first UX.", tools: "Next.js · Tailwind · Framer", tags: ["Landing", "Interactive"], media: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", link: "#" },
  { title: "Astra Dashboard", description: "Data-rich admin interface with glassmorphism widgets and micro-interactions.", tools: "React · TypeScript · Motion", tags: ["Dashboard", "UI/UX"], media: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3", link: "#" },
];
