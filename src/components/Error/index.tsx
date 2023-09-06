import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

interface IErrorsProps {
  message?: string;
}

function Error({ message }: IErrorsProps): JSX.Element {
  return (
    <div className='flex text-[#ED1C24] items-center gap-1 h-12 -mt-8 text-sm'>
      <FiAlertTriangle color="#ED1C24" />
      {message || ''}
    </div>
  );
}

export default Error