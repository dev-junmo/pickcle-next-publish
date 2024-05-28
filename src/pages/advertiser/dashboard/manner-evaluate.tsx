import Image from 'next/image';
import { AdvertiserSidebar } from 'src/components/advertiser-sidebar';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const AdvertiserMannerEvaluate: NextPageWithLayout<Props> = () => {
  return (
    <div className='md:flex'>
      <AdvertiserSidebar />
      <div className='mx-auto w-full px-[20px] py-[100px] text-[#fff] lg:w-[1040px] 2xl:w-[1420px]'>
        <b className='block border-opacity-[0.8] pb-[25px] text-center text-[30px] font-[500] text-[#ffffff] 2xl:text-[30px]'>
          받은 매너 평가
        </b>
        <div className='rounded-[20px] bg-[#fff] px-[30px] py-[50px] md:pl-[72px] md:pr-[94px]'>
          <div className='2xl:flex 2xl:items-center 2xl:gap-[30px]'>
            <div className='mb-[20px] flex items-center 2xl:mb-0 2xl:w-[12%]'>
              <b className='mr-[10px] text-[20px] text-[#707070]'>매너지수</b>
              <Image
                src='/assets/icons/help-icon02.webp'
                alt='느낌표 도움말'
                width={20}
                height={20}
              />
            </div>
            <div className='w-full rounded-[10px] border-[2px] border-[#707070] bg-[#fff] px-[16px] py-[10px] 2xl:flex 2xl:items-center'>
              <span className='mr-[30px] text-[14px] font-[500] text-[#000]'>
                나의 매너지수는 현재
              </span>
              <b className='text-[20px] text-[#f97090]'>맑음</b>
              <div className='w-full md:flex md:items-center md:gap-[10px] 2xl:ml-[20px] 2xl:w-[78%]'>
                <div className='relative my-[20px] h-[15px] w-full rounded-[10px] bg-[#707070]'>
                  <div className='relative h-full w-[40%] rounded-[10px] bg-[#f97090] after:absolute after:right-0 after:top-0 after:block after:h-[16px] after:w-[16px] after:rounded-full after:bg-[#fff]'>
                    <span className='absolute right-0 top-[-23px] text-[16px] font-bold text-[#8586db] md:top-[-28px] md:text-[18px]'>
                      40
                    </span>
                  </div>
                </div>
                <Image
                  src='/assets/icons/sunny-icon.webp'
                  alt='맑음 아이콘'
                  width={41}
                  height={41}
                  className='h-[41px]'
                />
              </div>
            </div>
          </div>
          <div className='mt-[20px] justify-center md:flex md:items-center md:gap-[50px] 2xl:ml-[15px]'>
            <div className='2xl:mr-[200px]'>
              <div className='flex items-center 2xl:mb-[13px]'>
                <Image
                  src='/assets/icons/mypage-heart.webp'
                  alt='하트 아이콘'
                  width={30}
                  height={30}
                />
                <b className='ml-[10px] text-[20px] text-[#707070]'>재 진행희망률 100%</b>
              </div>
              <span className='ml-[20px] text-[14px] font-bold text-[#707070] 2xl:text-[16px]'>
                30개 브랜드 중 30개의 만족
              </span>
            </div>
            <div className='mt-[20px] md:mt-0'>
              <div className='flex items-center 2xl:mb-[13px]'>
                <Image
                  src='/assets/icons/speech-bubble-icon.webp'
                  alt='말풍선 아이콘'
                  width={30}
                  height={30}
                />
                <b className='ml-[10px] text-[20px] text-[#707070]'>응답률 100%</b>
              </div>
              <span className='ml-[20px] text-[14px] font-bold text-[#707070] 2xl:text-[16px]'>
                보통 2시간 내 응답
              </span>
            </div>
          </div>
        </div>
        <div className='my-[100px] md:my-[150px]'>
          <ul className='flex flex-wrap gap-[30px] gap-y-[50px]'>
            <li className='flex w-full items-center justify-between rounded-[20px] border-[4px] border-[#8586db] bg-[#fff] px-[30px] py-[25px] lg:w-[48%] '>
              <b className='text-[20px] font-[500] text-[#2d2d2d] md:text-[25px]'>
                퀄리티가 좋아요
              </b>
              <div className='flex items-center'>
                <span className='text-[20px] font-[500] text-[#ff0e0e] md:text-[25px]'>250</span>
                <Image
                  src='/assets/icons/manner-heart-big.webp'
                  alt='하트 아이콘'
                  width={50}
                  height={50}
                />
              </div>
            </li>
            <li className='flex w-full items-center justify-between rounded-[20px] border-[4px] border-[#8586db] bg-[#fff] px-[30px] py-[25px] lg:w-[48%]'>
              <b className='text-[20px] font-[500] text-[#2d2d2d] md:text-[25px]'>
                마감기한을 잘 지켜요
              </b>
              <div className='flex items-center'>
                <span className='text-[20px] font-[500] text-[#ff0e0e] md:text-[25px]'>250</span>
                <Image
                  src='/assets/icons/manner-heart-big.webp'
                  alt='하트 아이콘'
                  width={50}
                  height={50}
                />
              </div>
            </li>
            <li className='flex w-full items-center justify-between rounded-[20px] border-[4px] border-[#8586db] bg-[#fff] px-[30px] py-[25px] lg:w-[48%]'>
              <b className='text-[20px] font-[500] text-[#2d2d2d] md:text-[25px]'>센스 있어요</b>
              <div className='flex items-center'>
                <span className='text-[20px] font-[500] text-[#ff0e0e] md:text-[25px]'>250</span>
                <Image
                  src='/assets/icons/manner-heart-big.webp'
                  alt='하트 아이콘'
                  width={50}
                  height={50}
                />
              </div>
            </li>
            <li className='flex w-full items-center justify-between rounded-[20px] border-[4px] border-[#8586db] bg-[#fff] px-[30px] py-[25px] lg:w-[48%]'>
              <b className='text-[20px] font-[500] text-[#2d2d2d] md:text-[25px]'>
                책임감이 있어요
              </b>
              <div className='flex items-center'>
                <span className='text-[20px] font-[500] text-[#ff0e0e] md:text-[25px]'>250</span>
                <Image
                  src='/assets/icons/manner-heart-big.webp'
                  alt='하트 아이콘'
                  width={50}
                  height={50}
                />
              </div>
            </li>
            <li className='flex w-full items-center justify-between rounded-[20px] border-[4px] border-[#8586db] bg-[#fff] px-[30px] py-[25px] lg:w-[48%]'>
              <b className='text-[20px] font-[500] text-[#2d2d2d] md:text-[25px]'>응답이 빨라요</b>
              <div className='flex items-center'>
                <span className='text-[20px] font-[500] text-[#ff0e0e] md:text-[25px]'>250</span>
                <Image
                  src='/assets/icons/manner-heart-big.webp'
                  alt='하트 아이콘'
                  width={50}
                  height={50}
                />
              </div>
            </li>
            <li className='flex w-full items-center justify-between rounded-[20px] border-[4px] border-[#8586db] bg-[#fff] px-[30px] py-[25px] lg:w-[48%]'>
              <b className='text-[20px] font-[500] text-[#2d2d2d] md:text-[25px]'>매너가 좋아요</b>
              <div className='flex items-center'>
                <span className='text-[20px] font-[500] text-[#ff0e0e] md:text-[25px]'>250</span>
                <Image
                  src='/assets/icons/manner-heart-big.webp'
                  alt='하트 아이콘'
                  width={50}
                  height={50}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

AdvertiserMannerEvaluate.getLayout = page => <Layout>{page}</Layout>;

export default AdvertiserMannerEvaluate;
