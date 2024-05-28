import Image from 'next/image';
import { useState } from 'react';
import { proposalCategoryStore } from 'src/status/store';

// const CategoryTab = ["여행", "문화", "디지털", "맛집", "생활", "식품", "패션", "뷰티", "키즈"];

const CatogeyTabData = Array.from({ length: 10 }, (_, i) => i).map(v => {
  const name = {
    1: '전체',
    2: '여행',
    3: '문화',
    4: '디지털',
    5: '맛집',
    6: '생활',
    7: '식품',
    8: '패션',
    9: '뷰티',
    10: '키즈',
  }[v + 1];

  const width = {
    1: 47,
    2: 46,
    3: 53,
    4: 46,
    5: 55,
    6: 43,
    7: 55,
    8: 44,
    9: 41,
    10: 48,
  }[v + 1];

  const height = {
    1: 72,
    2: 68,
    3: 69,
    4: 65,
    5: 62,
    6: 68,
    7: 72,
    8: 72,
    9: 68,
    10: 71,
  }[v + 1];

  return {
    id: v,
    name: name || '',
    width: width || 0,
    height: height || 0,
    src: `/assets/icons/filter-category${v < 9 ? 0 : ''}${v + 1}.webp`,
  };
});

export const CategoryTab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentValue, categoryState] = proposalCategoryStore(state => [
    state.currentValue,
    state.categoryState,
  ]);

  return (
    <div className='pb-[95px] pt-[120px]'>
      <ul className='flex flex-wrap justify-center gap-x-[90px] gap-y-[28px] 2xl:flex-nowrap 2xl:gap-[28px]'>
        {CatogeyTabData.map((c, i) => (
          <li
            key={i}
            className={`${
              currentTab === i ? 'border-[3px] border-[#f97090]' : 'border-[3px] border-[#fff]'
            } flex h-[106px] w-[106px] cursor-pointer items-center justify-center rounded-[15px]`}
            onClick={() => {
              setCurrentTab(i);
              categoryState(c.name);
            }}
          >
            <Image src={c.src} alt={c.name} width={c.width} height={c.height} />
          </li>
        ))}
      </ul>
    </div>
  );
};
