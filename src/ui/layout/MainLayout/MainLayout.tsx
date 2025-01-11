import { FC, ReactNode } from 'react';
import MenuLayout from '../Menu/Menu';

interface IMainLayout {
  children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({children}) => {
  return (
    <>
      <MenuLayout/>
      {children}
    </>
  );
};

export default MainLayout;