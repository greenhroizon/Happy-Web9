
"use client"

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Articles() {
  const categories = [
    "Spirituality & Wellbeing",
    "Positive Psychology",
    "Mindfulness & Meditation",
    "Applied Philosophy",
  ];

  
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const},
    },
  };
  const articles = [
    {
      title: "Healing is Important for Emotional Wellness",
      desc: "This article features an interaction with Naman Khanna, a globally recognized healer and Reiki practitioner.",
      img: "/2.png",
    },
    {
      title: "Power of Affirmations",
      desc: "Affirmations are powerful statements that influence our thoughts and beliefs.",
      img: "/2.png",
    },
    {
      title: "We Rise by Lifting Others",
      desc: "Helping others is a powerful virtue that does not require special skills.",
      img: "/2.png",
    },
  ];

  return (
    <div className="p-6 xl:p-16 max-w-[1200px] mx-auto">
      
      {/* Title */}
      <h2 className="text-3xl xl:text-5xl text-center mb-8">
        Explore Articles
      </h2>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-10 w-full">
        {categories.map((cat, i) => (
          <Button
            key={i}
            variant={i === 0 ? "default" : "outline"}
            className="rounded-full border-[#544120] px-8 py-6 xl:px-13 xl:py-7 text-[10px] xl:text-sm hover:bg-[#544120] text-black hover:text-white bg-transparent"
          >
            {cat}
          </Button>
        ))}
      </div>

     <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
>
  {articles.map((item, i) => (
    <motion.div key={i} variants={fadeUp} whileTap={{ scale: 0.97 }}>
      <Card className="flex flex-col overflow-hidden rounded-3xl bg-[#e9e1d6] hover:shadow-xl transition-all">
        
        <Image
          src={item.img}
          alt={item.title}
          width={400}
          height={250}
          className="w-full h-[200px] object-cover"
        />

        <CardContent className="p-2 px-2 space-y-3 text-[#544120]">
          <h3 className="text-sm font-semibold">{item.title}</h3>
          <p className="text-[10px]">{item.desc}</p>
          <span className="text-sm font-medium cursor-pointer hover:underline">
            Read Article →
          </span>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</motion.div>
    </div>
  );
}