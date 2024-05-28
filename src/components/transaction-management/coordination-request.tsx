import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode, useEffect, useCallback } from 'react';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
  coordinationRequestPopup: boolean;
  setCoordinationRequestPopup: (open: boolean) => void;
  userType: string;
}

export default function CoordinationRequest({
  triggerChildren,
  children,
  setCoordinationRequestPopup,
  coordinationRequestPopup,
  userType,
  ...props
}: Props) {
  const [calendarOpen, setcalendarOpen] = useState(false);
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
        <caption className='mb-[20px] text-[20px] font-bold text-[#f97090]'>
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
                  className='h-[57px] w-[57px] border border-[#cccccc] pl-[5px] pt-[5px] text-left align-top text-[14px] [&:nth-child(7n)]:text-[#8586db] [&:nth-child(7n+1)]:text-[#f97090]'
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
    <div>
      <RadixDialog.Root
        {...props}
        open={coordinationRequestPopup}
        onOpenChange={setCoordinationRequestPopup}
      >
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          {calendarOpen ? (
            <RadixDialog.Content className='fixed left-1/2 top-1/2 z-[101] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white px-[60px] py-[20px] text-center md:w-[716px]'>
              <div className='relative flex items-center justify-between gap-[50px]'>
                <div className='absolute left-[0] top-[3px] h-[30px] w-[144px] rounded-[5px] border border-[#cccccc] pl-[10px] text-left'>
                  <span className='text-[10px] font-[500] text-[#2d2d2d]'>티르티르</span>
                </div>
                <ul className='absolute right-[6px] top-[24px] flex items-center justify-center'>
                  <li className='mr-[10px] flex items-center'>
                    <span className='mr-[10px] inline-block h-[10px] w-[10px] rounded-full bg-[#ffcbd7]' />
                    <span className='text-[10px]'>협찬제공일정</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='mr-[10px] inline-block h-[10px] w-[10px] rounded-full bg-[#dcddff]' />
                    <span className='text-[10px]'>제출완료일정</span>
                  </li>
                </ul>
                <div className='relative w-full'>
                  {createCalendar(currentYear, currentMonth)}
                  <div className='absolute left-[85px] top-[236px] w-[340px] truncate bg-[#ffcbd7] pl-[5px] text-left text-[10px] text-[#2c2c2c]'>
                    [협찬제공일정] 샤넬뷰티 / 제품협찬
                  </div>
                  <div className='absolute left-[84px] top-[293px] w-[257px] truncate bg-[#dcddff] pl-[5px] text-left text-[10px] text-[#2c2c2c]'>
                    [제출완료일정] 샤넬뷰티 / 제품협찬
                  </div>
                  <button
                    className='absolute left-[241px] top-[1px] h-[30px] w-[30px] bg-[url(/assets/icons/calendar-popup-arrow-prev.webp)] bg-[length:30px_30px] bg-center bg-no-repeat text-[0px]'
                    onClick={() => {
                      handlePrevMonth();
                      setCurrentYear(prevYear => prevYear);
                    }}
                  >
                    이전 달
                  </button>
                  <button
                    className='absolute right-[244px] top-[1px] h-[30px] w-[30px] bg-[url(/assets/icons/calendar-popup-arrow-next.webp)] bg-[length:30px_30px] bg-center bg-no-repeat text-[0px]'
                    onClick={() => {
                      handleNextMonth();
                      setCurrentYear(prevYear => prevYear);
                    }}
                  >
                    다음 달
                  </button>
                </div>
              </div>
              <button
                className={`mx-auto mt-[20px] block h-[27px] w-[100px] rounded-[5px] text-[12px] font-[500] text-[#fff] ${
                  userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
                }`}
                onClick={() => setcalendarOpen(false)}
              >
                확인
              </button>
              {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
              <RadixDialog.Close asChild>
                <button className='absolute right-[25px] top-[23px] h-[23px] w-[23px] bg-[url(/assets/icons/close-btn03.webp)]' />
              </RadixDialog.Close>
            </RadixDialog.Content>
          ) : (
            <RadixDialog.Content className='fixed left-1/2 top-1/2 z-[101] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white px-[20px] pb-[30px] pt-[15px] text-center md:w-[405px]'>
              <RadixDialog.Title className='text-[20px] font-[500] text-[2d2d2d]'>
                조율 요청
              </RadixDialog.Title>
              <div className='mt-[15px] border-y border-[#cccccc] px-[40px] py-[45px]'>
                <ul>
                  <li className='mb-[14px] flex justify-between'>
                    <span className='text-[16px] font-[500] text-[#2d2d2d]'>조율 요청 포인트</span>
                    <b className='text-[16px] font-[500] text-[#f97090]'>150,000 P</b>
                  </li>
                  <li className='flex justify-between'>
                    <span>조율 요청 스케쥴</span>
                    <button onClick={() => setcalendarOpen(true)}>
                      <Image
                        src='/assets/icons/mypage-calendar-icon.webp'
                        alt='달력 아이콘'
                        width={30}
                        height={30}
                        className='mr-[28px]'
                      />
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  className='mr-[65px] mt-[30px] h-[32px] rounded-[5px] border border-[#707070] bg-[#fff] px-[20px] text-[16px] font-[500] text-[#2d2d2d]'
                  onClick={() => setCoordinationRequestPopup(false)}
                >
                  조율 거절
                </button>
                <button
                  className={`mt-[30px] h-[32px] rounded-[5px] px-[20px] text-[16px] font-[500] text-[#fff] ${
                    userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
                  }`}
                  onClick={() => setCoordinationRequestPopup(false)}
                >
                  조율 수락
                </button>
              </div>
              {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
              <RadixDialog.Close asChild>
                <button className='absolute right-[25px] top-[23px] h-[23px] w-[23px] bg-[url(/assets/icons/close-btn03.webp)]' />
              </RadixDialog.Close>
            </RadixDialog.Content>
          )}
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </div>
  );
}
