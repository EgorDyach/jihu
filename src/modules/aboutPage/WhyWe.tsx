import Flex from "@components/Flex";
import styled from "styled-components";
import img from "/img/about_why.jpg";
import { content } from "@lib/theme/colors";
import { whyWeValues } from "./constants";
import { ItemTitle, Paragraph } from "@components/Typography";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@lib/configs/routes";
import Button from "@components/Button/Button";
import { media } from "@lib/theme/media";

const WhyWeWrapper = styled(Flex)`
  position: relative;
  padding: 100px 20px 60px;
  background-color: rgba(17, 17, 17, 0.7);
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${img});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
`;

const WhyWeContent = styled(Flex)`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;

  ${media.medium`
    flex-direction: column;
    gap: 16px;
    padding: 0;
  `}
`;

const WhyWeTitle = styled.h2`
  color: ${content.white};
  font-size: 40px;
`;

const WhyWeItemTitle = styled(ItemTitle)`
  color: ${content.white};
`;

const WhyWeParagraph = styled(Paragraph)`
  color: ${content.white};
`;

export const WhyWe = () => {
  const navigate = useNavigate();
  return (
    <WhyWeWrapper direction="column" justify="center" align="center">
      <WhyWeTitle>Почему выбирают нас?</WhyWeTitle>
      <WhyWeContent $top="vlarge" justify="space-between">
        {whyWeValues.map((value) => (
          <Flex direction="column" align="center">
            {value.icon}
            <WhyWeItemTitle $top="large">{value.text}</WhyWeItemTitle>
          </Flex>
        ))}
      </WhyWeContent>
      <WhyWeParagraph $top="xlarge">
        Наши специалисты регулярно обновляют список роботов, публикуя новые
        стратегии и алгоритмы. <br /> Также профессиональные инвесторы и
        акционеры публикуют множество статей из биржевого мира в своем блоге.
      </WhyWeParagraph>
      <Button
        $top="large"
        borderRadius={10}
        padding="16px 48px"
        onClick={() => navigate(AppRoutes.shop)}
      >
        Купить роботов
      </Button>
    </WhyWeWrapper>
  );
};
