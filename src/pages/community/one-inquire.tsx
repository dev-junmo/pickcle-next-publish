import Image from 'next/image';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const OneInquire: NextPageWithLayout<Props> = () => {
  const [fileName, setFileName] = useState([]);

  const onFileName = (e: any) => {
    const imageLists = e.target.files;
    const imageUrlLists: any = [...fileName];

    if (fileName.length < 3) {
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = imageLists[i].name;
        // const fileNameValue = currentImageUrl.split("\\");
        // const fileNameLength = fileNameValue.length;
        // const getFileName = fileNameValue[fileNameLength - 1];
        imageUrlLists.push(currentImageUrl);

        setFileName(imageUrlLists);
      }
    }
    // const fileNameValue = value.split("\\");
    // const fileNameLength = fileNameValue.length;
    // const getFileName = fileNameValue[fileNameLength - 1];

    // setFileName(getFileName);
  };

  console.log(fileName);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='mx-auto w-full px-[30px] pt-[100px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
        <b className='text-[25px] text-white'>1:1 문의하기</b>
        <div className='mt-[50px] border-t-[2px] border-[#fff] pb-[200px] pr-0 pt-[70px] sm:pt-[100px] md:pr-[50px] md:pt-[167px] 2xl:pl-[68px] 2xl:pr-[190px]'>
          <form>
            <div className='block items-center justify-center gap-[30px] md:flex'>
              <label
                htmlFor='title'
                className='mb-[20px] block w-[40px] text-[20px] font-bold text-[#fff] sm:w-[75px] md:mb-0 md:text-right'
              >
                제목
              </label>
              <input
                name='title'
                id='title'
                type='text'
                className='h-[50px] w-full flex-1 px-[15px] text-[18px] font-medium text-[#e93963]'
              />
            </div>
            <p className='mb-[70px] mt-[16px] text-base font-medium text-[#fff] sm:mb-[90px] md:ml-[104px]'>
              * 문의 주신 내용에 해당되는 콘텐츠 번호(숫자), 제목을 기입해주셔야 상세한 답변이
              가능합니다.
              <span className='ml-0 block text-[#f97090] md:ml-[13px]'>
                제목은 필수 입력 사항입니다.
              </span>
            </p>
            <div className='mb-[84px] block items-start justify-center gap-[30px] md:flex'>
              <label
                htmlFor='contact-details'
                className='mb-[20px] mt-[8px] block text-[20px] font-bold text-[#fff] sm:w-[75px] md:mb-0 md:text-right'
              >
                문의내용
              </label>
              <div className='flex-1'>
                <select className='h-[50px] w-full bg-[#fff] bg-[url(/assets/icons/select-arrow.webp)] bg-[length:32px_32px] bg-[right_18px_top_10px] bg-no-repeat pl-[20px] text-base font-medium text-[#828282]'>
                  <option key='select' hidden value=''>
                    문의 유형 선택 (필수)
                  </option>
                  <option key='common' value='문의 유형 선택 (필수)' className='text-[#000]'>
                    문의 유형 선택 (필수)
                  </option>
                </select>
                <p className='my-[15px] bg-[#eeeeee] py-[8px] pl-[15px] font-medium'>
                  무단 개인정보 활용, 마감일 재촉 등 광고주 담당자의 부당 행위에 대한 문의는 꼭{' '}
                  <Image
                    src='/assets/icons/warning-light2.webp'
                    alt='싸이렌 아이콘'
                    width={20}
                    height={20}
                    className='mt-[-2px] inline-block align-middle'
                  />
                  신고하기를 이용부탁드립니다.
                </p>
                <textarea
                  className='h-[772px] w-full px-[20px] py-[24px]'
                  placeholder='문의 내용을 입력해 주세요.'
                />
              </div>
            </div>
            <div className='block items-center md:flex'>
              <span className='mb-[20px] mr-[30px] block text-[20px] font-bold text-[#fff] sm:w-[75px] md:mb-0 md:text-right'>
                첨부파일
              </span>
              <label
                htmlFor='input-file'
                className='flex h-[66px] flex-1 items-center justify-center bg-[#c2c2f6] bg-[length:20px_20px] bg-[left_372px_top_24px] bg-no-repeat text-[20px] font-bold xl:bg-[url(/assets/icons/plus-icon.webp)] 2xl:bg-[left_462px_top_24px]'
              >
                <span>첨부하기</span>
              </label>
              <input
                multiple
                type='file'
                id='input-file'
                className='hidden'
                onChange={onFileName}
              />
            </div>
            <div className='ml-[104px] mt-[15px] font-bold italic'>
              {fileName?.map((f, i) => (
                <span key={f} className='mr-[25px] text-[#fff]'>
                  {f}
                </span>
              ))}
            </div>
            <p className='ml-[104px] mt-[15px] text-base font-medium text-[#fff]'>
              *10MB 미만의 파일만 등록이 가능하며, 최대 3장까지 첨부 가능합니다.
            </p>
            <button
              type='submit'
              className='mx-auto mt-[61px] block h-[59px] w-full rounded-[10px] bg-[#8586db] text-[20px] font-bold leading-[59px] text-[#fff] sm:w-[454px] xl:ml-[310px] 2xl:ml-[402px]'
            >
              등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

OneInquire.getLayout = page => <Layout>{page}</Layout>;

export default OneInquire;
