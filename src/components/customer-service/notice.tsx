import Link from 'next/link';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const dummyNotice = Array.from({ length: 10 }, (_, i) => i + 1).map(v => {
  const name = {
    1: '공통',
    2: '리뷰어',
  }[(v % 2) + 1];

  const title = {
    1: '안심 거래를 위한 프로젝트 보증금 기능 업데이트',
    2: 'KB국민 체크카드와 함께하는 이벤트 참여자(테스터) 모집',
    3: '네이버 스마트스토어 어뷰징 관련 안내',
    4: 'iOS / Android 앱 업데이트',
    5: '프로필, 포트폴리오, 서비스 카테고리 리뉴얼 안내',
  }[(v % 5) + 1];

  return { id: v, name: name || '', title: title || '' };
});

const CustomerNotice: NextPageWithLayout<Props> = () => {
  return (
    <div className='mb-[80px] flex-1 after:clear-both after:block xl:mb-0'>
      <ul className='border-y border-[#fff] py-[30px]'>
        {dummyNotice.slice(0, 5).map(n => (
          <li key={n.id} className='mb-[20px] last:mb-[0]'>
            <b className='inline-block w-[65px] text-[#c2c2f6]'>[{n.name}]</b>
            <span className='text-[#fff]'>{n.title}</span>
          </li>
        ))}
      </ul>
      <Link
        href='/community/notice-board'
        className='float-right mt-[7px] inline-block text-base text-[#fff]'
      >
        더보기 &gt;
      </Link>
    </div>
  );
};

CustomerNotice.getLayout = page => <Layout>{page}</Layout>;

export default CustomerNotice;
