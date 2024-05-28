import * as RadixAlert from '@radix-ui/react-alert-dialog';
import { useRouter } from 'next/router';
import { useState, type ReactNode } from 'react';

interface Props extends RadixAlert.AlertDialogProps {
  triggerChildren?: ReactNode;
  showWithdrawalPopup: boolean;
  setShowWithdrawalPopup: (open: boolean) => void;
  userType: string;
}

export default function WithdrawalPopup({
  triggerChildren,
  children,
  showWithdrawalPopup,
  setShowWithdrawalPopup,
  userType,
  ...props
}: Props) {
  const [WithdrawalConfirm, setWithdrawalConfirm] = useState(false);
  const router = useRouter();

  return (
    <RadixAlert.Root {...props} open={showWithdrawalPopup} onOpenChange={setShowWithdrawalPopup}>
      {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
      {triggerChildren && <RadixAlert.Trigger asChild>{triggerChildren}</RadixAlert.Trigger>}
      <RadixAlert.Portal>
        <RadixAlert.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
        {WithdrawalConfirm ? (
          <RadixAlert.Content className='fixed left-1/2 top-1/2 z-[101] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-white px-[14px] py-[40px] sm:w-[405px]'>
            {/* p 태그 */}
            <RadixAlert.Description className='border-y border-[#cccccc] py-[60px] text-center'>
              <b className='text-[20px] font-[500] text-[#2d2d2d]'>회원 탈퇴가 완료 되었습니다.</b>
            </RadixAlert.Description>
            <div>{children}</div>
            <RadixAlert.Action
              className={`mx-auto mt-[28px] block h-[32px] w-[100px] rounded-[5px] text-[16px] font-[500] text-[#fff] ${
                userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
              }`}
              onClick={() => router.push('/')}
            >
              확인
            </RadixAlert.Action>
            {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
            <RadixAlert.Cancel asChild>
              <button className='absolute right-[14px] top-[10px] h-[23px] w-[23px] bg-[url(/assets/icons/close-btn03.webp)] bg-contain' />
            </RadixAlert.Cancel>
          </RadixAlert.Content>
        ) : (
          <RadixAlert.Content className='fixed left-1/2 top-1/2 z-[101] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-white px-[14px] py-[40px] sm:w-[405px]'>
            {/* p 태그 */}
            <RadixAlert.Description className='border-y border-[#cccccc] py-[60px] text-center'>
              <b className='text-[20px] font-[500] text-[#2d2d2d]'>회원 탈퇴 하시겠습니까?</b>
            </RadixAlert.Description>
            <div>{children}</div>
            <div className='mt-[28px] flex items-center justify-center'>
              <RadixAlert.Cancel className='mr-[65px] h-[32px] w-[100px] rounded-[5px] border border-[#707070] bg-[#fff] text-[16px] font-[500] text-[#2d2d2d]'>
                취소
              </RadixAlert.Cancel>
              <button
                className={`h-[32px] w-[100px] rounded-[5px] text-[16px] font-[500] text-[#fff] ${
                  userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
                }`}
                onClick={() => setWithdrawalConfirm(true)}
              >
                확인
              </button>
            </div>
            {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
            <RadixAlert.Cancel asChild>
              <button className='absolute right-[14px] top-[10px] h-[23px] w-[23px] bg-[url(/assets/icons/close-btn03.webp)] bg-contain' />
            </RadixAlert.Cancel>
          </RadixAlert.Content>
        )}
      </RadixAlert.Portal>
    </RadixAlert.Root>
  );
}
