import Image from 'next/image';
import { useEffect, useState } from 'react';
import { proposalCategoryStore, userTypeStore } from 'src/status/store';
import * as Slider from '@radix-ui/react-slider';
import Link from 'next/link';
import { type NextPageWithLayout } from 'src/types/common';
import { maker, supporter } from '../../mockData';

interface Props {
  userType: string;
  actionType: string;
  contentsType?: string;
}

const filterSnsChannel = [
  {
    sns: '유튜브',
    iconName: 'youtube',
    snsFollower: '구독자수',
  },
  {
    sns: '틱톡',
    iconName: 'tiktok',
    snsFollower: '팔로워수',
  },
  {
    sns: '인스타그램',
    iconName: 'instagram',
    snsFollower: '팔로워수',
  },
  {
    sns: '블로그',
    iconName: 'blog',
    snsFollower: '일 방문자수',
  },
];

export const CategoryContents: NextPageWithLayout<Props> = ({
  userType,
  actionType,
  contentsType,
}) => {
  const [supporterConList, setSupporterConList] = useState(supporter.reviewerList);
  const [currentValue, categoryState] = proposalCategoryStore(state => [
    state.currentValue,
    state.categoryState,
  ]);
  const [userTypeSave, setUserTypeSave] = useState(userType);

  const [items, setItems] = useState<any | []>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const [filterOpen, setFilterOpen] = useState(false);
  const [filterSnsTab, setFilterSnsTab] = useState(0);
  const [snsFollower, setSnsFollower] = useState('구독자수');

  const [makerUserType, setMakerUserType] = useState('');

  const [userTypeSelect, setUserTypeSelect] = useState(false);

  const [combinedAllState, setCombinedAllState] = useState([]);

  useEffect(() => {
    if (actionType === 'maker') {
      setMakerUserType('all');
    } else {
      setMakerUserType('');
    }
  }, [actionType]);

  useEffect(() => {
    if (actionType === 'supporter') {
      setSupporterConList(
        supporter.reviewerList.filter(item => {
          if (currentValue === item.category) return true;
          return false;
        }),
      );
    } else {
    }
  }, [currentValue]);

  useEffect(() => {
    fetchData(page, actionType);
  }, [page, userTypeSave]);

  const fetchData = (page: number, actionType: string) => {
    let newItems =
      actionType === 'supporter'
        ? userTypeSave === 'reviewer'
          ? supporter.reviewerList
          : supporter.advertiserList
        : [];

    if (contentsType === '사진') {
      if (userTypeSave === 'reviewer') {
        newItems = maker.pictureContents.reviewerList;
      } else {
        newItems = maker.pictureContents.advertiserList;
      }
    } else if (contentsType === '영상') {
      if (userTypeSave === 'reviewer') {
        newItems = maker.vedioContents.reviewerList;
      } else {
        newItems = maker.vedioContents.advertiserList;
      }
    } else if (contentsType === '기타') {
      if (userTypeSave === 'reviewer') {
        newItems = maker.etcContents.reviewerList;
      } else {
        newItems = maker.etcContents.advertiserList;
      }
    }
    if (page === 100) {
      setHasMore(false);
    }

    setItems([...items, ...newItems]);
  };

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight + 300 >= scrollHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    // console.log(items);
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  useEffect(() => {
    let combinedAll = [];
    if (contentsType === '사진') {
      combinedAll = maker.pictureContents?.reviewerList.reduce(
        (result: any, value: any, index: number) => {
          result.push({ ...value }, maker.pictureContents?.advertiserList[index]);
          return result;
        },
        [],
      );
    } else if (contentsType === '영상') {
      combinedAll = maker.vedioContents?.reviewerList.reduce(
        (result: any, value: any, index: number) => {
          result.push({ ...value }, maker.vedioContents?.advertiserList[index]);
          return result;
        },
        [],
      );
    } else if (contentsType === '기타') {
      combinedAll = maker.etcContents?.reviewerList.reduce(
        (result: any, value: any, index: number) => {
          result.push({ ...value }, maker.etcContents?.advertiserList[index]);
          return result;
        },
        [],
      );
    }

    setCombinedAllState([]);
    setCombinedAllState(combinedAll);
  }, [makerUserType]);

  return (
    <div className='mb-[200px]'>
      <div
        className={`relative flex items-center justify-end border-b border-[#fff] pb-[10px] ${
          actionType === 'supporter' ? 'mb-[100px]' : 'mb-[20px]'
        }`}
      >
        <span
          className='inline-block cursor-pointer bg-[url(/assets/icons/filter-icon.webp)] bg-[length:20px_20px] bg-[right_bottom] bg-no-repeat pr-[25px] text-base font-bold text-[#fff]'
          onClick={() => setFilterOpen(true)}
        >
          필터
        </span>
        {filterOpen && (
          <div className='absolute right-[-40px] top-[40px] w-[260px] rounded-[20px] bg-[#fff] px-[19px] py-[15px] before:absolute before:right-[62px] before:top-[-20px] before:h-[0px] before:w-[0px] before:border-b-[20px] before:border-l-[10px] before:border-r-[10px] before:border-b-[#fff] before:border-l-[transparent] before:border-r-[transparent]'>
            <button
              className='absolute right-[20px] top-[20px]'
              onClick={() => setFilterOpen(false)}
            >
              <Image
                src='/assets/icons/filter-popup-close.webp'
                alt='닫기 버튼'
                width={14}
                height={14}
              />
            </button>
            {actionType === 'supporter' && (
              <div>
                <div>
                  <b className='text-[14px]'>SNS 채널</b>
                  <ul className='mt-[5px] flex items-center justify-center gap-[20px] text-center'>
                    {filterSnsChannel.map((f, i) => (
                      <li
                        key={i}
                        className='flex cursor-pointer flex-col items-center justify-center'
                        onClick={() => {
                          setFilterSnsTab(i);
                          setSnsFollower(f.snsFollower);
                        }}
                      >
                        <Image
                          src={`/assets/icons/sns-channel-${f.iconName}.webp`}
                          alt='유튜브 아이콘'
                          width={30}
                          height={30}
                        />
                        <span
                          className={`${
                            filterSnsTab === i ? 'text-[#f97090]' : 'text-[#000]'
                          } text-[12px]`}
                        >
                          {f.sns}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {userType === 'reviewer' && (
                  <div className='mt-[16px]'>
                    <b>{snsFollower}</b>
                    <div className='mt-[10px]'>
                      <Slider.Root
                        className='relative flex h-5 w-full touch-none select-none items-center'
                        defaultValue={[50]}
                        max={100}
                        step={1}
                      >
                        <Slider.Track className='relative h-[1px] grow bg-[#707070] before:absolute before:left-0 before:top-[-4px] before:h-[9px] before:w-[1px] before:bg-[#707070] after:absolute after:right-0 after:top-[-4px] after:h-[9px] after:w-[1px] after:bg-[#707070]'>
                          <span className='absolute left-[-2px] top-[4px] text-[8px]'>1</span>
                          <Slider.Range className='absolute h-full rounded-full bg-[#707070]' />
                          <span className='absolute right-[-7px] top-[4px] text-[8px]'>100만~</span>
                        </Slider.Track>
                        <Slider.Thumb
                          className='hover:bg-violet3 block h-5 w-5 rounded-[10px] border border-[#f97090] bg-white focus:outline-none'
                          aria-label='Volume'
                        />
                      </Slider.Root>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className='mt-[24px]'>
              <b>협찬방식</b>
              <ul className='mt-[15px] flex flex-wrap gap-x-[43px] gap-y-[5px]'>
                <li>
                  <label htmlFor='sponsored-one' className='flex items-center'>
                    <input type='checkbox' id='sponsored-one' className='peer hidden' />
                    <span className='mr-[10px] inline-block h-[20px] w-[20px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                    <span className='text-[14px]'>제품협찬</span>
                  </label>
                </li>
                <li>
                  <label htmlFor='sponsored-two' className='flex items-center'>
                    <input type='checkbox' id='sponsored-two' className='peer hidden' />
                    <span className='mr-[10px] inline-block h-[20px] w-[20px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                    <span className='text-[14px]'>방문협찬</span>
                  </label>
                </li>
                <li>
                  <label htmlFor='sponsored-three' className='flex items-center'>
                    <input type='checkbox' id='sponsored-three' className='peer hidden' />
                    <span className='mr-[10px] inline-block h-[20px] w-[20px] rounded-[2px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:13px_13px]' />
                    <span className='text-[14px]'>NO협찬</span>
                  </label>
                </li>
              </ul>
            </div>
            <button
              className='mx-auto mt-[13px] block h-[24px] w-[73px] rounded-[5px] bg-[#868686] text-[12px] text-[#fff]'
              onClick={() => setFilterOpen(false)}
            >
              검색하기
            </button>
          </div>
        )}
      </div>
      {actionType === 'maker' && (
        <div className='mb-[40px] flex gap-[20px]'>
          <div className='h-[42px] w-[105px] rounded-[5px] border border-[#fff] bg-[#fff] bg-opacity-[0.35] text-center text-[20px] font-medium leading-[41px] text-[#fff]'>
            <span>{contentsType}</span>
          </div>
          <div className='relative text-left'>
            <button
              className='flex h-[42px] w-[177px] items-center justify-between rounded-[5px] border border-[#fff] bg-[#fff] bg-opacity-[0.35] px-[10px] text-left text-[20px] font-medium leading-[41px] text-[#fff]'
              onClick={() => setUserTypeSelect(prev => !prev)}
            >
              전체
              <Image
                src='/assets/icons/maker-select-arrow.webp'
                alt='화살표'
                width={32}
                height={32}
              />
            </button>
            <ul
              className={`${
                userTypeSelect ? 'block' : 'hidden'
              } absolute left-0 top-[41px] z-10 mt-[11px] w-full rounded-[5px] border border-[#fff] bg-[#fff] bg-opacity-[0.35] py-[10px] pl-[10px] text-[20px] font-medium text-[#fff]`}
            >
              <li
                className='mb-[20px] cursor-pointer'
                onClick={() => {
                  setMakerUserType('all');
                  setItems([]);
                }}
              >
                전체
              </li>
              <li
                className='mb-[20px] cursor-pointer'
                onClick={() => {
                  setMakerUserType('');
                  setUserTypeSave('reviewer');
                  setItems([]);
                }}
              >
                리뷰어
              </li>
              <li
                className='cursor-pointer'
                onClick={() => {
                  setMakerUserType('');
                  setUserTypeSave('advertiser');
                  setItems([]);
                }}
              >
                브랜드
              </li>
            </ul>
          </div>
        </div>
      )}
      <ul className='flex flex-wrap justify-center gap-x-[50px] gap-y-[104px] xl:gap-x-[30px]'>
        {makerUserType === 'all' ? (
          <>
            {combinedAllState.map((c: any) => (
              <li
                key={c.id}
                className='group w-[280px] md:w-[280px] xl:w-[237px] 2xl:w-[260px] [&:nth-child(even)]:text-[#8e8eff] [&:nth-child(odd)]:text-[#f97090]'
              >
                <Link href={c.url}>
                  <Image
                    src={c.img}
                    alt='리뷰어 썸네일'
                    width={260}
                    height={260}
                    className='h-[260px] w-[260px] rounded-[10px] object-cover md:h-[280px] md:w-[280px] xl:h-[237px] 2xl:h-[260px]'
                  />
                  <div className='mt-[10px] flex items-center justify-between'>
                    <b className='inline-block text-[18px]'>[{c.name}]</b>
                    <ul className='flex items-center'>
                      <li>
                        <Image src={c.snsChannel} alt='sns아이콘' width={30} height={30} />
                      </li>
                    </ul>
                  </div>
                  <p className='mt-[5px] line-clamp-2 text-ellipsis break-all text-base font-bold text-[#fff]'>
                    {c.introduce}
                  </p>
                  <ul className='mt-[14px] flex items-center gap-[7px] text-[14px] font-bold group-[&:nth-child(even)]:text-[#f97090] group-[&:nth-child(odd)]:text-[#8e8eff]'>
                    {c.hashtag.map((h: any, i: number) => (
                      <li key={i} className='truncate'>
                        {h}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </>
        ) : (
          <>
            {items.map((c: any) => (
              <li key={c.id} className='w-[280px] md:w-[280px] xl:w-[237px] 2xl:w-[260px]'>
                <Link href={c.url}>
                  <Image
                    src={c.img}
                    alt='리뷰어 썸네일'
                    width={260}
                    height={260}
                    className='h-[260px] w-[260px] rounded-[10px] object-cover md:h-[280px] md:w-[280px] xl:h-[237px] 2xl:h-[260px]'
                  />
                  <div className='mt-[10px] flex items-center justify-between'>
                    <b
                      className={`${
                        userTypeSave === 'reviewer' ? 'text-[#f97090]' : 'text-[#8e8eff]'
                      } inline-block text-[18px]`}
                    >
                      [{c.name}]
                    </b>
                    <ul className='flex items-center'>
                      <li>
                        <Image src={c.snsChannel} alt='sns아이콘' width={30} height={30} />
                      </li>
                    </ul>
                  </div>
                  <p className='mt-[5px] line-clamp-2 text-ellipsis break-all text-base font-bold text-[#fff]'>
                    {c.introduce}
                  </p>
                  <ul
                    className={`${
                      userTypeSave === 'reviewer' ? 'text-[#8e8eff]' : 'text-[#f97090]'
                    } mt-[14px] flex items-center gap-[7px] text-[14px] font-bold`}
                  >
                    {c.hashtag.map((h: any, i: number) => (
                      <li key={i} className='truncate'>
                        {h}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
