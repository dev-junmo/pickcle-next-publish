import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { useState, type ReactNode, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginFormStore, userStore, userTypeStore } from 'src/status/store';

interface Props extends RadixDialog.DialogProps {
  triggerChildren?: ReactNode;
}

const loginMenu = [
  { id: 1, value: '리뷰어' },
  { id: 2, value: '광고주' },
];

export default function Login({ triggerChildren, children, ...props }: Props) {
  const [loginFormState, showloginForm] = loginFormStore(state => [
    state.loginFormState,
    state.showloginForm,
  ]);
  const [isLogin, isLoginState] = userStore(state => [state.isLogin, state.isLoginState]);
  const [userType, userTypeState] = userTypeStore(state => [state.userType, state.userTypeState]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();
  const [currentTab, setCurrentTab] = useState(0);

  const onSubmit = async (data: any) => {
    console.log(data);
    if (!data.email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (!data.password) {
      alert('비밀번호를 입력해주세요.');
    }

    showloginForm();
    isLoginState();
  };

  useEffect(() => {
    if (userType === '광고주') {
      setCurrentTab(1);
    } else {
      setCurrentTab(0);
    }
  }, [userType]);

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  return (
    <div>
      <RadixDialog.Root {...props} open={loginFormState} onOpenChange={showloginForm}>
        {/* Trigger의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 true 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
        {triggerChildren && <RadixDialog.Trigger asChild>{triggerChildren}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className='fixed inset-0 z-[100] bg-black opacity-70' />
          <RadixDialog.Content className='fixed left-1/2 top-1/2 z-[101] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white p-[30px] text-center sm:rounded-[40px] sm:p-[57px] md:w-[626px]'>
            {/* h2 태그 */}
            <RadixDialog.Title>
              <Image
                className='mx-auto'
                src='/assets/icons/logo.webp'
                alt='logo'
                width={116}
                height={40}
              />
            </RadixDialog.Title>
            <div className='mt-[45px] flex items-center border-b border-[#8586db]'>
              {loginMenu.map((m, i) => (
                <div
                  key={m.id}
                  className={`relative w-1/2 cursor-pointer py-2.5 before:absolute before:bottom-[-5px] before:left-0 before:h-[8px] before:w-full before:bg-[#e93963] ${
                    currentTab === i ? 'before:block' : 'before:hidden'
                  }`}
                  onClick={() => {
                    userTypeState(m.value);
                    setCurrentTab(i);
                  }}
                >
                  <span className='text-[15px] font-bold sm:text-xl'>{m.value}</span>
                </div>
              ))}
            </div>
            {/* p 태그 */}
            <RadixDialog.Description className='my-[30px]	text-[14px] sm:text-base'>
              {currentTab === 0 ? (
                <>
                  제품 및 서비스를 협찬 받고 결과물을 제공하는 리뷰어입니다.
                  <br />
                  <b>리뷰어와 광고주 서로 제안하기가 가능합니다.</b>
                </>
              ) : (
                <>
                  제품 및 서비스를 제공하고 결과물을 받는 광고주입니다.
                  <br />
                  <b>광고주와 리뷰어 서로 제안하기가 가능합니다.</b>
                </>
              )}
            </RadixDialog.Description>
            <div className='px-[23px]'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  id='email'
                  type='email'
                  placeholder='이메일'
                  className='mb-2.5 w-full rounded-[5px] border border-[#c0c0c0] bg-white px-4 py-1.5 font-medium text-[#000] placeholder-[#c0c0c0] sm:rounded-[10px] sm:py-2.5'
                  // aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
                  {...register('email')}
                />
                <input
                  id='password'
                  type='password'
                  placeholder='비밀번호'
                  className='w-full rounded-[5px] border border-[#c0c0c0] bg-white px-4 py-1.5 font-medium text-[#000] placeholder-[#c0c0c0] sm:rounded-[10px] sm:py-2.5'
                  // aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
                  {...register('password')}
                />
                <div className='mb-[50px] mt-[14px] flex justify-between text-sm font-medium'>
                  <label htmlFor='remember-check' className='flex items-center'>
                    <input type='checkbox' id='remember-check' className='peer hidden' />
                    <span className='mr-[13px] inline-block h-[20px] w-[20px] rounded-[4px] border border-[#c0c0c0] bg-center bg-no-repeat peer-checked:bg-[url(/assets/icons/check-icon.webp)] peer-checked:bg-[length:18px_18px] sm:h-[27px] sm:w-[27px] sm:rounded-md' />
                    <span className='text-sm'>아이디 저장</span>
                  </label>
                  <ul className='flex items-center text-sm'>
                    <li className='relative mr-3 before:absolute before:right-[-7px] before:top-[5px] before:block before:h-[11px] before:w-[1px] before:bg-black'>
                      아이디 찾기
                    </li>
                    <li>비밀번호 찾기</li>
                  </ul>
                </div>
                <button
                  type='submit'
                  className='h-[40px] w-[222px] rounded-[25px] bg-[#8586db] font-bold leading-[40px] text-white'
                  disabled={isSubmitting}
                >
                  이메일 로그인 ({loginMenu[currentTab].value})
                </button>
              </form>
            </div>
            <div className='relative mt-[36px] px-[23px] after:absolute after:left-0 after:top-[13px] after:z-[10] after:block after:h-[1px] after:w-full after:bg-[#e93963]'>
              <span className='relative z-[20] inline-block w-[135px] bg-white'>
                간편 SNS 로그인
              </span>
            </div>
            <div className='mt-[20px]'>
              <button className='mr-[30px] h-[46px] w-[46px] bg-[url(/assets/icons/sns-login-kakao.webp)]' />
              <button className='h-[46px] w-[46px] bg-[url(/assets/icons/sns-login-naver.webp)]' />
            </div>
            <ul className='mt-[24px] flex items-center justify-center text-sm font-bold'>
              <li className='relative mr-[20px] before:absolute before:right-[-7px] before:top-[5px] before:block before:h-[11px] before:w-[1px] before:bg-black'>
                <Link href='#'>{loginMenu[currentTab].value} 회원가입</Link>
              </li>
              <li>
                <Link href='#'>{loginMenu[currentTab].value} 이용방법</Link>
              </li>
            </ul>
            {/* Close의 자식 컴포넌트에서 클릭이벤트 발생시 onOpenChange에서 false 발생. asChild가 있으면 하위 컴포넌트를 버튼화, 없으면 자기자신을 버튼화 */}
            <RadixDialog.Close asChild>
              <button className='absolute right-[30px] top-[35px] h-[29px] w-[29px] bg-[url(/assets/icons/close-btn.webp)] sm:right-[37px] sm:top-[55px]' />
            </RadixDialog.Close>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </div>
  );
}
