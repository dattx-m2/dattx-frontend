'use client'
import { Flex } from 'antd';
import { FC } from 'react';
import { Logo } from '../../../../public/assets/logo';

interface IMenu {}

const MenuLayout: FC<IMenu> = ({}) => {
  return (
    <Flex>
        <Flex>
            <Logo/>
        </Flex>
    </Flex>
  );
};

export default MenuLayout;