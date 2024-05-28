import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AdvertiserSidebar } from 'src/components/advertiser-sidebar';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const dateSelect = ['전체', '최근 7일', '최근 30일'];
const historyType = ['사용내역', '충전내역', '환불내역'];

const historyData = [
  {
    header: ['날짜', '유형', '상세내역', '포인트'],
    contents: ['2023.07.10', '서포터', '서포터 거래 진행 완료', '- 200,000'],
  },
  {
    header: ['날짜', '입금정보', '충전신청 포인트', '상태', '결제금액'],
    contents: [
      '2023.07.10',
      '[기업은행] 1234-5367-89012 예금주: 테크비',
      '100,000 P',
      '신청완료',
      '100,000원',
    ],
  },
  {
    header: ['환불신청일', '입금정보', '환불신청포인트', '상태', '환불예정일', '취소'],
    contents: [
      '2023.07.10',
      '[기업은행] 1234-5367-89012 예금주: 테크비',
      '30,000P',
      '신청완료',
      '2023.07.15',
      '취소 불가',
    ],
  },
];

const PointManagement: NextPageWithLayout<Props> = () => {
  const [dateCurrentTab, setDateCurrentTab] = useState(0);
  const [historyCurrentTab, setHistoryCurrentTab] = useState(0);

  return (
    <div className='md:flex'>
      <AdvertiserSidebar />
      <div className='mx-auto w-full px-[20px] pb-[250px] pt-[150px] text-[#fff] md:w-[80%] xl:w-[1040px] 2xl:w-[1420px]'>
        <div className='items-end justify-between pb-[80px] lg:flex'>
          <div>
            <b className='text-[25px] font-[500] text-[#fff] sm:text-[30px]'>
              몽벨 브랜드의 <br />
              포인트 내역
            </b>
            <div className='mt-[35px]'>
              <input
                type='date'
                className='block h-[40px] w-[150px] rounded-[10px] bg-[#fff] text-[#2d2d2d] sm:inline-block'
              />
              <span className='mx-[7px]'>-</span>
              <input
                type='date'
                className='block h-[40px] w-[150px] rounded-[10px] bg-[#fff] text-[#2d2d2d] sm:inline-block'
              />
              <button className='mt-[20px] h-[40px] w-[100px] rounded-[5px] bg-[#cccccc] text-[16px] font-bold text-[#fff] sm:ml-[10px] sm:mt-0 sm:rounded-[10px] sm:text-[20px]'>
                조회
              </button>
            </div>
            <ul className='mt-[30px] flex items-center gap-[15px] sm:gap-[25px]'>
              {dateSelect.map((v, i) => (
                <li
                  key={i}
                  className={`h-[39px] cursor-pointer rounded-[10px] px-[20px] text-[16px] font-bold leading-[38px] sm:rounded-[10px] sm:text-[20px] ${
                    dateCurrentTab === i
                      ? 'border-none bg-[#8586db]'
                      : 'border border-[#707070] bg-[#000000]'
                  }`}
                  onClick={() => setDateCurrentTab(i)}
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-[80px] text-left lg:mt-0'>
            <div className='mb-[25px] flex items-center gap-[10px]'>
              <b className='text-[25px] text-[#fff]'>마이포인트</b>
              <span className='text-[20px] font-bold text-[#f97090]'>100P</span>
            </div>
            <p className='text-[20px] font-bold text-[#fff]'>
              다양한 콘텐츠 플랫폼 활동을 위해 <br />
              포인트를 충전해보세요!
            </p>
            <ul className='mt-[20px] flex items-center gap-[25px]'>
              <li>
                <Link
                  href='/advertiser/point-management/charging-application'
                  className='flex items-center'
                >
                  <span className='text-[20px] font-bold text-[#f97090]'>포인트 충전</span>
                  <Image
                    src='/assets/icons/mypoint-arrow-right.webp'
                    alt='오른쪽 화살표'
                    width={32}
                    height={32}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href='/advertiser/point-management/refund-application'
                  className='flex items-center'
                >
                  <span className='text-[20px] font-bold text-[#8586db]'>포인트 환불</span>
                  <Image
                    src='/assets/icons/mypoint-arrow-right.webp'
                    alt='오른쪽 화살표'
                    width={32}
                    height={32}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-[30px]'>
          <ul className='flex items-center gap-[20px] border-b border-[#707070] pb-[5px]'>
            {historyType.map((h, i) => (
              <li
                key={i}
                className={`relative mr-[5px] cursor-pointer py-[5px] text-[18px] font-bold text-[#fff] before:absolute before:bottom-[-9px] before:left-0 before:h-[6px] before:w-full before:bg-[#f97090] md:text-[20px] 2xl:text-[25px] ${
                  historyCurrentTab === i ? 'before:block' : 'before:hidden'
                }`}
                onClick={() => {
                  setHistoryCurrentTab(i);
                }}
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-[30px] w-full overflow-x-auto pb-[300px]'>
          <table className='w-[1200px] table-fixed xl:w-full'>
            <thead>
              <tr className='bg-[#dcddff]'>
                {historyData[historyCurrentTab].header.map((v, i) => (
                  <th key={i} className='py-[20px] text-[20px] font-bold text-[#2d2d2d]'>
                    {v}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {historyData[historyCurrentTab].contents.map((v, i) => (
                  <td key={i} className='py-[20px] text-center text-[14px] font-bold text-[#fff]'>
                    {v}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        {historyCurrentTab === 2 && (
          <div className='px-[80px]'>
            <ul>
              <li className='mb-[5px] text-[16px] text-[#fff]'>
                ＊ 입금계좌의 예금주와 회원 정보의 이름이 동일해야 하며, 실명이여야 환불 처리가
                정상적으로 진행 됩니다.
              </li>
              <li className='text-[16px] text-[#fff]'>
                ＊ 명의 도용 차단이 되어 있거나 나이스 평가 정보에서 사용자 정보를 불러 올 수 없는
                경우, 나이스 평가 정보의 고객 상담센터 (1588-2486) 또는 온라인 실명 등록 서비스를
                이용하세요.{' '}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

PointManagement.getLayout = page => <Layout>{page}</Layout>;

export default PointManagement;
