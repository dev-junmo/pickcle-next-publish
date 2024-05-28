import Image from 'next/image';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const AdvertiserReport: NextPageWithLayout<Props> = () => {
  return (
    <div className='mx-auto my-[100px] w-full px-[20px] text-[#fff] lg:px-0 xl:w-[1040px] 2xl:w-[1420px]'>
      <div className='mx-auto text-center xl:w-[753px]'>
        <div className='mb-[20px] mt-[50px] flex items-center justify-center gap-[15px]'>
          <Image
            src='/assets/icons/report-icon.webp'
            alt='광고주 신고하기 아이콘'
            width={36}
            height={38}
          />
          <b className='text-[30px] font-bold text-[#fff]'>광고주 신고하기</b>
        </div>
        <p className='mb-[10px] text-[16px] font-[500] text-[#fff]'>
          픽클 팀에게 신고하실 내용을 알려주세요.
        </p>
        <p className='text-[14px] font-normal text-[#cccccc]'>
          신고받은 광고주 회원은 내부 심의를 거쳐 이용제한 패널티를 받을 수 있습니다.
        </p>

        <div className='mt-[100px] text-left'>
          <div>
            <label className='cursor-auto text-[20px] font-[500] text-[#fff]'>
              신고 브랜드 / 담당자 <span className='text-[20px] font-[500] text-[#f97090]'>＊</span>
            </label>
            <input
              className='mt-[15px] block h-[48px] w-full rounded-[5px] pl-[15px] text-[16px] font-[500] placeholder:text-[#cccccc]'
              placeholder='신고 브랜드 / 담당자/ 콘텐츠명을 입력해주세요.'
            />
          </div>
        </div>
        <div className='mt-[30px] text-left'>
          <div>
            <label className='cursor-auto text-[20px] font-[500] text-[#fff]'>
              연락받은 수단 <span className='text-[20px] font-[500] text-[#f97090]'>＊</span>
            </label>
            <ul className='mt-[16px] flex flex-wrap items-center gap-[20px] sm:gap-[30px]'>
              <li>
                <label htmlFor='note' className='relative flex items-center'>
                  <input
                    defaultChecked
                    type='radio'
                    id='note'
                    className='peer hidden'
                    name='contact-radio'
                    value='쪽지'
                  />
                  <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full bg-[#fff] p-[5px] before:hidden before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                  <span className='text-[16px] font-[500] text-[#cccccc]'>쪽지</span>
                </label>
              </li>
              <li>
                <label htmlFor='email' className='relative flex items-center'>
                  <input
                    type='radio'
                    id='email'
                    className='peer hidden'
                    name='contact-radio'
                    value='이메일'
                  />
                  <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full bg-[#fff] p-[5px] before:hidden before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                  <span className='text-[16px] font-[500] text-[#cccccc]'>이메일</span>
                </label>
              </li>
              <li>
                <label htmlFor='phone' className='relative flex items-center'>
                  <input
                    type='radio'
                    id='phone'
                    className='peer hidden'
                    name='contact-radio'
                    value='전화'
                  />
                  <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full bg-[#fff] p-[5px] before:hidden before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                  <span className='text-[16px] font-[500] text-[#cccccc]'>전화</span>
                </label>
              </li>
              <li>
                <label htmlFor='letter' className='relative flex items-center'>
                  <input
                    type='radio'
                    id='letter'
                    className='peer hidden'
                    name='contact-radio'
                    value='문자'
                  />
                  <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full bg-[#fff] p-[5px] before:hidden before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                  <span className='text-[16px] font-[500] text-[#cccccc]'>문자</span>
                </label>
              </li>
              <li>
                <label htmlFor='kakaotalk' className='relative flex items-center'>
                  <input
                    type='radio'
                    id='kakaotalk'
                    className='peer hidden'
                    name='contact-radio'
                    value='카카오톡'
                  />
                  <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full bg-[#fff] p-[5px] before:hidden before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                  <span className='text-[16px] font-[500] text-[#cccccc]'>카카오톡</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-[30px] text-left'>
          <div>
            <label className='cursor-auto text-[16px] font-[500] text-[#fff]'>상세 연락처</label>
            <input
              className='mt-[15px] block h-[48px] w-full rounded-[5px] pl-[15px] text-[16px] font-[500] placeholder:text-[#cccccc]'
              placeholder='브랜드의 정보(이메일, 연락처)을  입력해 주세요.'
            />
          </div>
        </div>
        <div className='mt-[30px] text-left'>
          <div>
            <label className='cursor-auto text-[16px] font-[500] text-[#fff]'>
              제목/콘텐츠 번호
            </label>
            <input
              className='mt-[15px] block h-[48px] w-full rounded-[5px] pl-[15px] text-[16px] font-[500] placeholder:text-[#cccccc]'
              placeholder='거래/ 제안 번호를 입력해 주세요.'
            />
          </div>
        </div>
        <div className='mt-[30px] text-left'>
          <div>
            <label className='cursor-auto text-[20px] font-[500] text-[#fff]'>
              신고 내용 <span className='text-[20px] font-[500] text-[#f97090]'>＊</span>
            </label>
            <textarea className='mt-[15px] block h-[275px] w-full rounded-[5px] bg-[#fff] pl-[15px] pt-[15px]' />
          </div>
        </div>
        <div className='mt-[30px]'>
          <b className='mb-[15px] block text-left text-[20px] font-[500] text-[#fff]'>
            이미지 첨부 <span className='text-[20px] font-[500] text-[#f97090]'>＊</span>
          </b>
          <button className='flex h-[50px] w-full items-center justify-center rounded-[5px] bg-[#c2c2f6]'>
            <Image
              src='/assets/icons/file-plus-btn.webp'
              alt='플러스 아이콘'
              width={30}
              height={30}
            />
            <span className='ml-[10px] text-[18px] font-bold text-[#000] sm:text-[20px]'>
              첨부하기
            </span>
          </button>
          <p className='mt-[5px] text-left text-[16px] font-[500] text-[#cccccc]'>
            * 신고 사유에 해당하는 화면을 캡쳐 후 첨부해 주세요.
          </p>
        </div>
        <button className='mx-auto mb-[110px] mt-[100px] block h-[56px] w-[190px] rounded-[10px] bg-[#f97090] text-[20px] font-bold text-[#fff]'>
          접수하기
        </button>
        <ul className='mb-[250px] text-left'>
          <li className='mb-[10px] text-[16px] font-[500] text-[#fff]'>
            ＊픽클은 관련 콘텐츠 / 거래 목적으로만 회원의 일부 정보를 공개 하고 있습니다.
          </li>
          <li className='text-[16px] font-[500] text-[#fff]'>
            ＊관련 콘텐츠 / 거래 외의 목적으로 개인정보를 이용 한 경우, 이는 개인정보보호법 위반
            행위 입니다.
          </li>
        </ul>
      </div>
    </div>
  );
};

AdvertiserReport.getLayout = page => <Layout>{page}</Layout>;

export default AdvertiserReport;
