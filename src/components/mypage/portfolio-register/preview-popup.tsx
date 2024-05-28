import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, type ReactNode, useEffect } from 'react';
import { PortfolioDetailDescription } from 'src/components/portfolio-detail/portfolio-detail-description';
import { ProfileImages } from 'src/components/portfolio-detail/profile-images';
import { ProfileInfo } from 'src/components/portfolio-detail/profile-info';
import { Regulation } from 'src/components/proposal/regulation';
import { supporter } from 'src/mockData';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
  showPreviewPopup: boolean;
  setShowPreviewPopup: (open: boolean) => void;
  contentType?: string;
  userType: string;
}

export default function PreviewPopup({
  triggerChildren,
  children,
  setShowPreviewPopup,
  showPreviewPopup,
  contentType,
  userType,
  ...props
}: Props) {
  const [userReviewerInfo, setUserReviewerInfo] = useState<any>(supporter.reviewerInfo);
  const [userAdvertiserInfo, setUserAdvertiserInfo] = useState<any>(supporter.advertiserInfo);

  return (
    <div>
      <RadixDialog.Root {...props} open={showPreviewPopup} onOpenChange={setShowPreviewPopup}>
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          <RadixDialog.Content className='no-scrollbar fixed left-1/2 top-1/2 z-[101] h-[90%] w-[95%] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-[20px] border border-[#ccc] bg-[#101010] p-[50px] text-left 2xl:w-[1400px]'>
            <div className='mx-auto w-full text-[#fff] sm:px-[30px]'>
              <div
                className={`mb-[75px] mt-[100px] flex flex-col items-center justify-center gap-[100px] ${
                  userType === 'reviewer' ? 'lg:flex-row' : 'lg:flex-row-reverse '
                }`}
              >
                <div>
                  <Image
                    alt='프로필 이미지'
                    width={400}
                    height={400}
                    className='h-[400px] rounded-[10px] object-cover'
                    src={
                      userType === 'reviewer'
                        ? userReviewerInfo?.portfolioDetail?.profileImage[0]
                        : userAdvertiserInfo?.portfolioDetail?.profileImage[0]
                    }
                  />
                  {userType === 'reviewer' ? (
                    <ul className='mt-[25px] flex items-center justify-center gap-[10px] sm:gap-[28px]'>
                      {userReviewerInfo?.portfolioDetail?.profileImage.map((p: any, i: number) => (
                        <li key={i}>
                          <Image
                            src={p}
                            alt='리뷰어 프로필 이미지'
                            width={58}
                            height={58}
                            className='h-[58px] cursor-pointer object-cover'
                          />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className='mt-[25px] flex items-center justify-center gap-[10px] sm:gap-[28px]'>
                      {userAdvertiserInfo?.portfolioDetail?.profileImage.map(
                        (p: any, i: number) => (
                          <li key={i}>
                            <Image
                              src={p}
                              alt='리뷰어 프로필 이미지'
                              width={58}
                              height={58}
                              className='h-[58px] cursor-pointer object-cover'
                            />
                          </li>
                        ),
                      )}
                    </ul>
                  )}
                </div>
                <div className='w-full text-center md:w-[445px]'>
                  <div className='flex justify-center gap-[30px] rounded-[10px] border border-[#fff] pb-[56px] pt-[66px] sm:gap-[50px]'>
                    <div>
                      <b className='block text-[14px] text-[#fff] sm:text-base'>
                        {contentType === 'maker' ? '콘텐츠 종류' : 'SNS 채널'}
                      </b>
                      <Image
                        alt='인스타그램 아이콘'
                        width={70}
                        height={70}
                        className='mx-auto'
                        src={
                          contentType === 'maker'
                            ? '/assets/icons/portfolio-vedio-icon.webp'
                            : '/assets/icons/portfolio-instagram-icon.webp'
                        }
                      />
                    </div>
                    <div>
                      <b className='mb-[20px] block text-[14px] text-[#fff] sm:text-base'>
                        카테고리
                      </b>
                      <span className='inline-block rounded-[14px] bg-[#fff] px-[8px] py-[2px] text-[14px] font-bold text-[#000] sm:text-[16px]'>
                        {userType === 'reviewer'
                          ? userReviewerInfo?.portfolioDetail?.category
                          : userAdvertiserInfo?.portfolioDetail?.category}
                      </span>
                    </div>
                    <div>
                      <b className='mb-[20px] block text-[14px] text-[#fff] sm:text-base'>
                        {userType === 'reviewer' ? '선호' : '제공'} 협찬 방식
                      </b>
                      <span className='inline-block rounded-[14px] border border-[#fff] px-[8px] py-[2px] text-[14px] font-bold text-[#fff] sm:text-[16px]'>
                        {userType === 'reviewer'
                          ? userReviewerInfo?.portfolioDetail?.preferSponsorshipWay
                          : userAdvertiserInfo?.portfolioDetail?.preferSponsorshipWay}
                      </span>
                    </div>
                  </div>
                  <div className='mt-[20px] flex flex-col items-center justify-center rounded-[10px] border border-[#fff] px-[20px] pb-[35px] pt-[40px] sm:px-[60px]'>
                    <Image
                      alt='프로필 이미지'
                      width={100}
                      height={100}
                      className='h-[100px] rounded-[50%] object-cover'
                      src={
                        userType === 'reviewer'
                          ? userReviewerInfo?.portfolioDetail?.profileImage[0]
                          : userAdvertiserInfo?.portfolioDetail?.profileImage[0]
                      }
                    />
                    <b className='mt-[8px] inline-block text-[18px] text-[#fff]'>drosena9705</b>
                    <div className='mt-[30px] flex w-full items-center justify-between'>
                      <div className='flex items-center'>
                        <Image
                          src='/assets/icons/sns-channel-instagram.webp'
                          alt='인스타그램 아이콘'
                          width={30}
                          height={30}
                        />
                        <span className='ml-[5px] text-[16px] text-[#fff] sm:ml-[15px] sm:text-[18px]'>
                          인스타그램
                        </span>
                      </div>
                      <span className='text-[16px] font-bold text-[#fff] sm:text-[18px]'>
                        3,200,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-left'>
                <strong className='text-[24px] text-[#f97090] sm:text-[30px]'>
                  {userType === 'reviewer' ? '포트폴리오' : '브랜드 제품 소개서'} 01
                </strong>
                <p className='mt-[30px] text-[20px] font-bold sm:text-[25px]'>
                  {userType === 'reviewer'
                    ? userReviewerInfo?.portfolioDetail?.title
                    : userAdvertiserInfo?.portfolioDetail?.title}
                </p>
                <div className='mt-[25px] w-full border-t border-[#fff] pb-[45px] pt-[50px]'>
                  <b className='block text-[20px] font-bold sm:text-[25px]'>상세설명</b>
                  <div className='block justify-between xl:flex'>
                    {userType === 'reviewer' ? (
                      <div>
                        <p className='mt-[30px] text-[16px] font-bold sm:text-[18px]'>
                          5.1만 인스타그래머, 8년차 네이버 인플루언서 블로거 입니다. <br />
                          퀄리티 높은 사진과 정성 담은 포스팅 원고 내용으로 보답 하겠습니다. <br />
                          20회 이상의 서포터즈, 2000회 이상의 포스팅 <br />
                          경험을 바탕으로 정성을 담아 작업 합니다 😄 <br />
                        </p>
                        <p className='mt-[30px] text-[16px] font-bold sm:text-[18px]'>
                          ✅코스메틱&미용 전문 인플루언서인 만큼 <br />
                          제품 컷은 물론 사용 과정과 비포애프터 까지 확실하게! <br />
                          ✅기본 서비스 구성 <br />
                          제품 사진 3~4장 연출 컷 <br />
                          제품 사용 중, 전/후 사진 <br />
                          제품과 함께 찍은 얼굴 노출 사진 <br />
                          제품 제형 및 패키지를 보여주는 짧은 영상 <br />
                        </p>
                        <p className='mt-[30px] text-[16px] font-bold sm:text-[18px]'>
                          평균적으로 리뷰/콘텐츠 완성까지 5일 정도 소요됩니다! <br />
                          요청사항에 가이드라인 및 원하시는 컨셉을 같이 적어주세요. <br />
                          그 외에 협의 사항도 전달 주시면 협의 가능합니다! <br />
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className='mt-[30px] text-[16px] font-bold sm:text-[18px]'>
                          프랑스어로 &#39;아름다운산&#39;을 뜻하는 몽벨의 컨셉은 Light&Fast&#39;,
                          &#39;Function is Beauty&#39; <br />
                          입니다. 몽벨은 보이기 위한 화려함보다는 품질을 최우선으로 하고 있습니다.
                        </p>
                        <p className='mt-[30px] text-[16px] font-bold sm:text-[18px]'>
                          몽벨만의 기술력은 어떠한 자연 환경에서도 항상 쾌적한 활동을 보장하기 위해{' '}
                          <br />
                          1g의 헛된 무게도 허용하지 않는 초 경량성에 기본하여 전문가를 위한 의류와
                          용품을 공급 <br />
                          합니다.
                        </p>
                        <p className='mt-[30px] text-[16px] font-bold sm:text-[18px]'>
                          ✅코스메틱&미용 전문 인플루언서인 만큼 <br />
                          제품 컷은 물론 사용 과정과 비포애프터 까지 확실하게! <br />
                          ✅기본 서비스 구성 <br />
                          제품 사진 3~4장 연출 컷 <br />
                          제품 사용 중, 전/후 사진 <br />
                          제품과 함께 찍은 얼굴 노출 사진 <br />
                          제품 제형 및 패키지를 보여주는 짧은 영상
                        </p>
                        <p className='mt-[30px] text-[16px] font-bold sm:text-[18px]'>
                          평균적으로 리뷰/콘텐츠 완성까지 5일 정도 소요됩니다! <br />
                          요청사항에 가이드라인 및 원하시는 컨셉을 같이 적어주세요. <br />그 외에
                          협의 사항도 전달 주시면 협의 가능합니다!
                        </p>
                      </div>
                    )}
                    <div className='mt-[50px] xl:mt-0 2xl:pr-[110px]'>
                      <div className='rounded-[10px] border border-[#fff] px-[28px] pb-[24px] pt-[20px]'>
                        <b className='text-[18px] sm:text-[20px]'>링크보기</b>
                        <ul className='mt-[20px]'>
                          <li className='relative mb-[15px] pl-[17px] before:absolute before:left-0 before:top-[8px] before:block before:h-[8px] before:w-[8px] before:rounded-[50%] before:bg-[#fff]'>
                            <a
                              href='https://youtu.be/3xoVnO1CW5w'
                              target='_blank'
                              className={`break-all text-[16px] font-bold ${
                                userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8e8eff]'
                              }`}
                            >
                              https://youtu.be/3xoVnO1CW5w
                            </a>
                          </li>
                          <li className='relative pl-[17px] before:absolute before:left-0 before:top-[8px] before:block before:h-[8px] before:w-[8px] before:rounded-[50%] before:bg-[#fff]'>
                            <a
                              href='https://www.instagram.com/p/CqP6k3zLzi'
                              target='_blank'
                              className={`break-all text-[16px] font-bold ${
                                userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8e8eff]'
                              }`}
                            >
                              https://www.instagram.com/p/CqP6k3zLzi
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span className='mt-[7px] inline-block text-[12px] text-[#fff]'>
                        {userType === 'reviewer'
                          ? '* 리뷰어가 추가로 어필한 링크를 확인해보세요'
                          : '* 브랜드에서 원하는 느낌의 콘텐츠를 미리 확인해 보세요'}
                      </span>
                      <div className='mt-[50px] rounded-[10px] border border-[#fff] px-[28px] pb-[24px] pt-[20px]'>
                        <b className='text-[18px] sm:text-[20px]'>파일다운로드</b>
                        <ul className='mt-[20px]'>
                          <li className='relative mb-[15px] pl-[17px] before:absolute before:left-0 before:top-[8px] before:block before:h-[8px] before:w-[8px] before:rounded-[50%] before:bg-[#fff]'>
                            <a
                              download
                              href='/assets/icons/sns-channel-instagram.webp'
                              className={`flex items-center text-[16px] font-bold ${
                                userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8e8eff]'
                              }`}
                            >
                              0415_hanyul.zip
                              <Image
                                src='/assets/icons/preview-link-icon.webp'
                                alt='링크 아이콘'
                                width={20}
                                height={20}
                                className='ml-[10px]'
                              />
                            </a>
                          </li>
                          <li className='relative pl-[17px] before:absolute before:left-0 before:top-[8px] before:block before:h-[8px] before:w-[8px] before:rounded-[50%] before:bg-[#fff]'>
                            <a
                              download
                              href='/assets/icons/sns-channel-instagram.webp'
                              className={`flex items-center text-[16px] font-bold ${
                                userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8e8eff]'
                              }`}
                            >
                              2022_papare.zip
                              <Image
                                src='/assets/icons/preview-link-icon.webp'
                                alt='링크 아이콘'
                                width={20}
                                height={20}
                                className='ml-[10px]'
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span className='mt-[7px] inline-block text-[12px] text-[#fff]'>
                        {userType === 'reviewer'
                          ? '* 리뷰어가 추가로 어필한 파일을 다운로드해보세요'
                          : '* 브랜드를 소개하는 파일을 미리 확인해보세요'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-[100px] block justify-between border-t border-[#fff] pt-[44px] text-[#fff] xl:flex xl:gap-[107px] 2xl:gap-[137px]'>
                <div>
                  <b className='text-[20px] font-bold sm:text-[25px]'>
                    취소 / 환불 및 포인트 지급 규정
                  </b>
                  <p className='mt-[30px] text-[14px] sm:text-[16px]'>
                    제안 취소는 거래 시작 전까지 가능합니다.
                  </p>
                  <p className='mt-[25px] text-[14px] sm:text-[16px]'>
                    거래가 시작되면 거래 취소는 절대 불가하며, 부득이한 상황이 생기는 경우 <br />{' '}
                    고객센터 1:1문의하기를 통해 취소 사유를 남겨주시면 심사를 통해 처리됩니다.
                  </p>
                  <p className='mt-[25px] text-[14px] sm:text-[16px]'>
                    서비스 거래 진행 과정은 아래와 같아요. 참고하여 서비스 거래를 진행해주세요.{' '}
                    <br /> [ 제안 &#62; 조율 &#62; 진행중(거래 시작) &#62; 제출 &#62; 컨펌 &#62;
                    지급완료 ]
                  </p>
                  <p className='mt-[25px] text-[14px] sm:text-[16px]'>
                    결과물 제출 후 광고주의 컨펌 완료 시 포인트 지급이 완료됩니다. <br /> 단,
                    자동컨펌기간 내에 컨펌이 안되는 경우 자동컨펌 및 포인트 지급 되오니 유의하시기
                    바랍니다.
                  </p>
                </div>
                <div className='mt-[70px] md:mr-[80px] xl:mt-0'>
                  <b className='text-[20px] font-bold sm:text-[25px]'>
                    콘텐츠 거래 저작권 및 유지기간 규정
                  </b>
                  <p className='mt-[30px] text-[14px] sm:text-[16px]'>
                    콘텐츠 저작권은 회사와 광고주에게 있으며, 정해진 유지기간 불이행시 <br /> 패널티
                    및 불이익이 있을 수 있습니다.
                  </p>
                </div>
              </div>
              <button className='mx-auto mb-[50px] block h-[50px] w-[250px] rounded-[5px] bg-[#8586db] text-[20px] font-bold'>
                확인
              </button>
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
