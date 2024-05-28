import { type NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { userStore } from 'src/status/store';

interface Props {
  imgCount: number;
  imgName: string;
}

const dummyBrands = (count: number, name: string) => {
  const dummyBrandsList = Array.from({ length: count }, (_, i) => i + 1).map(v => ({
    id: v,
    title: `배너${v}`,
    img: `/assets/images/${name}-banner${v}.webp`,
  }));
  return dummyBrandsList;
};

export const HomeContentsBanner: NextPage<Props> = props => {
  const { imgCount, imgName } = props;
  const [isLogin, isLoginState] = userStore(state => [state.isLogin, state.isLoginState]);

  return (
    <div className={`${isLogin ? 'pb-[216px]' : 'pb-[100px]'}`}>
      <div className='md:flex justify-center gap-[50px] px-[30px]'>
        {/* {dummyBrands(imgCount, imgName).map(v => (
          <Image
            key={v.id}
            src={v.img}
            alt={v.title}
            width={imgCount === 1 ? 1424 : 440}
            height={imgCount === 1 ? 186 : 200}
            className='object-cover'
          />
        ))} */}

        <Link href='/community/use-guide' className='block'>
          <Image
            src='/assets/images/notice-banner1.webp'
            alt='서비스 이용안내'
            width={440}
            height={200}
            className='object-cover mx-auto'
          />
        </Link>
        <Link href='/community/faq' className='block mt-[50px] md:mt-0'>
          <Image
            src='/assets/images/notice-banner2.webp'
            alt='포인트 지급 기준 안내'
            width={440}
            height={200}
            className='object-cover mx-auto'
          />
        </Link>
        <Link href='/community/faq' className='block mt-[50px] md:mt-0'>
          <Image
            src='/assets/images/notice-banner3.webp'
            alt='활동점수 및 멤버쉽 등급 기준 안내'
            width={440}
            height={200}
            className='object-cover mx-auto'
          />
        </Link>
      </div>
    </div>
  );
};
