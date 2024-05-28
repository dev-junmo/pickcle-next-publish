import clsx from 'clsx';
import { type ComponentProps } from 'react';
import Login from 'src/components/auth/login';
import { ScrollTopButton } from 'src/components/home';

import { Footer, type FooterProps } from 'src/components/layout/footer';
import { Header, type HeaderProps } from 'src/components/layout/header';

type Optional<T> = T & { disable?: boolean };

interface Props extends ComponentProps<'main'> {
  headerProps?: Optional<HeaderProps>;
  footerProps?: FooterProps;
}

export function Layout({
  headerProps: { disable: headerDisable = false, ...headerArgs } = {},
  footerProps,
  className,
  ...args
}: Props) {
  return (
    <div className='flex flex-1 flex-col overflow-hidden bg-black'>
      {!headerDisable && <Header {...headerArgs} />}
      <main {...args} className={clsx('flex-1', className)} />
      <Footer {...footerProps} />
      <ScrollTopButton />
      <Login />
    </div>
  );
}
