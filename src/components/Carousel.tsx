/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Flex from "./Flex";
import { content } from "@lib/theme/colors";
import styled from "styled-components";
import { indent } from "@lib/theme/sizes";
import noImg from "/img/noimage_detail.png";
import { media } from "@lib/theme/media";
interface CarouselProps {
  images: string[];
}

const ButtonNav = styled.button<{ $type: "left" | "right" }>`
  background-color: ${content.primary};
  padding: ${indent.large};
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    border-left: 2px solid #fff;
    border-top: 2px solid #fff;
    width: 8px;
    height: 8px;
    top: calc(50% - 4px);
    left: calc(50% - 4px);
    transform: rotate(
      ${(props) => (props.$type === "left" ? "-45deg" : "135deg")}
    );
  }

  ${media.medium`
    padding: ${indent.medium};

    &::after {
    width: 6px;
    height: 6px;
    top: calc(50% - 3px);
    left: calc(50% - 4px);
    
  }
  `}
`;

const ImageContainer = styled.div`
  max-width: 960px;
  width: 960px;
  aspect-ratio: 16/9;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    max-width: calc(100% - 64px);
  }

  ${media.xlarge`
    max-width: 700px;

        & img {
      max-width: calc(100% - 48px);
    }
  `};

  ${media.large`
    max-width: 560px;
     
    & img {
      max-width: calc(100% - 32px);
    }
  `};

  ${media.medium`
    max-width: 250px;

    & img {
      max-width: calc(100% - 16px);
    }
  `};
`;

const StyledCarousel = styled(Flex)`
  gap: 24px;
  ${media.large`
    gap: 8px;
  `}
`;

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    if (images.length)
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1,
      );
  };
  const nextImage = () => {
    if (images.length)
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
  };
  return (
    <StyledCarousel align="center">
      <ButtonNav $type="left" onClick={prevImage} />
      {
        <ImageContainer>
          {images.length &&
            images.map((img) => (
              <div
                style={
                  {
                    ...styles.imageWrapper,
                    transform: `translateX(${(images.indexOf(img) - currentIndex) * 100}%)`,
                    transition: "transform 0.5s ease",
                  } as any
                }
              >
                <img
                  src={img}
                  alt={`Slide ${currentIndex}`}
                  style={styles.image}
                />
              </div>
            ))}
          {!images.length && (
            <div
              style={
                {
                  ...styles.imageWrapper,
                  transform: `translateX(0%)`,
                  transition: "transform 0.5s ease",
                } as any
              }
            >
              <img
                src={noImg}
                alt={`Slide ${currentIndex}`}
                style={styles.image}
              />
            </div>
          )}
        </ImageContainer>
      }
      <ButtonNav onClick={nextImage} $type="right" />
    </StyledCarousel>
  );
};

const styles = {
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  image: {
    maxHeight: "100%",
  },
};

export default Carousel;
