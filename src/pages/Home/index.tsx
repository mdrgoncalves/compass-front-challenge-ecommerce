import { HeaderMobile } from "../../components/Mobile/HeaderMobile";
import { StatusBanner } from "../../components/Desktop/StatusBanner";
import { PromoBanner } from "../../components/PromoBanner";
import { ArrivalsSection } from "../../components/ArrivalsSection";
import { TopCategories } from "../../components/Mobile/TopCategories";
import { HandpickedCollections } from "../../components/HandpickedCollections";
import { BrandsSection } from "../../components/BrandsSection";
import { CallToApp } from "../../components/Mobile/CallToApp";
import { MakeupSection } from "../../components/MakeupSection";
import { FooterCollapse } from "../../components/Mobile/FooterCollapse";
import { MobileNav } from "../../components/Mobile/MobileNav";
import { HomeContainer } from "./styles";

export const Home: React.FC = () => {
    return (
        <>
            <HeaderMobile />
            <StatusBanner />
        <HomeContainer>
            <MobileNav />
            <PromoBanner />
            <TopCategories />
            <ArrivalsSection />
            <HandpickedCollections />
            <BrandsSection />
            <CallToApp />
            <MakeupSection />
            <FooterCollapse />
        </HomeContainer>
        </>
    )
};
