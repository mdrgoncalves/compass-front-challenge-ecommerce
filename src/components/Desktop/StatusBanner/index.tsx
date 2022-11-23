import { Link } from "react-router-dom"
import { StatusContainer } from "./styles"

export const StatusBanner: React.FC = () => {

    return (
        <StatusContainer>
            <p>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status <Link to='/404'>here</Link></p>
        </StatusContainer>
    )
}