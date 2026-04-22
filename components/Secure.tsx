import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function Secure() {

  const services = [
    { name: "Tarot Guidance",     detail: "30 mins • ₹3,000",  img: "/Happy Ho_Payments_Tarot Guidance.svg",       hasSessionSelect: false },
    { name: "Energy Healing",     detail: "45 mins • ₹10,000", img: "/Happy Ho_Payments_Energy Healing.svg",       hasSessionSelect: false },
    { name: "Astrology",          detail: "30 mins • ₹4,500",  img: "/Happy Ho_Payments_Astrology.svg",            hasSessionSelect: false },
    { name: "Numerology",         detail: "₹15,000",           img: "/Happy Ho_Payments_Numerology.svg",           hasSessionSelect: false },
    { name: "Name Correction",    detail: "₹15,000",           img: "/Happy Ho_Payments_Name Correction.svg",      hasSessionSelect: false },
    { name: "Conscious Guidance", detail: "₹15,000",           img: "/Happy Ho_Payments_Conscious Guidance.svg",   hasSessionSelect: false },
    { name: "Meditation",         detail: "",                  img: "/Happy Ho_Payments_Meditation.svg",           hasSessionSelect: true  },
    { name: "Vastu",              detail: "",                  img: "/Happy Ho_Payments_Vastu.svg",                hasSessionSelect: true  },
  ];

  return (
    <div className="p-4 pt-8 md:p-8 lg:p-16 mx-auto max-w-[1920px]">
      <div className="flex flex-col gap-8">

        {/* Progress Steps */}
       <div className="flex items-center justify-center gap-2 sm:gap-4 text-xl overflow-x-auto py-2">
          {["Service", "Guide", "Details", "Payment"].map((label, i) => (
            <React.Fragment key={label}>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 shrink-0">
                <div className="w-6 h-6 lg:w-10 lg:h-10 bg-[#dcd8ce] rounded-full flex items-center justify-center text-white text-xs lg:text-lg font-bold">
                  {i + 1}
                </div>
                <span className="text-[#736345] text-sm lg:text-3xl whitespace-nowrap">{label}</span>
              </div>
              {i < 3 && <div className="w-4 sm:w-10 h-[2px] bg-[#6b5b3e] shrink-0" />}
            </React.Fragment>
          ))}
        </div>

      </div>

      {/* Step 1 Section */}
      <div className="flex flex-col text-xl lg:text-3xl mt-5 lg:mt-15 p-4 max-w-5xl mx-auto w-full">
        <span className="text-left text-[#2f2a25]">Step 1: Secure Your Spot</span>
        <span className="text-sm lg:text-xl text-[#736345]">
          Choose your session, confirm your details, and proceed to a safe and secure payment.
        </span>
        {/* Cards */}

<div className="flex md:hidden flex-col gap-4 mt-5">
  {services.map((service, i) => (
 <div key={i} className="overflow-x-auto">
    <div
    className="relative w-full rounded-4xl overflow-hidden flex min-w-max"
      style={{
        backgroundImage: "url('/payment-card-bg-img.svg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 flex items-center gap-6 px-6 py-6">

        {/* LEFT — fixed width */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <img
            src={service.img}
            alt={service.name}
            className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
          />
          <span className="text-base md:text-lg lg:text-xl font-bold text-[#736345] whitespace-nowrap">
            {service.name}
          </span>
        </div>

        {/* MIDDLE — truly centered via flex-1 */}
        <div className="flex flex-1 items-center justify-center">
          {service.hasSessionSelect ? (
            <select className="border rounded-full px-4 py-1 text-sm outline-none bg-white cursor-pointer">
              <option>Select sessions</option>
            </select>
          ) : (
            <span className="text-[#736345] text-sm text-center whitespace-nowrap">
              {service.detail}
            </span>
          )}
        </div>

        {/* RIGHT — same fixed width as LEFT to balance */}
        <div className="flex items-center justify-end gap-3 flex-shrink-0">
          <select className="border rounded-2xl px-4 py-1 text-sm outline-none bg-white cursor-pointer ">
            <option>Select your guide</option>
          </select>
          <button className="bg-[#3f5c4a] text-[#e9dac9] px-4 lg:px-6 py-1 rounded-full text-sm font-medium hover:bg-[#162d22] transition whitespace-nowrap">
            Continue →
          </button>
        </div>

      </div>
    </div>
    </div>
  ))}
</div>  

{/* Cards */}
<div className="hidden xl:hidden md:flex flex-col gap-4 mt-5 lg:mt-10">
  {services.map((service, i) => (
    <div
      key={i}
      className="relative w-full rounded-4xl overflow-hidden  "
      style={{
        backgroundImage: "url('/payment-card-bg-img.svg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 flex items-center px-6 py-6">

        {/* LEFT — fixed width */}
        <div className="flex items-center gap-4 lg:w-[280px] flex-shrink-0">
          <img
            src={service.img}
            alt={service.name}
            className="lg:w-12 lg:h-12 md:w-10 md:h-10 object-contain flex-shrink-0"
          />
          <span className="text-base md:text-sm lg:text-xl font-bold text-[#736345] whitespace-nowrap">
            {service.name}
          </span>
        </div>

        {/* MIDDLE — truly centered via flex-1 */}
        <div className="flex flex-1 items-center justify-center">
          {service.hasSessionSelect ? (
            <select className="border rounded-2xl px-2 lg:px-4 py-1 text-sm outline-none bg-white cursor-pointer">
              <option>Select sessions</option>
            </select>
          ) : (
            <span className="text-[#736345] text-xs lg:text-sm text-center whitespace-nowrap">
              {service.detail}
            </span>
          )}
        </div>

        {/* RIGHT — same fixed width as LEFT to balance */}
        <div className="flex items-center justify-end gap-3 lg:w-[280px] flex-shrink-0">
          <select className="border rounded-full px-2 lg:px-4 py-1 text-xs lg:text-sm outline-none bg-white cursor-pointer">
            <option>Select your guide</option>
          </select>
          <button className="bg-[#3f5c4a] text-[#e9dac9] px-2 lg:px-6 py-1 rounded-full text-xs lg:text-sm font-medium hover:bg-[#162d22] transition whitespace-nowrap">
            Continue →
          </button>
        </div>

      </div>
    </div>
  ))}
</div>  
{/* Cards */}
<div className="hidden xl:flex flex-col gap-4 mt-5 lg:mt-10">
  {services.map((service, i) => (
    <div
      key={i}
      className="relative w-full rounded-4xl overflow-hidden"
      style={{
        backgroundImage: "url('/payment-card-bg-img.svg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 flex items-center px-6 py-6">

        {/* LEFT — fixed width */}
        <div className="flex items-center gap-4 w-[280px] flex-shrink-0">
          <img
            src={service.img}
            alt={service.name}
            className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
          />
          <span className="text-base md:text-lg lg:text-xl font-bold text-[#736345] whitespace-nowrap">
            {service.name}
          </span>
        </div>

        {/* MIDDLE — truly centered via flex-1 */}
        <div className="flex flex-1 items-center justify-center">
          {service.hasSessionSelect ? (
            <select className="border rounded-full px-4 py-1 text-sm outline-none bg-white cursor-pointer">
              <option>Select sessions</option>
            </select>
          ) : (
            <span className="text-[#736345] text-sm text-center whitespace-nowrap">
              {service.detail}
            </span>
          )}
        </div>

        {/* RIGHT — same fixed width as LEFT to balance */}
        <div className="flex items-center justify-end gap-3 w-[280px] flex-shrink-0">
          <select className="border rounded-2xl px-4 py-1 text-sm outline-none bg-white cursor-pointer">
            <option>Select your guide</option>
          </select>
          <button className="bg-[#3f5c4a] text-[#e9dac9] px-4 lg:px-6 py-1 rounded-full text-sm font-medium hover:bg-[#162d22] transition whitespace-nowrap">
            Continue →
          </button>
        </div>

      </div>
    </div>
  ))}
</div>  

</div>
      </div>
  );
}

