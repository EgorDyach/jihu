/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Flex from "./Flex";
import { content } from "@lib/theme/colors";
import styled from "styled-components";
import { indent } from "@lib/theme/sizes";

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
`;

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  const nextImage = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  return (
    <Flex align="center" gap="24px">
      <ButtonNav $type="left" onClick={prevImage} />
      {
        <div style={styles.imageContainer as any}>
          {images.map((img) => (
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
        </div>
      }
      <ButtonNav onClick={nextImage} $type="right" />
    </Flex>
  );
};

const styles = {
  imageContainer: {
    maxWidth: "960px",
    width: "960px",
    aspectRatio: "16/9",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  image: {
    maxWidth: "calc(100% - 64px)",
    maxHeight: "100%",
  },
};

export default Carousel;
