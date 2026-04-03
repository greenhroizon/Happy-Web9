


export default function Insights(){
    return(
        <div className="pt-8 px-6 xl:p-16 mx-auto max-w-[1920px]">
            <div className="flex flex-col gap-8">
                <span className="text-xl md:text-2xl xl:text-4xl text-center">Insights for a More Conscious Life</span>
                <span className="flex flex-col gap-5 text-[10px] md:text-lg xl:text-xl">
                    <span className="flex flex-col text-center md:text-left md:grid grid-grid-3 lg:grid-cols-2">
                        <span className="flex flex-col md:col-span-2 lg:col-span-1 lg:ml-auto">
                            <span>Explore ideas from psychology, mindfulness,</span>
                            <span>spiritual philosophy and emotional wellness.</span>
                        </span>
                        <span></span>
                    </span>
                    <span className="flex flex-col text-center md:text-left md:grid md:grid-cols-3">
                        <span></span>
                        <span className="flex flex-col md:justify-start md:col-span-2">
                            <span>Articles that help you understand the mind, develop</span>
                            <span>resilience, and live with clarity.</span>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    );
}