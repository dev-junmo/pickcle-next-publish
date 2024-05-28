import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Layout } from 'src/components/layout';
import { supporter } from 'src/mockData';
import { keyWordSubmitStore } from 'src/status/store';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const filterCategory = [
  {
    name: '전체',
    count: 18,
  },
  {
    name: '서포터 리뷰어',
    count: 12,
  },
  {
    name: '서포터 브랜드',
    count: 2,
  },
  {
    name: '메이커 영상',
    count: 2,
  },
  {
    name: '메이커 사진',
    count: 0,
  },
  {
    name: '메이커 기타',
    count: 2,
  },
];

const highlightedText = (text: string, query: string) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return (
      <>
        {parts.map((part: string, index: number) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className='text-[#f97090]'>
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </>
    );
  }

  return text;
};

const Search: NextPageWithLayout<Props> = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const [searchKeyWord, setsearchKeyWord] = useState('');
  const [keyWordSubmit, keyWordSubmitEvent] = keyWordSubmitStore(state => [
    state.keyWordSubmit,
    state.keyWordSubmitEvent,
  ]);

  const [dummyData, setDummyData] = useState(supporter.reviewerList);
  const [searchList, setSearchList] = useState<any>([]);

  // const searched = dummyData.filter(item => item.name.includes(keyWordSubmit));

  const searchSubmit = (e: any) => {
    e.preventDefault();

    if (!keyWordSubmit) {
      setSearchList([]);
    } else {
      const searched = dummyData.filter(item => item.name.includes(keyWordSubmit));
      setSearchList(searched);

      console.log(keyWordSubmit, searched);
    }
  };

  return (
    <div className='mx-auto w-full px-[20px] py-[100px] xl:w-[1080px]'>
      <div className='border-b border-[#ffffff] pb-[15px]'>
        <b className='text-[20px] font-bold text-[#fff] md:text-[25px]'>
          <span className='text-[#f97090]'> &#39;화장품 &#39;</span>에 대한 총{' '}
          <span className='text-[#f97090]'>18</span>건의 검색 결과가 있습니다.
        </b>
      </div>
      <div className='mx-auto mb-[100px] mt-[100px] h-[60px] w-full rounded-[20px] border-[3px] border-[#fff] sm:w-[500px] md:mb-[175px] md:h-[80px] md:w-[700px]'>
        <form className='flex h-full items-center' onSubmit={searchSubmit}>
          <input
            type='search'
            defaultValue='화장품'
            value={keyWordSubmit}
            className='h-full w-full rounded-bl-[15px] rounded-tl-[15px] bg-[#000] pl-[20px] text-[25px] font-bold text-[#fff]'
            onChange={e => keyWordSubmitEvent(e.target.value)}
          />
          <button
            type='submit'
            className='h-[54px] w-[80px] rounded-br-[15px] rounded-tr-[15px] bg-[#8586db] md:h-[74px]'
          >
            <Image
              src='/assets/icons/searchpage-search-icon.webp'
              alt='검색 아이콘'
              width={40}
              height={40}
              className='mx-auto'
            />
          </button>
        </form>
      </div>
      <ul className='flex flex-wrap items-center justify-center gap-[20px] pb-[10px] md:justify-start md:gap-[10px]'>
        {filterCategory.map((v, i) => (
          <li
            key={i}
            className={`relative h-[50px] w-[165px] cursor-pointer rounded-[5px] text-center text-[16px] font-[500] leading-[50px] before:absolute before:left-[83px] before:top-[50px] before:border-b-[5px] before:border-l-[5px] before:border-r-[5px] before:border-t-[10px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[#f97090] ${
              currentTab === i
                ? 'bg-[#f97090] text-[#fff] before:block'
                : 'bg-[#cccccc] text-[#000] before:hidden'
            }`}
            onClick={() => setCurrentTab(i)}
          >
            {v.name} ({v.count})
          </li>
        ))}
      </ul>
      <div className='mt-[50px] rounded-[10px] bg-[#fff]'>
        <div className='flex items-center justify-between border-b border-[#2d2d2d] pb-[11px] pl-[25px] pr-[10px] pt-[20px]'>
          <div className='flex items-center gap-[20px]'>
            <b className='text-[20px] font-bold text-[#000]'>서포터 리뷰어</b>
            <span className='flex items-center gap-[10px] text-[16px] text-[#000] before:block before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090]'>
              12건
            </span>
          </div>
          <button className='flex items-center gap-[5px] text-[14px] font-[500]'>
            결과 더보기
            <Image
              src='/assets/icons/search-result-arrow-icon.webp'
              alt='화살표 아이콘'
              width={20}
              height={20}
            />
          </button>
        </div>
        {searchList.length < 1 ? (
          <div className='pb-[30px] text-center'>
            <p className='border-b border-[#cccccc] py-[50px] text-[16px] font-[500] text-[#000]'>
              💔검색 결과가 없습니다.
            </p>
          </div>
        ) : (
          <ul className='pb-[30px]'>
            {searchList?.map((v: any, i: number) => (
              <li
                key={i}
                className='items-center gap-[20px] border-b border-[#cccccc] px-[25px] py-[20px] sm:flex'
              >
                <Image src={v.img} alt='검색 이미지1' width={150} height={150} />
                <div>
                  <div className='mb-[8px] flex items-center'>
                    <b className='mr-[5px] text-[16px] text-[#000]'>
                      [{highlightedText(v.name, keyWordSubmit)}]
                    </b>
                    <Image
                      src='/assets/icons/sns-channel-instagram.webp'
                      alt='snsn 아이콘'
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className='mb-[30px] text-[14px] font-[500]'>
                    {highlightedText(v.introduce, keyWordSubmit)}
                  </p>
                  <ul className='flex items-center'>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#안나수이', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#안나수이파우더', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#블러세팅파우더', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#화장품', keyWordSubmit)}
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='mt-[50px] rounded-[10px] bg-[#fff]'>
        <div className='flex items-center justify-between border-b border-[#2d2d2d] pb-[11px] pl-[25px] pr-[10px] pt-[20px]'>
          <div className='flex items-center gap-[20px]'>
            <b className='text-[20px] font-bold text-[#000]'>서포터 브랜드</b>
            <span className='flex items-center gap-[10px] text-[16px] text-[#000] before:block before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090]'>
              12건
            </span>
          </div>
          <button className='flex items-center gap-[5px] text-[14px] font-[500]'>
            결과 더보기
            <Image
              src='/assets/icons/search-result-arrow-icon.webp'
              alt='화살표 아이콘'
              width={20}
              height={20}
            />
          </button>
        </div>
        {searchList.length < 1 ? (
          <div className='pb-[30px] text-center'>
            <p className='border-b border-[#cccccc] py-[50px] text-[16px] font-[500] text-[#000]'>
              💔검색 결과가 없습니다.
            </p>
          </div>
        ) : (
          <ul className='pb-[30px]'>
            {searchList?.map((v: any, i: number) => (
              <li
                key={i}
                className='items-center gap-[20px] border-b border-[#cccccc] px-[25px] py-[20px] sm:flex'
              >
                <Image src={v.img} alt='검색 이미지1' width={150} height={150} />
                <div>
                  <div className='mb-[8px] flex items-center'>
                    <b className='mr-[5px] text-[16px] text-[#000]'>
                      [{highlightedText(v.name, keyWordSubmit)}]
                    </b>
                    <Image
                      src='/assets/icons/sns-channel-instagram.webp'
                      alt='snsn 아이콘'
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className='mb-[30px] text-[14px] font-[500]'>
                    {highlightedText(v.introduce, keyWordSubmit)}
                  </p>
                  <ul className='flex items-center'>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#안나수이', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#안나수이파우더', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#블러세팅파우더', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#화장품', keyWordSubmit)}
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='mt-[50px] rounded-[10px] bg-[#fff]'>
        <div className='flex items-center justify-between border-b border-[#2d2d2d] pb-[11px] pl-[25px] pr-[10px] pt-[20px]'>
          <div className='flex items-center gap-[20px]'>
            <b className='text-[20px] font-bold text-[#000]'>메이커 영상</b>
            <span className='flex items-center gap-[10px] text-[16px] text-[#000] before:block before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090]'>
              12건
            </span>
          </div>
          <button className='flex items-center gap-[5px] text-[14px] font-[500]'>
            결과 더보기
            <Image
              src='/assets/icons/search-result-arrow-icon.webp'
              alt='화살표 아이콘'
              width={20}
              height={20}
            />
          </button>
        </div>
        {searchList.length < 1 ? (
          <div className='pb-[30px] text-center'>
            <p className='border-b border-[#cccccc] py-[50px] text-[16px] font-[500] text-[#000]'>
              💔검색 결과가 없습니다.
            </p>
          </div>
        ) : (
          <ul className='pb-[30px]'>
            {searchList?.map((v: any, i: number) => (
              <li
                key={i}
                className='items-center gap-[20px] border-b border-[#cccccc] px-[25px] py-[20px] sm:flex'
              >
                <Image src={v.img} alt='검색 이미지1' width={150} height={150} />
                <div>
                  <div className='mb-[8px] flex items-center'>
                    <b className='mr-[5px] text-[16px] text-[#000]'>
                      [{highlightedText(v.name, keyWordSubmit)}]
                    </b>
                    <Image
                      src='/assets/icons/sns-channel-instagram.webp'
                      alt='snsn 아이콘'
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className='mb-[30px] text-[14px] font-[500]'>
                    {highlightedText(v.introduce, keyWordSubmit)}
                  </p>
                  <ul className='flex items-center'>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#안나수이', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#안나수이파우더', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#블러세팅파우더', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#화장품', keyWordSubmit)}
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='mt-[50px] rounded-[10px] bg-[#fff]'>
        <div className='flex items-center justify-between border-b border-[#2d2d2d] pb-[11px] pl-[25px] pr-[10px] pt-[20px]'>
          <div className='flex items-center gap-[20px]'>
            <b className='text-[20px] font-bold text-[#000]'>메이커 사진</b>
            <span className='flex items-center gap-[10px] text-[16px] text-[#000] before:block before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090]'>
              12건
            </span>
          </div>
          <button className='flex items-center gap-[5px] text-[14px] font-[500]'>
            결과 더보기
            <Image
              src='/assets/icons/search-result-arrow-icon.webp'
              alt='화살표 아이콘'
              width={20}
              height={20}
            />
          </button>
        </div>
        {searchList.length < 1 ? (
          <div className='pb-[30px] text-center'>
            <p className='border-b border-[#cccccc] py-[50px] text-[16px] font-[500] text-[#000]'>
              💔검색 결과가 없습니다.
            </p>
          </div>
        ) : (
          <ul className='pb-[30px]'>
            {searchList?.map((v: any, i: number) => (
              <li
                key={i}
                className='items-center gap-[20px] border-b border-[#cccccc] px-[25px] py-[20px] sm:flex'
              >
                <Image src={v.img} alt='검색 이미지1' width={150} height={150} />
                <div>
                  <div className='mb-[8px] flex items-center'>
                    <b className='mr-[5px] text-[16px] text-[#000]'>
                      [{highlightedText(v.name, keyWordSubmit)}]
                    </b>
                    <Image
                      src='/assets/icons/sns-channel-instagram.webp'
                      alt='snsn 아이콘'
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className='mb-[30px] text-[14px] font-[500]'>
                    {highlightedText(v.introduce, keyWordSubmit)}
                  </p>
                  <ul className='flex items-center'>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#안나수이', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#안나수이파우더', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#블러세팅파우더', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#화장품', keyWordSubmit)}
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='mt-[50px] rounded-[10px] bg-[#fff]'>
        <div className='flex items-center justify-between border-b border-[#2d2d2d] pb-[11px] pl-[25px] pr-[10px] pt-[20px]'>
          <div className='flex items-center gap-[20px]'>
            <b className='text-[20px] font-bold text-[#000]'>메이커 기타</b>
            <span className='flex items-center gap-[10px] text-[16px] text-[#000] before:block before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090]'>
              12건
            </span>
          </div>
          <button className='flex items-center gap-[5px] text-[14px] font-[500]'>
            결과 더보기
            <Image
              src='/assets/icons/search-result-arrow-icon.webp'
              alt='화살표 아이콘'
              width={20}
              height={20}
            />
          </button>
        </div>
        {searchList.length < 1 ? (
          <div className='pb-[30px] text-center'>
            <p className='border-b border-[#cccccc] py-[50px] text-[16px] font-[500] text-[#000]'>
              💔검색 결과가 없습니다.
            </p>
          </div>
        ) : (
          <ul className='pb-[30px]'>
            {searchList?.map((v: any, i: number) => (
              <li
                key={i}
                className='items-center gap-[20px] border-b border-[#cccccc] px-[25px] py-[20px] sm:flex'
              >
                <Image src={v.img} alt='검색 이미지1' width={150} height={150} />
                <div>
                  <div className='mb-[8px] flex items-center'>
                    <b className='mr-[5px] text-[16px] text-[#000]'>
                      [{highlightedText(v.name, keyWordSubmit)}]
                    </b>
                    <Image
                      src='/assets/icons/sns-channel-instagram.webp'
                      alt='snsn 아이콘'
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className='mb-[30px] text-[14px] font-[500]'>
                    {highlightedText(v.introduce, keyWordSubmit)}
                  </p>
                  <ul className='flex items-center'>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#안나수이', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#안나수이파우더', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#블러세팅파우더', keyWordSubmit)}
                    </li>
                    <li className='text-[14px] font-[500] text-[#000]'>
                      {highlightedText('#화장품', keyWordSubmit)}
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

Search.getLayout = page => <Layout>{page}</Layout>;

export default Search;
