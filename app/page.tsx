"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { photos, videos, webProjects } from "@/components/portfolio-data";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <main className="bg-pitch text-white min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(255,106,0,0.24),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(255,140,26,0.22),transparent_30%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <p className="text-xl font-semibold tracking-tight">CH</p>
          <ul className="flex gap-6 text-sm text-white/80"><li><a href="#about">About</a></li><li><a href="#work">Work</a></li><li><a href="#contact">Contact</a></li></ul>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:min-h-[85vh] md:grid-cols-2">
        <motion.div initial="hidden" animate="show" variants={fade} transition={{ duration: 0.8 }}>
          <p className="mb-4 text-neon">Hello, I&apos;m Charan.</p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">I Create <span className="bg-gradient-to-r from-white to-neon bg-clip-text text-transparent">AI-Powered Visual Experiences.</span></h1>
          <p className="mt-4 text-white/70">AI Artist • Video Editor • Web Developer • Creative Technologist</p>
          <p className="mt-6 max-w-xl text-white/75">I blend artificial intelligence, storytelling, design systems, and code into bold digital narratives that feel cinematic, purposeful, and unforgettable.</p>
          <div className="mt-8 flex gap-4"><a href="#work" className="rounded-full bg-neon px-6 py-3 font-semibold text-black shadow-glow">Explore My Work</a><a href="#contact" className="rounded-full border border-white/20 px-6 py-3">Get In Touch</a></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative mx-auto h-[460px] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent">
          <Image fill src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6" alt="Charan portrait" className="object-cover" />
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16"><h2 className="text-3xl font-bold">About Me</h2><p className="mt-4 max-w-3xl text-white/75">I craft emotionally resonant visual worlds through AI image generation, cinematic editing, and interactive web technology.</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{["AI Image Generation", "Prompt Engineering", "Cinematic Video Editing", "Motion Graphics", "Web Development", "UI/UX Design"].map((s) => <span key={s} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">{s}</span>)}</div></section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-16"><h2 className="text-4xl font-black">Selected Works</h2><p className="mt-2 text-white/70">Videos · Photos · Webpages</p>
      <PortfolioGroup title="Videos" items={videos} />
      <PortfolioGroup title="Photos" items={photos} />
      <PortfolioGroup title="Webpages" items={webProjects} /></section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center"><h3 className="text-4xl font-black">Let&apos;s Build Something Extraordinary.</h3><p className="mt-4 text-white/70">I&apos;m open to collaborations in AI art, cinematic content, and premium web experiences.</p><div className="mt-8 flex justify-center gap-4"><a className="rounded-full bg-neon px-6 py-3 font-semibold text-black shadow-glow" href="mailto:charan@example.com">Email Me</a><a className="rounded-full border border-white/20 px-6 py-3" href="#">Connect on Social Media</a></div></section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/60">© {new Date().getFullYear()} Charan · Crafted with AI + Code</footer>
    </main>
  );
}

function PortfolioGroup({ title, items }: { title: string; items: { title: string; description: string; tools: string; tags: string[]; media: string; duration?: string }[] }) {
  return <div className="mt-12"><h3 className="mb-4 text-2xl font-bold text-neon">{title}</h3><div className="grid gap-5 md:grid-cols-2">{items.map((item) => <article key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-neon/60 hover:shadow-glow"><div className="relative h-52"><Image fill src={item.media} alt={item.title} className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><h4 className="text-xl font-semibold">{item.title}</h4><p className="mt-2 text-sm text-white/70">{item.description}</p><p className="mt-3 text-xs text-peach">{item.tools}</p><div className="mt-3 flex flex-wrap gap-2">{item.tags.map((t) => <span key={t} className="rounded-full bg-neon/15 px-3 py-1 text-xs text-neon">{t}</span>)}</div></div></article>)}</div></div>;
}
