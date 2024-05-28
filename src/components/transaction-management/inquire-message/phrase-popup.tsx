import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode, useEffect, useCallback } from 'react';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
  phraseInnerPopup: boolean;
  setPhraseInnerPopup: (open: boolean) => void;
}

export default function PhrasePopup({
  triggerChildren,
  children,
  setPhraseInnerPopup,
  phraseInnerPopup,
  ...props
}: Props) {
  return (
    <div>
      <RadixDialog.Root {...props} open={phraseInnerPopup} onOpenChange={setPhraseInnerPopup}>
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          <RadixDialog.Content className='fixed left-1/2 top-1/2 z-[101] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white px-[20px] pb-[30px] pt-[15px] text-center md:w-[405px]'>
            <RadixDialog.Title className='text-[20px] font-[500] text-[2d2d2d]'>
              자주 쓰는 문구
            </RadixDialog.Title>
            <div className='mt-[15px] border-t border-[#cccccc]'>
              <div className='mb-[20px] mt-[5px] text-left after:clear-both after:block'>
                <label className='mb-[5px] block text-[16px] font-[500] text-[#2d2d2d]'>제목</label>
                <input className='h-[40px] w-full border border-[#cccccc]' />
                <span className='float-right text-[14px] font-[500] text-[#2d2d2d]'>0/20</span>
              </div>
              <div className='text-left after:clear-both after:block'>
                <label className='mb-[5px] block text-[16px] font-[500] text-[#2d2d2d]'>
                  상세 메세지
                </label>
                <textarea className='h-[124px] w-full border border-[#cccccc]' />
                <span className='float-right text-[14px] font-[500] text-[#2d2d2d]'>0/3000</span>
              </div>
            </div>
            <div>
              <button
                className='mr-[35px] mt-[30px] h-[32px] w-[100px] rounded-[5px] border border-[#707070] bg-[#fff] text-[16px] font-[500] text-[#2d2d2d] sm:mr-[65px]'
                onClick={() => setPhraseInnerPopup(false)}
              >
                저장
              </button>
              <button
                className='mt-[30px] h-[32px] w-[100px] rounded-[5px] bg-[#8586db] text-[16px] font-[500] text-[#fff]'
                onClick={() => setPhraseInnerPopup(false)}
              >
                바로 사용
              </button>
            </div>
            {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
            <RadixDialog.Close asChild>
              <button className='absolute right-[25px] top-[23px] h-[23px] w-[23px] bg-[url(/assets/icons/close-btn03.webp)]' />
            </RadixDialog.Close>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </div>
  );
}
