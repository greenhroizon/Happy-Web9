"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";

import { motion } from "framer-motion";

export default function ProgramsGrid() {
    const cardVariants = {
    offscreen: { opacity: 0, y: 50, scale: 0.95 },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, bounce: 0.2, duration: 0.8 },
    },
  };
  return (
    <div className="p-6 xl:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 w-fit mx-auto max-w-[1920px]">
            <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
               <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
               <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              Stress Management & Emotional Balance
            </div>
            <div className="text-sm">
              Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">Mindfulness</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">Workplace Wellbeing</Button>
            </div>
          </div>
        </Card>
            </motion.div>
      </div>
    </div>
  );
}