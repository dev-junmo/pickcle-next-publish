import * as RadixAlert from '@radix-ui/react-alert-dialog';
import { useState, type ReactNode } from 'react';

interface Props extends RadixAlert.AlertDialogProps {
  triggerChildren?: ReactNode;
  showConfirmationPopup: boolean;
  setConfirmationPopup: (open: boolean) => void;
}

export default function ConfirmationGuidance({
  triggerChildren,
  children,
  showConfirmationPopup,
  setConfirmationPopup,
  ...props
}: Props) {
  return (
    <RadixAlert.Root {...props} open={showConfirmationPopup} onOpenChange={setConfirmationPopup}>
      {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
      {triggerChildren && <RadixAlert.Trigger asChild>{triggerChildren}</RadixAlert.Trigger>}
      <RadixAlert.Portal>
        <RadixAlert.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
        <RadixAlert.Content className='fixed left-1/2 top-1/2 z-[101] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-white px-[14px] py-[40px] sm:w-[405px]'>
          {/* p 태그 */}
          <RadixAlert.Description className='border-y border-[#cccccc] py-[25px] text-center'>
            <b className='text-[16px] font-[500] text-[#2d2d2d]'>
              SNS 채널{' '}
              <span className='text-[#f97090]'>
                미인증 시 일부 서비스 <br />
                이용이 제한되며
              </span>
              , 등록한SNS 채널에 대한 <br />
              포트폴리오만 등록이 가능합니다. <br />
              1개 이상 꼭 인증해주세요. <br />
            </b>
          </RadixAlert.Description>
          <div>{children}</div>
          <RadixAlert.Action className='mx-auto mt-[28px] block h-[32px] w-[100px] rounded-[5px] bg-[#f97090] text-[16px] font-[500] text-[#fff]'>
            확인
          </RadixAlert.Action>
          {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
          <RadixAlert.Cancel asChild>
            <button className='absolute right-[14px] top-[10px] h-[23px] w-[23px] bg-[url(/assets/icons/close-btn03.webp)] bg-contain' />
          </RadixAlert.Cancel>
        </RadixAlert.Content>
      </RadixAlert.Portal>
    </RadixAlert.Root>
  );
}
