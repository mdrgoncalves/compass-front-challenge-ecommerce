import { MobileButtonTab } from "../../MobileButtonTab"
import { MenuNav } from "./styles";

interface ICategories {
    [key: string]: string;
}

interface MenuListProps {
    title: string;
    labelList: ICategories; 
}

export const MenuList: React.FC<MenuListProps> = ({
    title,
    labelList
}) => {

    return (

        <MenuNav>
            <h2>{title}</h2>
            <ul>
                {Object.keys(labelList).map(label => {
                    return (
                        <li key={label}>
                            <MobileButtonTab
                                label={label.charAt(0).toUpperCase() + label.slice(1)}
                                route={labelList[label]}
                            />
                        </li>
                    )
                })}
            </ul>
        </MenuNav>
    )
}