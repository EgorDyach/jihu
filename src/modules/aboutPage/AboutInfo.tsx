import Flex from "@components/Flex";
import Image from "@components/Image";
import { Paragraph, SubHeader } from "@components/Typography";
import img_1 from "/img/about_1.jpg";
import img_2 from "/img/about_2.jpg";
import styled from "styled-components";
import { indent } from "@lib/theme/sizes";
import { media } from "@lib/theme/media";

const InfoText = styled(Paragraph)`
  max-width: 850px;
  text-align: justify;
`;

const AboutInfoWrapper = styled(Flex)`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${indent.vlarge};
  ${media.medium`
    padding: ${indent.large};
  `}
`;

const AboutInfoSeparator = styled.span`
  width: calc(100% - 120px);
  margin: 32px auto;
  height: 1px;
  background-color: #818181;
`;

const AboutInfoItem = styled(Flex)`
  ${media.large`
    flex-direction: column;
    gap: 16px;
    margin-top: 0 !important;

    & img {
      margin: 0 !important;
    }

    &>div {
      margin: 0 !important; 
    }
  `}
`;

export const AboutInfo = () => {
  return (
    <AboutInfoWrapper direction="column">
      <AboutInfoItem justify="space-between" align="center">
        <Flex direction="column" align="start">
          <SubHeader>О нас</SubHeader>
          <InfoText $top="medium">
            Мы предлагаем инновационные решения для автоматизации торговли на
            бирже, которые помогут вам достигать новых высот в мире финансов,
            также мы следим за последними тенденциями на рынке и постоянно
            обновляем наши алгоритмы, чтобы они соответствовали текущим условиям
            и обеспечивали наивысшую прибыльность.
            <br />
            <br />
            Ко всему, мы предоставляем подробные инструкции и поддержку на
            каждом этапе, чтобы вы могли максимально эффективно использовать
            наши решения. Наши специалисты имеют богатый опыт в области
            разработки и использования торговых роботов, поэтому они готовы
            делиться своим опытом и знаниями, чтобы помочь вам достичь успеха на
            бирже.
          </InfoText>
        </Flex>
        <Image
          $left="xxlarge"
          $borderRadius={10}
          src={img_1}
          width={"100%"}
          $maxWidth="450px"
          $maxHeight="300px"
        />
      </AboutInfoItem>
      <AboutInfoSeparator />
      <AboutInfoItem
        $top="vlarge"
        direction="row-reverse"
        justify="space-between"
        align="center"
      >
        <Flex $left="xxlarge" align="start" direction="column">
          <SubHeader>Кто такие «торговые роботы»</SubHeader>
          <InfoText $top="medium">
            «Торговый робот» – программа, которая частично или полностью
            заменяет человека при работе на бирже, при этом робот может
            управляться трейдером (принятие об открытии/закрытии позиции
            принимает сам трейдер) либо работать по заранее составленной
            программе.
            <br />
            <br />
            Роботы, самостоятельно ведущие торги на бирже, — это не более чем
            специально разработанные программы. Основываясь на математических
            алгоритмах, они могут самостоятельно отслеживать показатели
            различных индексов на фондовой бирже и на основе полученных данных
            совершать сделки по покупке или продаже. Обычный объем сделок робота
            в несколько раз превышает количество сделок, которые совершают люди.
            <br />
            <br />
            Задача торговых программ — вовсе не только помогать трейдерам в
            рутинной работе. Их «сверхзадача» — воплощать в жизнь торговые
            стратегии, которые трудно или вовсе невозможно реализовать вручную.
            По сути, биржевой робот — это заранее заданный алгоритм заключения
            сделок.
          </InfoText>
        </Flex>
        <Image
          $borderRadius={10}
          src={img_2}
          $maxWidth="450px"
          $maxHeight="300px"
        />
      </AboutInfoItem>
    </AboutInfoWrapper>
  );
};
