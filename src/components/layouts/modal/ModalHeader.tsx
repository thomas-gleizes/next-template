import React, { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';

const ModalHeader: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => {
  return (
    <div
      className={classnames('bg-gray-50 shadow w-full p-2 w-full shadow-md', className)}
      {...rest}
    />
  );
};

ModalHeader.defaultProps = {
  className: 'bg-gray-100 p-2',
};

export default ModalHeader;
