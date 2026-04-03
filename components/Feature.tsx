import { Card } from "./ui/card";
import Image from "next/image";

export default function Featured() {
  return (
    <div className="pt-8 px-6 xl:p-16 max-w-[1200px] mx-auto">
      {/* Title */}
      <h2 className="text-3xl xl:text-5xl text-center mb-10">
        Featured Insights
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT BIG CARD */}
        <Card className="rounded-3xl overflow-hidden bg-[#e9e1d6] p-0 h-100 md:h-110 lg:h-120">
          <div>
            <Image
              src="/2.png"
              alt="anger"
              width={800}
              height={400}
              className="w-full h-[180px] md:h-[220px] lg:h-[250px] object-cover"
            />
          </div>

          <div className="p-6 space-y-3">
            <h3 className="text-sm lg:text-xl font-semibold">
              Anger When Transformed Is Love
            </h3>

            <p className="text-[10px] lg:text-sm text-gray-600">
              Author: Jwalant Swaroop <br />
              Published: May 24, 2021
            </p>

            <p className="text-gray-700 text-[10px] lg:text-sm">
              Anger is often seen as a destructive emotion, but it can also be a powerful form of energy.
            </p>

            <span className="text-gray-800 font-medium cursor-pointer text-[10px] lg:text-sm">
              Read Article →
            </span>
          </div>
        </Card>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          
          {/* TOP RIGHT CARD */}
          <Card className="p-4 rounded-3xl bg-[#e9e1d6] w-full xl:w-120 h-50 md:h-43 lg:h-54">
            <h3 className="text-sm lg:text-lg font-semibold">
              How is Happiness different to Pleasure
            </h3>

            <p className="text-[10px] lg:text-sm text-gray-600">
              Author: Jwalant Swaroop <br />
              Published: March 19, 2022
            </p>

            <p className="text-gray-700 text-[10px] lg:text-sm">
              Scientists have long studied the mechanisms of desire, happiness, and pleasure in the brain.
            </p>

            <span className="font-medium cursor-pointer text-[10px] lg:text-sm">
              Read Article →
            </span>
          </Card>

          {/* BOTTOM RIGHT CARD */}
         <Card className="rounded-3xl overflow-hidden bg-[#e9e1d6]  xl:w-120 h-60 p-0">
          <div>
            <Image
              src="/2.png"
              alt="anger"
              width={800}
              height={400}
              className="w-full h-[190px] object-cover"
            />
          </div>

          <div className="px-2">
            <span className="text-gray-800 font-medium cursor-pointer text-[10px] lg:text-sm">
              Read Article →
            </span>
          </div>
        </Card>

        </div>
      </div>
    </div>
  );
}