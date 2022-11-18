import { HeaderMobile } from "../../components/Mobile/HeaderMobile";
import { StatusBanner } from "../../components/Desktop/StatusBanner";
import { PromoBanner } from "../../components/PromoBanner";
import { ArrivalsSection } from "../../components/ArrivalsSection";
import { TopCategories } from "../../components/Mobile/TopCategories";
import { HandpickedCollections } from "../../components/HandpickedCollections";
import { BrandsSection } from "../../components/BrandsSection";
import { CallToApp } from "../../components/Mobile/CallToApp";
import { MakeupSection } from "../../components/MakeupSection";
import { Footer } from "../../components/Footer";
import { FooterCollapse } from "../../components/Mobile/FooterCollapse";

export const Home: React.FC = () => {
    return (
        <>
            <HeaderMobile />
            <StatusBanner />
            <PromoBanner />
            <TopCategories />
            <ArrivalsSection />
            <HandpickedCollections />
            <BrandsSection />
            <CallToApp />
            <MakeupSection />
            <FooterCollapse />
        </>
    )
};
