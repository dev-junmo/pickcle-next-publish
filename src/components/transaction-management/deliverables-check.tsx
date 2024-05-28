import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode, useEffect, useCallback } from 'react';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
  deliverablesCheck: boolean;
  setDeliverablesCheck: (open: boolean) => void;
}

export default function Deliverablescheck({
  triggerChildren,
  children,
  setDeliverablesCheck,
  deliverablesCheck,
  ...props
}: Props) {
  return (
    <div>
      <RadixDialog.Root {...props} open={deliverablesCheck} onOpenChange={setDeliverablesCheck}>
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          <RadixDialog.Content className='no-scrollbar fixed bottom-0 left-0 z-[101] h-[65%] w-full overflow-y-scroll rounded-tl-[30px] rounded-tr-[30px] bg-white px-[20px] py-[50px] text-center md:left-1/2 md:top-1/2 md:h-[64%] md:w-[750px] md:-translate-x-1/2 md:-translate-y-1/2 md:overflow-y-hidden md:rounded-[20px] md:px-[30px]'>
            <div className='border border-[#cccccc] px-[15px] pb-[16px] pt-[20px]'>
              <b className='block text-left text-[25px] font-[500] text-[#2d2d2d] sm:text-[30px]'>
                결과물 확인
              </b>
              <div className='mt-[20px] flex items-center gap-[10px]'>
                <b className='text-[18px] text-[#2d2d2d] sm:text-[20px]'>드로세르나</b>
              </div>
              <div className='mt-[30px] text-left'>
                <b className='mb-[15px] block text-[14px] font-[500] text-[#2d2d2d] sm:text-[16px]'>
                  결과물 링크
                </b>
                <ul>
                  <li className='mb-[10px] text-[14px] font-[500] text-[#f97090] sm:text-[16px]'>
                    https://www.instagram.com/
                  </li>
                  <li className='mb-[10px] text-[14px] font-[500] text-[#f97090] sm:text-[16px]'>
                    https://www.instagram.com/
                  </li>
                  <li className='mb-[10px] text-[14px] font-[500] text-[#f97090] sm:text-[16px]'>
                    https://www.instagram.com/
                  </li>
                </ul>
              </div>
              <div className='mt-[60px] text-left'>
                <b className='mb-[15px] block text-[14px] font-[500] text-[#2d2d2d] sm:text-[16px]'>
                  결과물 파일
                </b>
                <ul>
                  <li className='mb-[10px] text-[14px] font-[500] text-[#f97090] sm:text-[16px]'>
                    instagram_tirtir.zip
                  </li>
                  <li className='mb-[10px] text-[14px] font-[500] text-[#f97090] sm:text-[16px]'>
                    youtube_tirtir.zip
                  </li>
                </ul>
              </div>
              <ul className='mt-[50px] text-left sm:mt-[80px]'>
                <li className='mb-[5px] text-[14px] font-[500] text-[#2d2d2d] sm:text-[16px]'>
                  * 결과물 확인 후 수정요청이 필요한 경우 수정요청 해주시길 바랍니다.
                </li>
                <li className='mb-[5px] text-[14px] font-[500] text-[#8586db] sm:text-[16px]'>
                  * 관련없는 허위 내용 제출 시 활동 점수 차감 및 패널티, 지급된 포인트의 2배를
                  청구할 수 있습니다.
                </li>
                <li className='mb-[5px] text-[14px] font-[500] text-[#8586db] sm:text-[16px]'>
                  * 업로드 된 파일은 회사는 가지고 있지 않으므로, 업로드 된 파일은 꼭 따로
                  저장해두시기 바랍니다.
                </li>
              </ul>
            </div>
            <div className='items-center justify-between sm:flex'>
              <button className='mx-auto mt-[30px] block h-[40px] w-[156px] rounded-[10px] bg-[#cccccc] text-[18px] font-[500] text-[#707070] sm:mt-[50px] sm:h-[50px] sm:w-[206px] sm:text-[20px]'>
                수정요청
              </button>
              <button className='mx-auto mt-[30px] block h-[40px] w-[156px] rounded-[10px] bg-[#8586db] text-[18px] font-[500] text-[#fff] sm:mt-[50px] sm:h-[50px] sm:w-[206px] sm:text-[20px]'>
                컨펌완료
              </button>
            </div>
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
