import Navbar from "@/components/Navbar"
import Hero from "./landing/components/Hero"
import Cta from "./landing/components/Cta";
import Faq from "./landing/components/Faq";
import Features from "./landing/components/Features";
const Page = () => {
  return (
    <div>
        <Navbar />
          <section id="guides" className="section">
              <Hero />
          </section>
    
          <section id="features" className="section">
              <Features />
          </section>
           
          <section id="faq" className="section">
             <Faq />
          </section>

          <section id="cta" className="section">
             <Cta />
          </section>    
    </div>
 
  
  );
};
export default Page
