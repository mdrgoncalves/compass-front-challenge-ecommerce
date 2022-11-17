import { HeaderMobile } from "../../components/Mobile/HeaderMobile";
import { StatusBanner } from "../../components/Desktop/StatusBanner";
import { PromoBanner } from "../../components/PromoBanner";
import { ArrivalsSection } from "../../components/ArrivalsSection";
import { TopCategories } from "../../components/Mobile/TopCategories";
import { HandpickedCollections } from "../../components/HandpickedCollections";
import { BrandsSection } from "../../components/BrandsSection";

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
        </>
    )
};
