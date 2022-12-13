import { useEffect } from "react";
import { BackButton } from "../../components/Mobile/BackButton";
import { FooterCollapse } from "../../components/Mobile/FooterCollapse";
import { useWidth } from "../../utils/useWidth";
import { AboutContainer, AboutContent, Banner, CenterDiv, ColumnFlex, FlexWrapper, MobileHeader, ParagraphText, TextContainer, TitleText } from "./styles";

export const About: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        
        <>
        {useWidth({
            renderMobile: () => (
                <MobileHeader>
                    <BackButton />
                </MobileHeader>
            ),
            renderDesktop: () => (
                null
            )
        })}
        <AboutContainer>
            <Banner src='/assets/img/about-banner.png' alt='about banner' />
            <AboutContent>
                <CenterDiv>
                    <TitleText>About</TitleText>
                    <ParagraphText>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </ParagraphText>
                </CenterDiv>
                <ColumnFlex>
                    <FlexWrapper>
                        <TextContainer>
                            <TitleText>About</TitleText>
                            <ParagraphText>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </ParagraphText>
                        </TextContainer>
                        <img src='/assets/img/about-image-1.png' alt='about image' />
                    </FlexWrapper>
                    <FlexWrapper>
                        <img src='/assets/img/about-image-2.png' alt='about image' />
                        <TextContainer>
                            <TitleText>About</TitleText>
                            <ParagraphText>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </ParagraphText>
                        </TextContainer>
                    </FlexWrapper>
                    <FlexWrapper>
                        <TextContainer>
                            <TitleText>About</TitleText>
                            <ParagraphText>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </ParagraphText>
                        </TextContainer>
                        <img src='/assets/img/about-image-3.png' alt='about image' />
                    </FlexWrapper>
                </ColumnFlex>
            </AboutContent>
        </AboutContainer>
        {useWidth({
            renderMobile: () => (
                <FooterCollapse />
            ),
            renderDesktop: () => (
                null
            )
        })}
        </>
    );  
};