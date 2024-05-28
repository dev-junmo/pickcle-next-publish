import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode, useEffect, useCallback } from 'react';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
  deliverablesSubmission: boolean;
  setDeliverablesSubmission: (open: boolean) => void;
}

export default function DeliverablesSubmission({
  triggerChildren,
  children,
  setDeliverablesSubmission,
  deliverablesSubmission,
  ...props
}: Props) {
  return (
    <div>
      <RadixDialog.Root
        {...props}
        open={deliverablesSubmission}
        onOpenChange={setDeliverablesSubmission}
      >
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          <RadixDialog.Content className='no-scrollbar fixed bottom-0 left-0 z-[101] h-[70%] w-full overflow-y-scroll rounded-tl-[30px] rounded-tr-[30px] bg-white px-[20px] py-[50px] text-center md:left-1/2 md:top-1/2 md:w-[750px] md:-translate-x-1/2 md:-translate-y-1/2 md:overflow-y-hidden md:rounded-[20px] md:px-[30px]'>
            <div className='border border-[#cccccc] px-[15px] pb-[16px] pt-[20px]'>
              <b className='block text-left text-[20px] font-[500] text-[#2d2d2d] md:text-[30px]'>
                결과물 제출
              </b>
              <div className='mt-[20px] flex items-center gap-[10px]'>
                <Image
                  src='/assets/images/advertiser-thumb-img01.webp'
                  alt='프로필'
                  width={50}
                  height={50}
                  className='rounded-full'
                />
                <b className='text-[18px] text-[#2d2d2d] md:text-[20px]'>몽벨</b>
              </div>
              <div className='mt-[30px] text-left'>
                <label className='mb-[15px] block text-[16px] font-[500] text-[#2d2d2d]'>
                  결과물 링크
                </label>
                <input
                  className='h-[50px] w-full rounded-[5px] border border-[#707070] pl-[15px] placeholder:text-[#cccccc]'
                  placeholder='링크를 입력해주세요'
                />
                <span className='mt-[5px] block text-[16px] font-[500] text-[#f97090]'>
                  https://www.instagram.com/
                </span>
              </div>
              <div className='mt-[60px] text-left'>
                <label className='mb-[15px] block text-[16px] font-[500] text-[#2d2d2d]'>
                  결과물 파일
                </label>
                <div className='shrink-0 gap-[5px] md:flex'>
                  <input
                    type='file'
                    className='h-[50px] w-full rounded-[5px] border border-[#707070] pl-[15px] placeholder:text-[#cccccc]'
                    placeholder='링크를 입력해주세요'
                  />
                  <button className='mt-[20px] h-[40px] w-[100px] rounded-[5px] bg-[#f97090] text-[16px] font-[500] text-[#fff] md:mt-0 md:h-[50px] md:w-[120px] md:text-[20px]'>
                    업로드
                  </button>
                </div>
                <span className='mt-[5px] block text-[16px] font-[500] text-[#f97090]'>
                  instagram_tirtir.zip
                </span>
              </div>
              <ul className='mt-[50px] text-left md:mt-[80px]'>
                <li className='mb-[10px] text-[14px] font-[500] text-[#8586db] md:text-[16px]'>
                  * 작업완료 된 콘텐츠 링크 또는 해당 화면을 캡쳐하여 이미지 업로드 해주세요.
                </li>
                <li className='mb-[10px] text-[14px] font-[500] text-[#8586db] md:text-[16px]'>
                  * 여러 파일인 경우 압축하여 업로드 해주세요.
                </li>
                <li className='mb-[10px] text-[14px] font-[500] text-[#8586db] md:text-[16px]'>
                  * 결과물 제출 후 수정요청이 온 경우 포인트 지급이 되지 않으며, 다시 제출해주세요.
                </li>
                <li className='mb-[10px] text-[14px] font-[500] text-[#8586db] md:text-[16px]'>
                  * 관련없는 허위 내용 제출 시 활동 점수 차감 및 패널티, 지급된 포인트의 2배를
                  청구할 수 있습니다.
                </li>
                <li className='text-[14px] font-[500] text-[#8586db] md:text-[16px]'>
                  * 업로드 된 파일은 회사는 가지고 있지 않으므로, 업로드 된 파일은 꼭 따로
                  저장해두시기 바랍니다.
                </li>
              </ul>
            </div>
            <button className='mx-auto mt-[50px] block h-[60px] w-full rounded-[10px] bg-[#8586db] text-[20px] font-[500] text-[#fff] md:w-[458px]'>
              제출
            </button>
            {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
            <RadixDialog.Close asChild>
              <button className='absolute right-[19px] top-[16px] h-[23px] w-[23px] bg-[url(/assets/icons/close-btn03.webp)]' />
            </RadixDialog.Close>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </div>
  );
}
