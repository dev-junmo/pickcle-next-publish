import Image from 'next/image';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import PhrasePopup from 'src/components/transaction-management/inquire-message/phrase-popup';

import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const InquireMessage: NextPageWithLayout<Props> = () => {
  const [numberTooltip, setNumberTooltip] = useState(false);
  const [phrasePopup, setPhrasePopup] = useState(false);
  const [phraseInnerPopup, setPhraseInnerPopup] = useState(false);
  const [mainText, setMainText] = useState(false);

  return (
    <>
      <div className='mx-auto my-[100px] hidden h-[990px] border border-[#3a3a3a] bg-[#181722] text-[#fff] lg:flex xl:w-[1240px] 2xl:w-[1510px] 3xl:w-[1710px]'>
        <div className='w-[350px] border-r border-[#3a3a3a]'>
          <div className='flex items-center justify-between border-b border-[#3a3a3a] p-[15px]'>
            <b className='flex cursor-pointer items-center gap-[15px] text-[20px]'>
              전체메세지
              <Image
                src='/assets/icons/inquire-arrow-bottom.webp'
                alt='화살표'
                width={20}
                height={20}
              />
            </b>
            <Image
              src='/assets/icons/inqure-search-icon.webp'
              alt='검색 아이콘'
              width={30}
              height={40}
            />
          </div>
          <ul>
            <li className='flex items-start gap-[22px] border-b border-[#3a3a3a] px-[20px] py-[23px] 2xl:items-center'>
              <Image
                src='/assets/images/advertiser-thumb-img04.webp'
                alt='프로필'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div className='items-center gap-[30px] 2xl:flex'>
                <div>
                  <div className='flex flex-wrap items-center gap-[20px]'>
                    <b className='text-[16px] text-[#fff]'>나그참파</b>
                    <span className='text-[14px] font-[500]'>23.08.06</span>
                  </div>
                  <p className='mt-[5px] line-clamp-2 text-[12px] font-[500] text-[#fff]'>
                    해당 콘텐츠 수정 요청 드렸어요! 확인 부탁드리며 다른 질문은 우선...
                  </p>
                </div>
                <Image
                  src='/assets/icons/favorites-icon.webp'
                  alt='즐겨찾기 아이콘'
                  width={20}
                  height={20}
                  className='mt-[20px] 2xl:mt-0'
                />
              </div>
            </li>
            <li className='flex items-start gap-[22px] border-b border-[#3a3a3a] px-[20px] py-[23px] 2xl:items-center'>
              <Image
                src='/assets/images/advertiser-thumb-img04.webp'
                alt='프로필'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div className='items-center gap-[30px] 2xl:flex'>
                <div>
                  <div className='flex flex-wrap items-center gap-[20px]'>
                    <b className='text-[16px] text-[#fff]'>나그참파</b>
                    <span className='text-[14px] font-[500]'>23.08.06</span>
                  </div>
                  <p className='mt-[5px] line-clamp-2 text-[12px] font-[500] text-[#fff]'>
                    해당 콘텐츠 수정 요청 드렸어요! 확인 부탁드리며 다른 질문은 우선...
                  </p>
                </div>
                <Image
                  src='/assets/icons/favorites-icon-empty.webp'
                  alt='즐겨찾기 아이콘'
                  width={20}
                  height={20}
                  className='mt-[20px] 2xl:mt-0'
                />
              </div>
            </li>
            <li className='flex items-start gap-[22px] border-b border-[#3a3a3a] px-[20px] py-[23px] 2xl:items-center'>
              <Image
                src='/assets/images/advertiser-thumb-img04.webp'
                alt='프로필'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div className='items-center gap-[30px] 2xl:flex'>
                <div>
                  <div className='flex flex-wrap items-center gap-[20px]'>
                    <b className='text-[16px] text-[#fff]'>나그참파</b>
                    <span className='text-[14px] font-[500]'>23.08.06</span>
                  </div>
                  <p className='mt-[5px] line-clamp-2 text-[12px] font-[500] text-[#fff]'>
                    해당 콘텐츠 수정 요청 드렸어요! 확인 부탁드리며 다른 질문은 우선...
                  </p>
                </div>
                <Image
                  src='/assets/icons/favorites-icon-empty.webp'
                  alt='즐겨찾기 아이콘'
                  width={20}
                  height={20}
                  className='mt-[20px] 2xl:mt-0'
                />
              </div>
            </li>
          </ul>
        </div>
        <div className='w-[1360px]'>
          <div className='flex h-[60px] items-center justify-between border-b border-[#3a3a3a] py-[15px] pl-[30px] pr-[20px]'>
            <b className='flex items-center gap-[10px] text-[20px]'>
              나그참파
              <Image
                src='/assets/icons/favorites-icon.webp'
                alt='즐겨찾기 아이콘'
                width={20}
                height={20}
              />
            </b>
            <div className='flex items-center'>
              <Image
                src='/assets/icons/repor-icon-message.webp'
                alt='신고하기 아이콘'
                width={40}
                height={40}
              />
              <Image
                src='/assets/icons/going-out-icon.webp'
                alt='나가기 아이콘'
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className='flex'>
            <div className='relative flex-1 px-[40px]'>
              <p className='mb-[25px] mt-[20px] text-center text-[16px] font-bold'>
                픽클을 통하지 않고 <span className='text-[#f97090]'>따로 직접 결제하는 경우</span>{' '}
                <br />
                <span className='text-[#f97090]'>서비스 불이행 / 환불 거부 / 연락두절</span> 등의
                불이익이 발생 할 수 있습니다.
              </p>
              <div className='mx-auto mb-[28px] h-[36px] w-[112px] rounded-[18px] bg-[#66676e83] text-center leading-[36px]'>
                <span className='text-[14px] font-[500] text-[#fff]'>2023.08.06</span>
              </div>
              <div className='h-[652px]'>
                <div className='mb-[30px] flex justify-end'>
                  <div className='w-[250px] rounded-[10px] bg-[#b7b8e0] pb-[15px] pl-[15px] pt-[5px] 2xl:w-[300px] 2xl:pb-[22px]'>
                    <b className='text-[14px] font-bold text-[#2d2d2d] 2xl:text-[16px]'>
                      제품소개서
                    </b>
                    <div className='mt-[10px] flex items-center pl-[10px]'>
                      <Image
                        src='/assets/images/advertiser-thumb-img03.webp'
                        alt='제품 이미지'
                        width={32}
                        height={28}
                      />
                      <span className='ml-[20px] text-[12px] font-[500] text-[#2d2d2d] 2xl:text-[14px]'>
                        한율_어린쑥 수분진정플루이드
                      </span>
                    </div>
                  </div>
                </div>
                <div className='mb-[30px] flex items-end justify-end gap-[5px]'>
                  <span className='text-[12px] font-[500] text-[#fff] 2xl:text-[14px]'>12:37</span>
                  <div className='w-[250px] rounded-[10px] bg-[#b7b8e0] p-[10px] 2xl:w-[300px] 2xl:p-[15px]'>
                    <span className='text-[12px] font-[500] text-[#2d2d2d] 2xl:text-[14px]'>
                      안녕하세요~ 질문이 있어서 연락 드렸습니다.
                    </span>
                  </div>
                </div>
                <div className='mb-[30px] flex flex-row-reverse items-end justify-end gap-[5px]'>
                  <span className='text-[12px] font-[500] text-[#fff] 2xl:text-[14px]'>12:38</span>
                  <div className='w-[250px] rounded-[10px] bg-[#fbbac9] p-[10px] 2xl:w-[300px] 2xl:p-[15px]'>
                    <span className='text-[12px] font-[500] text-[#2d2d2d] 2xl:text-[14px]'>
                      아~ 안녕하세요~ 무슨 문제라도 있으신가요?
                    </span>
                  </div>
                </div>
                <div className='mb-[30px] flex flex-row-reverse items-end justify-end gap-[5px]'>
                  <span className='text-[12px] font-[500] text-[#fff] 2xl:text-[14px]'>12:38</span>
                  <div className='w-[250px] rounded-[10px] bg-[#fbbac9] p-[10px] 2xl:w-[300px] 2xl:p-[15px]'>
                    <span className='text-[12px] font-[500] text-[#2d2d2d] 2xl:text-[14px]'>
                      뭐든지 말씀해 보세dy.
                    </span>
                  </div>
                </div>
                <div className='mb-[30px] flex items-end justify-end gap-[5px]'>
                  <span className='text-[12px] font-[500] text-[#fff] 2xl:text-[14px]'>12:40</span>
                  <div className='w-[250px] rounded-[10px] bg-[#b7b8e0] p-[10px] 2xl:w-[300px] 2xl:p-[15px]'>
                    <span className='text-[12px] font-[500] text-[#2d2d2d] 2xl:text-[14px]'>
                      작업건 관련해서 문의 내역이 있는데요,
                    </span>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <input
                  className='mt-[10px] h-[50px] w-full rounded-[5px] border border-[#707070] bg-[#181722] pl-[15px] placeholder:text-[#fff]'
                  placeholder='메세지를 입력하세요 (Shift + Enter : 줄바꿈 , Enter : 메세지 전송)'
                />
                <ul className='mt-[7px] flex items-center'>
                  <li className='mr-[40px] flex cursor-pointer items-center gap-[10px] text-[16px] font-[500] text-[#fff]'>
                    <Image
                      src='/assets/icons/file-attaching-icon.webp'
                      alt='파일첨부 아이콘'
                      width={15}
                      height={17}
                    />
                    파일첨부
                  </li>
                  <li
                    className='flex cursor-pointer items-center gap-[10px] text-[16px] font-[500] text-[#fff]'
                    onClick={() => setPhrasePopup(true)}
                  >
                    <Image
                      src='/assets/icons/idiomatic-phrase-icons.webp'
                      alt='파일첨부 아이콘'
                      width={22}
                      height={17}
                    />
                    자주 쓰는 문구
                  </li>
                </ul>
                {phrasePopup && (
                  <div className='absolute bottom-[30px] left-[7px] w-[260px] rounded-[10px] bg-[#fff] px-[14px] pb-[10px] text-[#2d2d2d]'>
                    <div className='border-b border-[#cccccc] py-[10px] text-left'>
                      <b className='text-[20px]'>자주 쓰는 문구</b>
                      <button
                        className='absolute right-[13px] top-[13px]'
                        onClick={() => setPhrasePopup(false)}
                      >
                        <Image
                          src='/assets/icons/close-btn03.webp'
                          alt='닫기 아이콘'
                          width={23}
                          height={23}
                        />
                      </button>
                    </div>
                    <ul className='my-[10px] h-[180px] border-b border-[#ccc]'>
                      <li className='mb-[13px] flex justify-between'>
                        <span className='text-[16px] font-[500] text-[#2d2d2d]'>첫인사 문구</span>
                        <div className='flex items-center gap-[5px]'>
                          <Image
                            src='/assets/icons/pencil-icon.webp'
                            alt='연필 아이콘'
                            width={20}
                            height={20}
                          />
                          <Image
                            src='/assets/icons/delete-icon.webp'
                            alt='휴지통 아이콘'
                            width={20}
                            height={20}
                          />
                        </div>
                      </li>
                      <li className='mb-[13px] flex justify-between'>
                        <span className='text-[16px] font-[500] text-[#2d2d2d]'>쉬는 날 공지</span>
                        <div className='flex items-center gap-[5px]'>
                          <Image
                            src='/assets/icons/pencil-icon.webp'
                            alt='연필 아이콘'
                            width={20}
                            height={20}
                          />
                          <Image
                            src='/assets/icons/delete-icon.webp'
                            alt='휴지통 아이콘'
                            width={20}
                            height={20}
                          />
                        </div>
                      </li>
                      <li className='flex justify-between'>
                        <span className='text-[16px] font-[500] text-[#2d2d2d]'>거절멘트</span>
                        <div className='flex items-center gap-[5px]'>
                          <Image
                            src='/assets/icons/pencil-icon.webp'
                            alt='연필 아이콘'
                            width={20}
                            height={20}
                          />
                          <Image
                            src='/assets/icons/delete-icon.webp'
                            alt='휴지통 아이콘'
                            width={20}
                            height={20}
                          />
                        </div>
                      </li>
                    </ul>
                    <button
                      className='flex items-center gap-[10px] text-[16px] font-[500] text-[#8586db]'
                      onClick={() => setPhraseInnerPopup(true)}
                    >
                      <Image
                        src='/assets/icons/message-plus-icon.webp'
                        alt='플러스 아이콘'
                        width={16}
                        height={16}
                      />
                      메세지 추가하기
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className='flex h-[928px] w-[312px] flex-col items-center border-l border-[#3a3a3a] py-[20px]'>
              <div className='text-center'>
                <Image
                  src='/assets/images/advertiser-thumb-img04.webp'
                  alt='프로필'
                  width={50}
                  height={50}
                  className='mx-auto mb-[15px] rounded-full'
                />
                <b className='text-[16px] text-[#fff]'>나그참파</b>
              </div>
              <div className='relative'>
                <button
                  className='mt-[25px] h-[24px] border border-[#f97090] px-[17px] text-[12px] font-[500] leading-[22px] text-[#fff] 2xl:h-[26px] 2xl:text-[14px]'
                  onClick={() => setNumberTooltip(prev => !prev)}
                >
                  번호 보기
                </button>
                {numberTooltip && (
                  <div className='absolute left-[-94px] top-[59px] w-[281px] rounded-[10px] bg-[#fff] px-[10px] text-[#2d2d2d]'>
                    <div className='border-b border-[#cccccc] py-[10px] text-center'>
                      <b className='text-[18px]'>010 777 1234</b>
                      <button
                        className='absolute right-[13px] top-[13px]'
                        onClick={() => setNumberTooltip(false)}
                      >
                        <Image
                          src='/assets/icons/close-btn03.webp'
                          alt='닫기 아이콘'
                          width={23}
                          height={23}
                        />
                      </button>
                    </div>
                    <p className='py-[15px] text-center text-[14px]'>
                      전화 번호가 비공개일 경우, <br />본 메신저를 통해서만 연락이 가능합니다.
                    </p>
                  </div>
                )}
              </div>
              <div className='mt-[20px] rounded-[10px] bg-[#8586db] px-[20px] py-[15px] 2xl:rounded-[15px]'>
                <ul>
                  <li className='mb-[12px] flex justify-between gap-[30px] text-[12px] 2xl:text-[16px]'>
                    <span>연락가능시간</span>
                    <span>10시 ~ 18시</span>
                  </li>
                  <li className='flex justify-between gap-[30px] text-[12px] 2xl:text-[16px]'>
                    <span>평균응답시간</span>
                    <span>2시간 이내</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {mainText ? (
        <div className='flex h-[100vh] w-full items-center justify-center px-[30px] text-[#fff] lg:hidden'>
          <div className='h-[70%] w-full border border-[#3a3a3a]'>
            <div className='flex items-center justify-between border-b border-[#3a3a3a] py-[15px] pl-[30px] pr-[20px]'>
              <div className='flex flex-wrap items-center gap-[10px]'>
                <b className='text-[20px]'>나그참파</b>
                <div className='relative'>
                  <button
                    className='h-[24px] border border-[#f97090] px-[17px] text-[12px] font-[500] leading-[22px] text-[#fff] 2xl:h-[26px] 2xl:text-[14px]'
                    onClick={() => setNumberTooltip(prev => !prev)}
                  >
                    번호 보기
                  </button>
                  {numberTooltip && (
                    <div className='absolute left-[-90px] top-[39px] z-[20] w-[281px] rounded-[10px] bg-[#fff] px-[10px] text-[#2d2d2d]'>
                      <div className='border-b border-[#cccccc] py-[10px] text-center'>
                        <b className='text-[18px]'>010 777 1234</b>
                        <button
                          className='absolute right-[13px] top-[13px]'
                          onClick={() => setNumberTooltip(false)}
                        >
                          <Image
                            src='/assets/icons/close-btn03.webp'
                            alt='닫기 아이콘'
                            width={23}
                            height={23}
                          />
                        </button>
                      </div>
                      <p className='py-[15px] text-center text-[14px]'>
                        전화 번호가 비공개일 경우, <br />본 메신저를 통해서만 연락이 가능합니다.
                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <span className='text-[12px]'>연락 가능 시간 10시 ~ 18시</span>
                  <small className='block text-[10px] text-[#d8d8d8]'>평균 2시간 이내 응답</small>
                </div>
              </div>
              <div className='flex items-center'>
                <Image
                  src='/assets/icons/repor-icon-message.webp'
                  alt='신고하기 아이콘'
                  width={40}
                  height={40}
                />
                <Image
                  src='/assets/icons/going-out-icon.webp'
                  alt='나가기 아이콘'
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className='flex h-full'>
              <div className='relative flex-1 px-[40px]'>
                <p className='mb-[40px] mt-[20px] text-center text-[12px] font-bold'>
                  픽클을 통하지 않고 <span className='text-[#f97090]'>따로 직접 결제하는 경우</span>{' '}
                  <br />
                  <span className='text-[#f97090]'>서비스 불이행 / 환불 거부 / 연락두절</span> 등의
                  불이익이 발생 할 수 있습니다.
                </p>
                <div className='no-scrollbar h-[65%] overflow-y-scroll'>
                  <div className='mb-[30px] flex justify-end'>
                    <div className='w-[250px] rounded-[10px] bg-[#b7b8e0] pb-[15px] pl-[15px] pt-[5px] 2xl:w-[300px] 2xl:pb-[22px]'>
                      <b className='text-[14px] font-bold text-[#2d2d2d] 2xl:text-[16px]'>
                        제품소개서
                      </b>
                      <div className='mt-[10px] flex items-center pl-[10px]'>
                        <Image
                          src='/assets/images/advertiser-thumb-img03.webp'
                          alt='제품 이미지'
                          width={32}
                          height={28}
                        />
                        <span className='ml-[20px] text-[12px] font-[500] text-[#2d2d2d] 2xl:text-[14px]'>
                          한율_어린쑥 수분진정플루이드
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='mb-[30px] flex items-end justify-end gap-[5px]'>
                    <span className='text-[12px] font-[500] text-[#fff] 2xl:text-[14px]'>
                      12:37
                    </span>
                    <div className='max-w-[250px] rounded-[10px] bg-[#b7b8e0] p-[10px] 2xl:w-[300px] 2xl:p-[15px]'>
                      <span className='text-[12px] font-[500] text-[#2d2d2d] 2xl:text-[14px]'>
                        안녕하세요~ 질문이 있어서 연락 드렸습니다.
                      </span>
                    </div>
                  </div>
                  <div className='mb-[30px] flex flex-row-reverse items-end justify-end gap-[5px]'>
                    <span className='text-[12px] font-[500] text-[#fff] 2xl:text-[14px]'>
                      12:38
                    </span>
                    <div className='max-w-[250px] rounded-[10px] bg-[#fbbac9] p-[10px] 2xl:w-[300px] 2xl:p-[15px]'>
                      <span className='text-[12px] font-[500] text-[#2d2d2d] 2xl:text-[14px]'>
                        아~ 안녕하세요~ 무슨 문제라도 있으신가요?
                      </span>
                    </div>
                  </div>
                  <div className='mb-[30px] flex flex-row-reverse items-end justify-end gap-[5px]'>
                    <span className='text-[12px] font-[500] text-[#fff] 2xl:text-[14px]'>
                      12:38
                    </span>
                    <div className='max-w-[250px] rounded-[10px] bg-[#fbbac9] p-[10px] 2xl:w-[300px] 2xl:p-[15px]'>
                      <span className='text-[12px] font-[500] text-[#2d2d2d] 2xl:text-[14px]'>
                        뭐든지 말씀해 보세dy.
                      </span>
                    </div>
                  </div>
                  <div className='mb-[30px] flex items-end justify-end gap-[5px]'>
                    <span className='text-[12px] font-[500] text-[#fff] 2xl:text-[14px]'>
                      12:40
                    </span>
                    <div className='max-w-[250px] rounded-[10px] bg-[#b7b8e0] p-[10px] 2xl:w-[300px] 2xl:p-[15px]'>
                      <span className='text-[12px] font-[500] text-[#2d2d2d] 2xl:text-[14px]'>
                        작업건 관련해서 문의 내역이 있는데요,
                      </span>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-[110px] w-[86.5%]'>
                  <input
                    className='mt-[10px] h-[50px] w-full rounded-[5px] border border-[#707070] bg-[#181722] pl-[15px] text-[12px] placeholder:text-[#fff]'
                    placeholder='메세지를 입력하세요 (Shift + Enter : 줄바꿈 , Enter : 메세지 전송)'
                  />
                  <ul className='mt-[7px] flex items-center'>
                    <li className='mr-[40px] flex cursor-pointer items-center gap-[10px] text-[14px] font-[500] text-[#fff]'>
                      <Image
                        src='/assets/icons/file-attaching-icon.webp'
                        alt='파일첨부 아이콘'
                        width={15}
                        height={17}
                      />
                      파일첨부
                    </li>
                    <li
                      className='flex cursor-pointer items-center gap-[10px] text-[14px] font-[500] text-[#fff]'
                      onClick={() => setPhrasePopup(true)}
                    >
                      <Image
                        src='/assets/icons/idiomatic-phrase-icons.webp'
                        alt='파일첨부 아이콘'
                        width={22}
                        height={17}
                      />
                      자주 쓰는 문구
                    </li>
                  </ul>
                  {phrasePopup && (
                    <div className='absolute bottom-[30px] left-[7px] w-[260px] rounded-[10px] bg-[#fff] px-[14px] pb-[10px] text-[#2d2d2d]'>
                      <div className='border-b border-[#cccccc] py-[10px] text-left'>
                        <b className='text-[20px]'>자주 쓰는 문구</b>
                        <button
                          className='absolute right-[13px] top-[13px]'
                          onClick={() => setPhrasePopup(false)}
                        >
                          <Image
                            src='/assets/icons/close-btn03.webp'
                            alt='닫기 아이콘'
                            width={23}
                            height={23}
                          />
                        </button>
                      </div>
                      <ul className='my-[10px] h-[180px] border-b border-[#ccc]'>
                        <li className='mb-[13px] flex justify-between'>
                          <span className='text-[16px] font-[500] text-[#2d2d2d]'>첫인사 문구</span>
                          <div>아이콘1 아이콘1</div>
                        </li>
                        <li className='mb-[13px] flex justify-between'>
                          <span className='text-[16px] font-[500] text-[#2d2d2d]'>
                            쉬는 날 공지
                          </span>
                          <div>아이콘1 아이콘1</div>
                        </li>
                        <li className='flex justify-between'>
                          <span className='text-[16px] font-[500] text-[#2d2d2d]'>거절멘트</span>
                          <div>아이콘1 아이콘1</div>
                        </li>
                      </ul>
                      <button
                        className='flex items-center gap-[10px] text-[16px] font-[500] text-[#8586db]'
                        onClick={() => setPhraseInnerPopup(true)}
                      >
                        <Image
                          src='/assets/icons/message-plus-icon.webp'
                          alt='플러스 아이콘'
                          width={16}
                          height={16}
                        />
                        메세지 추가하기
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex h-[100vh] w-full items-center justify-center px-[30px] lg:hidden'>
          <div className='h-[70%] border border-[#3a3a3a]'>
            <div className='flex items-center justify-between border-b border-[#3a3a3a] p-[15px]'>
              <b className='flex cursor-pointer items-center gap-[15px] text-[20px] text-[#fff]'>
                전체메세지
                <Image
                  src='/assets/icons/inquire-arrow-bottom.webp'
                  alt='화살표'
                  width={20}
                  height={20}
                />
              </b>
              <Image
                src='/assets/icons/inqure-search-icon.webp'
                alt='검색 아이콘'
                width={30}
                height={40}
              />
            </div>
            <ul>
              <li
                className='flex cursor-pointer items-center gap-[22px] border-b border-[#3a3a3a] px-[20px] py-[23px]'
                onClick={() => setMainText(true)}
              >
                <Image
                  src='/assets/images/advertiser-thumb-img04.webp'
                  alt='프로필'
                  width={50}
                  height={50}
                  className='rounded-full'
                />
                <div className=''>
                  <div className='flex flex-wrap items-center gap-[20px] text-[#fff]'>
                    <b className='text-[16px]'>나그참파</b>
                    <span className='text-[14px] font-[500]'>23.08.06</span>
                  </div>
                  <p className='mt-[5px] line-clamp-2 text-[14px] font-[500] text-[#fff]'>
                    해당 콘텐츠 수정 요청 드렸어요! 확인 부탁드리며 다른 질문은 우선...
                  </p>
                </div>
              </li>
              <li
                className='flex cursor-pointer items-center gap-[22px] border-b border-[#3a3a3a] px-[20px] py-[23px]'
                onClick={() => setMainText(true)}
              >
                <Image
                  src='/assets/images/advertiser-thumb-img04.webp'
                  alt='프로필'
                  width={50}
                  height={50}
                  className='rounded-full'
                />
                <div className=''>
                  <div className='flex flex-wrap items-center gap-[20px] text-[#fff]'>
                    <b className='text-[16px]'>나그참파</b>
                    <span className='text-[14px] font-[500]'>23.08.06</span>
                  </div>
                  <p className='mt-[5px] line-clamp-2 text-[14px] font-[500] text-[#fff]'>
                    해당 콘텐츠 수정 요청 드렸어요! 확인 부탁드리며 다른 질문은 우선...
                  </p>
                </div>
              </li>
              <li
                className='flex cursor-pointer items-center gap-[22px] border-b border-[#3a3a3a] px-[20px] py-[23px]'
                onClick={() => setMainText(true)}
              >
                <Image
                  src='/assets/images/advertiser-thumb-img04.webp'
                  alt='프로필'
                  width={50}
                  height={50}
                  className='rounded-full'
                />
                <div className=''>
                  <div className='flex flex-wrap items-center gap-[20px] text-[#fff]'>
                    <b className='text-[16px]'>나그참파</b>
                    <span className='text-[14px] font-[500]'>23.08.06</span>
                  </div>
                  <p className='mt-[5px] line-clamp-2 text-[14px] font-[500] text-[#fff]'>
                    해당 콘텐츠 수정 요청 드렸어요! 확인 부탁드리며 다른 질문은 우선...
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      <PhrasePopup phraseInnerPopup={phraseInnerPopup} setPhraseInnerPopup={setPhraseInnerPopup} />
    </>
  );
};

InquireMessage.getLayout = page => <Layout>{page}</Layout>;

export default InquireMessage;
