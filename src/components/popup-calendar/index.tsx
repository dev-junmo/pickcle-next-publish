import Image from 'next/image';
import { useCallback, useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  previewVersion?: boolean;
  userType?: string;
}

export const PopupCalendar: NextPageWithLayout<Props> = ({ previewVersion, userType }) => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);

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
              className='w-[57px] py-[7px] text-[12px] font-bold first:rounded-tl-[20px] last:rounded-tr-[20px]'
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
                  className='h-[57px] w-[57px] border border-[#cccccc] pl-[5px] pt-[5px] text-left align-top [&:nth-child(7n)]:text-[#8586db] [&:nth-child(7n+1)]:text-[#f97090]'
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

  const handlePrevMonth = () => {
    setCurrentMonth(prevMonth => prevMonth - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth(prevMonth => prevMonth + 1);
  };

  return (
    <div className='relative block items-center justify-between gap-[50px] 2xl:flex'>
      <ul className='absolute right-0 top-[8px] flex items-center justify-center'>
        <li className='mr-[10px] flex items-center'>
          <span
            className={`mr-[10px] inline-block h-[10px] w-[10px] rounded-full ${
              userType === 'reviewer' ? 'bg-[#ffcbd7]' : 'bg-[#dcddff]'
            }`}
          />
          <span className='text-[10px]'>
            {userType === 'reviewer' ? '업무 일정' : '협찬제공일정'}
          </span>
        </li>
        <li className='flex items-center'>
          {userType === 'reviewer' ? (
            <Image
              src='/assets/icons/rainbow-circle.webp'
              width={10}
              height={10}
              alt='무지개 타원'
              className='mr-[10px] inline-block'
            />
          ) : (
            <span className='mr-[10px] inline-block h-[10px] w-[10px] rounded-full bg-[#ffcbd7]' />
          )}
          <span className='text-[10px]'>
            {userType === 'reviewer' ? '개인 일정' : '제출완료일정'}
          </span>
        </li>
      </ul>
      <div className='relative 2xl:w-[50%]'>
        {createCalendar(currentYear, currentMonth)}
        <div className='absolute left-[57px] top-[222px] hidden w-[172px] truncate bg-[#a4f4a2] pl-[5px] text-left text-[10px] text-[#2c2c2c] md:block'>
          [개인일정] 병가중
        </div>
        <div className='absolute left-[57px] top-[279px] hidden w-[115px] truncate bg-[#ffcbd7] pl-[5px] text-left text-[10px] text-[#2c2c2c] md:block'>
          [제출완료일정] 젠한국 / asldknalskdnalksndlaknsd
        </div>
        {!previewVersion && (
          <button
            className='absolute left-[-45px] top-[50%] h-[40px] w-[40px] bg-[url(/assets/icons/popup-arrow-prev.webp)] bg-[length:40px_40px] bg-center bg-no-repeat text-[0px]'
            onClick={() => {
              handlePrevMonth();
              setCurrentYear(prevYear => prevYear);
            }}
          >
            이전 달
          </button>
        )}
      </div>
      <div className='relative 2xl:w-[50%]'>
        <div className='absolute left-[171px] top-[164px] hidden w-[172px] truncate bg-[#ffcea9] pl-[5px] text-left text-[10px] text-[#2c2c2c] md:block'>
          [개인사정] 강릉 휴가
        </div>
        <div className='absolute left-[57px] top-[221px] hidden w-[115px] truncate bg-[#ffcbd7] pl-[5px] text-left text-[10px] text-[#2c2c2c] md:block'>
          [제출완료일정] 샤넬뷰티 alksdaolksmdlaksmd
        </div>
        {createCalendar(currentYear, currentMonth + 1)}
        {!previewVersion && (
          <button
            className='absolute right-[-45px] top-[50%] h-[40px] w-[40px] bg-[url(/assets/icons/popup-arrow-next.webp)] bg-[length:40px_40px] bg-center bg-no-repeat text-[0px]'
            onClick={() => {
              handleNextMonth();
              setCurrentYear(prevYear => prevYear);
            }}
          >
            다음 달
          </button>
        )}
      </div>
    </div>
  );
};
