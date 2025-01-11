import { Button, Flex } from 'antd';
import { FC } from 'react';
import './styles.scss'

interface IDtButton {
    children: React.ReactNode
}


const DtButton: FC<IDtButton> = ({children}) => {
  return (
    <Button >
        <Flex className='w-full bg-linear-bg gray-0 fs-19 lh-22' justify='center' align='center'>
        {children}
        </Flex>
       
    </Button>
  );
};

export default DtButton;