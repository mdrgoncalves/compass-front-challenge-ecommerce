import { Link } from "react-router-dom";
import { PathContainer } from "./styles";

interface PathPageProps {
    paths: string[];
}

export const PathPage: React.FC<PathPageProps> = ({
    paths
}) => {

    const pathLength = paths.length - 1

    return (
        <PathContainer>
            <Link to='/home'>Home</Link>
            {paths.map((path, index) => (
                <span key={index}>
                    <img src='/assets/img/icons/chevron-right-small-icon.png' alt='right chevron' />
                    {index === pathLength ? <span>{path}</span> : <Link to={`/category/${path}`}>{path}</Link>}
                </span>
            ))}
        </PathContainer>
    );  
};  