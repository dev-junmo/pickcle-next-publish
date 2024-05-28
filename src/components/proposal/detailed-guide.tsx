import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import { PopupCalendar } from 'src/components/popup-calendar';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
  showPopupGuide: boolean;
  setShowPopupGuide: (open: boolean) => void;
  setGuideConfirm: (open: boolean) => void;
  guideConfirm: boolean;
  userType: string;
}

export default function DetailedGuide({
  triggerChildren,
  children,
  showPopupGuide,
  setShowPopupGuide,
  setGuideConfirm,
  userType,
  guideConfirm,
  ...props
}: Props) {
  const [currentInex, setCurrentIndex] = useState(0);
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <RadixDialog.Root
      {...props}
      open={showPopupGuide}
      onOpenChange={open => setShowPopupGuide(false)}
    >
      {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
      {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
        {calendarOpen ? (
          <RadixDialog.Content className='no-scrollbar fixed bottom-0 left-0 z-[101] h-[70%] w-full overflow-y-scroll rounded-tl-[30px] rounded-tr-[30px] bg-white px-[52px] pb-[50px] pt-[40px] text-center md:left-1/2 md:top-1/2 md:h-auto md:w-auto md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[30px]'>
            <RadixDialog.Title className='text-[18px] font-bold text-[2d2d2d] 2xl:text-[20px]'>
              [서포터] 협찬 제공 일정을 선택해 주세요.
            </RadixDialog.Title>

            <div className='mt-[50px]'>
              <PopupCalendar />
            </div>

            <div className='mt-[50px] block items-center gap-[35px] sm:flex'>
              <button className='mx-auto mb-[20px] block h-[34px] w-[142px] rounded-[5px] bg-[#c0c0c0] text-[16px] text-[#fff] sm:mb-0 sm:inline-block'>
                이전
              </button>
              <button
                className={`${
                  userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
                } mx-auto mb-[20px] block h-[34px] w-[142px] rounded-[5px] text-[16px] text-[#fff] sm:mb-0 sm:inline-block`}
                onClick={() => {
                  setShowPopupGuide(false);
                  setCalendarOpen(false);
                  setGuideConfirm(true);
                }}
              >
                확인
              </button>
            </div>

            {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
            <RadixDialog.Close asChild>
              <button className='absolute right-[27px] top-[32px] h-[24px] w-[24px] bg-[url(/assets/icons/close-btn02.webp)] bg-contain 2xl:right-[37px] 2xl:top-[42px] 2xl:h-[32px] 2xl:w-[32px]' />
            </RadixDialog.Close>
          </RadixDialog.Content>
        ) : (
          <RadixDialog.Content className='no-scrollbar fixed bottom-0 left-0 z-[101] h-[70%] w-full overflow-y-scroll rounded-tl-[30px] rounded-tr-[30px] bg-white pb-[50px] pl-[34px] pr-[53px] text-center md:left-1/2 md:top-1/2 md:h-[90%] md:w-auto md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[60px] 2xl:w-[825px]'>
            <div className='sticky left-0 top-0 z-[1000] w-full border-b border-[#2d2d2d] bg-[#fff] pt-[40px]'>
              {/* h2 태그 */}
              <RadixDialog.Title className='text-[30px] font-bold text-[2d2d2d]'>
                {userType === 'reviewer' ? '제품 상세가이드' : '어필 가이드'}
              </RadixDialog.Title>
              {/* p 태그 */}
              <RadixDialog.Description className='mb-[10px] text-[18px] font-bold'>
                {userType === 'reviewer' ? (
                  <span className='text-[#8586db]'>브랜드</span>
                ) : (
                  <span className='text-[#f97090]'>리뷰어</span>
                )}
                가 제안드려요
              </RadixDialog.Description>

              {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
              <RadixDialog.Close asChild>
                <button className='absolute right-0 top-[62px] h-[32px] w-[32px] bg-[url(/assets/icons/close-btn02.webp)]' />
              </RadixDialog.Close>
            </div>

            <div className='mr-[-34px] max-h-[970px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#e7e7e7a6]'>
              <div className='mt-[35px] pr-[24px] text-left'>
                <b className='text-[25px]'>서비스</b>
                {userType === 'reviewer' ? (
                  <div className='mt-[27px] block items-center gap-[30px] md:flex 2xl:gap-[50px]'>
                    <div className='flex-1 xl:flex-auto'>
                      <label className='inline-block w-[130px] text-[18px] text-[#2d2d2d] sm:w-full 2xl:w-auto 2xl:text-[20px]'>
                        선호 SNS 채널
                      </label>
                      <select className='mt-[10px] h-[40px] w-[120px] rounded-[5px] border border-[#868686] bg-[url(/assets/icons/select-arrow.webp)] bg-[length:20px_20px] bg-[right_5px_top_10px] bg-no-repeat pl-[10px] 2xl:ml-[5px] 2xl:mt-0'>
                        <option>유튜브</option>
                        <option>틱톡</option>
                        <option>인스타그램</option>
                        <option>블로그</option>
                      </select>
                    </div>
                    <div className='flex-1 xl:flex-auto'>
                      <label className='inline-block w-[130px] text-[18px] text-[#2d2d2d] sm:w-full 2xl:w-auto 2xl:text-[20px]'>
                        카테고리
                      </label>
                      <select className='mt-[10px] h-[40px] w-[120px] rounded-[5px] border border-[#868686] bg-[url(/assets/icons/select-arrow.webp)] bg-[length:20px_20px] bg-[right_5px_top_10px] bg-no-repeat pl-[10px] 2xl:ml-[5px] 2xl:mt-0'>
                        <option>여행</option>
                        <option>문화</option>
                        <option>디지털</option>
                        <option>맛집</option>
                        <option>생활</option>
                        <option>식품</option>
                        <option>패션</option>
                        <option>뷰티</option>
                        <option>키즈</option>
                      </select>
                    </div>
                    <div className='flex-1 xl:flex-auto'>
                      <label className='inline-block w-[130px] text-[18px] text-[#2d2d2d] sm:w-full 2xl:w-auto 2xl:text-[20px]'>
                        제공 협찬방식
                      </label>
                      <select className='mt-[10px] h-[40px] w-[120px] rounded-[5px] border border-[#868686] bg-[url(/assets/icons/select-arrow.webp)] bg-[length:20px_20px] bg-[right_5px_top_10px] bg-no-repeat pl-[10px] 2xl:ml-[5px] 2xl:mt-0'>
                        <option>제품 협찬</option>
                        <option>방문 협찬</option>
                        <option>NO 협찬</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div className='mt-[27px] block items-start gap-[30px] md:flex 2xl:gap-[50px]'>
                    <div className=''>
                      <label className='inline-block w-[130px] text-[18px] text-[#2d2d2d] sm:w-full 2xl:w-auto 2xl:text-[20px]'>
                        대표 SNS 채널
                      </label>
                      <select className='mt-[10px] h-[40px] w-[120px] rounded-[5px] border border-[#868686] bg-[url(/assets/icons/select-arrow.webp)] bg-[length:20px_20px] bg-[right_5px_top_10px] bg-no-repeat pl-[10px] 2xl:ml-[5px] 2xl:mt-0'>
                        <option>유튜브</option>
                        <option>틱톡</option>
                        <option>인스타그램</option>
                        <option>블로그</option>
                      </select>
                    </div>
                    <div className=''>
                      <label className='inline-block w-[130px] text-[18px] text-[#2d2d2d] sm:w-full 2xl:w-auto 2xl:text-[20px]'>
                        대표 카테고리
                      </label>
                      <select className='mt-[10px] h-[40px] w-[120px] rounded-[5px] border border-[#868686] bg-[url(/assets/icons/select-arrow.webp)] bg-[length:20px_20px] bg-[right_5px_top_10px] bg-no-repeat pl-[10px] 2xl:ml-[5px] 2xl:mt-0'>
                        <option>여행</option>
                        <option>문화</option>
                        <option>디지털</option>
                        <option>맛집</option>
                        <option>생활</option>
                        <option>식품</option>
                        <option>패션</option>
                        <option>뷰티</option>
                        <option>키즈</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
              <div className='mt-[68px] pr-[24px] text-left'>
                <b className='text-[25px] text-[#2d2d2d]'>
                  {userType === 'reviewer' ? '제품/서비스 이미지' : '어필 이미지'}
                </b>
                <p className='mt-[5px] text-[14px] text-[#f97090]'>
                  {userType === 'reviewer'
                    ? '대표 할 수 있는 사진을 등록해주세요.'
                    : '브랜드가 원하는 서비스에 어필 할 수 있는 대표 사진을 등록해주세요.'}
                </p>
                <div className='block md:flex'>
                  <div className='relative mt-[20px] before:absolute before:left-[68px] before:top-[61px] before:block before:rounded-[10px] before:bg-[#868686] before:px-[19px] before:py-[9px] before:text-[14px] before:text-[#fff] before:content-["대표\a이미지를\a등록해\a주세요"] sm:mr-[50px]'>
                    <button className='flex h-[330px] w-full items-center justify-center rounded-[10px] border border-[#cccccc] md:w-[330px]'>
                      <Image
                        src='/assets/icons/plus-btn.webp'
                        alt='플러스 버튼'
                        width={50}
                        height={50}
                      />
                    </button>
                  </div>
                  <div className='mt-[20px] flex gap-[10px] md:block'>
                    <button className='mb-[15px] flex h-[100px] w-full items-center justify-center border border-[#cccccc] md:w-[100px]'>
                      <Image
                        src='/assets/icons/plus-btn.webp'
                        alt='플러스 버튼'
                        width={30}
                        height={30}
                      />
                    </button>
                    <button className='mb-[15px] flex h-[100px] w-full items-center justify-center border border-[#cccccc] md:w-[100px]'>
                      <Image
                        src='/assets/icons/plus-btn.webp'
                        alt='플러스 버튼'
                        width={30}
                        height={30}
                      />
                    </button>
                    <button className='flex h-[100px] w-full items-center justify-center border border-[#cccccc] md:w-[100px]'>
                      <Image
                        src='/assets/icons/plus-btn.webp'
                        alt='플러스 버튼'
                        width={30}
                        height={30}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className='mt-[68px] pr-[24px] text-left'>
                <b className='text-[25px] text-[#2d2d2d]'>
                  {userType === 'reviewer' ? '제품/서비스명' : '어필 콘텐츠'}
                </b>
                {userType === 'advertiser' && (
                  <p className='mt-[5px] text-[14px] text-[#f97090]'>
                    * 브랜드가 원하는 서비스에 어필할 수 있는 대표 컨텐츠 링크를 등록해 주세요.
                  </p>
                )}
                <input
                  placeholder='제품/서비스명을 입력해주세요.'
                  className={`w-full rounded-[5px] border border-[#c0c0c0] px-[20px] py-[10px] text-[14px] placeholder:text-[#c0c0c0] ${
                    userType === 'reviewer' ? 'mt-[30px]' : 'mt-[10px]'
                  }`}
                />
              </div>
              <div className='mt-[50px] pr-[24px] text-left'>
                <b className='text-[25px] text-[#2d2d2d]'>
                  상세 {userType === 'reviewer' ? '설명' : '어필'}
                </b>
                <p className='my-[10px] text-[14px] text-[#f97090]'>
                  {userType === 'reviewer'
                    ? '*해당 서비스에 대해 요청하고자 하는 부분을 상세하게 입력 부탁드립니다.'
                    : '*해당 브랜드에게 어필하고 자신있게 선보일 수 있는 부분을 상세하게 적어주세요.'}
                </p>
                <textarea className='h-[360px] w-full rounded-[10px] border border-[#868686] px-[20px] py-[17px]' />
              </div>
              <div className='mt-[30px] block items-center pr-[24px] text-left xl:flex'>
                <b className='mb-[10px] mr-[37px] block xl:mb-0'>제출 완료 일정</b>
                <ul className='flex flex-wrap items-center gap-[20px]'>
                  {Array.from({ length: 5 }, (_, i) => i).map((v, i) => (
                    <li key={v}>
                      <button
                        className={`h-[34px] w-[68px] rounded-[5px] font-bold ${
                          v === currentInex
                            ? 'border border-[#f97090] bg-[#f97090] text-[#fff]'
                            : 'border border-[#707070] bg-[#fff] text-[#2d2d2d]'
                        }`}
                        onClick={() => setCurrentIndex(v)}
                      >
                        +{v + 1}일
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <p className='mt-[5px] pr-[24px] text-left text-[14px] text-[#f97090]'>
                * 제출완료일정을 클릭 하시고, 협찬제공일정을 선택 하시면 자동으로 제출완료 일정이
                계산됩니다.
              </p>
              {guideConfirm ? (
                <div className='mt-[50px]'>
                  <button
                    className='mr-[30px] mt-[25px] h-[57px] w-[150px] rounded-[10px] bg-[#f97090] text-[20px] font-bold leading-[58px] text-[#fff] 2xl:mr-[110px] 2xl:w-[250px]'
                    onClick={() => {
                      setShowPopupGuide(false);
                    }}
                  >
                    수정
                  </button>
                  <button
                    className='mt-[25px] h-[57px] w-[150px] rounded-[10px] bg-[#868686] text-[20px] font-bold leading-[58px] text-[#fff] 2xl:w-[250px]'
                    onClick={() => {
                      setShowPopupGuide(false);
                    }}
                  >
                    확인
                  </button>
                </div>
              ) : (
                <button
                  className={`mt-[25px] h-[57px] w-[250px] rounded-[10px] text-[20px] font-bold leading-[58px] text-[#fff] ${
                    userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
                  }`}
                  onClick={() => {
                    setCalendarOpen(true);
                    // setShowPopupGuide(false)
                  }}
                >
                  다음
                </button>
              )}
            </div>
          </RadixDialog.Content>
        )}
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
