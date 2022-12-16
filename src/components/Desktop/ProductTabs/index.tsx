import { useState } from "react";
import { TabsContainer, TabsNav } from "./styles";

interface ProductTabsProps {
    firstTabName: string;
    secondTabName: string;
    thirdTabName: string;
    firstTabChildren: React.ReactNode;
    secondTabChildren: React.ReactNode;
    thirdTabChildren: React.ReactNode;
    setCurrentActiveTab?: React.Dispatch<React.SetStateAction<string>>;
    isNone?: boolean;
    initialTab?: 'tab1' | 'tab2' | 'tab3' | string;
}

export const ProductTabs: React.FC<ProductTabsProps> = ({
    firstTabName,
    secondTabName,
    thirdTabName,
    firstTabChildren,
    secondTabChildren,
    thirdTabChildren,
    setCurrentActiveTab,
    isNone,
    initialTab = 'tab1'
}) => {

    const [activeTab, setActiveTab] = useState(initialTab);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setCurrentActiveTab && setCurrentActiveTab(tab);
    }

    return (
        <TabsContainer
            isNone={isNone}
        >
            <TabsNav>
                <li 
                    className={activeTab === 'tab1' ? 'active' : ''}
                    onClick={() => handleTabClick('tab1')}
                >
                    {firstTabName}
                </li>
                <li 
                    className={activeTab === 'tab2' ? 'active' : ''}
                    onClick={() => handleTabClick('tab2')}
                >
                    {secondTabName}
                </li>
                <li 
                    className={activeTab === 'tab3' ? 'active' : ''}
                    onClick={() => handleTabClick('tab3')}
                >
                    {thirdTabName}
                </li>
            </TabsNav>
            <div>
                {activeTab === 'tab1' && firstTabChildren }
                {activeTab === 'tab2' && secondTabChildren}
                {activeTab === 'tab3' && thirdTabChildren}
            </div>
        </TabsContainer>
    );  
};