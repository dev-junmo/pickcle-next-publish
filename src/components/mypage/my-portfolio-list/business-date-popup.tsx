import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode, useEffect } from 'react';
import { businessDateStore } from 'src/status/store';
import * as Switch from '@radix-ui/react-switch';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
}

export default function BusinessDatePopup({ triggerChildren, children, ...props }: Props) {
  const [businessDate, businessDateState] = businessDateStore(state => [
    state.businessDate,
    state.businessDateState,
  ]);
  const [dateChanged, setDateChanged] = useState(false);
  const [currentColor, setCurrentColor] = useState(0);
  const [modifyAction, setModifyAction] = useState(false);

  return (
    <div>
      <RadixDialog.Root {...props} open={businessDate} onOpenChange={businessDateState}>
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          <RadixDialog.Content className='no-scrollbar fixed bottom-0 left-0 z-[101] h-[70%] w-full overflow-x-scroll rounded-tl-[30px] rounded-tr-[30px] bg-white p-[30px] text-center sm:p-[50px] md:left-1/2 md:top-1/2 md:h-auto md:w-[610px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[10px]'>
            {/* h2 태그 */}
            <RadixDialog.Title className='text-[25px] font-bold text-[2d2d2d]'>
              일정 입력
            </RadixDialog.Title>
            <div className='mt-[30px] sm:pl-[50px]'>
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
                    <span className='mr-[30px] inline-block h-[30px] w-[30px] shrink-0 rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:18px_18px]' />
                    <span className='text-[20px] font-[500] text-[#000] sm:w-auto'>
                      메이커
                    </span>
                  </label>
                </li> */}
              </ul>
            </div>
            <div className='mt-[30px] sm:pl-[50px]'>
              <ul className='flex items-center justify-start gap-[150px]'>
                <li className='flex items-center'>
                  <label
                    htmlFor='business-radio'
                    className='relative flex items-center md:items-start'
                  >
                    <input
                      defaultChecked
                      disabled
                      type='radio'
                      id='business-radio'
                      className='peer hidden'
                      name='date-radio'
                      value='업무 일정'
                      onChange={() => setDateChanged(prev => !prev)}
                    />
                    <span className='relative mr-[10px] inline-block h-[28px] w-[28px] shrink-0 rounded-full border border-[#c0c0c0] p-[6px] before:hidden before:h-[14px] before:w-[14px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                    <span className='text-[20px] font-[500] text-[#000] lg:text-[20px]'>
                      업무 일정
                    </span>
                    <Image
                      src='/assets/icons/help-icon.webp'
                      alt='도움말 아이콘'
                      width={20}
                      height={20}
                      className='peer ml-[5px]'
                    />
                    <div className='absolute left-[-58px] top-[41px] hidden w-[301px] rounded-[10px] bg-[#c0c0c0] px-[14px] py-[8px] before:absolute before:left-[186px] before:top-[-14px] before:block before:border-b-[10px] before:border-l-[5px] before:border-r-[5px] before:border-t-[5px] before:border-b-[#c0c0c0] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[transparent] peer-hover:block'>
                      <p className='text-left text-[14px] font-[500] text-[#2d2d2d]'>
                        진행되고 있거나 진행예정인 일정으로 필수적으로 공개되어야 하는 일정이므로,
                        노출되고 싶지 않은 일정은 [개인일정]을 통해 입력해주세요.
                      </p>
                    </div>
                  </label>
                </li>
                {/* <li className='flex items-center'>
                  <label htmlFor='personal-radio' className='relative flex items-center'>
                    <input type='radio' id='personal-radio' className='peer hidden' name='date-radio' value='개인 일정' onChange={() => setDateChanged(prev => !prev)} />
                    <span className='relative mr-[10px] inline-block h-[28px] w-[28px] shrink-0 rounded-full border border-[#c0c0c0] before:hidden before:w-[14px] before:h-[14px] before:rounded-full before:bg-[#f97090] p-[6px] peer-checked:before:block' />
                    <span className='text-[20px] font-[500] text-[#000] sm:w-auto'>
                      개인 일정
                    </span>
                    <Image src='/assets/icons/help-icon.webp' alt='도움말 아이콘' width={20} height={20} className='peer ml-[5px]' />
                    <div className='absolute left-[-58px] top-[41px] hidden w-[275px] rounded-[10px] bg-[#c0c0c0] px-[14px] py-[8px] before:absolute before:left-[186px] before:top-[-14px] before:block before:border-b-[10px] before:border-l-[5px] before:border-r-[5px] before:border-t-[5px] before:border-b-[#c0c0c0] before:border-l-[transparent] before:border-t-[transparent] before:border-r-[transparent] peer-hover:block'>
                      <p className='text-[14px] text-[#2d2d2d] font-[500] text-left'>
                      휴가,병가,개인사유 등에 대한 일정이므로,
                      공개여부를 선택이 가능합니다.
                      </p>
                    </div>
                  </label>
                </li> */}
              </ul>
            </div>
            <div className='mt-[30px] flex items-center sm:pl-[50px]'>
              <b className='mr-[30px] block w-[80px] shrink-0 text-left text-[20px] font-bold text-[#2d2d2d]'>
                제목
              </b>
              {modifyAction ? (
                <input className='h-[50px] w-full rounded-[5px] border border-[#707070] bg-[#fff] pl-[15px]' />
              ) : (
                <span className='text-[18px] font-[500] text-[#2d2d2d]'>타사이트 폴로</span>
              )}
            </div>
            {!dateChanged && (
              <div className='mt-[30px] flex items-center sm:pl-[50px]'>
                <b className='mr-[30px] block w-[80px] shrink-0 text-left text-[20px] font-bold text-[#2d2d2d]'>
                  협찬 방식
                </b>
                {modifyAction ? (
                  <select className='h-[50px] w-full rounded-[5px] border border-[#707070] bg-[#fff] pl-[15px]'>
                    <option>제품협찬</option>
                  </select>
                ) : (
                  <span className='text-[18px] font-[500] text-[#2d2d2d]'>제품협찬</span>
                )}
              </div>
            )}
            <div className='mt-[30px] flex items-center sm:pl-[50px]'>
              <b className='mr-[30px] block w-[80px] shrink-0 text-left text-[20px] font-bold text-[#2d2d2d]'>
                날짜
              </b>
              {modifyAction ? (
                <>
                  <input
                    type='date'
                    className='mr-[5px] h-[40px] w-[150px] rounded-[5px] border border-[#707070] bg-[#fff] pl-[15px]'
                  />
                  -
                  <input
                    type='date'
                    className='ml-[5px] h-[40px] w-[150px] rounded-[5px] border border-[#707070] bg-[#fff] pl-[15px]'
                  />
                </>
              ) : (
                <span className='text-[18px] font-[500] text-[#2d2d2d]'>
                  2023-05-30 ~2023-05-30
                </span>
              )}
            </div>
            {/* {dateChanged && (
              <>
                <div className='flex items-center mt-[50px] sm:pl-[50px]'>
                  <b className='block w-[80px] text-[20px] font-bold text-[#2d2d2d] shrink-0 mr-[10px] text-left'>공개여부</b>
                  <Switch.Root
                    className='relative mt-[5px] block h-[30px] w-[64px] cursor-pointer rounded-full bg-[#8e8eff] outline-none data-[state=checked]:bg-[#ccc]'
                    id='airplane-mode'
                  >
                    <Switch.Thumb className='block h-[30px] w-[30px] translate-x-[33px] rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-0' />
                  </Switch.Root>
                </div>
                <div className='flex items-center mt-[50px] sm:pl-[50px]'>
                  <b className='block w-[80px] text-[20px] font-bold text-[#2d2d2d] shrink-0 mr-[10px] text-left'>컬러</b>
                  <ul className='flex items-center justify-center gap-[30px]'>
                    {Array.from({ length: 6 }, (_, i) => i + 1).map((v) => (
                      <li 
                        key={v} 
                        className={`relative text-[0px] w-[30px] h-[30px] rounded-full bg-[#ffdc00] [&:nth-child(2)]:bg-[#ffb2a6] [&:nth-child(3)]:bg-[#5dfc78] [&:nth-child(4)]:bg-[#00bbff] [&:nth-child(5)]:bg-[#c201c2] [&:nth-child(6)]:bg-[#7d7d7d] cursor-pointer before:w-[20px] before:h-[20px] before:absolute before:left-[5px] before:top-0 before:bg-[url(/assets/icons/color-check-icon.webp)] before:bg-[length:20px_20px] before:bg-no-repeat
                        ${currentColor === v ? 'before:block' : 'before:hidden'}
                        `}
                        onClick={() => setCurrentColor(v)}
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )} */}
            <div className='mt-[30px] flex items-start sm:pl-[50px]'>
              <b className='mr-[30px] block w-[80px] shrink-0 text-left text-[20px] font-bold text-[#2d2d2d]'>
                내용
              </b>
              {modifyAction ? (
                <textarea className='h-[253px] w-full rounded-[5px] border border-[#707070] bg-[#fff] pl-[15px]' />
              ) : (
                <span className='block text-left text-[18px] font-[500]'>
                  타 서비스 플랫폼을 통해 브랜드 폴로 <br />
                  제품을 협찬 받고 홍보진행
                </span>
              )}
            </div>
            <p className='mb-[50px] mt-[100px] text-[14px] font-[500] text-[#2d2d2d]'>
              <span className='text-[#8586db]'>제목/협찬방식/날짜/내용</span> 외에는 수정 및 삭제가
              불가하오니, 변경을 <br />
              원하시는 경우 삭제 후 재 등록해 주시길 바랍니다.
            </p>
            <div className='flex items-center justify-center gap-[56px]'>
              {!modifyAction && (
                <button
                  className='h-[49px] w-[136px] rounded-[10px] bg-[#66676e] text-[20px] font-bold text-[#fff]'
                  onClick={() => businessDateState(false)}
                >
                  삭제
                </button>
              )}
              {!modifyAction && (
                <button
                  className='h-[49px] w-[136px] rounded-[10px] border border-[#cccccc] bg-[#fff] text-[20px] font-bold text-[#2c2c2c]'
                  onClick={() => setModifyAction(true)}
                >
                  수정
                </button>
              )}
              <button
                className='h-[49px] w-[136px] rounded-[10px] bg-[#8586db] text-[20px] font-bold text-[#fff]'
                onClick={() => (modifyAction ? setModifyAction(false) : businessDateState(false))}
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
