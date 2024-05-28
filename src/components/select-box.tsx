import { type NextPage } from 'next';
import { useState } from 'react';

interface Props {
  optionData: any;
  placeholder: string;
  wrapClassName: string;
  btnClassName: string;
}

export const SelectBox: NextPage<Props> = ({
  optionData,
  placeholder,
  wrapClassName,
  btnClassName,
}) => {
  const [currentValue, setCurrentValue] = useState(optionData[0]);
  const [showOptions, setShowOptions] = useState(false);
  const [firstSelect, setFirstSelect] = useState(false);

  const handleOnChangeSelectValue = (data: any) => {
    setCurrentValue(data);

    console.log(data);
    if (!firstSelect) setFirstSelect(true);
  };

  return (
    <div className={wrapClassName} onClick={() => setShowOptions(prev => !prev)}>
      <button
        type='button'
        className={`${btnClassName} ${firstSelect ? 'text-[#000]' : 'text-[#b4b4b4]'}`}
      >
        {firstSelect ? currentValue : placeholder}
      </button>
      <ul
        className={`absolute left-0 top-[55px] w-full overflow-hidden rounded-[5px] bg-[#fff] shadow-lg ${
          showOptions
            ? 'max-h-none border border-[#c0c0c0] py-[10px] pl-[10px]'
            : 'max-h-[0px] border-none p-0'
        }`}
      >
        {optionData.map((data: any, i: number) => (
          <li
            key={i}
            className='cursor-pointer py-[10px] text-[#000]'
            onClick={() => handleOnChangeSelectValue(data)}
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};
