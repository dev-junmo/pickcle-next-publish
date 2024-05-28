import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode, useEffect } from 'react';
import { businessDateStore, checkScheduleStore, personalDateStore } from 'src/status/store';
import * as Switch from '@radix-ui/react-switch';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
}

export default function CheckSchedulePopup({ triggerChildren, children, ...props }: Props) {
  const [checkSchedule, checkScheduleState] = checkScheduleStore(state => [
    state.checkSchedule,
    state.checkScheduleState,
  ]);
  const [dateChanged, setDateChanged] = useState(false);
  const [currentColor, setCurrentColor] = useState(3);
  const [modifyAction, setModifyAction] = useState(false);

  return (
    <div>
      <RadixDialog.Root {...props} open={checkSchedule} onOpenChange={checkScheduleState}>
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          <RadixDialog.Content className='fixed left-1/2 top-1/2 z-[101] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-white p-[50px] text-center md:w-[610px]'>
            {/* h2 태그 */}
            <RadixDialog.Title className='text-[25px] font-bold text-[2d2d2d]'>
              일정 확인
            </RadixDialog.Title>
            <div className='mt-[50px] pl-[50px]'>
              <ul className='flex items-center justify-start gap-[150px]'>
                <li className='flex items-center'>
                  <label htmlFor='supporter-check' className='flex items-center md:items-start'>
                    <input
                      checked
                      disabled
                      type='checkbox'
                      id='supporter-check'
                      className='peer hidden'
                    />
                    <span className='mr-[10px] inline-block h-[30px] w-[30px] shrink-0 rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:18px_18px]' />
                    <span className='text-[20px] font-[500] text-[#000] lg:text-[20px]'>
                      서포터
                    </span>
                  </label>
                </li>
                {/* <li className='flex items-center'>
                  <label htmlFor='maker-check' className='flex items-center'>
                    <input type='checkbox' id='maker-check' className='peer hidden' />
                    <span className='mr-[10px] inline-block h-[30px] w-[30px] shrink-0 rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:18px_18px]' />
                    <span className='text-[20px] font-[500] text-[#000] sm:w-auto'>
                      메이커
                    </span>
                  </label>
                </li> */}
              </ul>
            </div>
            <div className='mt-[50px] pl-[50px]'>
              <ul className='flex items-center justify-start gap-[52px]'>
                <li className='flex items-center'>
                  <label
                    htmlFor='business-radio'
                    className='relative flex items-center md:items-start'
                  >
                    <input
                      defaultChecked
                      type='radio'
                      id='business-radio'
                      className='peer hidden'
                      name='date-radio'
                      value='업무 일정'
                      onChange={() => setDateChanged(prev => !prev)}
                    />
                    <span className='relative mr-[10px] inline-block h-[28px] w-[28px] shrink-0 rounded-full border border-[#c0c0c0] p-[6px] before:hidden before:h-[14px] before:w-[14px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                    <span className='text-[20px] font-[500] text-[#000] lg:text-[20px]'>
                      협찬 제공 일정
                    </span>
                  </label>
                </li>
                <li className='flex items-center'>
                  <label htmlFor='personal-radio' className='relative flex items-center'>
                    <input
                      type='radio'
                      id='personal-radio'
                      className='peer hidden'
                      name='date-radio'
                      value='개인 일정'
                      onChange={() => setDateChanged(prev => !prev)}
                    />
                    <span className='relative mr-[10px] inline-block h-[28px] w-[28px] shrink-0 rounded-full border border-[#c0c0c0] p-[6px] before:hidden before:h-[14px] before:w-[14px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                    <span className='text-[20px] font-[500] text-[#000] sm:w-auto'>
                      제출 완료 일정
                    </span>
                  </label>
                </li>
              </ul>
            </div>
            <div className='mt-[50px] flex items-center pl-[50px]'>
              <b className='mr-[10px] block w-[80px] shrink-0 text-left text-[20px] font-bold text-[#2d2d2d]'>
                브랜드명
              </b>
              <span className='text-[18px] font-[500]'>알라메종</span>
            </div>
            <div className='mt-[50px] flex items-center pl-[50px]'>
              <b className='mr-[10px] block w-[80px] shrink-0 text-left text-[20px] font-bold text-[#2d2d2d]'>
                협찬방식
              </b>
              <span className='text-[18px] font-[500]'>제품 협찬</span>
            </div>
            <div className='mt-[50px] flex items-center pl-[50px]'>
              <b className='mr-[10px] block w-[80px] shrink-0 text-left text-[20px] font-bold text-[#2d2d2d]'>
                제품 협찬
              </b>
              <span className='text-[18px] font-[500]'>2023-05-30 ~2023-05-30</span>
            </div>
            <p className='my-[50px] pl-[50px] text-[14px] font-[500] text-[#2d2d2d]'>
              * 해당 스케줄은 수정/삭제가 불가하며, 확인용 스케쥴 입니다. <br />
              진행기간 연장 요청은 <span className='text-[#f97090]'>1:1문의 하기</span>를 통해
              부탁드립니다.
            </p>
            <div className='flex items-center justify-center gap-[56px]'>
              <button
                className='h-[49px] w-[136px] rounded-[10px] bg-[#8586db] text-[20px] font-bold text-[#fff]'
                onClick={() => checkScheduleState(false)}
              >
                확인
              </button>
            </div>
            {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
            <RadixDialog.Close asChild>
              <button className='absolute right-[45px] top-[30px] h-[23px] w-[23px] bg-[url(/assets/icons/close-btn03.webp)]' />
            </RadixDialog.Close>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </div>
  );
}
