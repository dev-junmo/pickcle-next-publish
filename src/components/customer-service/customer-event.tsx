import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';
import * as Accordion from '@radix-ui/react-accordion';

interface Props {}

const dummyFaqContents = Array.from({ length: 30 }, (_, i) => i + 1).map(v => {
  const question = {
    1: '각 진행방식에 대해 알고 싶어요.',
    2: '서비스가 어떤 건가요?',
    3: '제안을 받았는데 자동으로 취소 되었어요.',
    4: '숏폼 콘텐츠 프로젝트가 어떤건가요?',
    5: '선정된 프로젝트는 어디서 확인할 수 있나요?',
    6: '제품 배송이 안와요.',
    7: '포스팅을 업로드했는데 미제출이라고 연락이 와요.',
    8: '보증금 예치하고 싶은데 보유 포인트가 부족해요.',
    9: '이메일 주소를 변경하고 싶어요.',
    10: '포트폴리오 개별 URL을 설정할 수 있나요?',
  }[(v % 10) + 1];

  const answer = {
    1: '리뷰쉐어에는 5가지의 진행방식이 있어요💙',
    2: '판매할 수 있는 나의 재능을 서비스라고 해요💙',
    3: '제안을 받은 날로부터 7일간 응답이 없을경우, "무응답 취소" 로 자동 처리되고 있어요😭',
    4: '짧은 영상을 제작하여 틱톡/쇼츠/릴스에 업로드하는 방식이에요.',
    5: '[선정]에서 확인할 수 있어요.💙',
    6: '프로젝트는 각 담당자님이 전담해서 운영하시기 때문에, ',
    7: '진행 채널에 업로드는 해주셨지만, 리뷰쉐어 사이트에는 결과 제출이 되지 않은 것 같아요😿',
    8: '1.아래 계좌로 원하시는 포인트 만큼 이체해 주세요. (예) 50,000P 희망 시, 50,000원 이체',
    9: '일반 회원가입의 경우 "이메일 주소" 와 "로그인 ID" 가 동일하기 때문에 리뷰쉐어 팀에서 변경을 도와드리고 있어요💙 ',
    10: '[내 정보 수정]의 "포트폴리오 주소" 에서 설정할 수 있어요💙 ',
  }[(v % 10) + 1];

  const category = {
    1: '리뷰어 이용방법',
    2: '거래하기',
    3: '제안하기',
    4: '리뷰어 신청',
    5: '리뷰어 선정',
    6: '결과물 작성',
    7: '결과물 제출',
    8: '포인트 관리',
    9: '계정 관리',
    10: '기타',
  }[(v % 10) + 1];

  return { id: v, question: question || '', answer: answer || '', category: category || '' };
});

const CustomerEvent: NextPageWithLayout<Props> = () => {
  const [category, setCategory] = useState('전체');
  const [showList, setShowList] = useState(dummyFaqContents);

  useEffect(() => {
    setShowList(
      dummyFaqContents.filter(item => {
        if (category === '전체') return true;
        if (category === item.category) return true;
      }),
    );
  }, [category]);

  return (
    <div className='mb-[180px] sm:px-[30px] 2xl:px-0'>
      <b className='text-[25px] text-[#e93963]'>EVENT</b>
      <Accordion.Root
        className='mt-[50px] w-full'
        type='single'
        // defaultValue="item-1"
        collapsible
      >
        {dummyFaqContents.slice(0, 5).map(c => (
          <Accordion.Item
            key={c.id}
            value={`item-${c.id}`}
            className='w-full border-b-[2px] border-[#fff] first:border-t-[2px]'
          >
            <Accordion.Trigger className='group flex w-full items-center justify-between py-[50px]'>
              <div>
                <b className='mr-[15px] inline-block w-[100px] text-left text-[16px] font-bold text-[#c2c2f6] sm:mr-[35px] sm:w-[140px] sm:text-[18px]'>
                  [{c.category}]
                </b>
                <span className='text-[16px] text-[#fff] sm:text-[18px]'>{c.question}</span>
              </div>
              <div className='mr-[16px] h-[40px] w-[40px] bg-[url(/assets/icons/accordian-arrow-open.webp)] text-[0px] group-data-[state=open]:bg-[url(/assets/icons/accordian-arrow-close.webp)]'>
                화살표
              </div>
            </Accordion.Trigger>
            <Accordion.Content className='border-t-[2px] border-[#fff] p-[24px] text-[#fff]'>
              {c.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};
CustomerEvent.getLayout = page => <Layout>{page}</Layout>;

export default CustomerEvent;
