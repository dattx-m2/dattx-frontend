import DtButton from "@/components/DtButton";
import { Flex } from "antd";
import { FC } from "react";

interface IHeroSection {}

const HeroSection: FC<IHeroSection> = ({}) => {
  return (
    <>
      <Flex className="gray-0 pt-28" vertical justify="center" align="center">
        <h1>Balancing</h1>
        <h1>Crypto Markets</h1>
      </Flex>
      <Flex justify="center" align="center" className="w-full pt-31">
        <Flex justify="center" align="center" vertical className="fs-18 gray-0">
          <p>Our fully automated proprietary quantitative trading software</p>
          <p>provides 24/7 liquidity to 170+ crypto assets across 25+</p>
          <p>centralized spot and derivative crypto exchanges.</p>
        </Flex>
      </Flex>
      <Flex className="ư-full pt-58" justify="center" align="center">
        <DtButton>GET IN TOUCH</DtButton>
      </Flex>
    </>
  );
};

export default HeroSection;
