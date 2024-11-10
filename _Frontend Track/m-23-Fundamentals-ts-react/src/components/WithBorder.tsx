import React, { ComponentType } from 'react';



const WithBorder = <T extends object>(WrappedComponent: ComponentType<T>) => {
  return (props: T) => (
    <div className="border border-x-8 border-y-4 outline-8 border-purple-400 rounded-full">
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithBorder
