import Link from 'next/link';
import { Layout } from 'src/components/layout';
import { SelectBox } from 'src/components/select-box';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const noticeTypeReviewer = ['공통', '리뷰어'];
const noticeTypeAdvertiser = ['공통', '광고주'];

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

  const date = {
    1: '2023.06.07',
    2: '2023.06.08',
    3: '2023.06.10',
    4: '2023.06.08',
    5: '2023.06.10',
  }[(v % 5) + 1];

  return { id: v, name: name || '', title: title || '', date: date || '' };
});

const NoticeBoard: NextPageWithLayout<Props> = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='mx-auto w-full px-[30px] pt-[100px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
        <b className='text-[25px] text-white'>공지사항</b>
        <div className='mb-[150px] mt-[50px]'>
          <div className='border-t-[2px] border-[#fff] py-[45px]'>
            <SelectBox
              optionData={noticeTypeReviewer}
              placeholder='공지선택'
              wrapClassName='w-[177px] relative mt-[15px] text-[18px] text-[#494949] font-[500]'
              btnClassName='h-[42px] w-[177px] rounded-[5px] bg-[url(/assets/icons/select-arrow.webp)] bg-[length:32px_32px] bg-[right_7px_top_5px] bg-no-repeat pl-[10px] text-[20px] font-[500] text-[#494949] bg-[#fff] text-left'
            />
            {/* <select className='h-[42px] w-[177px] rounded-[5px] bg-[url(/assets/icons/select-arrow.webp)] bg-[length:32px_32px] bg-[right_7px_top_5px] bg-no-repeat pl-[10px] text-[20px] font-[500] text-[#494949]'>
              <option
                key='select'
                hidden
                value=''
                className='text-[18px] font-medium text-[#b4b4b4]'
              >
                공지선택
              </option>
              <option key='common' value='공통' className='text-[#000]'>
                공통
              </option>
              <option key='reviewer' value='리뷰어' className='text-[#000]'>
                리뷰어
              </option>
            </select> */}
          </div>

          <ul>
            {dummyNotice.slice(0, 5).map(n => (
              <li
                key={n.id}
                className='border-b-[2px] border-[#fff] py-[50px] first:border-y-[2px]'
              >
                <Link href='/community/notice-board/notice-detail'>
                  <div className='block items-center justify-between pr-[30px] md:flex'>
                    <div>
                      <b className='mr-[20px] inline-block w-[67px] text-[18px] font-bold text-[#c2c2f6] md:mr-[65px]'>
                        [{n.name}]
                      </b>
                      <span className='text-[18px] text-[#fff]'>{n.title}</span>
                    </div>
                    <span className='text-[16px] font-bold text-[#b4b4b4]'>{n.date}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className='mt-[150px] flex items-center justify-center'>
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
  );
};

NoticeBoard.getLayout = page => <Layout>{page}</Layout>;

export default NoticeBoard;
