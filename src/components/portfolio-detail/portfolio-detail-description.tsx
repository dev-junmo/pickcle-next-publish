import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supporter } from 'src/mockData';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const PortfolioDetailDescription: NextPageWithLayout<Props> = ({ userType }) => {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (userType === 'reviewer') {
      setUserInfo(supporter.reviewerInfo);
    } else {
      setUserInfo(supporter.advertiserInfo);
    }
  }, [userType]);

  return (
    <div>
      <strong className='text-[30px] text-[#f97090] md:pl-[37px]'>
        {userType === 'reviewer' ? '포트폴리오01' : '브랜드 제품 소개서 01'}
      </strong>
      <p className='mt-[30px] text-[25px] font-bold md:pl-[37px]'>
        {userInfo?.portfolioDetail?.title}
      </p>
      <div className='mt-[25px] w-full border-t border-[#fff] pb-[45px] pt-[50px] md:pl-[37px]'>
        <b className='block text-[25px] font-bold'>상세설명</b>
        <div className='block justify-between xl:flex'>
          {userType === 'reviewer' ? (
            <div>
              <p className='mt-[30px] text-[18px] font-bold'>
                5.1만 인스타그래머, 8년차 네이버 인플루언서 블로거 입니다. <br />
                퀄리티 높은 사진과 정성 담은 포스팅 원고 내용으로 보답 하겠습니다. <br />
                20회 이상의 서포터즈, 2000회 이상의 포스팅 <br />
                경험을 바탕으로 정성을 담아 작업 합니다 😄 <br />
              </p>
              <p className='mt-[30px] text-[18px] font-bold'>
                ✅코스메틱&미용 전문 인플루언서인 만큼 <br />
                제품 컷은 물론 사용 과정과 비포애프터 까지 확실하게! <br />
                ✅기본 서비스 구성 <br />
                제품 사진 3~4장 연출 컷 <br />
                제품 사용 중, 전/후 사진 <br />
                제품과 함께 찍은 얼굴 노출 사진 <br />
                제품 제형 및 패키지를 보여주는 짧은 영상 <br />
              </p>
              <p className='mt-[30px] text-[18px] font-bold'>
                평균적으로 리뷰/콘텐츠 완성까지 5일 정도 소요됩니다! <br />
                요청사항에 가이드라인 및 원하시는 컨셉을 같이 적어주세요. <br />
                그 외에 협의 사항도 전달 주시면 협의 가능합니다! <br />
              </p>

              <Link
                href='/supporter/reviewer/proposal-apply'
                className='mt-[48px] inline-block rounded-[10px] bg-[#f97090] px-[10px] py-[8px] text-[20px] text-[#fff]'
              >
                {userInfo?.name}님에게 제안하러 가기 &gt;&gt;
              </Link>
            </div>
          ) : (
            <div>
              <p className='mt-[30px] text-[18px] font-bold'>
                몽벨만의 기술력은 어떠한 자연 환경에서도 항상 쾌적한 활동을 보장하기 위해 <br />
                1g의 헛된 무게도 허용하지 않는 초 경량성에 기본하여 전문가를 위한 의류와 용품을 공급{' '}
                <br />
                합니다.
              </p>
              <p className='mt-[30px] text-[18px] font-bold'>
                ✅코스메틱&미용 전문 인플루언서인 만큼 <br />
                제품 컷은 물론 사용 과정과 비포애프터 까지 확실하게! <br />
                ✅기본 서비스 구성 <br />
                제품 사진 3~4장 연출 컷 <br />
                제품 사용 중, 전/후 사진 <br />
                제품과 함께 찍은 얼굴 노출 사진 <br />
                제품 제형 및 패키지를 보여주는 짧은 영상 <br />
              </p>
              <p className='mt-[30px] text-[18px] font-bold'>
                평균적으로 리뷰/콘텐츠 완성까지 5일 정도 소요됩니다! <br />
                요청사항에 가이드라인 및 원하시는 컨셉을 같이 적어주세요. <br />
                그 외에 협의 사항도 전달 주시면 협의 가능합니다! <br />
              </p>

              <Link
                href='/supporter/advertiser/proposal-apply'
                className='mt-[48px] inline-block rounded-[10px] bg-[#8586db] px-[10px] py-[8px] text-[20px] text-[#fff]'
              >
                {userInfo?.name}에게 제안하러 가기 &gt;&gt;
              </Link>
            </div>
          )}
          <div className='mt-[50px] xl:mt-0 2xl:pr-[150px]'>
            <div className='rounded-[10px] border border-[#fff] px-[28px] pb-[24px] pt-[20px]'>
              <b className='text-[20px]'>링크보기</b>
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
              <b className='text-[20px]'>파일다운로드</b>
              <ul className='mt-[20px]'>
                <li className='relative mb-[15px] pl-[17px] before:absolute before:left-0 before:top-[8px] before:block before:h-[8px] before:w-[8px] before:rounded-[50%] before:bg-[#fff]'>
                  <a
                    download
                    href='/assets/icons/sns-channel-instagram.webp'
                    className={`inline-flex items-center gap-[10px] break-all text-[16px] font-bold ${
                      userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8e8eff]'
                    }`}
                  >
                    0415_hanyul.zip
                    <Image
                      src='/assets/icons/file-down-icon.webp'
                      alt='파일 다운로드 아이콘'
                      width={20}
                      height={20}
                    />
                  </a>
                </li>
                <li className='relative pl-[17px] before:absolute before:left-0 before:top-[8px] before:block before:h-[8px] before:w-[8px] before:rounded-[50%] before:bg-[#fff]'>
                  <a
                    download
                    href='/assets/icons/sns-channel-instagram.webp'
                    className={`inline-flex items-center gap-[10px] break-all text-[16px] font-bold ${
                      userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8e8eff]'
                    }`}
                  >
                    2022_papare.zip
                    <Image
                      src='/assets/icons/file-down-icon.webp'
                      alt='파일 다운로드 아이콘'
                      width={20}
                      height={20}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <span className='mt-[7px] inline-block text-[12px] text-[#fff]'>
              {userType === 'reviewer'
                ? '* 리뷰어가 추가로 어필한 링크를 확인해보세요'
                : '* 브랜드를 소개하는 파일을 미리 확인해보세요'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
