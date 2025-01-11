'use client'
import { GetInTouchIcon, LogoIcon } from '@assets/icons';
import { Flex } from 'antd';
import { FC } from 'react';

interface IMenu {}

const MenuLayout: FC<IMenu> = ({}) => {
  return (
    <Flex className='px-64 w-full pt-22 bg-linear-bg' >
        <Flex justify='center' align='center'>
          <LogoIcon/>
        </Flex>
        <Flex className='w-full'>
        <Flex className='w-full' justify='center' align='center'>
          <Flex gap={24}>
            <span className='fs-15 cursor-pointer'>ABOUT US</span>
            <span className='fs-15 cursor-pointer'>OUR SERVICES</span>
            <span className='fs-15 cursor-pointer'>WORKING WITH US</span>
            <span className='fs-15 cursor-pointer'>BLOG</span>
          </Flex>
        </Flex>
        <Flex justify='center' align='center' className='w-fit' gap={10}>
          <GetInTouchIcon/>
          <span className='fs-15 text-truncate'>GET IN TOUCH</span>
        </Flex>
        </Flex>
    </Flex>
  );
};

export default MenuLayout;