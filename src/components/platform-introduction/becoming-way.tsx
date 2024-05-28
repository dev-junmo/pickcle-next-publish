import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const BecomingWay: NextPageWithLayout<Props> = () => {
  return (
    <div className='mx-auto xl:w-[1040px] 2xl:w-[1420px] border-t-[3px] border-[#fff] pb-[16px]'>
      <div className='px-[30px] md:px-0 mb-[86px] mt-[16px] leading-[70px]'>
        <b className='text-[16px] md:text-[20px] 2xl:text-[40px] text-[#e93963]'>PICKCLE에서 BEST 리뷰어가 되는 법!</b>
        <ol className='text-[16px] md:text-[20px] 2xl:text-[25px] leading-[55px] 2xl:leading-[70px] font-bold'>
          <li>① 포트폴리오는 즉, 리뷰어의 얼굴! 포폴을 꼼꼼하고 세세하게 작성한다!</li>
          <li>
            ② 자신 있는 분야로 포트폴리오를 생성하여 광고주에게 직접 어필하고, 촬영 의뢰 카테고리도
            열심히 이용해본다!
          </li>
          <li>
            ③ 포트폴리오 &amp; 활동점수 및 등급을 보고 다수의 광고주가 먼저 제안 할 수 있도록 열심히
            관리하고 활동해본다!
          </li>
          <li>④ 광고주와의 의사소통 수단인 메신저를 최대한 빠르게 확인하고 답변한다!</li>
          <li>⑤ 무응답 / 노쇼 / 당일취소 등 신고하기 사유에 해당되는 사항은 조심한다!</li>
        </ol>
        <p className='text-[16px] md:text-[20px] 2xl:text-[25px] font-bold'>
          5가지를 다 잘 지켜간다면 어느새 프로N잡러 BEST리뷰어가 되어있을거예요 😊
        </p>
      </div>
      <div className='px-[30px] md:px-0 mb-[86px] leading-[70px]'>
        <b className='text-[16px] md:text-[20px] 2xl:text-[40px] text-[#8586db]'>PICKCLE에서 인기포텐 광고주가 되는 법!</b>
        <ol className='text-[16px] md:text-[20px] 2xl:text-[25px] leading-[55px] 2xl:leading-[70px] font-bold'>
          <li>① 광고주 소개서는 즉, 브랜드의 얼굴! 소개서를 꼼꼼하고 세세하게 작성한다!</li>
          <li>
            ② 일일이 찾는 번거로움이 아닌 카테고리 활용하여 원하는 리뷰어를 찾아 직접 제안해본다!
          </li>
          <li>
            ③ 광고주 소개서 &amp; 활동점수 및 등급을 보고 다수의 리뷰어가 먼저 제안 할 수 있도록
            열심히 관리하고 활동해본다!
          </li>
          <li>④ 내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</li>
          <li>⑤ 무응답 / 잦은 독촉 / 잦은 연락 등 신고하기 사유에 해당되는 사항은 조심한다!</li>
        </ol>
        <p className='text-[16px] md:text-[20px] 2xl:text-[25px] font-bold'>
          5가지를 다 잘 지켜간다면 어느새 인기포텐 브랜드 광고주가 되어있을거예요 😊
        </p>
      </div>
    </div>
  );
};

BecomingWay.getLayout = page => <Layout>{page}</Layout>;

export default BecomingWay;
