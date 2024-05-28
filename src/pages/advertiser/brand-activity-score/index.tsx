import Image from 'next/image';
import { useState } from 'react';
import { AdvertiserSidebar } from 'src/components/advertiser-sidebar';
import { Layout } from 'src/components/layout';
import GradePopup from 'src/components/mypage/grade-popup';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const AdvertiserActivityScore: NextPageWithLayout<Props> = () => {
  const [showPopupGrade, setShowPopupGrade] = useState(false);

  return (
    <>
      <div className='md:flex'>
        <AdvertiserSidebar />
        <div className='mx-auto my-[100px] w-full px-[20px] text-center md:w-[80%] xl:w-[1040px] 2xl:w-[1420px]'>
          <b className='text-[25px] font-[500] text-[#fff] lg:text-[30px]'>
            브랜드 활동 점수 / 등급
          </b>
          <Image
            src='/assets/images/advertiser-thumb-img03.webp'
            alt='프로필 이미지'
            width={150}
            height={150}
            className='mx-auto mb-[20px] mt-[100px] aspect-square h-[120px] w-[120px] rounded-full object-cover md:h-[150px] md:w-[150px]'
          />
          <b className='text-[20px] text-[#fff]'>몽벨</b>
          <div className='relative mx-auto mb-[20px] mt-[30px] md:w-[450px]'>
            <div className='h-[1px] w-full bg-[#fff] px-[10px] before:absolute before:left-0 before:top-[-9px] before:block before:h-[20px] before:w-[1px] before:bg-[#fff] after:absolute after:right-0 after:top-[-9px] after:block after:h-[20px] after:w-[1px] after:bg-[#fff]'>
              <span className='absolute left-[1px] top-[-2px] h-[6px] w-[80%] bg-[#8586db]' />
            </div>
            <div className='ml-[-8px] mt-[10px] flex items-center justify-between md:w-[465px]'>
              <span className='text-[20px] font-[500] text-[#fff]'>M</span>
              <span className='text-[20px] font-[500] text-[#fff]'>S</span>
            </div>
          </div>
          <p className='mb-[20px] text-[18px] font-[500] text-[#fff] sm:text-[20px]'>
            다음 등급인 <span className='text-[#8586db]'>SILVER</span>까지 거래완료{' '}
            <span className='text-[#f97090]'>02</span>회 남았습니다.
          </p>
          <div className='mx-auto flex w-full flex-col items-center rounded-[10px] border border-[#dbdbdb] bg-[#f6f6fc] py-[35px] lg:w-[654px]'>
            <div className='mb-[50px] flex items-center'>
              <div className='mr-[37px] h-[80px] w-[80px] rounded-full border border-[#707070] bg-[#fff]' />
              <b className='text-[25px] font-bold text-[#2d2d2d] sm:text-[30px]'>SILVER</b>
            </div>
            <button
              className='h-[40px] w-[80%] rounded-[10px] bg-[#cccccc] text-[16px] font-[500] text-[#2c2c2c] shadow-[3px_3px_10px_0_rgba(0,0,0,0.16)] sm:text-[20px] lg:w-[454px]'
              onClick={() => setShowPopupGrade(true)}
            >
              등급과 활동 점수가 궁금해요
            </button>
          </div>
          <div className='mt-[150px]'>
            <div className='flex items-center justify-between'>
              <b className='text-[20px] text-[#fff]'>활동 점수 내역</b>
              <button className='h-[38px] rounded-[5px] bg-[#767676] px-[13px] text-[16px] font-[500] text-[#fff]'>
                패널티 이력 현황
              </button>
            </div>
            <div className='mb-[250px] mt-[20px] w-full overflow-x-auto'>
              <table className='w-[1200px] xl:w-full'>
                <thead>
                  <tr className='bg-[#dcddff]'>
                    <th className='p-[20px] text-[15px] font-bold 2xl:text-[20px]'>날짜 </th>
                    <th className='p-[20px] text-[15px] font-bold 2xl:text-[20px]'>구분</th>
                    <th className='p-[20px] text-[15px] font-bold 2xl:text-[20px]'>상세내역</th>
                    <th className='p-[20px] text-[15px] font-bold 2xl:text-[20px]'>부여</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='py-[20px] text-[16px] font-bold text-[#fff]'>2023.07.10</td>
                    <td className='py-[20px] text-[16px] font-bold text-[#f97090]'>서포터</td>
                    <td className='py-[20px] text-[16px] font-bold text-[#fff]'>
                      [등산하는정아] 리뷰어 콘텐츠 거래 완료
                    </td>
                    <td className='py-[20px] text-[20px] font-bold text-[#8586db]'>+1</td>
                  </tr>
                  <tr>
                    <td className='py-[20px] text-[16px] font-bold text-[#fff]'>2023.07.10</td>
                    <td className='py-[20px] text-[16px] font-bold text-[#8586db]'>메이커</td>
                    <td className='py-[20px] text-[16px] font-bold text-[#fff]'>
                      [캠핑장이] 리뷰어 평가하기 완료
                    </td>
                    <td className='py-[20px] text-[20px] font-bold text-[#8586db]'>+1</td>
                  </tr>
                  <tr>
                    <td className='py-[20px] text-[16px] font-bold text-[#fff]'>2023.07.10</td>
                    <td className='py-[20px] text-[16px] font-bold text-[#f97090]'>서포터</td>
                    <td className='py-[20px] text-[16px] font-bold text-[#fff]'>
                      [라이피엘] 리뷰어 제안신청 완료
                    </td>
                    <td className='py-[20px] text-[20px] font-bold text-[#8586db]'>+1</td>
                  </tr>
                  <tr>
                    <td className='py-[20px] text-[16px] font-bold text-[#fff]'>2023.07.10</td>
                    <td className='py-[20px] text-[16px] font-bold text-[#8586db]'>메이커</td>
                    <td className='py-[20px] text-[16px] font-bold text-[#fff]'>
                      [드로세라] 리뷰어 콘텐츠 거래 완료
                    </td>
                    <td className='py-[20px] text-[20px] font-bold text-[#8586db]'>+1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='flex items-center justify-center'>
              <button className='mr-[16px] h-[20px] w-[20px] bg-[url(/assets/icons/pagination-arrow-left.webp)] text-[0px]'>
                left
              </button>
              <ul className='flex items-center justify-center'>
                <li className='mr-[16px] cursor-pointer text-[20px] font-bold text-[#fff]'>1</li>
                <li className='mr-[16px] cursor-pointer text-[20px] font-bold text-[#e93963]'>2</li>
                <li className='mr-[16px] cursor-pointer text-[20px] font-bold text-[#fff]'>3</li>
                <li className='mr-[16px] cursor-pointer text-[20px] font-bold text-[#fff]'>4</li>
                <li className='cursor-pointer text-[20px] font-bold text-[#fff]'>5</li>
              </ul>
              <button className='ml-[16px] h-[20px] w-[20px] bg-[url(/assets/icons/pagination-arrow-right.webp)] text-[0px]'>
                right
              </button>
            </div>
          </div>
        </div>
      </div>
      <GradePopup showPopupGrade={showPopupGrade} setShowPopupGrade={setShowPopupGrade} />
    </>
  );
};

AdvertiserActivityScore.getLayout = page => <Layout>{page}</Layout>;

export default AdvertiserActivityScore;
