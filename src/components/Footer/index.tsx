import { Link } from "react-router-dom";
import { 
    ColumnsContainer,
    FooterContainer, 
    FooterWrapper, 
    ItemsList, 
    ItemsListRow, 
    SocialContainer, 
    SocialList 
} from "./styles";

export const Footer: React.FC = () => {

    return (
        
        <FooterContainer>
            <FooterWrapper>
                <ColumnsContainer>
                    <div>
                        <h3>Shop by Category</h3>
                        <nav>
                            <ItemsList>
                                <li><Link to="/category/skincare">Skincare</Link></li>
                                <li><Link to="/404">Personal Care</Link></li>
                                <li><Link to="/category/handbags">Handbags</Link></li>
                                <li><Link to="/category/apparels">Apparels</Link></li>
                                <li><Link to="/category/watches">Watches</Link></li>
                                <li><Link to="/404">Eye Wear</Link></li>
                                <li><Link to="/category/jewellery">Jewellery</Link></li>
                            </ItemsList>
                        </nav>
                    </div>
                    <div className='about-menu'>
                        <h3>About</h3>
                        <nav>
                            <ItemsListRow>
                                <li><Link to="/404">Contact Us</Link></li>
                                <li><Link to="/404">About Us</Link></li>
                                <li><Link to="/404">Careers</Link></li>
                                <li><Link to="/404">Press</Link></li>
                            </ItemsListRow>
                        </nav>
                    </div>
                    <div>
                        <h3>Policy</h3>
                        <nav>
                            <ItemsListRow>
                                <li><Link to="/404">Return</Link></li>
                                <li><Link to="/404">Terms of Use</Link></li>
                                <li><Link to="/404">Sitemap</Link></li>
                                <li><Link to="/404">Security</Link></li>
                                <li><Link to="/404">Privacy</Link></li>
                                <li><Link to="/404">EPR Compliance</Link></li>
                            </ItemsListRow>
                        </nav>
                    </div>
                </ColumnsContainer>
                <SocialContainer>
                    <nav>
                        <SocialList>
                            <li>
                                <a href='https://www.facebook.com/' target='_blank'>
                                    <img src='/assets/img/icons/facebook-icon.svg' alt='facebook icon' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/' target='_blank'>
                                    <img src='/assets/img/icons/instagram-icon.svg' alt='instagram icon' />
                                </a>
                            </li>
                            <li>
                                <a href='https://twitter.com/' target='_blank'>
                                    <img src='/assets/img/icons/twitter-icon.svg' alt='twitter icon' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.youtube.com/' target='_blank'>
                                    <img src='/assets/img/icons/youtube-icon.svg' alt='youtube icon' />
                                </a>
                            </li>
                        </SocialList>
                    </nav>
                    <p className='footer-country'>United States</p>
                    <p className='footer-copyright'>© 2022 | Cora Leviene All Rights Reserved</p>
                </SocialContainer>
            </FooterWrapper>
        </FooterContainer>
    );  
};