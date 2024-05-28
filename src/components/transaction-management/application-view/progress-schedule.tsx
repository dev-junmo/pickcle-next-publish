import Image from 'next/image';
import { useEffect, useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

export const ProgressSchedule: NextPageWithLayout<Props> = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const createCalendar = (year: any, month: any) => {
    const date = new Date(year, month - 1, 1);
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const startDay = date.getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const calendar = (
      <table className='w-full'>
        <caption className='mb-[5px] text-[20px] font-bold text-[#f97090]'>
          {' '}
          {currentMonth + 1}월
        </caption>
        <tr className='bg-[#ffcbd7]'>
          {weekdays.map(day => (
            <th
              key={day}
              className='w-[57px] py-[7px] text-[12px] font-bold text-[#2c2c2c] first:rounded-tl-[10px] last:rounded-tr-[10px]'
            >
              {day}
            </th>
          ))}
        </tr>
        {[...Array(6)].map((_, i) => (
          <tr key={i}>
            {[...Array(7)].map((_, j) => {
              const day = i * 7 + j - startDay + 1;
              return (
                <td
                  key={j}
                  className='h-[57px] w-[57px] border border-[#cccccc] pl-[5px] pt-[5px] text-left align-top text-[#2c2c2c] [&:nth-child(7n)]:text-[#8586db] [&:nth-child(7n+1)]:text-[#f97090]'
                >
                  {day > 0 && day <= daysInMonth && day}
                </td>
              );
            })}
          </tr>
        ))}
      </table>
    );

    return calendar;
  };

  return (
    <>
      {isClient ? (
        <div className='border-b border-[#fff] px-[20px] py-[50px] sm:px-[30px]'>
          <b className='text-[25px]'>진행 스케쥴</b>
          <div className='relative mt-[50px] items-center justify-between gap-[50px] rounded-[20px] bg-[#fff] px-[20px] pb-[30px] pt-[15px] sm:px-[50px] md:flex'>
            <ul className='absolute right-[28px] top-[25px] flex items-center justify-center'>
              <li className='mr-[10px] flex items-center'>
                <span className='mr-[10px] inline-block h-[10px] w-[10px] rounded-full bg-[#dcddff]' />
                <span className='text-[10px] text-[#2d2d2d]'>협찬 제공 일정</span>
              </li>
              <li className='mr-[10px] flex items-center'>
                <span className='mr-[10px] inline-block h-[10px] w-[10px] rounded-full bg-[#ffcbd7]' />
                <span className='text-[10px] text-[#2d2d2d]'>제출 완료 일정</span>
              </li>
            </ul>
            <div className='relative md:w-[50%]'>{createCalendar(currentYear, currentMonth)}</div>
            <div className='relative md:w-[50%]'>
              <div className='absolute left-[170px] top-[223px] w-[170px] truncate bg-[#dcddff] pl-[5px] text-left text-[10px] text-[#2c2c2c]'>
                [개인사정] 강릉 휴가
              </div>
              <div className='absolute left-[55px] top-[279px] w-[115px] truncate bg-[#ffcbd7] pl-[5px] text-left text-[10px] text-[#2c2c2c]'>
                [제출완료일정] 샤넬뷰티 alksdaolksmdlaksmd
              </div>
              {createCalendar(currentYear, currentMonth + 1)}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
