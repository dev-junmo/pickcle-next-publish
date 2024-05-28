import { AdvertiserSidebar } from 'src/components/advertiser-sidebar';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const BrandActivities: NextPageWithLayout<Props> = () => {
  return (
    <div className='md:flex'>
      <AdvertiserSidebar />
      <div className='mx-auto w-full px-[20px] py-[100px] text-[#fff] lg:w-[990px]'>
        <b className='block border-opacity-[0.8] pb-[25px] text-left text-[30px] font-[500] text-[#ffffff] 2xl:text-[30px]'>
          브랜드 활동 정보
        </b>
        <div className='mt-[50px]'>
          <b className='text-[20px] text-[#fff]'>콘텐츠 활동 정보</b>
          <ul className='mt-[30px]'>
            <li className='flex justify-between rounded-tl-[10px] rounded-tr-[10px] border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>평균 결과물 제출 기간</span>
              <span>보통</span>
            </li>
            <li className='flex justify-between border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>완료 콘텐츠 횟수</span>
              <span>12회</span>
            </li>
            <li className='flex justify-between border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>취소 콘텐츠 횟수</span>
              <span>1회</span>
            </li>
            <li className='flex justify-between border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>서포터 진행</span>
              <span>39%</span>
            </li>
            <li className='flex justify-between rounded-bl-[10px] rounded-br-[10px] border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>메이커 진행</span>
              <span>61%</span>
            </li>
          </ul>
        </div>
        <div className='mt-[50px]'>
          <b className='text-[20px] text-[#fff]'>SNS 채널별 참여도</b>
          <ul className='mt-[30px]'>
            <li className='flex justify-between rounded-tl-[10px] rounded-tr-[10px] border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>네이버 블로그</span>
              <span>50%</span>
            </li>
            <li className='flex justify-between border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>인스타그램</span>
              <span>30%</span>
            </li>
            <li className='flex justify-between border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>유투브</span>
              <span>20%</span>
            </li>
            <li className='flex justify-between rounded-bl-[10px] rounded-br-[10px] border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>틱톡</span>
              <span>39%</span>
            </li>
          </ul>
        </div>
        <div className='mt-[50px]'>
          <b className='text-[20px] text-[#fff]'>협찬방식 참여도</b>
          <ul className='mt-[30px]'>
            <li className='flex justify-between rounded-tl-[10px] rounded-tr-[10px] border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>제품 협찬형</span>
              <span>40%</span>
            </li>
            <li className='flex justify-between border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>방문 협찬형</span>
              <span>30%</span>
            </li>
            <li className='flex justify-between rounded-bl-[10px] rounded-br-[10px] border-b border-[#949494] bg-[#dcddff] px-[30px] py-[10px] text-[16px] font-[500] text-[#2d2d2d]'>
              <span>NO 협찬형</span>
              <span>30%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

BrandActivities.getLayout = page => <Layout>{page}</Layout>;

export default BrandActivities;
