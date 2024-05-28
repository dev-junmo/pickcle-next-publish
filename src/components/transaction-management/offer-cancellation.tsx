import * as RadixAlert from '@radix-ui/react-alert-dialog';
import { useState, type ReactNode } from 'react';

interface Props extends RadixAlert.AlertDialogProps {
  triggerChildren?: ReactNode;
  offerCancellationPopup: boolean;
  setOfferCancellationPopup: (open: boolean) => void;
}

export default function OfferCancellation({
  triggerChildren,
  children,
  offerCancellationPopup,
  setOfferCancellationPopup,
  ...props
}: Props) {
  return (
    <RadixAlert.Root
      {...props}
      open={offerCancellationPopup}
      onOpenChange={setOfferCancellationPopup}
    >
      {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
      {triggerChildren && <RadixAlert.Trigger asChild>{triggerChildren}</RadixAlert.Trigger>}
      <RadixAlert.Portal>
        <RadixAlert.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
        <RadixAlert.Content className='fixed left-1/2 top-1/2 z-[101] w-[405px] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-white px-[14px] py-[40px]'>
          {/* p 태그 */}
          <RadixAlert.Description className='border-y border-[#cccccc] py-[60px] text-center'>
            <b className='text-[20px] font-[500] text-[#2d2d2d]'>제안 신청을 취소하시겠습니까?</b>
          </RadixAlert.Description>
          <div>{children}</div>
          <div className='mt-[28px] flex items-center justify-center'>
            <RadixAlert.Cancel className='mr-[65px] h-[32px] w-[100px] rounded-[5px] border border-[#707070] bg-[#fff] text-[16px] font-[500] text-[#2d2d2d]'>
              취소
            </RadixAlert.Cancel>
            <RadixAlert.Cancel className='h-[32px] w-[100px] rounded-[5px] bg-[#f97090] text-[16px] font-[500] text-[#fff]'>
              확인
            </RadixAlert.Cancel>
          </div>
          {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
          <RadixAlert.Cancel asChild>
            <button className='absolute right-[14px] top-[10px] h-[23px] w-[23px] bg-[url(/assets/icons/close-btn03.webp)] bg-contain' />
          </RadixAlert.Cancel>
        </RadixAlert.Content>
      </RadixAlert.Portal>
    </RadixAlert.Root>
  );
}
