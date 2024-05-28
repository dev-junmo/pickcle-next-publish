import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode, useEffect } from 'react';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
  showPopupGrade: boolean;
  setShowPopupGrade: (open: boolean) => void;
}

export default function GradePopup({
  triggerChildren,
  children,
  setShowPopupGrade,
  showPopupGrade,
  ...props
}: Props) {
  return (
    <div>
      <RadixDialog.Root {...props} open={showPopupGrade} onOpenChange={setShowPopupGrade}>
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          <RadixDialog.Content className='no-scrollbar fixed bottom-0 left-0 z-[101] h-[70%] w-full overflow-y-scroll rounded-tl-[30px] rounded-tr-[30px] bg-white p-[50px] text-center md:left-1/2 md:top-1/2 md:h-[60%] md:w-[95%] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[20px] xl:w-[792px]'>
            <div className='mx-auto h-[100px] w-[100px] rounded-full border border-[#707070] bg-[#fff]' />
            <div className='mt-[40px] text-[18px] font-[500] text-[#2d2d2d] sm:text-[20px]'>
              <strong className='text-[20px] text-[#2d2d2d] sm:text-[25px]'>등산하는 정아</strong>{' '}
              님<p className='mt-[20px]'>현재 픽클 등급은 SILVER 입니다.</p>
            </div>
            <div className='mt-[50px] bg-[#ebebeb] px-[30px] py-[25px]'>
              <ul className='items-center md:flex'>
                <li className='flex justify-between border-r-[#cccccc] py-[15px] text-[16px] font-[500] md:mr-[30px] md:w-[237px] md:border-r md:pr-[30px]'>
                  <span>나의 참여 점수</span>
                  <b className='text-[#f97090]'>4</b>
                </li>
                <li className='flex justify-between border-r-[#cccccc] py-[15px] text-[16px] font-[500] md:mr-[30px] md:w-[237px] md:border-r md:pr-[30px]'>
                  <span>거래 완료 횟수</span>
                  <b className='text-[#f97090]'>
                    0 / <span className='text-[#2d2d2d]'>4</span>
                  </b>
                </li>
                <li className='flex justify-between py-[15px] text-[16px] font-[500] md:w-[237px]'>
                  <span>나의 출석</span>
                  <b className='text-[#f97090]'>
                    1 / <span className='text-[#2d2d2d]'>5</span>
                  </b>
                </li>
              </ul>
            </div>
            <div className='mt-[20px]'>
              <b className='block text-left text-[18px] text-[#2d2d2d] sm:text-[20px]'>
                9월 예정 등급
              </b>
              <ul className='mt-[20px] hidden w-full justify-between md:flex'>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(v => (
                  <li key={v} className='text-[20px] font-[500] text-[#cccccc]'>
                    {v}
                  </li>
                ))}
              </ul>
              <div className='mt-[10px] hidden h-[15px] w-full md:flex'>
                <div className='h-full w-[20%] bg-[#cccccc] xl:w-[118px]' />
                <div className='h-full w-[30%] bg-[#8586db] xl:w-[186px]' />
                <div className='h-full w-[50%] bg-[#f97090] xl:w-[394px]' />
              </div>
              <div className='hidden md:flex'>
                <div className='ml-[8%] mt-[5px] h-[30px] w-[30px] rounded-full border border-[#cccccc] bg-[#fff] xl:mx-[44px]' />
                <div className='ml-[23%] mt-[5px] h-[30px] w-[30px] rounded-full border border-[#cccccc] bg-[#fff] xl:mx-[77px]' />
                <div className='ml-[35%] mt-[5px] h-[30px] w-[30px] rounded-full border border-[#cccccc] bg-[#fff] xl:mx-[181px]' />
              </div>

              <div className='md:hidden'>
                <ul className='mt-[20px] flex justify-between'>
                  {Array.from({ length: 4 }, (_, i) => i + 1).map(v => (
                    <li key={v} className='text-[20px] font-[500] text-[#cccccc]'>
                      {v}
                    </li>
                  ))}
                </ul>
                <div className='h-[15px] w-full bg-[#cccccc]' />
                <div className='mx-auto mt-[5px] h-[50px] w-[50px] rounded-full border border-[#cccccc] bg-[#fff]' />
              </div>
              <div>
                <ul className='mt-[20px] flex justify-between md:hidden'>
                  {Array.from({ length: 6 }, (_, i) => i + 5).map(v => (
                    <li key={v} className='text-[20px] font-[500] text-[#cccccc]'>
                      {v}
                    </li>
                  ))}
                </ul>
                <div className='block h-[15px] w-full bg-[#8586db] md:hidden' />
                <div className='mx-auto mt-[5px] block h-[50px] w-[50px] rounded-full border border-[#cccccc] bg-[#fff] md:hidden' />
              </div>
              <div>
                <ul className='mt-[20px] flex justify-between md:hidden'>
                  {Array.from({ length: 10 }, (_, i) => i + 11).map(v => (
                    <li key={v} className='text-[20px] font-[500] text-[#cccccc]'>
                      {v}
                    </li>
                  ))}
                </ul>
                <div className='block h-[15px] w-full bg-[#f97090] md:hidden' />
                <div className='mx-auto mt-[5px] block h-[50px] w-[50px] rounded-full border border-[#cccccc] bg-[#fff] md:hidden' />
              </div>

              <ul className='mt-[35px] text-left text-[14px] font-[500] text-[#2d2d2d] sm:text-[16px]'>
                <li>
                  ＊제안신청/ 거래완료/ 평가하기를 통해 참여점수 1점을 쵝득하여 최대 20점까지 획득
                  하실 수 있습니다.
                </li>
                <li>＊매달 거래완료 횟수 달성 시 등급 및 활동점수가 부여됩니다.</li>
                <li>＊매달 1일 참여점수 및 거래 완료 횟수에 등급이 결정됩니다.</li>
                <li>
                  ＊<span className='text-[#f97090]'>픽클 등급 및 활동점수 산정 기준</span>은 내부
                  정책에 의해 수시로 변경 될 수 있습니다.
                </li>
              </ul>
            </div>
            {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
            <RadixDialog.Close asChild>
              <button className='absolute right-[45px] top-[30px] h-[32px] w-[32px] bg-[url(/assets/icons/close-btn02.webp)]' />
            </RadixDialog.Close>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </div>
  );
}
