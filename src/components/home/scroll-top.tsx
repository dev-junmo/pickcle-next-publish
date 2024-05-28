import Link from 'next/link';
import { useEffect, useState } from 'react';

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <div
      className={`fixed right-[2%] top-2/4 z-10 hidden text-white ${
        showButton ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 lg:block`}
    >
      <button
        className='h-[80px] w-[80px] bg-[url(/assets/icons/top-button.webp)]'
        onClick={scrollToTop}
      />
      <Link href='/community/one-inquire'>
        <span className='mx-auto mb-[30px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#8586db] text-[12px] font-normal'>
          마이헬퍼
        </span>
      </Link>
      <Link href='/community/use-guide'>
        <span className='mx-auto mb-[30px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#8586db] text-[12px] font-normal'>
          이용가이드
        </span>
      </Link>
      <Link href='/supporter/advertiser/proposal-advertiser'>
        <span className='mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#e93963] text-center text-[12px] font-normal'>
          제안 <br /> 바로가기
        </span>
      </Link>
    </div>
  );
};
