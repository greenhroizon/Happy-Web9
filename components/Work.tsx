import { Button } from "./ui/button";


export default function Work(){
    return (
        <div className="p-16">
            <div className="flex flex-col gap-15 mx-auto max-w-[1920px] items-center">
                <span className="text-center text-5xl">How Our Corporate Programs Work</span>
                <div className="flex gap-40 ">
                    <div className="flex flex-col">
                        <span className="text-3xl">Corporate Discovery Call</span>
                        <span className="text-xl">Understanding your organization's goals,</span>
                        <span className="text-xl">challenges, and team structure.</span>
                    </div>
                     <div className="flex flex-col">
                        <span className="text-3xl">Program Design</span>
                        <span className="text-xl">Customized coaching, mindfulness, or</span>
                        <span className="text-xl">wellness workshops tailored for your</span>
                        <span className="text-xl">Team.</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-3xl">Implementation</span>
                    <span className="text-xl">Live workshops, coaching sessions,</span>
                    <span className="text-xl">and guided programs for employees.</span>
                </div>
                <div className="flex flex-col gap-5 text-center">
                    <span className="text-5xl">Build a Happier, Healthier Workplace</span>
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl">Empower your teams with mindfulness, emotional intelligence,</span>
                        <span className="text-2xl">and resilience training.</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button className=" w-full md:w-50 lg:w-70 h-10 p-6 rounded-4xl bg-[#3f5c4a] text-[#c39e86] border-2 border-yellow-400 hover:bg-[#2d4435] transition-colors cursor-pointer text-sm">
                            Book Corporate Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}