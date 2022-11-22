import { useState } from "react";
import { ProductsCarousel } from "../../ProductsCarousel";
import { DescriptionTab } from "./DescriptionTab";
import { TabsContainer, TabsNav } from "./styles";

export const ProductTabs: React.FC = () => {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    }

    return (
        <TabsContainer>
            <TabsNav>
                <li 
                    className={activeTab === 'tab1' ? 'active' : ''}
                    onClick={() => handleTabClick('tab1')}
                >
                    Product Description
                </li>
                <li 
                    className={activeTab === 'tab2' ? 'active' : ''}
                    onClick={() => handleTabClick('tab2')}
                >
                    Related Products
                </li>
                <li 
                    className={activeTab === 'tab3' ? 'active' : ''}
                    onClick={() => handleTabClick('tab3')}
                >
                    Ratings and Reviews
                </li>
            </TabsNav>
            <div>
                {activeTab === 'tab1' && <DescriptionTab /> }
                {activeTab === 'tab2' && <ProductsCarousel />}
                {activeTab === 'tab3' && <DescriptionTab />}
            </div>
        </TabsContainer>
    );  
};