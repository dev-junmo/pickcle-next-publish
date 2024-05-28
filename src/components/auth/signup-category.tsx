import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Layout } from 'src/components/layout';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  usrTpye: string;
}

const signUpCategoryList: string[] = [
  '여행',
  '문화',
  '디지털',
  '맛집',
  '생활',
  '식품',
  '패션',
  '뷰티',
  '키즈',
];

const SignUpCategory: NextPageWithLayout<Props> = ({ usrTpye }) => {
  const [categoryList, setCategoryList] = useState(signUpCategoryList);
  const [categorySelect, setCategorySelect] = useState<string[]>([]);
  const [signUpActive, setSignUpActive] = useState(false);

  useEffect(() => {
    if (categorySelect.length > 2) {
      setSignUpActive(true);
    } else {
      setSignUpActive(false);
    }
  }, [categorySelect]);

  return (
    <div>
      <p className='my-[72px] text-center text-base font-medium'>
        {`${
          usrTpye === 'reviewer'
            ? '리뷰어님이 좋아하실만한 광고주 브랜드를 추천해드릴게요.'
            : '광고주님이 좋아하실만한 리뷰어를 추천해드릴게요.'
        }`}
        <span className='text-[#e93963]'> (택 3)</span>
      </p>
      <div className='flex flex-wrap justify-center gap-[56px_30px] md:gap-[56px_80px] xl:gap-[106px_50px] xl:px-[75px]'>
        {categoryList.map((c, i) => (
          <div
            key={c}
            className={`h-[65px] w-[65px] cursor-pointer rounded-[20px] sm:h-[150px] sm:w-[150px] ${
              categorySelect.includes(c)
                ? usrTpye === 'reviewer'
                  ? 'border-[3px] border-[#e93963]'
                  : 'border-[3px] border-[#8586db]'
                : ''
            }`}
            onClick={() => {
              if (categorySelect.length > 2) {
                if (!categorySelect.includes(c)) {
                  return false;
                }
              }

              !categorySelect.includes(c)
                ? setCategorySelect(select => [...select, c])
                : setCategorySelect(categorySelect.filter(button => button !== c));
            }}
          >
            <Image
              src={`/assets/icons/signup-category-icon0${i + 1}.webp`}
              alt={c}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
      <button
        type='submit'
        disabled={!signUpActive}
        className={`mt-[100px] h-[63px] w-full rounded-[18px] text-[20px] font-bold leading-[63px] text-[#fff] ${
          signUpActive ? (usrTpye === 'reviewer' ? 'bg-[#e93963]' : 'bg-[#8586db]') : 'bg-[#c0c0c0]'
        }`}
      >
        회원가입
      </button>
    </div>
  );
};

SignUpCategory.getLayout = page => <Layout>{page}</Layout>;

export default SignUpCategory;
