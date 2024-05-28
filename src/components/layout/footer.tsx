import clsx from 'clsx';
import Link from 'next/link';
import { type ComponentProps } from 'react';
import { userStore, userTypeStore } from 'src/status/store';

export type FooterProps = ComponentProps<'footer'>;

const footerButtonClassName =
  'rounded-[9px] bg-white px-2.5 py-0.5 text-[12px] font-bold text-[#494949]';

export function Footer({ className, ...props }: FooterProps) {
  const [userType, userTypeState] = userTypeStore(state => [state.userType, state.userTypeState]);
  const [isLogin, isLoginState] = userStore(state => [state.isLogin, state.isLoginState]);

  return (
    <footer
      {...props}
      className={clsx(
        `relative bg-main-first ${isLogin && userType === '광고주' ? 'bg-main-second' : ''}`,
        className,
      )}
    >
      <div className='2lx:px-0 mx-auto block justify-between gap-[70px] px-[30px] pb-[17px] pt-[30px] text-white md:flex lg:gap-0 2xl:w-[1420px]'>
        <div className='mb-[80px] flex flex-col text-[12px] font-medium md:mb-0'>
          <div className='mb-[30px] font-medium'>
            <strong className='block text-[35px]'>1544-9015</strong>
            <span className='text-[12px]'>월-금 09:00 ~ 17:00 / 주말, 공휴일 휴무</span>
          </div>
          <div className='mb-[30px] grid gap-y-[17px]'>
            <address>
              <ul>
                <li>PICKCLE | 대표이사:*** | 개인정보 보호 최고 책임자: xxx</li>
                <li>
                  사업자 등록번호 : 261-428-3594522 | 통신판매업신고번호 제2023-서울강서-15236호
                </li>
                <li>주소 : 서울특별시 강서구 마곡중앙로 59-11 엠비즈타워</li>
                <li>메일 : help@pickcle.co.kr | 전화: 1588-0227</li>
              </ul>
            </address>
            <p>ⓒPICKCLE Corporation.All Rights Reserved. | 개인정보처리방침</p>
          </div>
          <Link
            href='#'
            className='h-[36px] w-[97px] bg-[url(/assets/icons/logo-white.webp)] bg-cover'
          />
        </div>
        <div className='flex gap-[70px] font-medium md:gap-[50px] lg:gap-[70px]'>
          <div>
            <b className='text-[20px]'>픽클</b>
            <ul className='mt-[10px] text-[16px] font-[500]'>
              <li className='mb-[10px]'>
                <Link href='/community/use-guide'>이용가이드</Link>
              </li>
              <li>
                <Link href='/community/platform-introduction' className='underline'>
                  플랫폼 소개
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <b className='text-[20px]'>지원</b>
            <ul className='mt-[10px] text-[16px] font-[500]'>
              <li className='mb-[10px]'>
                <Link href='/community/customer-service' className='underline'>
                  고객센터 홈
                </Link>
              </li>
              <li className='mb-[10px]'>
                <Link href='/community/notice-board'>공지사항</Link>
              </li>
              <li className='mb-[10px]'>
                <Link href='/community/faq'>FAQ</Link>
              </li>
              <li className='mb-[10px]'>
                <Link href='/community/one-inquire'>1:1문의</Link>
              </li>
              <li className='mb-[10px]'>
                <Link href='/community/my-inquire'>나의 문의 내역</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
