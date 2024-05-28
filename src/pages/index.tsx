import Image from 'next/image';
import Login from 'src/components/auth/login';
import {
  HomeBanner,
  HomeBestContents,
  HomeNewBrands,
  HomePopularBrands,
  HomeContentsBanner,
  ScrollTopButton,
} from 'src/components/home';
import { AdvertiserBesteReviewer } from 'src/components/home/advertiser/ad-best-reviewer';
import { AdvertiserTasteReviewer } from 'src/components/home/advertiser/ad-taste-reviewer';
import { ReviewerNewBrand } from 'src/components/home/reviewer/re-new-brand';
import { ReviewerTasteBrand } from 'src/components/home/reviewer/re-taste-brand';
import { Layout } from 'src/components/layout';
import { userStore, userTypeStore } from 'src/status/store';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const Home: NextPageWithLayout<Props> = () => {
  const [userType, userTypeState] = userTypeStore(state => [state.userType, state.userTypeState]);
  const [isLogin, isLoginState] = userStore(state => [state.isLogin, state.isLoginState]);

  return (
    <div className='relative'>
      <HomeBanner />
      {isLogin ? (
        userType === '리뷰어' ? (
          <ReviewerTasteBrand />
        ) : (
          <AdvertiserTasteReviewer />
        )
      ) : (
        <HomeBestContents />
      )}
      {!isLogin && <HomeNewBrands contentsTitle='신규 브랜드' />}
      {isLogin ? (
        userType === '리뷰어' ? (
          <ReviewerNewBrand />
        ) : (
          <AdvertiserBesteReviewer />
        )
      ) : (
        <HomePopularBrands />
      )}
      {isLogin && userType === '광고주' && <HomeNewBrands contentsTitle='Best 리뷰어' />}
      <HomeContentsBanner imgCount={3} imgName='notice' />
      {!isLogin && <HomeNewBrands contentsTitle='NEW 리뷰어' />}
      <div className='px-[30px] pb-[150px]'>
        <Image
          src='/assets/images/bottom-banner1.webp'
          alt='서비스 이용안내'
          width={1424}
          height={186}
          className='mx-auto min-h-[150px] object-cover'
        />
      </div>

      {/* <HomeContentsBanner imgCount={1} imgName='bottom' /> */}
      {/* <ScrollTopButton /> */}
      {/* <Login /> */}
    </div>
  );
};

Home.getLayout = page => <Layout>{page}</Layout>;

export default Home;
