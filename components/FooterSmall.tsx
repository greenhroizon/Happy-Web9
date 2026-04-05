"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FooterSmall() {
  // ================= Animations =================
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
  <motion.div
  className="bg-[#dcd8ce] xl:rounded-t-[110px] rounded-t-[40px] p-5 md:p-10 lg:p-16 mx-auto max-w-[1920px]"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <motion.div className="flex flex-col gap-10" variants={fadeUp}>

    {/* Mobile Layout */}
    <div className="flex md:hidden gap-4">
      {/* Left: All 3 sections stacked vertically */}
      <div className="flex flex-col gap-6 flex-1">
        {/* About */}
        <motion.div className="flex flex-col gap-2" variants={fadeUp}>
          <strong className="text-[#544120] text-sm">About</strong>
          <div className="flex flex-col text-[#544120] text-[13px]">
            <span>Founder's Note</span>
            <span>Meet Our Guides</span>
          </div>
        </motion.div>

        {/* Our Programs */}
        <motion.div className="flex flex-col gap-2" variants={fadeUp}>
          <strong className="text-[#544120] text-sm">Our Programs</strong>
          <div className="flex flex-col text-[#544120] text-[13px]">
            <span>For Individuals</span>
            <span>For Organizations</span>
            <span>Signature Programs</span>
            <div className="flex flex-col pl-4 text-[10px]">
              <span>• Cosmic Guidance</span>
              <span>• Meditation Coaching</span>
              <span>• Holistic Healing</span>
            </div>
          </div>
        </motion.div>

        {/* Content & Learning */}
        <motion.div className="flex flex-col gap-2" variants={fadeUp}>
          <strong className="text-[#544120] text-[13px]">Content & Learning</strong>
          <div className="flex flex-col text-[#544120] text-[13px]">
            <span>Blogs</span>
            <span>Videos / Reels</span>
          </div>
        </motion.div>
      </div>

      {/* Right: Logo/Image only on mobile */}
      <div className="flex items-start justify-end">
        <Image src="/footerImage.png" alt="Meditation" width={130} height={130} />
      </div>
    </div>

    {/* Contact Section */}
    <motion.div className="flex flex-col gap-2" variants={fadeUp}>
      <strong className="text-[#544120] text-lg lg:text-xl">Contact</strong>
      <div className="flex flex-col gap-5">
        <motion.div className="flex flex-col text-[#544120] text-[13px] lg:text-lg" variants={fadeUp}>
          <span>
            Address – Tower 7 – 202, Ace Parkway, <br />
            Sector 150, Gautam Budh Nagar, 201310,<br />
            NOIDA, Uttar Pradesh, India (Bharat)
          </span>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 text-[#544120] xl:grid-cols-2 md:gap-15 lg:gap-30" variants={fadeUp}>
          <div className="flex flex-col text-[13px] lg:text-lg">
            <span>Mobile: (+91) 9811237999</span>
            <span>Email: info@happyho.in</span>
          </div>
          <div className="flex gap-3 mt-5 lg:mt-0 lg:ml-auto text-[13px] lg:text-lg">
            <span>FaceBook</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>YouTube</span>
          </div>
        </motion.div>
      </div>
    </motion.div>

  </motion.div>
</motion.div>
  );
}