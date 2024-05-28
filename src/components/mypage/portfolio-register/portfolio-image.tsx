import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  userType: string;
}

export const PortfolioImage: NextPageWithLayout<Props> = ({ userType }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imgFileUrl, setImgFileUrl]: any = useState(null);

  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];
    const reader = new FileReader();
    reader?.readAsDataURL(file);

    return new Promise<void>(resolve => {
      reader.onload = () => {
        setImgFileUrl(reader?.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <div className='mb-[100px] mt-[20px] w-full'>
      <b className='mb-[15px] block text-[20px] font-[500] text-[#fff]'>
        {userType === 'reviewer' ? '포트폴리오' : '제품 / 서비스'} 이미지{' '}
        <span
          className={`text-[20px] font-[500] ${
            userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
          }`}
        >
          ＊
        </span>
      </b>
      <div className=''>
        <b className='mb-[30px] mt-[34px] block text-[16px] font-[500] text-[#fff]'>
          대표 이미지{' '}
          <span
            className={`text-[16px] font-[500] ${
              userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
            }`}
          >
            ＊
          </span>
        </b>
        <div className='relative mr-[50px] mt-[20px]'>
          <label htmlFor='represent-img' className='relative inline-block'>
            <input
              ref={inputRef}
              type='file'
              accept='image/*'
              id='represent-img'
              className='hidden'
              onChange={onUploadImage}
            />
            <button
              className='flex h-[200px] w-[200px] items-center justify-center border border-[#cccccc]'
              onClick={onUploadImageButtonClick}
            >
              <Image
                src='/assets/icons/plus-btn-big.webp'
                alt='플러스 버튼'
                width={60}
                height={60}
                className='relative z-[10]'
              />
              {imgFileUrl && (
                <Image
                  src={imgFileUrl}
                  alt='등록 이미지'
                  width={200}
                  height={200}
                  className='absolute left-0 top-0 aspect-square h-[200px] object-fill'
                />
              )}
            </button>
          </label>
          <p className='absolute left-[240px] top-[75px] hidden rounded-[10px] bg-[#868686] px-[19px] py-[9px] text-[14px] text-[#fff] before:absolute before:left-[-15px] before:top-[15px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[10px] before:border-t-[5px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[#868686] before:border-t-[transparent] sm:block'>
            대표 이미지는 1장만 등록 가능합니다.
          </p>
        </div>
        <div className='mt-[50px]'>
          <b className='mb-[25px] block text-[16px] font-[500] text-[#fff]'>추가 이미지</b>
          <div className='lg:flex'>
            <label htmlFor='Additional-img01' className='relative lg:mr-[20px]'>
              <input
                ref={inputRef}
                type='file'
                accept='image/*'
                id='Additional-img01'
                className='hidden'
                onChange={onUploadImage}
              />
              <button
                className='mb-[20px] flex h-[200px] w-[200px] items-center justify-center border border-[#cccccc]'
                onClick={onUploadImageButtonClick}
              >
                <Image
                  src='/assets/icons/plus-btn-big.webp'
                  alt='플러스 버튼'
                  width={60}
                  height={60}
                  className='relative z-[10]'
                />
                {imgFileUrl && (
                  <Image
                    src={imgFileUrl}
                    alt='플러스 버튼'
                    width={200}
                    height={200}
                    className='absolute left-0 top-0 aspect-square h-[200px] object-fill'
                  />
                )}
              </button>
            </label>
            <label htmlFor='Additional-img02' className='relative lg:mr-[20px]'>
              <input
                ref={inputRef}
                type='file'
                accept='image/*'
                id='Additional-img02'
                className='hidden'
                onChange={onUploadImage}
              />
              <button
                className='mb-[20px] flex h-[200px] w-[200px] items-center justify-center border border-[#cccccc]'
                onClick={onUploadImageButtonClick}
              >
                <Image
                  src='/assets/icons/plus-btn-big.webp'
                  alt='플러스 버튼'
                  width={60}
                  height={60}
                  className='relative z-[10]'
                />
                {imgFileUrl && (
                  <Image
                    src={imgFileUrl}
                    alt='플러스 버튼'
                    width={200}
                    height={200}
                    className='absolute left-0 top-0 aspect-square h-[200px] object-fill'
                  />
                )}
              </button>
            </label>
            <label htmlFor='Additional-img03' className='relative'>
              <input
                ref={inputRef}
                type='file'
                accept='image/*'
                id='Additional-img03'
                className='hidden'
                onChange={onUploadImage}
              />
              <button
                className='flex h-[200px] w-[200px] items-center justify-center border border-[#cccccc]'
                onClick={onUploadImageButtonClick}
              >
                <Image
                  src='/assets/icons/plus-btn-big.webp'
                  alt='플러스 버튼'
                  width={60}
                  height={60}
                  className='relative z-[10]'
                />
                {imgFileUrl && (
                  <Image
                    src={imgFileUrl}
                    alt='플러스 버튼'
                    width={200}
                    height={200}
                    className='absolute left-0 top-0 aspect-square h-[200px] object-fill'
                  />
                )}
              </button>
            </label>
          </div>
        </div>
        <ul className='mt-[15px]'>
          <li
            className={`mb-[5px] text-[14px] font-[500] md:text-[16px] ${
              userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
            }`}
          >
            ＊ 등록하시는 포트폴리오와 관련된 사진을 등록해 주세요.
          </li>
          <li
            className={`mb-[5px] text-[14px] font-[500] md:text-[16px] ${
              userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
            }`}
          >
            ＊ 최소 3장 이상의 사진을 등록 하시는 것을 추천 드려요.
          </li>
          <li
            className={`text-[14px] font-[500] md:text-[16px] ${
              userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
            }`}
          >
            ＊ 한 장당 최대 10MB, 최대 5장까지 등록 가능 합니다.
          </li>
        </ul>
      </div>
    </div>
  );
};
