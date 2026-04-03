import Articles from "@/components/Articles";
import Discover from "@/components/Discover";
import Featured from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Insights from "@/components/Insights";
import Published from "@/components/Published";




export default function Blog(){
    return(
        <>
        <Header/>
        <Insights/>
        <Featured/>
        <Articles/>
        <Published/>
               {/* Step section */}
                            <div className="relative z-0">
                              <Discover/>
                            </div>
                    
                            {/* Overlapping Footer */}
                            <div className="relative z-20 -mt-10 md:-mt-15 xl:-mt-20">
                              <Footer/>
                            </div>
        </>
    );
}