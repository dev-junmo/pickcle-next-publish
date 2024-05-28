import { useState, useEffect } from 'react';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';
import * as Accordion from '@radix-ui/react-accordion';

interface Props {}

const MyInquire: NextPageWithLayout<Props> = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div className='flex flex-col items-center justify-center'>
          <div className='mx-auto w-full px-[30px] pt-[100px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
            <b className='text-[25px] text-white'>나의 문의내역</b>
            <div className='mb-[150px] mt-[50px]'>
              <Accordion.Root
                className='w-full'
                type='single'
                // defaultValue="item-1"
                collapsible
              >
                <Accordion.Item value='item-1' className='w-full border-y-[2px] border-[#fff]'>
                  <Accordion.Trigger className='group flex w-full items-center justify-between gap-[10px] py-[31px]'>
                    <div className='flex items-start justify-between'>
                      <b className='mr-[5px] text-[25px] font-bold text-[#f97090]'>Q.</b>
                      <div>
                        <b className='mr-[15px] mt-[-7px] block text-left text-[16px] font-bold text-[#c2c2f6] sm:inline-block sm:text-center md:text-[18px]'>
                          [리뷰어이용방법]
                        </b>
                        <span className='text-[16px] text-[#fff] md:text-[18px]'>
                          포스팅을 업로드했는데 미제출이라고 연락이 와요.
                        </span>
                        <span className='mt-[10px] block text-left text-[14px] text-[#fff]'>
                          2022.07.07
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <div className='mx-[5px] md:mr-[47px]'>
                        <button className='mb-[10px] block h-[40px] w-[100px] rounded-[10px] bg-[#fff] text-[16px] font-bold text-[#494949] sm:w-[140px] md:text-[18px] lg:mb-0 lg:mr-[10px] lg:inline-block 2xl:h-[50px] 2xl:w-[170px] 2xl:text-[20px]'>
                          문의취소
                        </button>
                        <button className='block h-[40px] w-[100px] rounded-[10px] bg-[#c2c3d5] text-[16px] font-bold text-[#fff] sm:w-[140px] md:text-[18px] lg:inline-block 2xl:h-[50px] 2xl:w-[170px] 2xl:text-[20px]'>
                          답변대기
                        </button>
                      </div>
                      <div className='h-[40px] w-[40px] bg-[url(/assets/icons/accordian-arrow-open.webp)] text-[0px] group-data-[state=open]:bg-[url(/assets/icons/accordian-arrow-close.webp)] sm:mr-[16px] 2xl:h-[50px]'>
                        화살표
                      </div>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content className='border-t-[2px] border-[#fff] p-[24px] text-[#fff]'>
                    <p>
                      진행 채널에 업로드는 해주셨지만, 리뷰쉐어 사이트에는 결과 제출이 되지 않은 것
                      같아요😿
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value='item-2' className='w-full border-b-[2px] border-[#fff]'>
                  <Accordion.Trigger className='group flex w-full items-center justify-between gap-[10px] py-[31px]'>
                    <div className='flex items-start justify-between'>
                      <b className='mr-[5px] text-[25px] font-bold text-[#f97090]'>Q.</b>
                      <div>
                        <b className='mr-[15px] mt-[-7px] block text-left text-[16px] font-bold text-[#c2c2f6] sm:inline-block sm:text-center md:text-[18px]'>
                          [리뷰어이용방법]
                        </b>
                        <span className='text-[16px] text-[#fff] md:text-[18px]'>
                          포스팅을 업로드했는데 미제출이라고 연락이 와요.
                        </span>
                        <span className='mt-[10px] block text-left text-[14px] text-[#fff]'>
                          2022.07.07
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <div className='mx-[5px] md:mr-[47px]'>
                        <button className='mb-[10px] block h-[40px] w-[100px] rounded-[10px] bg-[#fff] text-[16px] font-bold text-[#494949] sm:w-[140px] md:text-[18px] lg:mb-0 lg:mr-[10px] lg:inline-block 2xl:h-[50px] 2xl:w-[170px] 2xl:text-[20px]'>
                          문의취소
                        </button>
                        <button className=' block h-[40px] w-[100px] rounded-[10px] bg-[#8586db] text-[16px] font-bold text-[#fff] sm:w-[140px] md:text-[18px] lg:inline-block 2xl:h-[50px] 2xl:w-[170px] 2xl:text-[20px]'>
                          답변완료
                        </button>
                      </div>
                      <div className='h-[40px] w-[40px] bg-[url(/assets/icons/accordian-arrow-open.webp)] text-[0px] group-data-[state=open]:bg-[url(/assets/icons/accordian-arrow-close.webp)] sm:mr-[16px] 2xl:h-[50px]'>
                        화살표
                      </div>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content className='border-t-[2px] border-[#fff] p-[24px] text-[#fff]'>
                    <p>
                      진행 채널에 업로드는 해주셨지만, 리뷰쉐어 사이트에는 결과 제출이 되지 않은 것
                      같아요😿
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>

              <div className='mt-[100px] flex items-center justify-center'>
                <button className='mr-[16px] h-[20px] w-[20px] bg-[url(/assets/icons/pagination-arrow-left.webp)] text-[0px]'>
                  left
                </button>
                <ul className='flex items-center justify-center'>
                  <li className='mr-[16px] cursor-pointer text-[16px] font-bold text-[#fff] md:text-[18px] 2xl:text-[20px]'>
                    1
                  </li>
                  <li className='mr-[16px] cursor-pointer text-[16px] font-bold text-[#e93963] md:text-[18px] 2xl:text-[20px]'>
                    2
                  </li>
                  <li className='mr-[16px] cursor-pointer text-[16px] font-bold text-[#fff] md:text-[18px] 2xl:text-[20px]'>
                    3
                  </li>
                  <li className='mr-[16px] cursor-pointer text-[16px] font-bold text-[#fff] md:text-[18px] 2xl:text-[20px]'>
                    4
                  </li>
                  <li className='cursor-pointer text-[16px] font-bold text-[#fff] md:text-[18px] 2xl:text-[20px]'>
                    5
                  </li>
                </ul>
                <button className='ml-[16px] h-[20px] w-[20px] bg-[url(/assets/icons/pagination-arrow-right.webp)] text-[0px]'>
                  right
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

MyInquire.getLayout = page => <Layout>{page}</Layout>;

export default MyInquire;
