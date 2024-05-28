import Image from 'next/image';
import { useCallback, useState } from 'react';
import { businessDateStore, personalDateStore, regularDateStore } from 'src/status/store';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const MyCalender: NextPageWithLayout<Props> = ({ userType }) => {
  const [regularDate, regularDateState] = regularDateStore(state => [
    state.regularDate,
    state.regularDateState,
  ]);
  const [businessDate, businessDateState] = businessDateStore(state => [
    state.businessDate,
    state.businessDateState,
  ]);
  const [personalDate, personalDateState] = personalDateStore(state => [
    state.personalDate,
    state.personalDateState,
  ]);

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

  const datePopupSelect = (number: number) => {
    if (number < 12 && number > 3) {
      return businessDateState;
    }
    if (number < 31 && number > 24) {
      return personalDateState;
    }

    return regularDateState;
  };

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
          className='h-[70px] pr-[14.27%] text-left text-[16px] font-[500] text-[#fff] last:pr-0 lg:pr-[104px] lg:text-[20px] xl:pr-[148px]'
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
              className={`relative h-[50px] w-[28px] pr-[14.27%] text-left text-[#fff] lg:pr-[104px] lg:text-[25px] xl:h-[90px] xl:pr-[167px] [&:nth-child(7n)]:pr-0 [&:nth-child(7n)]:text-[#8586db] [&:nth-child(7n+1)]:text-[#f97090] ${
                i < 12 && i > 3
                  ? `before:absolute before:top-[-10px] before:block before:h-[60px] before:w-full ${
                      userType === 'reviewer' ? 'before:bg-[#ffbccc]' : 'before:bg-[#89dcff]'
                    }`
                  : ''
              } ${
                i === 4 &&
                `after:absolute after:left-[-25px] after:top-[-10px] after:block after:h-[60px] after:w-[60px] after:rounded-full ${
                  userType === 'reviewer' ? 'after:bg-[#f97090]' : 'after:bg-[#00bbff]'
                }`
              } ${
                i === 11 &&
                `before:!w-[28px] before:rounded-br-[30px] before:rounded-tr-[30px] after:absolute after:left-[-17px] after:top-[-10px] after:block after:h-[60px] after:w-[60px] after:rounded-full ${
                  userType === 'reviewer' ? 'after:bg-[#f97090]' : 'after:bg-[#00bbff]'
                }`
              } ${
                i < 31 && i > 24
                  ? `before:absolute before:top-[-10px] before:block before:h-[60px] before:w-full ${
                      userType === 'reviewer' ? 'before:bg-[#b5d9b4]' : 'before:bg-[#c85cc8]'
                    }`
                  : ''
              } ${
                i === 25 &&
                `before:rounded-bl-[20px] before:rounded-tl-[20px] after:absolute after:left-[-18px] after:top-[-10px] after:block after:h-[60px] after:w-[60px] after:rounded-full ${
                  userType === 'reviewer' ? 'after:bg-[#88db85]' : 'after:bg-[#c201c2]'
                }`
              } ${
                i === 30 &&
                `before:!w-[28px] before:rounded-br-[30px] before:rounded-tr-[30px] after:absolute after:left-[-17px] after:top-[-10px] after:block after:h-[60px] after:w-[60px] after:rounded-full ${
                  userType === 'reviewer' ? 'after:bg-[#88db85]' : 'after:bg-[#c201c2]'
                }`
              } cursor-pointer`}
              onClick={datePopupSelect(i)}
            >
              <span className='relative z-[10]'>{i + 1}</span>
            </div>,
          );
        }
      } else {
        dayArr.push(
          <div className='h-[50px] w-[14.27%] lg:w-[104px] lg:text-[25px] xl:h-[90px] xl:w-[167px]' />,
        );
      }
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);

  return (
    <div className='relative mx-auto mt-[50px] w-full rounded-[10px] lg:w-[728px] xl:w-[1040px]'>
      <b className='block pl-[8px] text-center text-[20px] font-[500] text-[#fff]'>
        {selectedYear}년 {selectedMonth}월
      </b>
      <div className='mt-[30px] flex rounded-tl-[10px] rounded-tr-[10px]'>{returnWeek()}</div>
      <div className='flex flex-wrap'>
        {returnDay()}
        {/* <div className='absolute left-[104px] top-[234px] hidden h-[30px] w-[313px] bg-[#ffcbd7] pl-[8px] pt-[5px] text-center text-[13px] text-[#2c2c2c] md:block xl:left-[134px] xl:top-[276px] xl:w-[403px]'>
          [업무일정] 젠한국 / 제품협찬
        </div>
        <div className='absolute right-0 top-[374px] hidden h-[30px] w-[417px] bg-[#a4f4a2] pl-[8px] pt-[5px] text-center text-[13px] text-[#2c2c2c] md:block xl:top-[456px] xl:w-[537px]'>
          [개인일정] 강릉 여행 중
        </div> */}
      </div>
      <div>
        <button className='absolute left-[48%] top-0 ml-[-90px]' onClick={prevMonth}>
          <Image
            src='/assets/icons/calendar-arrow-left.webp'
            alt='왼쪽 화살표'
            width={32}
            height={32}
          />
        </button>
        <button className='absolute right-[48%] top-[0] mr-[-90px]' onClick={nextMonth}>
          <Image
            src='/assets/icons/calendar-arrow-right.webp'
            alt='오른쪽 화살표'
            width={32}
            height={32}
          />
        </button>
      </div>
      <div className='mt-[7px] text-center md:flex md:items-center md:justify-between'>
        <span className='text-[14px] text-[#ffffff]'>
          *달력에서 시작날짜 선택 후 일정 입력을 해주세요.
        </span>
        <div className='mt-[10px] flex items-center md:mt-0'>
          <span
            className={`mr-[30px] mt-[-2px] align-middle text-[14px] font-[500] before:mr-[8px] before:inline-block before:h-[16px] before:w-[16px] before:rounded-full ${
              userType === 'reviewer' ? 'before:bg-[#f97090]' : 'before:bg-[#00bbff]'
            }`}
          >
            {userType === 'reviewer' ? '업무' : '협찬제공'}일정
          </span>
          <span
            className={`text-[14px] font-[500] before:mr-[8px] before:inline-block before:h-[16px] before:w-[16px] before:rounded-full ${
              userType === 'reviewer'
                ? 'before:bg-[url(/assets/icons/rainbow-circle.webp)] before:bg-[length:15px_15px] before:bg-no-repeat'
                : 'before:bg-[#c201c2]'
            }`}
          >
            {userType === 'reviewer' ? '개인' : '제출완료'}일정
          </span>
        </div>
      </div>
    </div>
  );
};
