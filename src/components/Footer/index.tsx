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
                                <li><Link to="/">Skincare</Link></li>
                                <li><Link to="/">Personal Care</Link></li>
                                <li><Link to="/">Handbags</Link></li>
                                <li><Link to="/">Apparels</Link></li>
                                <li><Link to="/">Watches</Link></li>
                                <li><Link to="/">Eye Wear</Link></li>
                                <li><Link to="/">Jewellery</Link></li>
                            </ItemsList>
                        </nav>
                    </div>
                    <div className='about-menu'>
                        <h3>About</h3>
                        <nav>
                            <ItemsListRow>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Careers</Link></li>
                                <li><Link to="/">Press</Link></li>
                            </ItemsListRow>
                        </nav>
                    </div>
                    <div>
                        <h3>Policy</h3>
                        <nav>
                            <ItemsListRow>
                                <li><Link to="/">Return</Link></li>
                                <li><Link to="/">Terms of Use</Link></li>
                                <li><Link to="/">Sitemap</Link></li>
                                <li><Link to="/">Security</Link></li>
                                <li><Link to="/">Privacy</Link></li>
                                <li><Link to="/">EPR Compliance</Link></li>
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