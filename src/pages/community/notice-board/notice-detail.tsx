import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const NoticeDetail: NextPageWithLayout<Props> = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className='flex flex-col items-center justify-center text-[#fff]'>
      <div className='mx-auto w-full px-[30px] pt-[100px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
        <b className='text-[25px] text-white'>공지사항</b>
        <div className='mb-[150px] mt-[50px]'>
          <div className='border-y-[2px] border-[#fff] py-[49px]'>
            <strong className='mr-[25px] text-[25px] sm:ml-[23px]'>
              네이버 스마트 스토어 어뷰징 관련 안내
            </strong>
            <span className='text-base font-bold text-[#b4b4b4]'>2023.06.08</span>
          </div>
          <div className='border-b border-[#fff] py-[27px] text-[18px] font-bold text-[#b4b4b4] sm:px-[23px] sm:py-[47px]'>
            <p className='mb-[100px]'>
              안녕하세요 픽클 팀 입니다 &#58; &#41;
              <br />
              <br />
              최근 네이버 스마트스토어 어뷰징 정책 강화로 인해, <br />
              프로젝트 검수 및 스마트스토어 후기 작성 관련하여 안내 말씀드립니다.
            </p>
            <p>
              프로젝트 검수 정책 변경 (비즈니스 회원 대상)
              <br />
              네이버 스마트 스토어 및 블로그 작성을 요청하는{' '}
              <span className='text-[#8586db]'>구매형 프로젝트에 한해,</span>
              <br />
              <span className='text-[#8586db]'>
                필수 채널에 대한 후기 1건 이외에 다른 후기 작성 요청은 삭제 후 검수
              </span>
              될 예정입니다.
              <br />
              <br />
              예시 1&#41;
              <br />
              검수 전 &gt; 메인 채널 : 네이버 스마트 스토어 1건, 선택적으로 작성 요청 : 네이버
              블로그 1건
              <br />
              검수 후 &gt; 메인 채널 : 네이버 스마트 스토어 1건
              <br />
              <br />
              예시 2&#41;
              <br />
              검수 전 &gt; 메인 채널 : 네이버 블로그 1건, 선택적으로 작성 요청 : 네이버 스마트
              스토어 1건
              <br />
              검수 후 &gt; 메인 채널 : 네이버 블로그 1건
              <br />
              <br />
              네이버 스마트스토어 후기 작성 안내 (리뷰어 회원 대상)
              <br />
              어뷰징 정책으로 인해 필수 작성 채널 1가지만 진행해주시는 걸 추천드리지만,
              <br />
              이미 비즈니스 담당자님과 네이버 스마트 스토어 및 블로그 후기 모두 작성을 약속을 한
              경우라면
              <br />
              아래의 문구를 스마트 스토어 후기 첫 줄에 필수 삽입하여 작성을 부탁드립니다.
              <br />
              <br />
              필수 삽입 문구&#41; * 첫 줄 기재
              <br />
              해당 후기는 무료로 제공받아 주관적으로 작성한 리뷰입니다.
              <br />
              <br />
              Q. 경제적 대가관계 미기입 적발 시, 네이버 측으로부터 어떤 어뷰징을 받게 되나요?
              <br />
              후기가 작성된 상품의 판매가 무기한으로 중지될 수 있습니다.
              <br />
              리뷰쉐어에서는 각 브랜드의 판매 증진과 건강한 리뷰 문화를 위해,
              <br />
              프로젝트 검수 과정에서 위험할 수 있는 부분들을 모두 삭제할 예정입니다.
              <br />
              <br />
              더 궁금하거나 이해하기 어려운 내용이 있다면,
              <br />
              고객센터 [1:1 문의]를 통해 픽클 팀에게 알려주세요.
            </p>
            <p className='mt-[100px]'>
              고맙습니다.
              <br />
              픽클 팀 드림.
            </p>
          </div>
          <div className='flex justify-center pt-[100px]'>
            <Link
              href='/community/notice-board'
              className='rounded-[10px] bg-[#c2c3d5] px-[48px] py-[10px] text-[20px] font-bold text-[#fff]'
            >
              공지사항목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

NoticeDetail.getLayout = page => <Layout>{page}</Layout>;

export default NoticeDetail;
