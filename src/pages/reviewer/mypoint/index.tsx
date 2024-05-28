import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const dateSelect = ['전체', '최근 7일', '최근 30일'];
const historyType = ['적립내역', '사용내역', '충전내역', '출금내역'];

const historyData = [
  {
    header: ['날짜', '유형', '상세내역', '포인트'],
    contents: ['2023.07.10', '서포터', '나인위시스 브랜드 하이드로 앰플 PPL', '+ 90,000'],
  },
  {
    header: ['날짜', '유형', '상세내역', '포인트'],
    contents: ['2023.07.10', '포트폴리오', '포트폴리오 추가 생성', '- 3,000'],
  },
  {
    header: ['충전일', '입금정보', '충전신청 포인트', '상태', '결제금액'],
    contents: [
      '2023.07.10',
      '[기업은행] 1234-5367-89012 예금주: 테크비',
      '100,000 P',
      '입금대기',
      '100,000',
    ],
  },
  {
    header: [
      '출금신청일',
      '입금받을계좌',
      '출금신청 포인트',
      '상태',
      '실 입금금액',
      '환불예정일',
      '취소',
    ],
    contents: [
      '2023.07.10',
      '[기업은행] 1234-5367-89012 예금주: 테크비',
      '30,000P',
      '신청완료',
      '29,010원',
      '2023.07.15',
      '취소 불가',
    ],
  },
];

const MyPointHistory: NextPageWithLayout<Props> = () => {
  const [dateCurrentTab, setDateCurrentTab] = useState(0);
  const [historyCurrentTab, setHistoryCurrentTab] = useState(0);

  return (
    <div className='mx-auto w-full px-[20px] py-[150px] text-[#fff] xl:w-[1040px] 2xl:w-[1420px]'>
      <div className='items-end justify-between pb-[80px] lg:flex'>
        <div>
          <b className='text-[25px] font-[500] text-[#fff] sm:text-[30px]'>
            드로세라 님의 <br />
            포인트 내역
          </b>
          <div className='mt-[35px]'>
            <input
              type='date'
              className='block h-[40px] w-[150px] rounded-[10px] bg-[#fff] text-[#2d2d2d] sm:inline-block'
            />
            <span className='mx-[7px] block sm:inline-block'>-</span>
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
                className={`h-[39px] cursor-pointer rounded-[5px] px-[20px] text-[16px] font-bold leading-[38px] sm:rounded-[10px] sm:text-[20px] ${
                  dateCurrentTab === i
                    ? 'border-none bg-[#f97090]'
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
            다양한 콘텐츠 플랫폼 활동으로 <br />
            포인트를 받고, 현금으로 전환해보세요.
          </p>
          <ul className='mt-[20px] flex items-center gap-[25px]'>
            <li>
              <Link href='/reviewer/mypoint/charging-application' className='flex items-center'>
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
              <Link href='/reviewer/mypoint/activity-score-history' className='flex items-center'>
                <span className='text-[20px] font-bold text-[#8586db]'>포인트 출금</span>
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
        <ul className='flex items-center gap-[10px] border-b border-[#707070] pb-[5px] sm:gap-[20px]'>
          {historyType.map((h, i) => (
            <li
              key={i}
              className={`relative mr-[5px] cursor-pointer py-[5px] text-[16px] font-bold text-[#fff] before:absolute before:bottom-[-9px] before:left-0 before:h-[6px] before:w-full before:bg-[#f97090] sm:text-[18px] md:text-[20px] ${
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
      <div className='mt-[30px] w-full overflow-x-auto'>
        <table className='w-[1200px] table-fixed xl:w-full'>
          <thead>
            <tr className='bg-[#ffcbd7]'>
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
    </div>
  );
};

MyPointHistory.getLayout = page => <Layout>{page}</Layout>;

export default MyPointHistory;
