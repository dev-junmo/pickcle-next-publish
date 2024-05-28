import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode, useEffect, useCallback } from 'react';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
  mannersEvaluationPopup: boolean;
  setMannersEvaluationPopup: (open: boolean) => void;
  userType: string;
}

export default function MannersEvaluation({
  triggerChildren,
  children,
  setMannersEvaluationPopup,
  mannersEvaluationPopup,
  userType,
  ...props
}: Props) {
  return (
    <div>
      <RadixDialog.Root
        {...props}
        open={mannersEvaluationPopup}
        onOpenChange={setMannersEvaluationPopup}
      >
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          <RadixDialog.Content className='fixed left-1/2 top-1/2 z-[101] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white px-[20px] py-[30px] text-center md:w-[405px]'>
            <RadixDialog.Title className='text-[20px] font-[500] text-[2d2d2d]'>
              매너 칭찬 평가
            </RadixDialog.Title>
            <select className='mt-[30px] h-[50px] w-full rounded-[5px] border border-[#cccccc] pl-[10px]'>
              <option>칭찬 문구 6개 중 선택해주세요</option>
            </select>
            <button
              className={`mt-[30px] h-[32px] w-[210px] rounded-[5px] text-[16px] font-[500] text-[#fff] ${
                userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
              }`}
              onClick={() => setMannersEvaluationPopup(false)}
            >
              확인
            </button>
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
