import Header from "./Header";



export default function Journery(){
    return(
         <div className="relative z-10 mx-auto max-w-[1920px] pb-20">
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src="/Happy Ho_Payments_Banner.svg"
                  alt="background"
                  className="w-full h-full object-cover object-center rounded-b-[40px] xl:rounded-b-[80px]"
                />
              </div>
        
              {/* Content */}
              <div className="relative z-10 mx-auto max-w-[1920px]">
                <Header />
        
                <div className="pt-16 px-4 md:p-10 xl:p-8 mt-15">
                    <div className="flex flex-col gap-5 text-center">
                <span className="font-canela text-2xl md:text-4xl">Begin Your Journey Within</span>
                <div className="flex flex-col text-lg md:text-xl text-[#736345]">
                    <span>Take the first step towards clarity, balance, <br className="hidden md:block"/> and emotional wellbeing with Happy Ho.</span>
                </div>
                <span className="mt-2 text-lg md:text-xl text-[#2f2a25]">Safe • Confidential • Guided by Experts</span>
            </div>
                </div>
                </div>
        </div>
    );
}