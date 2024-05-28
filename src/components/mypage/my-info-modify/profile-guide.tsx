import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode, useEffect } from 'react';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
  showProfileGuide: boolean;
  setShowProfileGuide: (open: boolean) => void;
  userType: string;
}

export default function ProfileGuide({
  triggerChildren,
  children,
  setShowProfileGuide,
  showProfileGuide,
  userType,
  ...props
}: Props) {
  return (
    <div>
      <RadixDialog.Root {...props} open={showProfileGuide} onOpenChange={setShowProfileGuide}>
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          <RadixDialog.Content className='fixed left-1/2 top-1/2 z-[101] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white p-[50px] text-center md:w-[780px]'>
            {/* h2 태그 */}
            <RadixDialog.Title className='text-[20px] font-bold text-[2d2d2d] sm:text-[24px] md:text-[30px]'>
              프로필 사진 가이드
            </RadixDialog.Title>

            <div className='mt-[50px] items-center justify-between gap-[10px] sm:flex md:gap-0'>
              <div>
                <Image
                  src='/assets/images/profile-guide-good.webp'
                  alt='프로필 사진 가이드 좋은 예시 이미지'
                  width={290}
                  height={290}
                  className='mx-auto'
                />
                <b className='text-[20px] font-bold text-[#2d2d2d]'>Good</b>
              </div>
              <div>
                <Image
                  src='/assets/images/profile-guide-bad.webp'
                  alt='프로필 사진 가이드 나쁜 예시 이미지'
                  width={290}
                  height={290}
                  className='mx-auto'
                />
                <b className='text-[20px] font-bold text-[#2d2d2d]'>Bad</b>
              </div>
            </div>

            <div className='mt-[30px] text-left'>
              <b className='text-[18px] font-bold text-[#2d2d2d] sm:text-[20px]'>
                ※ 등록 시 참고사항
              </b>
              <p className='mt-[10px] text-[14px] font-bold text-[#2d2d2d] sm:text-[16px]'>
                <span className={userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'}>
                  사진 예시 확인 후 광고주에게 어필하기 좋은 매력적인 이미지로 업로드 해주세요.
                </span>
                <br />
                단, 이미지가 일부 수정 되어 보여지는 점 양해부탁드립니다.
              </p>
              <b className='mt-[5px] block text-[14px] text-[#2d2d2d] sm:text-[16px]'>
                500*500 이상
              </b>
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
