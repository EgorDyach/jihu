import Flex from "@components/Flex";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@lib/configs/routes";
import { indent } from "@lib/theme/sizes";
import ABOUT_BG_PRE_IMAGE_URL from "/img/about_preimg.jpg";
import ABOUT_BG_VIDEO_URL from "/about_video.mp4";
import Button from "@components/Button/Button";
import { media } from "@lib/theme/media";

const HeroContent = styled(Flex)`
  background: rgba(0, 0, 0, 0.4);
  color: #f1f1f1;
  width: 100%;
  padding: 110px 20px;

  ${media.medium`
    padding: 60px 20px;
  `}
`;

const HeroVideo = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  min-width: 100%;
  max-width: 100%;
  -webkit-size: cover;
  -moz-size: cover;
  -o-size: cover;
  size: cover;
`;

const HeroWrapper = styled(Flex)`
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 140px;
  font-weight: 800;
  line-height: 140px;
  font-style: italic;
  font-family: "Verdana";

  ${media.medium`
    font-size: 54px;
    line-height: 72px;
  `}
`;

const HeroDescription = styled.p`
  font-size: ${indent.large};
  margin-top: ${indent.xlarge};

  ${media.medium`
    font-size: ${indent.medium};
    margin-top: ${indent.large};
  `}
`;

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroWrapper>
      <HeroVideo autoPlay muted loop poster={ABOUT_BG_PRE_IMAGE_URL}>
        <source src={ABOUT_BG_VIDEO_URL} type="video/mp4"></source>
      </HeroVideo>
      <HeroContent direction="column" align="center">
        <HeroTitle>JIHU.RU</HeroTitle>
        <HeroDescription>Инвестиции по-новому</HeroDescription>
        <Button
          $top="large"
          borderRadius={10}
          padding="16px 48px"
          onClick={() => navigate(AppRoutes.shop)}
        >
          Купить роботов
        </Button>
      </HeroContent>
    </HeroWrapper>
  );
};
