import React from 'react';
import { Icon } from '@ricons/utils';
import { Ad } from '@ricons/tabler';

interface AdProps {}

const Add: React.FC<AdProps> = ({}) => {
  return (
    <div className="flex flex-col text-8xl text-gray-400 items-center w-full overflow-y-auto py-4 my-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <Icon>
        <Ad />
      </Icon>
      <span className="text-lg">
        This <span className="font-bold">definitely</span> is not an ad
      </span>
    </div>
  );
};

export default Add;
