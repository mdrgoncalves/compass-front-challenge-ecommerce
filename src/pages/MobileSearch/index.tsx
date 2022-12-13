import { ArrivalsSection } from "../../components/ArrivalsSection";
import { SearchInput } from "../../components/Desktop/HeaderDesktop/SearchInput";
import { BackButton } from "../../components/Mobile/BackButton";
import { 
    ArrivalWrapper, 
    FlexWrapper, 
    MobileSearchContainer, 
    RecentSearchs 
} from "./styles";

export const MobileSearch: React.FC = () => {

    return (
        
        <MobileSearchContainer column>
            <FlexWrapper 
                gap='0.5rem'
                padding='0.5rem 0'
            >
                <BackButton />
                <SearchInput />
            </FlexWrapper>
            <RecentSearchs 
                column 
                gap='0.5rem'
                marginTop='0.5rem'
            >
                <h2>Recent Searchs</h2>
                <FlexWrapper 
                    wrap 
                    gap='0.5rem'
                >
                    <span>Womens Wrist Watches</span>
                    <span>Chanel Perfumes</span>
                    <span>Claute Bags</span>
                </FlexWrapper>
            </RecentSearchs>
            <ArrivalWrapper>
                <ArrivalsSection />
            </ArrivalWrapper>
        </MobileSearchContainer>
    );  
};