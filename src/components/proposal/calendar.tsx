import Image from 'next/image';
import { useCallback, useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const Calendar: NextPageWithLayout<Props> = ({ userType }) => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay(),
  };
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();

  console.log(dateTotalCount);

  const prevMonth = useCallback(() => {
    // 이전 달 보기 보튼
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  }, [selectedMonth]);

  const nextMonth = useCallback(() => {
    // 다음 달 보기 버튼
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth]);

  const returnWeek = useCallback(() => {
    // 요일 반환 함수
    const weekArr: any[] = [];
    week.forEach(v => {
      weekArr.push(
        <div
          key={v}
          className='h-[50px] w-[14.27%] py-[14px] text-center text-[16px] font-bold text-[#2c2c2c] lg:w-[104px] xl:w-[134px]'
        >
          {v}
        </div>,
      );
    });
    return weekArr;
  }, []);

  const returnDay = useCallback(() => {
    // 선택된 달의 날짜들 반환 함수
    const dayArr = [];

    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      if (week[day] === nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(
            <div
              key={i + 1}
              className='relative h-[70px] w-[14.27%] border border-[#cccccc] pl-[10px] pt-[5px] text-left text-[#fff] lg:w-[104px] xl:h-[90px] xl:w-[134px] [&:nth-child(7n)]:text-[#8586db] [&:nth-child(7n+1)]:text-[#f97090]'
            >
              {i + 1}
            </div>,
          );
        }
      } else {
        dayArr.push(
          <div className='h-[70px] w-[14.27%] border border-[#cccccc] lg:w-[104px] xl:h-[90px] xl:w-[134px]' />,
        );
      }
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);

  return (
    <div className='relative mx-auto mt-[50px] w-full rounded-[10px] lg:w-[728px] xl:w-[938px]'>
      <b className='block pl-[8px] text-center text-[30px] text-[#f97090]'>{selectedMonth}월</b>
      <div className='mt-[30px] flex rounded-tl-[10px] rounded-tr-[10px] bg-[#ffcbd7]'>
        {returnWeek()}
      </div>
      <div className='flex flex-wrap'>
        {returnDay()}
        <div className='absolute left-[104px] top-[234px] hidden h-[30px] w-[313px] bg-[#ffcbd7] pl-[8px] pt-[5px] text-left text-[13px] text-[#2c2c2c] md:block xl:left-[134px] xl:top-[276px] xl:w-[403px]'>
          [업무일정] 젠한국 / 제품협찬
        </div>
        <div className='absolute right-0 top-[374px] hidden h-[30px] w-[417px] bg-[#a4f4a2] pl-[8px] pt-[5px] text-left text-[13px] text-[#2c2c2c] md:block xl:top-[456px] xl:w-[537px]'>
          [개인일정] 강릉 여행 중
        </div>
      </div>
      <div>
        <button
          className='absolute left-[110px] top-[8px] sm:left-[244px] md:left-[274px] xl:left-[394px]'
          onClick={prevMonth}
        >
          <Image
            src='/assets/icons/calendar-arrow-left.webp'
            alt='왼쪽 화살표'
            width={32}
            height={32}
          />
        </button>
        <button
          className='absolute right-[104px] top-[8px] sm:right-[240px] md:right-[270px] xl:right-[390px]'
          onClick={nextMonth}
        >
          <Image
            src='/assets/icons/calendar-arrow-right.webp'
            alt='오른쪽 화살표'
            width={32}
            height={32}
          />
        </button>
      </div>
      <div className='mt-[7px] flex items-center justify-between text-left'>
        <span className='text-[14px] text-[#ffffff]'>
          {userType === 'reviewer'
            ? '*제안 신청하기 전 리뷰어의 가능한 스케쥴을 확인해보세요!'
            : '*제안 신청하기 전 광고주가 원하는 스케쥴을 확인해보세요!'}
        </span>
        <div>
          <span
            className={`inline-block font-bold before:mr-[8px] before:inline-block before:h-[16px] before:w-[16px] before:rounded-full sm:mr-[15px] ${
              userType === 'reviewer' ? 'before:bg-[#ffcbd7]' : 'before:bg-[#dcddff]'
            }`}
          >
            {userType === 'reviewer' ? '업무일정' : '협찬제공일정'}
          </span>
          <span
            className={`from-pink-300 via-purple-300 to-indigo-400 inline-block font-bold before:mr-[8px] before:inline-block before:h-[16px] before:w-[16px] before:rounded-full ${
              userType === 'reviewer'
                ? 'before:bg-[url(/assets/icons/rainbow-circle.webp)] before:bg-[length:15px_15px] before:bg-no-repeat'
                : 'before:bg-[#ffcbd7]'
            }`}
          >
            {userType === 'reviewer' ? '개인일정' : '제출완료일정'}
          </span>
        </div>
      </div>
    </div>
  );
};
