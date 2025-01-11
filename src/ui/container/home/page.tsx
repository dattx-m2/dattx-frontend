import { FC } from 'react';
import HeroSection from './HeroSection';

interface IHomeContainer {}

const HomeContainer: FC<IHomeContainer> = ({}) => {
  return (
    <HeroSection />
  );
};

export default HomeContainer;