import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import { PopupCalendar } from 'src/components/popup-calendar';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
  previewOpen: boolean;
  setPreviewOpen: (open: boolean) => void;
  userType: string;
}

export default function PreviewPopup({
  triggerChildren,
  children,
  previewOpen,
  userType,
  setPreviewOpen,
  ...props
}: Props) {
  const [detailedGuide, setDetailedGuide] = useState(false);

  return (
    <RadixDialog.Root {...props} open={previewOpen} onOpenChange={open => setPreviewOpen(false)}>
      {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
      {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
        {detailedGuide ? (
          <RadixDialog.Content className='no-scrollbar fixed bottom-0 left-0 z-[101] h-[70%] overflow-y-scroll rounded-tl-[30px] rounded-tr-[30px] bg-white px-[34px] pb-[50px] text-center md:left-1/2 md:top-1/2 md:h-[90%] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[60px]'>
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

            <div className='min-h-[970px] scrollbar-thumb-[#e7e7e7a6]'>
              <div className='mt-[35px] text-left'>
                <b className='text-[25px]'>서비스</b>
                {userType === 'reviewer' ? (
                  <div className='mt-[27px] flex items-center gap-[70px]'>
                    <div>
                      <span className='text-[18px] text-[#2d2d2d]'>선호 SNS 채널 : 인스타그램</span>
                    </div>
                    <div>
                      <span className='text-[18px] text-[#2d2d2d]'>카테고리 : 뷰티</span>
                    </div>
                    <div>
                      <span className='text-[18px] text-[#2d2d2d]'>제공 협찬방식 : 제품협찬</span>
                    </div>
                  </div>
                ) : (
                  <div className='mt-[27px] flex items-center gap-[70px]'>
                    <div>
                      <span className='text-[18px] text-[#2d2d2d]'>
                        .대표 SNS 채널 : 인스타그램
                      </span>
                    </div>
                    <div>
                      <span className='text-[18px] text-[#2d2d2d]'>대표 카테고리 : 뷰티</span>
                    </div>
                  </div>
                )}
              </div>
              <div className='mt-[68px] pr-[24px] text-left'>
                <b className='text-[25px] text-[#2d2d2d]'>
                  {userType === 'reviewer' ? '제품/서비스 이미지' : '어필 이미지'}
                </b>
                <div className='block lg:flex'>
                  <div className='relative mr-[50px] mt-[20px]'>
                    <Image
                      src='/assets/images/advertiser-thumb-img01.webp'
                      alt='브랜드 썸네일'
                      width={330}
                      height={330}
                    />
                  </div>
                  <div className='mt-[20px] flex gap-[10px] lg:block'>
                    <div className='mb-[15px] flex h-[100px] w-[100px] items-center justify-center'>
                      <Image
                        src='/assets/images/advertiser-thumb-img02.webp'
                        alt='브랜드 썸네일'
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className='mb-[15px] flex h-[100px] w-[100px] items-center justify-center'>
                      <Image
                        src='/assets/images/advertiser-thumb-img03.webp'
                        alt='브랜드 썸네일'
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className='mb-[15px] flex h-[100px] w-[100px] items-center justify-center'>
                      <Image
                        src='/assets/images/advertiser-thumb-img04.webp'
                        alt='브랜드 썸네일'
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-[68px] pr-[24px] text-left'>
                <b className='text-[25px] text-[#2d2d2d]'>
                  {userType === 'reviewer' ? '제품/서비스명' : '어필 콘텐츠'}
                </b>
                <p className='ml-[7px] mt-[37px] text-[18px] text-[#2d2d2d]'>
                  {userType === 'reviewer'
                    ? '[한율] 어린쑥 진정 플루이드'
                    : 'http://www.techb.kr/12354896'}
                </p>
              </div>
              <div className='mt-[50px] pr-[24px] text-left'>
                <b className='text-[25px] text-[#2d2d2d]'>
                  상세 {userType === 'reviewer' ? '설명' : '어필'}
                </b>
                <p className='mb-[30px] mt-[20px] pl-[25px] text-[16px] font-semibold text-[#2d2d2d]'>
                  좋아하는 유튜버분께서 이 수분크림을 너무 잘 사용하셔서 나도 따라 구매. <br />
                  했는데 결론부터 말하면 나랑은 잘.. 안 맞음. 일단 수분이 금방 날라가는 느낌을
                  받았음. <br />
                  지성피부라 수분감이 그렇게 간절하지는 않은데 내 피부에 있는 수분을 같이 가져가는
                  느낌. <br />
                  (그래서 젤 타입 수분크림을 선호하지 않는 편) 자고 일어나면 피부가 건조한 느낌을
                  받았음. <br />
                  그치만 사용감은 좋았음. 금방 날아갈 것 같지 않은 질감에다가(그런.. 척이었지만){' '}
                  <br />
                  바르고나면 산뜻해서 마음에 들었음. 아 그리고 가끔 이 냄새가 그리워서 괜히 바르기도
                  함. <br />막 엄청 좋고 이런 것보다 그냥 향이 그리움..ㅎ
                </p>
              </div>
              <button
                className={`mt-[100px] h-[57px] w-[250px] rounded-[10px] text-[20px] font-bold text-[#fff] ${
                  userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
                }`}
                onClick={() => setPreviewOpen(false)}
              >
                확인
              </button>
            </div>
          </RadixDialog.Content>
        ) : (
          <RadixDialog.Content className='no-scrollbar fixed bottom-0 left-0 z-[101] h-[70%] w-full overflow-y-scroll rounded-tl-[30px] rounded-tr-[30px] bg-white px-[30px] pb-[50px] pt-[40px] text-center md:left-1/2 md:top-1/2 md:h-[90%] md:w-[70%] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[60px] md:px-[50px] xl:w-[50%] 2xl:px-[11px]'>
            <RadixDialog.Title className='border-b border-b-[#2d2d2d] px-[20px] pb-[30px] pt-[10px] font-bold text-[2d2d2d] sm:px-[40px]'>
              <div className='flex items-center gap-[35px]'>
                <Image
                  alt='썸네일'
                  width={100}
                  height={100}
                  className='aspect-square h-[100px] rounded-full'
                  src={
                    userType === 'reviewer'
                      ? '/assets/images/advertiser-thumb-img04.webp'
                      : '/assets/images/best-reviewer-img1.webp'
                  }
                />
                <b className='text-[25px] font-semibold text-[#2d2d2d]'>
                  {userType === 'reviewer' ? '나그참파' : '드로세라'}
                </b>
              </div>
            </RadixDialog.Title>

            <div className='mt-[50px] text-left 2xl:px-[45px]'>
              <b className='mb-[30px] inline-block text-[25px] text-[#2d2d2d]'>제안자 정보</b>
              <ul>
                <li className='mb-[36px]'>
                  <span className='mr-[25px] inline-block w-[105px] text-[20px]'>닉네임</span>
                  <b className='text-[18px] text-[#f97090]'>
                    {userType === 'reviewer' ? '드로세라' : '나그참파'}
                  </b>
                </li>
                <li className=''>
                  <span className='mr-[25px] inline-block w-[105px] text-[20px]'>휴대폰 번호</span>
                  <b className='text-[18px] text-[#f97090]'>010-****-0227</b>
                </li>
              </ul>
            </div>

            <div className='mt-[50px] 2xl:px-[40px]'>
              <b className='mb-[30px] block text-left text-[25px] text-[#2d2d2d]'>진행 스케줄</b>
              <PopupCalendar userType={userType} previewVersion={true} />
            </div>

            <div
              className='mt-[50px] flex cursor-pointer items-center sm:ml-[40px]'
              onClick={() => setDetailedGuide(true)}
            >
              <b className='text-[20px] sm:text-[25px]'>
                {userType === 'reviewer' ? '제품 상세 가이드 보기' : '어필 가이드 보기'}
              </b>
              <Image
                src='/assets/icons/link-icon.webp'
                alt='상세 가이드 아이콘'
                width={20}
                height={20}
                className='ml-[10px]'
              />
            </div>

            <div className='mt-[50px] 2xl:px-[40px]'>
              <b className='mb-[25px] block text-left text-[25px]'>
                지급 {userType === 'reviewer' ? '금액' : '포인트'}
              </b>
              <div className='mt-[20px] rounded-[10px] border border-[#2d2d2d] px-[10px] py-[20px] text-[14px] md:p-[30px] md:text-[16px]'>
                <ul className='mb-[30px] px-[10px]'>
                  <li className='mb-[30px] flex justify-between text-[18px] font-[500] text-[#2d2d2d] sm:text-[20px]'>
                    <span>제안 포인트</span>
                    <span className='font-bold'>200,000 P</span>
                  </li>
                  <li className='flex justify-between'>
                    <div className='relative flex items-center'>
                      <span className='text-[18px] font-[500] text-[#2d2d2d] sm:text-[20px]'>
                        수수료
                      </span>
                      <Image
                        src='/assets/icons/help-icon.webp'
                        alt='도움말 아이콘'
                        width={15}
                        height={20}
                        className='peer ml-[5px]'
                      />
                      <div className='absolute left-[88px] top-[-7px] hidden w-[305px] rounded-[10px] bg-[#c0c0c0] px-[14px] py-[8px] before:absolute before:left-[-15px] before:top-[15px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[10px] before:border-t-[5px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[#c0c0c0] before:border-t-[transparent] peer-hover:block'>
                        <p className='text-left text-[12px]'>
                          할인 적용된 주문금액의 3.5%(VAT포함) <br />
                          플랫폼 운영 등 다양한 서비스 제공을 위해 사용 됩니다.
                        </p>
                      </div>
                    </div>
                    <span className='text-[18px] text-[#2d2d2d] sm:text-[20px]'>-500 P</span>
                  </li>
                </ul>
                <div className='flex justify-between gap-[10px] border-t border-[#2d2d2d] pt-[20px] text-[18px] font-[500] sm:px-[10px] sm:text-[20px]'>
                  <span className='font-[500] text-[#f97090]'>
                    총 결제 예정 금액 <span className='text-[#2d2d2d]'>(VAT 포함)</span>
                  </span>
                  <span className='font-bold text-[#f97090]'>199,500 P</span>
                </div>
              </div>
            </div>

            <div className='mt-[50px]'>
              <button
                className={`leading-[57px[ h-[57px] w-[250px] rounded-[10px] text-[20px] font-bold text-[#fff] ${
                  userType === 'reviewer' ? 'bg-[#f97090]' : 'bg-[#8586db]'
                }`}
              >
                확인
              </button>
            </div>

            {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
            <RadixDialog.Close asChild>
              <button className='absolute right-[37px] top-[42px] h-[32px] w-[32px] bg-[url(/assets/icons/close-btn02.webp)]' />
            </RadixDialog.Close>
          </RadixDialog.Content>
        )}
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
