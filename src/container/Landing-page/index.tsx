import CoreFeatures from "./Components/Core-features";
import FAQSection from "./Components/FAQ";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero-section";
import HowItsWorks from "./Components/How-it-works";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import ProblemSolutions from "./Components/problem-solution";
import Testimonials from "./Components/Testimonials";

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ProblemSolutions />
            <CoreFeatures />
            <HowItsWorks />
            <Testimonials />
            <Pricing />
            <FAQSection />
            <Footer />
        </div>
    );
};

export default LandingPage;