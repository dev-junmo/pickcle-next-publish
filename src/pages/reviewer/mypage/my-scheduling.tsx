import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Layout } from 'src/components/layout';
import ProfileGuide from 'src/components/mypage/my-info-modify/profile-guide';
import BusinessDatePopup from 'src/components/mypage/my-portfolio-list/business-date-popup';
import CheckSchedulePopup from 'src/components/mypage/my-portfolio-list/check-schedule-popup';
import PersonalDatePopup from 'src/components/mypage/my-portfolio-list/personal-date-popup';
import RegularDatePopup from 'src/components/mypage/my-portfolio-list/regular-date-popup';
import {
  businessDateStore,
  checkScheduleStore,
  personalDateStore,
  regularDateStore,
} from 'src/status/store';

import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const dateName = ['개인일정', '업무일정', '협찬제공일정', '제출완료일정'];

const MyScheduling: NextPageWithLayout<Props> = () => {
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
  const [checkSchedule, checkScheduleState] = checkScheduleStore(state => [
    state.checkSchedule,
    state.checkScheduleState,
  ]);

  const [currentCheck, setCurrentCheck] = useState(-1);

  // 검색 관련 state
  const [searchResult, setSearchResult] = useState(false);

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
          className='h-[67px] pr-[14.27%] text-[25px] font-bold leading-[67px] text-[#2c2c2c] first:pl-[55px] last:pr-0 lg:pr-[104px] xl:pr-[167px]'
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
              className='relative h-[50px] w-[28px] cursor-pointer py-[50px] pr-[14.27%] text-left text-[#2c2c2c] lg:pr-[104px] lg:text-[25px] xl:h-[115px] xl:pr-[191px] [&:nth-child(7n)]:pr-0 [&:nth-child(7n)]:text-[#8586db] [&:nth-child(7n+1)]:pl-[55px] [&:nth-child(7n+1)]:text-[#f97090]'
              onClick={regularDateState}
            >
              <span className='relative z-[10]'>{i + 1}</span>
            </div>,
          );
        }
      } else {
        dayArr.push(
          <div className='h-[50px] w-[14.27%] lg:w-[104px] lg:text-[25px] xl:h-[90px] xl:w-[200px]' />,
        );
      }
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);

  return (
    <>
      <div className='mx-auto w-full px-[20px] py-[100px] text-[#fff] lg:w-[1040px] lg:px-0 2xl:w-[1420px]'>
        <b className='block border-b border-b-[#fff] border-opacity-[0.8] pb-[25px] text-center text-[25px] text-[#ffffff] 2xl:text-[30px]'>
          나의 스케줄링
        </b>
        <div className='relative mx-auto mt-[50px] w-full rounded-[20px] bg-[#fdf9f6] px-[72px] py-[43px] lg:w-[728px] xl:w-[1040px] 2xl:w-[1420px]'>
          <div className='flex items-center justify-between'>
            <select className='h-[50px] w-[212px] rounded-[5px] border border-[#ccc] bg-[#fdf9f6] bg-[url(/assets/icons/accordian-arrow-open.webp)] bg-[length:38px_38px] bg-[right_10px_top_6px] bg-no-repeat pl-[12px] text-[25px] font-[500] text-[#2c2c2c]'>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
            <b className='block text-center text-[30px] font-bold text-[#f97090]'>
              {selectedMonth}월
            </b>
            <div className='relative'>
              <form
                onSubmit={e => {
                  e.preventDefault();

                  setSearchResult(true);
                }}
              >
                <input
                  className='h-[50px] w-[317px] rounded-[5px] border border-[#cccccc] bg-[#fdf9f6] px-[12px] text-[20px] text-[#000] placeholder:text-[#ccc]'
                  placeholder='검색'
                />
                <button>
                  <Image
                    src='/assets/icons/search-icon.webp'
                    alt='검색 아이콘'
                    width={48}
                    height={48}
                    className='absolute right-[5px] top-0'
                  />
                </button>
              </form>
            </div>
          </div>
          {searchResult ? (
            <div>
              <div className='mt-[50px] border-b border-[#cccccc] pb-[10px]'>
                <span className='text-[18px] font-[500] text-[#2d2d2d]'>7월 15일 토요일</span>
              </div>
              <ul>
                <li className='flex items-center pt-[15px] before:block before:h-[25px] before:w-[5px] before:bg-[#cccccc]'>
                  <b className='ml-[20px] text-[20px] text-[#2d2d2d]'>다람이 전시회 (미정)</b>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div className='mt-[30px] flex rounded-tl-[10px] rounded-tr-[10px] border border-[#cccccc] bg-[#ffcbd7]'>
                {returnWeek()}
              </div>
              <div className='border-t-none flex flex-wrap border border-[#cccccc]'>
                {returnDay()}
                {(currentCheck === 0 || currentCheck === -1) && (
                  <>
                    <div
                      className='absolute left-[116px] top-[394px] hidden h-[30px] w-[433px] bg-[#8fe1ff] pl-[8px] pt-[5px] text-left text-[13px] font-[500] text-[#2c2c2c] md:block'
                      onClick={businessDateState}
                    >
                      [개인일정] 강릉 여행
                    </div>
                    <div
                      className='absolute left-[500px] top-[435px] hidden h-[30px] w-[417px] bg-[#ffabab] pl-[8px] pt-[5px] text-left text-[13px] font-[500] text-[#2c2c2c] md:block'
                      onClick={businessDateState}
                    >
                      [개인일정] 춘천 여행
                    </div>
                    <div
                      className='absolute left-[320px] top-[515px] hidden h-[30px] w-[417px] bg-[#a4f4a2] pl-[8px] pt-[5px] text-left text-[13px] font-[500] text-[#2c2c2c] md:block'
                      onClick={businessDateState}
                    >
                      [개인일정] 병가중
                    </div>
                  </>
                )}
                {(currentCheck === 1 || currentCheck === -1) && (
                  <div
                    className='absolute left-[890px] top-[515px] hidden h-[30px] w-[417px] bg-[#dcddff] pl-[8px] pt-[5px] text-left text-[13px] font-[500] text-[#2c2c2c] md:block'
                    onClick={checkScheduleState}
                  >
                    [협찬제공일정] 알라메종 / 제품협찬
                  </div>
                )}
                {(currentCheck === 2 || currentCheck === -1) && (
                  <div
                    className='absolute left-[510px] top-[625px] hidden h-[30px] w-[223px] bg-[#ffcbd7] pl-[8px] pt-[5px] text-left text-[13px] font-[500] text-[#2c2c2c] md:block'
                    onClick={checkScheduleState}
                  >
                    [제출완료일정] 알라메종/...
                  </div>
                )}
                {(currentCheck === 3 || currentCheck === -1) && (
                  <div
                    className='absolute left-[316px] top-[744px] hidden h-[30px] w-[417px] bg-[#ffcea9] pl-[8px] pt-[5px] text-left text-[13px] font-[500] text-[#2c2c2c] md:block'
                    onClick={personalDateState}
                  >
                    [진행중일정] 제목 / 협찬방식
                  </div>
                )}
              </div>
            </>
          )}
          <div>
            <button className='absolute left-[48%] top-[53px] ml-[-90px]' onClick={prevMonth}>
              <Image
                src='/assets/icons/calendar-arrow-left.webp'
                alt='왼쪽 화살표'
                width={32}
                height={32}
              />
            </button>
            <button className='absolute right-[55%] top-[53px] mr-[-90px]' onClick={nextMonth}>
              <Image
                src='/assets/icons/calendar-arrow-right.webp'
                alt='오른쪽 화살표'
                width={32}
                height={32}
              />
            </button>
          </div>
          {!searchResult && (
            <>
              <ul className='mb-[14px] mt-[30px] flex items-center gap-[30px]'>
                {dateName.map((v, i) => (
                  <li
                    key={i}
                    className='group flex cursor-pointer items-center'
                    onClick={() => setCurrentCheck(i)}
                  >
                    <div
                      className={`relative h-[23px] w-[23px] cursor-pointer rounded-full border-[2px] border-[#cccccc] text-[19px] font-[500] text-[#2c2c2c] before:absolute before:left-[-2px] before:top-[-3px] before:h-[24px] before:w-[23px] before:rounded-full before:bg-[#cccccc] before:bg-[url(/assets/icons/scheduling-check-icon.webp)] before:bg-[length:17px_17px] before:bg-center before:bg-no-repeat group-[&:nth-child(2)]:border-[#ffcea9] group-[&:nth-child(3)]:border-[#dcddff] group-[&:nth-child(4)]:border-[#ffcbd7] group-[&:nth-child(2)]:before:bg-[#ffcea9] group-[&:nth-child(3)]:before:bg-[#dcddff] group-[&:nth-child(4)]:before:bg-[#ffcbd7]
                    ${currentCheck === i ? 'before:block' : 'before:hidden'}
                    `}
                    />
                    <span className='ml-[10px] text-[#2c2c2c]'>{v}</span>
                  </li>
                ))}
              </ul>
              <span className='text-[17px] font-[500] text-[#2c2c2c]'>
                * 체크박스 선택 시 해당 내용에 대한 일정들이 보여집니다.
              </span>
            </>
          )}
        </div>
      </div>
      <RegularDatePopup />
      <BusinessDatePopup />
      <PersonalDatePopup />
      <CheckSchedulePopup />
    </>
  );
};

MyScheduling.getLayout = page => <Layout>{page}</Layout>;

export default MyScheduling;
