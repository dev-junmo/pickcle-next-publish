import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Layout } from 'src/components/layout';
import ConfirmationGuidance from 'src/components/mypage/my-sns-channel/confirmation-guidance';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const snsChannelData = [
  {
    name: '블로그',
    img: 'sns-channel-blog-off',
    activeImg: 'sns-channel-blog-on',
  },
  {
    name: '인스타그램',
    img: 'sns-channel-instagram-off',
    activeImg: 'sns-channel-instagram-on',
  },
  {
    name: '유튜브',
    img: 'sns-channel-youtube-off',
    activeImg: 'sns-channel-youtube-on',
  },
  {
    name: '틱톡',
    img: 'sns-channel-tiktok-off',
    activeImg: 'sns-channel-tiktok-on',
  },
];

const MyInfoModify: NextPageWithLayout<Props> = () => {
  const [showConfirmationPopup, setConfirmationPopup] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [currentActive, setCurrentActive] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <>
          <div className='mx-auto w-full px-[20px] py-[100px] text-[#fff] lg:w-[1040px] lg:px-0 2xl:w-[1420px]'>
            <b className='block border-b border-b-[#fff] border-opacity-[0.8] pb-[25px] text-center text-[25px] text-[#ffffff] lg:text-[30px]'>
              나의 SNS 채널
            </b>
            <p className='ml-[30px] mt-[20px]'>
              <b className='text-[25px] font-[500] text-[#ffffff]'>
                <span className='text-[#f97090]'>드로세라</span>님 SNS를 연결 해주세요
              </b>
              <span className='mt-[10px] block text-[20px] font-bold text-[#cccccc]'>
                미디어 연결을 하면 다양한 서비스를 이용 하실 수 있습니다.
              </span>
            </p>
            <div className='mt-[100px]'>
              <ul className='md:flex md:flex-wrap md:justify-center md:gap-[40px] md:px-[50px] 2xl:gap-[90px] 2xl:px-0'>
                {snsChannelData.map((v, i) => (
                  <li
                    key={i}
                    className='mt-[50px] h-[270px] w-full rounded-[20px] bg-[#fff] px-[40px] pb-[36px] pt-[28px] text-center md:mt-0 md:w-[45%] 2xl:w-[273px]'
                  >
                    <Image
                      alt='블로그 연결'
                      width={69}
                      height={69}
                      className='mx-auto'
                      src={
                        currentActive
                          ? `/assets/icons/${v.activeImg}.webp`
                          : `/assets/icons/${v.img}.webp`
                      }
                    />
                    <b className='mb-[10px] mt-[3px] block text-[20px] text-[#707070] lg:text-[18px] 2xl:text-[20px]'>
                      {v.name} 연결{currentActive ? '완료' : '하기'}
                    </b>
                    {currentActive ? (
                      <p className='mb-[20px] text-[15px] text-[#707070] lg:text-[13px] 2xl:text-[15px]'>
                        {v.name}이 연결 되었습니다. <br />
                        2023-06-23 09:52:29
                      </p>
                    ) : (
                      <p className='mb-[20px] text-[15px] text-[#707070] lg:text-[13px] 2xl:text-[15px]'>
                        {v.name}를 연결하고 더 많은 <br />
                        서비스를 이용해보세요.
                      </p>
                    )}
                    <button
                      className='h-[37px] w-[118px] rounded-[18px] bg-[#f97090] text-[20px] font-bold text-[#fff] lg:text-[18px] 2xl:text-[20px]'
                      onClick={() => setCurrentActive(prev => !prev)}
                    >
                      연결하기
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ConfirmationGuidance
            showConfirmationPopup={showConfirmationPopup}
            setConfirmationPopup={setConfirmationPopup}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

MyInfoModify.getLayout = page => <Layout>{page}</Layout>;

export default MyInfoModify;
