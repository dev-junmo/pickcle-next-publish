import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, type ComponentProps, useEffect } from 'react';
import { keyWordSubmitStore, loginFormStore, userStore, userTypeStore } from 'src/status/store';

export type HeaderProps = ComponentProps<'header'>;

const subMenu = [
  {
    id: 1,
    menu: '서포터',
    pathName: 'supporter',
    url: '/supporter/reviewer/proposal-reviewer',
    isActive: false,
    subMenuItems: [
      {
        id: 1,
        item: '리뷰어에게 제안',
        url: '/supporter/reviewer/proposal-reviewer',
        isActive: false,
      },
      {
        id: 2,
        item: '광고주에게 제안',
        url: '/supporter/advertiser/proposal-advertiser',
        isActive: false,
      },
    ],
  },
  {
    id: 2,
    menu: '메이커',
    pathName: 'maker',
    url: '/maker/vedio/maker-vedio',
    isActive: false,
    subMenuItems: [
      { id: 3, item: '영상 제작물', url: '/maker/vedio/maker-vedio', isActive: false },
      { id: 4, item: '사진 제작물', url: '/maker/picture/maker-picture', isActive: false },
      { id: 5, item: '기타 제작물', url: '/maker/etc/maker-etc', isActive: false },
    ],
  },
  {
    id: 3,
    menu: '진행사례',
    pathName: 'progress-case',
    url: '/progress-case',
    isActive: false,
    subMenuItems: [
      { id: 6, item: '전체보기', url: '/progress-case', isActive: false },
      { id: 7, item: '유튜브', url: '/progress-case', isActive: false },
      { id: 8, item: '틱톡', url: '/progress-case', isActive: false },
      { id: 9, item: '인스타', url: '/progress-case', isActive: false },
      { id: 10, item: '블로그', url: '/progress-case', isActive: false },
      { id: 11, item: '기타', url: '/progress-case', isActive: false },
    ],
  },
];

export function Header({ className, ...props }: HeaderProps) {
  // 서브메뉴 저장 state
  const [subMenuState, setSubMenuState] = useState(subMenu);

  const router = useRouter();

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMyInfo, setShowMyInfo] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(0);

  const [loginFormState, showloginForm] = loginFormStore(state => [
    state.loginFormState,
    state.showloginForm,
  ]);
  const [isLogin, isLoginState] = userStore(state => [state.isLogin, state.isLoginState]);
  const [userType, userTypeState] = userTypeStore(state => [state.userType, state.userTypeState]);

  // 모바일 메뉴 state
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [mobileDropMenu, setMobileDropMenu] = useState(0);

  // 서치 바 state
  const [activeSearchbar, setActiveSearchbar] = useState(false);

  // 검색 state
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [keyWordSubmit, keyWordSubmitEvent] = keyWordSubmitStore(state => [
    state.keyWordSubmit,
    state.keyWordSubmitEvent,
  ]);

  const toggleSubMenu = (mainId: number, subId: number) => {
    const updatedMenuItems = subMenuState.map((item: any) => {
      if (item.id === mainId) {
        const updatedSubMenuItems = item.subMenuItems.map((subItem: any) => {
          if (subItem.id === subId) {
            return { ...subItem, isActive: true };
          } else {
            return { ...subItem, isActive: false };
          }
        });
        return { ...item, isActive: true, subMenuItems: updatedSubMenuItems };
      } else {
        return { ...item, isActive: false };
      }
    });

    setSubMenuState(updatedMenuItems);
  };

  return (
    <header {...props} className={clsx('bg-[#020202]', className)}>
      {/* 상단 리뷰어, 광고주 선택영역 */}
      <div className='hidden text-[20px] font-bold text-white md:flex'>
        <div
          className={`flex ${
            isLogin
              ? userType === '리뷰어'
                ? 'flex-1 py-[9px] pr-[25px] text-[#000]'
                : 'flex-0'
              : 'flex-1 py-[9px] pr-[25px]'
          } group cursor-pointer items-center justify-end rounded-r-[60px] bg-main-first transition-all duration-500 hover:text-[#000]`}
          onClick={() => {
            if (!isLogin) showloginForm();
            userTypeState('리뷰어');
          }}
        >
          {isLogin ? (
            userType === '리뷰어' && (
              <span
                className={`
              h-[32px] 
              w-[32px] 
              bg-[url(/assets/icons/top-arrow-left-hover.webp)] 
              text-[0px] 
              duration-500
            `}
              >
                왼쪽 화살표
              </span>
            )
          ) : (
            <span
              className={`
              h-[32px] 
              w-[32px] 
              bg-[url(/assets/icons/top-arrow-left.webp)]
              text-[0px]
              duration-500 
              group-hover:bg-[url(/assets/icons/top-arrow-left-hover.webp)]
            `}
            >
              왼쪽 화살표
            </span>
          )}
          {isLogin ? (userType === '리뷰어' ? 'N잡러 리뷰어' : '') : 'N잡러 리뷰어'}
        </div>
        <div
          className={`flex ${
            isLogin
              ? userType === '광고주'
                ? 'flex-1 py-[9px] pl-[25px] text-[#000]'
                : 'flex-0'
              : 'flex-1 py-[9px] pl-[25px]'
          } group cursor-pointer items-center rounded-l-[60px] bg-main-second transition-all duration-500 hover:text-[#000]`}
          onClick={() => {
            if (!isLogin) showloginForm();
            userTypeState('광고주');
          }}
        >
          {isLogin ? (userType === '광고주' ? 'NO대행사 광고주' : '') : 'NO대행사 광고주'}
          {isLogin ? (
            userType === '광고주' && (
              <span
                className={`
              h-[32px] 
              w-[32px] 
              bg-[url(/assets/icons/top-arrow-right-hover.webp)] 
              text-[0px] 
              duration-500
            `}
              >
                오른쪽 화살표
              </span>
            )
          ) : (
            <span
              className={`
              h-[32px] 
              w-[32px] 
              bg-[url(/assets/icons/top-arrow-right.webp)]
              text-[0px]
              duration-500 
              group-hover:bg-[url(/assets/icons/top-arrow-right-hover.webp)]
            `}
            >
              오른쪽 화살표
            </span>
          )}
        </div>
      </div>
      {/* gnb 영역 */}
      <div className='lx:pl-[140px] flex justify-between border-b border-[#c0c0c0] py-2.5 pl-[20px] pr-[22px] text-white md:pl-[50px] xl:pl-[90px]'>
        <div className='flex items-center md:gap-[50px] xl:gap-[77px]'>
          <Link
            href='/'
            className='relative z-[101] h-10 w-[141px] bg-[url(/assets/icons/logo.webp)] bg-cover bg-center'
          />
          <nav className='relative hidden md:block'>
            <ul className='flex font-bold md:text-[16px] xl:text-[18px]'>
              {subMenu.map(m => (
                <li
                  key={m.id}
                  className='xl::pr-[37px] relative md:pr-[20px] xl:pr-[67px]'
                  onMouseOver={() => setShowSubMenu(true)}
                  onMouseOut={() => setShowSubMenu(false)}
                >
                  <Link
                    href={m.url}
                    className={`block w-full pl-[9px] pr-[14px] hover:text-[#f97090] ${
                      router.pathname.includes(m.pathName) ? 'text-[#f97090]' : 'text-[#fff]'
                    }`}
                  >
                    {m.menu}
                  </Link>
                  {showSubMenu && (
                    <div className='absolute left-0 z-20 w-full'>
                      <ul className='mt-[35px]'>
                        {m.subMenuItems.map(s => (
                          <li
                            key={s.id}
                            className='mb-[30px] text-sm font-normal text-[#fff]'
                            onClick={() => toggleSubMenu(m.id, s.id)}
                          >
                            <Link
                              href={s.url}
                              className={`${
                                router.pathname === s.url ? 'text-[#f97090]' : 'text-[#fff]'
                              } px-[7px] hover:text-[#f97090]`}
                            >
                              {s.item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {isLogin ? (
          <div className='relative flex items-center gap-5'>
            <div
              className='relative mb-[-5px] hidden h-full rounded-full md:block'
              onMouseOver={() => setShowMyInfo(true)}
              onMouseOut={() => setShowMyInfo(false)}
            >
              <Image src='/assets/images/my-profile.webp' alt='my-profile' width={35} height={35} />
              {showMyInfo && (
                <div className='absolute left-[-75px] top-[40px] z-10 w-[177px] rounded-[10px] bg-white px-[12px] py-[10px] text-[#000]'>
                  <div className='border-b border-[#cccccc] pb-[10px] after:clear-both after:block'>
                    <b className='block text-xs'>
                      {userType === '리뷰어' ? '마이 포인트' : '포인트 현황'}
                    </b>
                    <span className='float-right text-xs font-medium text-[#e93963]'>35,000P</span>
                  </div>
                  <ul className='border-b border-[#cccccc] py-[5px]'>
                    <li className='mb-[5px] text-xs font-medium text-[#000]'>
                      {userType === '리뷰어' ? (
                        <Link href='/reviewer/mypage'>마이페이지</Link>
                      ) : (
                        <Link href='/advertiser/mypage'>광고주 센터</Link>
                      )}
                    </li>
                    <li className='mb-[5px] text-xs font-medium text-[#000]'>
                      {userType === '리뷰어' ? (
                        <Link href='/reviewer/transaction-management'>거래 관리</Link>
                      ) : (
                        <Link href='/advertiser/transaction-management'>활동 점수 / 등급</Link>
                      )}
                    </li>
                    <li className='mb-[5px] text-xs font-medium text-[#000]'>
                      {userType === '리뷰어' ? (
                        <Link href='/reviewer/dashboard'>대시보드</Link>
                      ) : (
                        <Link href='/advertiser/dashboard'>기본 정보 수정</Link>
                      )}
                    </li>
                    <li className='mb-[5px] text-xs font-medium text-[#000]'>
                      {userType === '리뷰어' && (
                        <Link href='/reviewer/mypoint/activity-score-history'>
                          활동 점수 / 등급
                        </Link>
                      )}
                    </li>
                    <li className='text-xs font-medium text-[#000]'>
                      <button
                        onClick={() => {
                          router.push('/');
                          isLoginState();
                        }}
                      >
                        로그아웃
                      </button>
                    </li>
                  </ul>
                  <button
                    type='button'
                    className='mt-[10px] w-full border border-[#cccccc] bg-[url(/assets/icons/warning-light.webp)] bg-[length:14px_15px] bg-[28px] bg-no-repeat py-[5px] pl-[20px] text-xs font-medium'
                  >
                    <Link href='/reviewer/advertiser-report'>광고주 신고하기</Link>
                  </button>
                </div>
              )}
            </div>
            <Link
              href='/notification'
              className={`hidden h-[40px] w-[40px] ${
                userType === '리뷰어'
                  ? 'bg-[url(/assets/icons/reviewer-login-alarm.webp)]'
                  : 'bg-[url(/assets/icons/advertiser-login-alarm.webp)]'
              } text-[0px] md:inline-block`}
            >
              알림
            </Link>
            <button
              type='button'
              className={`hidden md:h-[40px] md:w-[40px] ${
                userType === '리뷰어'
                  ? 'bg-[url(/assets/icons/reviewer-login-search.webp)]'
                  : 'bg-[url(/assets/icons/advertiser-login-search.webp)]'
              } bg-cover text-[0px] md:inline-block`}
              onClick={() => setActiveSearchbar(true)}
            >
              검색
            </button>
            <Link
              href='reviewer/mypage/my-scheduling'
              className={`hidden md:h-[40px] md:w-[40px] ${
                userType === '리뷰어'
                  ? 'bg-[url(/assets/icons/reviewer-login-calendar.webp)]'
                  : 'bg-[url(/assets/icons/advertiser-login-calendar.webp)]'
              } text-[0px] md:inline-block`}
            >
              달력
            </Link>
            {/* 모바일 메뉴 */}
            <div
              className={`menu-trigger relative z-[101] block h-[25px] w-[30px] cursor-pointer md:hidden ${
                openMobileMenu ? 'active-ani' : ''
              }`}
              onClick={() => setOpenMobileMenu(prev => !prev)}
            >
              <div className='absolute left-0 top-0 h-[3px] w-full rounded-md bg-[#fff]' />
              <div className='absolute left-0 top-[11px] h-[3px] w-full rounded-md bg-[#fff]' />
              <div className='absolute bottom-0 left-0 h-[3px] w-full rounded-md bg-[#fff]' />
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-5'>
            <ul className='hidden items-end gap-3 text-[15px] font-medium md:flex'>
              <li>
                <button className='hover:text-[#f97090]' onClick={showloginForm}>
                  로그인
                </button>
              </li>
              <li className='h-4 w-[1px] bg-white' />
              <li>
                <Link href='/signup' className='hover:text-[#f97090]'>
                  회원가입
                </Link>
              </li>
            </ul>
            <button
              className='h-[30px] w-[30px] bg-[url(/assets/icons/search.webp)] bg-cover hover:bg-[url(/assets/icons/search-hover.webp)] xl:h-10 xl:w-10'
              onClick={() => setActiveSearchbar(true)}
            />
            {/* 모바일 메뉴 */}
            <div
              className={`menu-trigger relative z-[101] block h-[25px] w-[30px] cursor-pointer md:hidden ${
                openMobileMenu ? 'active-ani' : ''
              }`}
              onClick={() => setOpenMobileMenu(prev => !prev)}
            >
              <div className='absolute left-0 top-0 h-[3px] w-full rounded-md bg-[#fff]' />
              <div className='absolute left-0 top-[11px] h-[3px] w-full rounded-md bg-[#fff]' />
              <div className='absolute bottom-0 left-0 h-[3px] w-full rounded-md bg-[#fff]' />
            </div>
          </div>
        )}
      </div>
      {showSubMenu && (
        <div
          className='absolute z-10 h-[434px] w-full bg-[#020202] opacity-70'
          onMouseOver={() => setShowSubMenu(true)}
          onMouseOut={() => setShowSubMenu(false)}
        />
      )}

      {/* 서치 바 */}
      {activeSearchbar && (
        <div
          className={`${
            activeSearchbar && 'active'
          } search-bar-ani absolute left-0 top-[50px] z-[110] flex h-[60px] w-full items-center justify-between bg-[#000] px-[30px]`}
        >
          <div className='flex w-full items-center'>
            <button className='h-[30px] w-[30px] bg-[url(/assets/icons/search.webp)] bg-cover hover:bg-[url(/assets/icons/search-hover.webp)] xl:h-10 xl:w-10' />
            <form onSubmit={keyWordSubmitEvent}>
              <input
                type='text'
                className='w-full bg-[transparent] pl-[15px] text-[#fff] placeholder-white'
                placeholder='검색어를 입력해주세요.'
                onChange={e => setSearchKeyWord(e.target.value)}
              />
            </form>
          </div>
          <button
            className='h-[24px] w-[24px] bg-[url(/assets/icons/close-btn02.webp)] bg-contain'
            onClick={() => setActiveSearchbar(false)}
          />
        </div>
      )}

      {/* 모바일 사이드 메뉴 */}
      <div
        className={`mobileNav fixed right-0 top-0 z-[100] h-[100%] w-[60%] overflow-y-auto bg-[#000000e7] pt-[55px] text-[#fff] md:hidden ${
          openMobileMenu ? 'navActice' : ''
        }`}
      >
        {/* 로그인 시 프로필 */}
        {isLogin && (
          <div className='mb-[5px] mt-[15px] px-[30px]'>
            <div className='flex items-center justify-between border-b border-[#fff] pb-[15px]'>
              <div className='flex items-center gap-[15px]'>
                <Image
                  src='/assets/images/my-profile.webp'
                  alt='my-profile'
                  width={35}
                  height={35}
                />
                <div>
                  <span className='block'>마이 포인트</span>
                  <b className='block'>35,000P</b>
                </div>
              </div>
              <button className='h-[30px] rounded-[20px] border border-[#fff] px-[15px] text-[14px]'>
                로그아웃
              </button>
            </div>
            <ul className='border-b border-[#fff] py-[20px]'>
              <li className='mb-[5px]'>
                <Link href={userType === '리뷰어' ? '/advertiser/mypage' : ''}>마이 페이지</Link>
              </li>
              <li className='mb-[5px]'>거래 관리</li>
              <li className='mb-[5px]'>대시보드</li>
              <li className='mb-[5px]'>활동 점수 / 등급</li>
            </ul>
            <div className='mt-[10px] flex justify-end'>
              <button
                type='button'
                className={`h-[40px] w-[40px] ${
                  userType === '리뷰어'
                    ? 'bg-[url(/assets/icons/reviewer-login-alarm.webp)]'
                    : 'bg-[url(/assets/icons/advertiser-login-alarm.webp)]'
                } mr-[10px] text-[0px]`}
              >
                알림
              </button>
              <button
                type='button'
                className={`h-[40px] w-[40px] ${
                  userType === '리뷰어'
                    ? 'bg-[url(/assets/icons/reviewer-login-calendar.webp)]'
                    : 'bg-[url(/assets/icons/advertiser-login-calendar.webp)]'
                } text-[0px]`}
              >
                달력
              </button>
            </div>
          </div>
        )}

        {isLogin && (
          <div className='px-[30px]'>
            <button
              type='button'
              className='mt-[10px] flex w-full items-center justify-center gap-[10px] border border-[#cccccc] py-[5px] pl-[20px] text-xs font-medium'
            >
              <Image
                src='/assets/icons/warning-light.webp'
                alt='싸이렌 아이콘'
                width={14}
                height={15}
              />
              광고주 신고하기
            </button>
          </div>
        )}

        {!isLogin && (
          <ul className='absolute left-[25px] flex items-center gap-3'>
            <li>
              <button className='hover:text-[#f97090]' onClick={showloginForm}>
                로그인
              </button>
            </li>
            <li className='mt-[2px] h-4 w-[1px] bg-white' />
            <li>
              <Link href='/signup' className='hover:text-[#f97090]'>
                회원가입
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
