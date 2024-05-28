import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SignUpCategory from 'src/components/auth/signup-category';
import { Layout } from 'src/components/layout';
import { loginFormStore, userStore, userTypeStore } from 'src/status/store';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {}

const emailData = ['gmail.com', 'naver.com', 'nate.com', '직접 입력'];

type FormValue = {
  email: string;
  emailForm: string;
  password: string;
  passwordCheck: string;
  phoneNumber: string;
  name: string;
  brandName: string;
  businessAddress: string;
};

const Advertiser: NextPageWithLayout<Props> = () => {
  const {
    register,
    watch,
    formState: { isSubmitting, isDirty, errors },
    handleSubmit,
    getValues,
  } = useForm<FormValue>({
    mode: 'onChange',
  });
  const [email, emailForm, password, passwordCheck, phoneNumber, name, brandName, businessAddress] =
    watch([
      'email',
      'emailForm',
      'password',
      'passwordCheck',
      'phoneNumber',
      'name',
      'brandName',
      'businessAddress',
    ]);
  const router = useRouter();
  const [isNext, setIsNext] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [signUpDone, setSignUpDone] = useState(false);
  const [isLogin, isLoginState] = userStore(state => [state.isLogin, state.isLoginState]);
  const [userType, userTypeState] = userTypeStore(state => [state.userType, state.userTypeState]);
  const [authNumberActive, setAuthNumberActive] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [authDone, setAuthDone] = useState(false);
  const [isDirectly, setIsDirectly] = useState(false);

  const [minutes, setMinutes] = useState<any>(3);
  const [seconds, setSeconds] = useState<any>(0);

  // useEffect(() => {
  //   // userTypeState(router.pathname.split('/')[2]);
  //   userTypeState('광고주');
  // }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));

    if (email && password && phoneNumber && name && brandName && businessAddress) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    return () => subscription.unsubscribe();
  }, [watch, email, password, phoneNumber, name, brandName, businessAddress]);

  const onClickNext = () => {
    if (email && password && phoneNumber && name && brandName && businessAddress) {
      setIsNext(true);
    }
  };

  const onSubmitSignUp = (data: any) => {
    console.log('가입 정보', data);

    setSignUpDone(true);
    isLoginState();

    router.push('/');
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (authNumberActive) {
        if (parseInt(seconds) > 0) {
          setSeconds(parseInt(seconds) - 1);
        }
        if (parseInt(seconds) === 0) {
          if (parseInt(minutes) === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(parseInt(minutes) - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds, authNumberActive]);

  const [emailSelectValue, setEmailSelectValue] = useState('선택');
  const [showOptions, setShowOptions] = useState(false);
  const [firstSelect, setFirstSelect] = useState(false);

  const handleOnChangeSelectValue = (data: any) => {
    setEmailSelectValue(data);

    if (!firstSelect) setFirstSelect(true);
  };

  return (
    <div className='flex items-center justify-center px-[30px] py-[50px] sm:px-0 xl:py-[150px]'>
      <div
        className={`flex ${
          isNext
            ? 'w-full rounded-[50px] px-[50px] xl:w-[965px] xl:rounded-[100px] xl:px-[130px]'
            : 'w-full rounded-[30px] px-[30px] sm:w-[825px] sm:rounded-[50px] sm:px-[100px]'
        } flex-col items-center bg-[#f6f6f6] py-[50px] sm:py-[80px]`}
      >
        <b className='text-[30px] font-medium'>광고주 회원가입</b>
        <form onSubmit={handleSubmit(onSubmitSignUp)}>
          {isNext ? (
            <SignUpCategory usrTpye='advertiser' />
          ) : (
            <div className='mt-[40px] w-full'>
              <div className='mb-[10px]'>
                <label htmlFor='email' className='cursor-auto text-[20px] font-medium'>
                  이메일 <span className='font-[500] text-[#8586db]'>＊</span>
                </label>
                <div className='mt-[15px] flex flex-col items-start gap-[10px] sm:flex-row sm:items-center sm:gap-0'>
                  <div className='w-full sm:w-auto'>
                    <input
                      id='email'
                      type='email'
                      placeholder='이메일 ID'
                      className='h-[50px] w-full rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0] sm:w-[212px]'
                      // aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
                      {...register('email', {
                        required: '이메일은 필수 입력입니다.',
                        pattern: {
                          value: /^[a-zA-Z0-9]*$/,
                          message: '영어, 숫자만 입력해 주세요',
                        },
                      })}
                    />
                    <small role='alert' className='mt-[5px] block h-[20px] text-xs text-[#d60000]'>
                      {errors.email?.message}
                    </small>
                  </div>
                  <span className='mx-[14px] mt-[-30px] text-[20px] font-bold'>@</span>
                  <div className={`${!isDirectly && 'mb-[25px]'} relative w-full`}>
                    {!isDirectly && (
                      <button
                        type='button'
                        className={`${
                          firstSelect ? 'text-[#000]' : 'text-[#b4b4b4]'
                        } w-full rounded-[5px] border border-[#c0c0c0] bg-[#fff] bg-[url(/assets/icons/select-arrow.webp)] bg-[length:32px_32px] bg-[right_20px_top_9px] bg-no-repeat px-[10px] py-[12px] text-left`}
                        onClick={() => setShowOptions(prev => !prev)}
                      >
                        {emailSelectValue}
                      </button>
                    )}
                    <ul
                      className={`absolute left-0 top-[55px] w-full overflow-hidden rounded-[5px] bg-[#fff] shadow-lg ${
                        showOptions
                          ? 'max-h-none border border-[#c0c0c0] py-[10px] pl-[10px]'
                          : 'max-h-[0px] border-none p-0'
                      }`}
                    >
                      {emailData.map((data: any, i: number) => (
                        <li
                          key={i}
                          className='cursor-pointer py-[10px] text-[#000]'
                          onClick={() => {
                            if (data === '직접 입력') {
                              setIsDirectly(true);
                            } else {
                              handleOnChangeSelectValue(data);
                              if (isDirectly) {
                                setIsDirectly(false);
                              }
                            }
                            setShowOptions(false);
                          }}
                        >
                          {data}
                        </li>
                      ))}
                    </ul>
                    {isDirectly && (
                      <div className='relative w-full'>
                        <input
                          id='email-directly'
                          type='text'
                          placeholder='직접 입력'
                          className='w-full rounded-[5px] border border-[#c0c0c0] py-[12px] pl-[10px] pr-[68px] text-[#000]'
                          aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
                          {...register('emailForm', {
                            required: '이메일은 필수 입력입니다.',
                            pattern: {
                              value: /[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
                              message: '형식에 맞게 입력해주세요.',
                            },
                          })}
                        />
                        <button
                          type='button'
                          className='absolute right-[21px] top-[10px] h-[32px] w-[32px] bg-[url(/assets/icons/select-arrow.webp)] bg-[length:32px_32px] bg-no-repeat'
                          onClick={() => setShowOptions(prev => !prev)}
                        />
                        <small
                          role='alert'
                          className='mt-[5px] block h-[20px] text-xs text-[#d60000]'
                        >
                          {errors.emailForm?.message}
                        </small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='mb-[10px]'>
                <label htmlFor='password' className='block cursor-auto text-[20px] font-medium'>
                  비밀번호 <span className='font-[500] text-[#8586db]'>＊</span>
                </label>
                <div>
                  <input
                    id='password'
                    type='password'
                    placeholder='비밀번호'
                    className='mt-[15px] block w-full rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0]'
                    {...register('password', {
                      required: '비밀번호는 필수 입력입니다.',
                      minLength: {
                        value: 8,
                        message: '8~15자 영문,숫자,특수문자가 포함된 조합을 사용해주세요.',
                      },
                      maxLength: {
                        value: 15,
                        message: '8~15자 영문,숫자,특수문자가 포함된 조합을 사용해주세요.',
                      },
                      pattern: {
                        value: /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
                        message: '형식에 맞게 입력해주세요.',
                      },
                    })}
                  />
                  <small role='alert' className='mt-[5px] block h-[20px] text-xs text-[#d60000]'>
                    {errors.password?.message}
                  </small>
                </div>
                <div>
                  <input
                    id='password-check'
                    type='password'
                    placeholder='비밀번호 확인'
                    className='mt-[3px] block w-full rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0]'
                    {...register('passwordCheck', {
                      required: '비밀번호는 필수 입력입니다.',
                      validate: {
                        check: val => {
                          if (getValues('password') !== val) {
                            return '비밀번호가 일치하지 않습니다.';
                          }
                        },
                      },
                    })}
                  />
                  <small role='alert' className='mt-[5px] block h-[20px] text-xs text-[#d60000]'>
                    {errors.passwordCheck?.message}
                  </small>
                </div>
              </div>
              <div className='mb-[30px]'>
                <label htmlFor='phone-number' className='block cursor-auto text-[20px] font-medium'>
                  휴대폰 번호 <span className='font-[500] text-[#8586db]'>＊</span>
                </label>
                <div className='mt-[15px] block xl:flex'>
                  <div className='flex-1'>
                    <input
                      id='phone-number'
                      type='number'
                      placeholder='휴대폰 번호 (-없이 입력해주세요.)'
                      className={`${
                        authDone ? 'bg-[#ebebeb] text-[#b4b4b4]' : 'bg-[#fff] text-[#000]'
                      } w-full rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0]`}
                      {...register('phoneNumber', {
                        minLength: {
                          value: 11,
                          message: '휴대폰 번호를 정확히 입력해 주세요.',
                        },
                        maxLength: {
                          value: 11,
                          message: '휴대폰 번호를 정확히 입력해 주세요.',
                        },
                      })}
                    />
                    {errors.phoneNumber && (
                      <small
                        role='alert'
                        className='mt-[5px] block h-[20px] text-xs text-[#d60000]'
                      >
                        {errors.phoneNumber?.message}
                      </small>
                    )}
                  </div>
                  <button
                    type='button'
                    disabled={authDone}
                    className={`${
                      authDone ? 'bg-[#c0c0c0]' : 'bg-[#8586db]'
                    } mt-[10px] h-[50px] w-[130px] rounded-[5px] text-[16px] font-medium text-white xl:ml-[15px] xl:mt-0`}
                    onClick={() => {
                      if (phoneNumber) {
                        if (phoneNumber?.length < 11) {
                          setAuthError(true);
                        } else {
                          setAuthError(false);
                          setAuthDone(true);
                        }
                      } else {
                        alert('휴대폰 번호를 입력해주세요.');
                      }
                    }}
                  >
                    {authDone ? '인증완료' : '인증하기'}
                  </button>
                </div>
                {authError && (
                  <span className='text-xs text-[#d60000]'>
                    휴대폰 번호를 정확히 입력해 주세요.
                  </span>
                )}
                {/* {authNumberActive && (
                  <div className='mt-[16px]'>
                    <div className='flex items-center justify-between'>
                      <input
                        id='phone-number'
                        type='number'
                        placeholder='인증번호 입력'
                        className='w-1/2 rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0]'
                      />
                      <div className='flex items-center gap-[15px]'>
                        <button
                          type='button'
                          className='h-[50px] w-[130px] rounded-[3px] bg-[#f97090] text-base font-medium leading-[50px] text-[#fff]'
                          onClick={() => {
                            alert('인증되었습니다.');
                            setAuthNumberActive(false);
                            setAuthDone(true);
                          }}
                        >
                          인증하기
                        </button>
                        <button
                          type='button'
                          className='h-[50px] w-[130px] rounded-[3px] bg-[#b4b4b4] text-base font-medium leading-[50px] text-[#fff]'
                          onClick={() => {
                            setMinutes(3);
                            setSeconds(0);
                            alert('재발송 되었습니다.');
                          }}
                        >
                          재발송
                        </button>
                      </div>
                    </div>
                    <div className='mt-[5px]'>
                      <span className='mr-[10px] text-xs text-[#1592e6]'>
                        인증번호가 발송 되었습니다.
                      </span>
                      <b className='text-xs text-[#000]'>
                        남은 시간 {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                      </b>
                    </div>
                  </div>
                )} */}
              </div>
              <div className='mb-[10px]'>
                <label htmlFor='name' className='block cursor-auto text-[20px] font-medium'>
                  대표자 이름 <span className='font-[500] text-[#8586db]'>＊</span>
                </label>
                <div>
                  <input
                    id='name'
                    type='text'
                    placeholder='이름'
                    className='mt-[15px] block w-full rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0]'
                    {...register('name', {
                      required: '이름은 필수 입력입니다.',
                      pattern: {
                        value: /^[가-힣a-zA-Z]+$/,
                        message: '올바른 이름 형식이 아닙니다.',
                      },
                    })}
                  />
                  <small role='alert' className='mt-[5px] block h-[20px] text-xs text-[#d60000]'>
                    {errors.name?.message}
                  </small>
                </div>
              </div>
              <div className='mb-[30px]'>
                <label htmlFor='brand-name' className='block cursor-auto text-[20px] font-medium'>
                  브랜드명 <span className='font-[500] text-[#8586db]'>＊</span>
                </label>
                <input
                  id='brand-name'
                  type='text'
                  placeholder='브랜드명'
                  className='mt-[15px] block w-full rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0]'
                  {...register('brandName')}
                />
              </div>
              <div className='mb-[30px]'>
                <label
                  htmlFor='business-address'
                  className='block cursor-auto text-[20px] font-medium'
                >
                  사업장 주소 <span className='font-[500] text-[#8586db]'>＊</span>
                </label>
                <div className='mt-[15px] flex items-center'>
                  <input
                    id='zip-code'
                    type='text'
                    placeholder='우편번호'
                    className='block w-full rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0]'
                  />
                  <button
                    type='button'
                    className='ml-[15px] h-[50px] w-[130px] rounded-[5px] bg-main-second text-[16px] font-medium text-white'
                  >
                    주소 검색
                  </button>
                </div>
                <input
                  id='business-address'
                  type='text'
                  placeholder='주소'
                  className='mt-[10px] block w-full rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0]'
                  {...register('businessAddress', {
                    required: '브랜드명은 필수 입력입니다.',
                  })}
                />
                <input
                  id='detail-address'
                  type='text'
                  placeholder='상세 주소'
                  className='mt-[10px] block w-full rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0]'
                />
              </div>
              <div className='mb-[20px]'>
                <label
                  htmlFor='business-registration'
                  className='block cursor-auto text-[20px] font-medium'
                >
                  사업장 등록증 <span className='font-[500] text-[#8586db]'>＊</span>
                </label>
                <div className='mt-[15px] flex items-center'>
                  <input
                    id='business-registration'
                    type='text'
                    placeholder=''
                    className='block w-full rounded-[5px] border border-[#c0c0c0] px-[10px] py-[12px] text-[#000] placeholder-[#c0c0c0]'
                  />
                  <button
                    type='button'
                    className='ml-[15px] h-[50px] w-[130px] rounded-[5px] bg-main-second text-[16px] font-medium text-white'
                  >
                    첨부하기
                  </button>
                </div>
              </div>
              <ul className='mb-[50px] text-[14px] font-[500] sm:text-base'>
                <li>
                  ＊ <b className='text-[#8586db]'>사업자등록증은 필수 사항이며,</b> 승인 완료 시
                  모든 서비스 이용이 가능합니다.
                </li>
                <li>
                  ＊ <b className='text-[#8586db]'>최소 1일 ~ 최대 7일 소요</b>되며 기다려주시면
                  최대한 빠른 확인 도와드리겠습니다.
                </li>
                <li>
                  ＊ <b className='text-[#8586db]'>사업자 변경의 경우 기본 정보 수정</b>에서
                  가능합니다.
                </li>
              </ul>
              <div className='mb-[30px]'>
                <span className='block text-[20px] font-medium'>이용약관</span>
                <div className='mt-[15px] w-full rounded-[10px] border border-[#c0c0c0] bg-white px-[12px] py-[20px] xl:px-[22px] xl:py-[30px]'>
                  <ul>
                    <li className='mb-[16px] text-[12px] sm:text-[16px] xl:text-[14px] 2xl:text-[16px]'>
                      <label htmlFor='first-terms' className='flex items-center'>
                        <input type='checkbox' id='first-terms' className='peer hidden' />
                        <span className='mr-[13px] inline-block h-[20px] w-[20px] rounded-md border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:18px_18px] xl:h-[27px] xl:w-[27px]' />
                        <span className='w-[220px] font-medium xl:w-auto'>
                          본인은 만 14세 이상입니다. <span className='text-[#e93963]'>(필수)</span>
                        </span>
                      </label>
                    </li>
                    <li className='mb-[16px] text-[12px] sm:text-[16px] xl:text-[14px] 2xl:text-[16px]'>
                      <label htmlFor='second-terms' className='flex items-center'>
                        <input type='checkbox' id='second-terms' className='peer hidden' />
                        <span className='mr-[13px] inline-block h-[20px] w-[20px] rounded-md border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:18px_18px] xl:h-[27px] xl:w-[27px]' />
                        <span className='w-[220px] font-medium leading-[1.88] xl:w-auto'>
                          <Link href='#' className='underline'>
                            서비스 이용약관
                          </Link>
                          ,{' '}
                          <Link href='#' className='underline'>
                            개인정보 수집 및 이용
                          </Link>
                          ,{' '}
                          <Link href='#' className='underline'>
                            개인정보 제 3자 제공
                          </Link>
                          에 <br /> 모두 동의합니다. <span className='text-[#e93963]'>(필수)</span>{' '}
                          <span className='inline-flex items-center justify-center gap-[5px] text-[#8586db]'>
                            내용보기
                            <Image
                              src='/assets/icons/link-icon.webp'
                              alt='링크 아이콘'
                              width={20}
                              height={20}
                            />
                          </span>
                        </span>
                      </label>
                    </li>
                    <li className='mb-[16px] text-[12px] sm:text-[16px] xl:text-[14px] 2xl:text-[16px]'>
                      <label htmlFor='third-terms' className='flex items-center'>
                        <input type='checkbox' id='third-terms' className='peer hidden' />
                        <span className='mr-[13px] inline-block h-[20px] w-[20px] rounded-md border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:18px_18px] xl:h-[27px] xl:w-[27px]' />
                        <span className='w-[220px] font-medium leading-[1.88] underline xl:w-auto'>
                          서비스(이벤트 정보, 공지사항, 설문조사 등) 마케팅 수신 <br />
                          (이메일, 문자 및 카카오톡) 에 동의합니다.{' '}
                          <span className='text-[#8586db]'>(선택)</span>
                        </span>
                      </label>
                    </li>
                    <li className='text-[12px] sm:text-[16px] xl:text-[14px] 2xl:text-[16px]'>
                      <label htmlFor='Fourth-terms' className='flex items-center'>
                        <input type='checkbox' id='Fourth-terms' className='peer hidden' />
                        <span className='mr-[13px] inline-block h-[20px] w-[20px] rounded-md border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:18px_18px] xl:h-[27px] xl:w-[27px]' />
                        <span className='w-[220px] font-medium xl:w-auto'>
                          이벤트 정보등의 마케팅 수신(이메일, 문자 및 카카오톡)에 동의합니다.{' '}
                          <span className='text-[#8586db]'>(선택)</span>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <table className='border border-[#c0c0c0]'>
                  <thead>
                    <tr className='bg-[#f97090] text-[#fff]'>
                      <th className='border border-[#c0c0c0] py-[8px] text-[16px] font-medium sm:text-[20px]'>
                        목적
                      </th>
                      <th className='border border-[#c0c0c0] py-[8px] text-[16px] font-medium sm:text-[20px]'>
                        항목
                      </th>
                      <th className='border border-[#c0c0c0] py-[8px] text-[16px] font-medium sm:text-[20px]'>
                        보유 및 이용기간
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-[#fff]'>
                      <td className='border-r border-[#c0c0c0] px-[10px] py-[12px] text-center text-[15px] font-medium xl:px-[20px] xl:py-[22px]'>
                        이용자 식별 및 보안 여부 확인
                      </td>
                      <td className='border-r border-[#c0c0c0] px-[18px] py-[12px] text-center text-[15px] font-medium xl:px-[28px] xl:py-[22px]'>
                        닉네임, 비밀번호 이메일 주소
                      </td>
                      <td className='px-[20px] py-[12px] text-center text-[15px] font-medium xl:px-[40px] xl:py-[22px]'>
                        회원 탈퇴 즉시 또는 이용 목적 달성 즉시 파기
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='mb-[50px] mt-[33px] text-center text-sm font-medium'>
                회원가입 완료 후{' '}
                <span className='text-[#e93963] underline'>프로필 사진을 꼭 등록</span>해주세요.{' '}
                <br />
                <span className='text-[#e93963] underline'>
                  SNS채널 인증이 완료되어야 포트폴리오 등록
                </span>{' '}
                및 서비스이용이 가능한 점 참고해주세요!
              </p>
              <button
                type='button'
                disabled={!isActive}
                className={`h-[63px] w-full rounded-[18px] text-[20px] font-bold leading-[63px] text-[#fff] ${
                  isActive ? 'bg-main-second' : 'bg-[#c0c0c0]'
                }`}
                onClick={onClickNext}
              >
                다음
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

Advertiser.getLayout = page => <Layout>{page}</Layout>;

export default Advertiser;
