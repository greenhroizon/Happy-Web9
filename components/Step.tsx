"use client";

import Footer from "./Footer";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Step() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="relative z-10 mx-auto max-w-[1920px] pb-40 min-h-screen">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/2.png"
          alt="background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1920px] px-4 md:px-10 xl:px-16 pt-16 md:pt-32">

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xl text-center md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl xl:mb-50"
        >
          Discover the program that fits your life and goals
        </motion.h1>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">

          {/* Left column - Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6 max-w-[500px] 2xl:max-w-[800px] mt-20 xl:mt-0 2xl:mt-50" 
          >
            <input
              placeholder="Name"
              className="placeholder:text-2xl w-full h-12 py-7 px-4 2xl:py-10 2xl:px-6 bg-white rounded-4xl outline-none border-yellow-400 border-2"
            />
            <input
              placeholder="Email"
              className="placeholder:text-2xl w-full h-12 py-7 2xl:py-10 2xl:px-6 px-4 bg-white rounded-4xl outline-none border-yellow-400 border-2"
            />
            <input
              placeholder="Username"
              className="placeholder:text-2xl w-full h-12 py-7 2xl:py-10 2xl px-6 px-4 bg-white rounded-4xl outline-none border-yellow-400 border-2"
            />
            <Button className="w-full xl:w-2/3 bg-[#3f5c4a] cursor-pointer hover:bg-[#978059] py-7 2xl:py-10 text-lg rounded-full">
              Book Discovery Session
            </Button>
          </motion.div>

          {/* Right column - add your content here */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            {/* Right side content goes here */}
          </motion.div>

        </div>
      </div>
    </div>
  );
}