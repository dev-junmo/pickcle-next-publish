import Image from 'next/image';
import Link from 'next/link';
import { type NextPageWithLayout } from 'src/types/common';

interface Props {
  setTransactionSchedule: (open: boolean) => void;
  setOfferCancellationPopup: (open: boolean) => void;
  setMannersEvaluationPopup: (open: boolean) => void;
  setCoordinationRequestPopup: (open: boolean) => void;
  setDeliverablesSubmission: (open: boolean) => void;
  setDeliverablesCheck: (open: boolean) => void;
  currentTab: number;
  userType: string;
}

export const TransactionDataTable: NextPageWithLayout<Props> = ({
  setTransactionSchedule,
  setOfferCancellationPopup,
  setMannersEvaluationPopup,
  setCoordinationRequestPopup,
  setDeliverablesSubmission,
  setDeliverablesCheck,
  currentTab,
  userType,
}) => {
  return (
    <div className='mb-[100px] mt-[30px] w-full overflow-auto 2xl:overflow-visible'>
      <table className='w-[1200px] xl:w-full'>
        <thead>
          <tr
            className={`${
              userType === 'reviewer'
                ? currentTab === 0
                  ? 'bg-[#ffcbd7]'
                  : 'bg-[#dcddff]'
                : currentTab === 1
                ? 'bg-[#ffcbd7]'
                : 'bg-[#dcddff]'
            }`}
          >
            <th className='py-[20px] text-[20px] font-bold 2xl:text-[20px]'>
              {userType === 'reviewer' ? '브랜드' : '리뷰어'}명
            </th>
            <th className='py-[20px] text-[20px] font-bold 2xl:text-[20px]'>콘텐츠 번호</th>
            <th className='relative py-[20px] text-[20px] font-bold 2xl:text-[20px]'>
              신청서
              <Image
                src='/assets/icons/help-icon.webp'
                alt='도움말'
                width={20}
                height={20}
                className='peer ml-[5px] mt-[-7px] inline-block align-middle'
              />
              <div className='absolute left-[-30px] top-[-45px] hidden w-[205px] rounded-[10px] bg-[#c0c0c0] px-[10px] py-[10px] before:absolute before:left-[116px] before:top-[56px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[5px] before:border-t-[10px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[#c0c0c0] peer-hover:block'>
                <p className='text-[14px] font-[500] leading-[18px] text-[#2d2d2d]'>
                  직접 제안신청 시 작성했던 <br />
                  신청서 및 가이드가 보여집니다.
                </p>
              </div>
            </th>
            <th className='py-[20px] text-[20px] font-bold 2xl:text-[20px]'>문의하기</th>
            <th className='py-[20px] text-[20px] font-bold 2xl:text-[20px]'>결과물 제출</th>
            <th className='relative py-[20px] text-[20px] font-bold 2xl:text-[20px]'>
              {userType === 'reviewer' ? '브랜드' : '리뷰어'} 평가하기
              <Image
                src='/assets/icons/help-icon.webp'
                alt='도움말'
                width={20}
                height={20}
                className='peer ml-[5px] mt-[-7px] inline-block align-middle'
              />
              <div className='absolute left-[68px] top-[-45px] hidden w-[205px] rounded-[10px] bg-[#c0c0c0] px-[10px] py-[10px] before:absolute before:left-[116px] before:top-[56px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[5px] before:border-t-[10px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[#c0c0c0] peer-hover:block'>
                <p className='text-[14px] font-[500] leading-[18px] text-[#2d2d2d]'>
                  거래진행에 대한 평가완료 시 <br />
                  활동점수가 부여됩니다.
                </p>
              </div>
            </th>
            <th className='relative py-[20px] text-[20px] font-bold 2xl:text-[20px]'>
              스케쥴
              <Image
                src='/assets/icons/help-icon.webp'
                alt='도움말'
                width={20}
                height={20}
                className='peer ml-[5px] mt-[-7px] inline-block align-middle'
              />
              <div className='absolute left-[-31px] top-[-45px] hidden w-[315px] rounded-[10px] bg-[#c0c0c0] px-[10px] py-[10px] before:absolute before:left-[116px] before:top-[56px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[5px] before:border-t-[10px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[#c0c0c0] peer-hover:block'>
                <p className='text-[14px] font-[500] leading-[18px] text-[#2d2d2d]'>
                  결과물 제출 연장신청이 필요하신 경우 캘린더 <br />내 결과물 제출 연장신청 버튼을
                  클릭해주세요.
                </p>
              </div>
            </th>
            <th className='relative py-[20px] text-[20px] font-bold 2xl:text-[20px]'>
              {userType === 'reviewer' ? '지급' : ''}포인트
              <Image
                src='/assets/icons/help-icon.webp'
                alt='도움말'
                width={20}
                height={20}
                className='peer ml-[5px] mt-[-7px] inline-block align-middle'
              />
              <div className='absolute left-[16px] top-[-45px] hidden w-[290px] rounded-[10px] bg-[#c0c0c0] px-[10px] py-[10px] before:absolute before:left-[116px] before:top-[56px] before:block before:border-b-[5px] before:border-l-[5px] before:border-r-[5px] before:border-t-[10px] before:border-b-[transparent] before:border-l-[transparent] before:border-r-[transparent] before:border-t-[#c0c0c0] peer-hover:block'>
                <p className='text-[14px] font-[500] leading-[18px] text-[#2d2d2d]'>
                  수수료 3.5%(VAT포함) 제외 후 지급되며, <br />
                  자세한 사항은 포인트내역에서 확인해주세요.
                </p>
              </div>
            </th>
            <th className='py-[20px] text-[20px] font-bold 2xl:text-[20px]'>진행현황</th>
            <th className='py-[20px] text-[20px] font-bold 2xl:text-[20px]'>진행일자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='pb-[45px] pt-[30px] text-center text-[14px] font-bold text-[#fff]'>
              나그참파
            </td>
            <td className='pb-[45px] pt-[30px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              9615885
            </td>
            <td className='flex items-center justify-center gap-[3px] pb-[45px] pt-[30px] text-center text-[14px] font-[500] text-[#8586db] 2xl:text-[16px]'>
              <Link href='/reviewer/transaction-management/application-view'>보기</Link>
              <Image src='/assets/icons/link-icon.webp' alt='링크' width={20} height={20} />
            </td>
            <td className='pb-[45px] pt-[30px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              <Link
                href='/reviewer/transaction-management/inquire-message'
                className='inline-block h-[32px] rounded-[5px] bg-[#fff] px-[10px] text-[14px] font-[500] leading-[32px] text-[#2d2d2d] 2xl:text-[16px]'
              >
                문의하기
              </Link>
            </td>
            <td className='pb-[45px] pt-[30px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              {userType === 'reviewer' ? '제출완료' : '컨펌완료'}
            </td>
            <td className='pb-[45px] pt-[30px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              <button
                className='h-[32px] rounded-[5px] bg-[#8586db] px-[10px] text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'
                onClick={() => setMannersEvaluationPopup(true)}
              >
                평가하기
              </button>
            </td>
            <td
              className='pb-[45px] pt-[30px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'
              onClick={() => setTransactionSchedule(true)}
            >
              <Image
                src='/assets/icons/scheduling-icon.webp'
                alt='스케쥴링 아이콘'
                width={32}
                height={32}
                className='mx-auto cursor-pointer'
              />
            </td>
            <td className='pb-[45px] pt-[30px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              150,000 P
            </td>
            <td className='pb-[45px] pt-[30px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              <button
                className='h-[32px] rounded-[5px] bg-[#f97090] px-[10px] text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'
                onClick={() => setOfferCancellationPopup(true)}
              >
                제안 취소
              </button>
            </td>
            <td className='pb-[45px] pt-[30px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              2023.08.01
            </td>
          </tr>
          <tr>
            <td className='pb-[45px] text-center text-[14px] font-bold text-[#fff]'>티르티르</td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              9615912
            </td>
            <td className='flex cursor-pointer items-center justify-center gap-[3px] pb-[45px] text-center text-[14px] font-[500] text-[#8586db] 2xl:text-[16px]'>
              <Link href='/reviewer/transaction-management/application-view'>보기</Link>
              <Image src='/assets/icons/link-icon.webp' alt='링크' width={20} height={20} />
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              <Link
                href='/reviewer/transaction-management/inquire-message'
                className='inline-block h-[32px] rounded-[5px] bg-[#fff] px-[10px] text-[14px] font-[500] leading-[32px] text-[#2d2d2d] 2xl:text-[16px]'
              >
                문의하기
              </Link>
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              <button
                className='h-[32px] rounded-[5px] bg-[#f97090] px-[10px] text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'
                onClick={() =>
                  userType === 'reviewer'
                    ? setDeliverablesSubmission(true)
                    : setDeliverablesCheck(true)
                }
              >
                {userType === 'reviewer' ? '제출하기' : '컨펌하기'}
              </button>
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              <button
                className='h-[32px] rounded-[5px] bg-[#8586db] px-[10px] text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'
                onClick={() => setMannersEvaluationPopup(true)}
              >
                평가하기
              </button>
            </td>
            <td
              className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'
              onClick={() => setTransactionSchedule(true)}
            >
              <Image
                src='/assets/icons/scheduling-icon.webp'
                alt='스케쥴링 아이콘'
                width={32}
                height={32}
                className='mx-auto cursor-pointer'
              />
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              150,000 P
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              <button
                className='h-[32px] rounded-[5px] bg-[#8586db] px-[10px] text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'
                onClick={() => setCoordinationRequestPopup(true)}
              >
                조율 요청
              </button>
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              2023.08.01
            </td>
          </tr>
          <tr>
            <td className='pb-[45px] text-center text-[14px] font-bold text-[#fff]'>한미</td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              9615615
            </td>
            <td className='flex cursor-pointer items-center justify-center gap-[3px] pb-[45px] text-center text-[14px] font-[500] text-[#8586db] 2xl:text-[16px]'>
              <Link href='/reviewer/transaction-management/application-view'>보기</Link>
              <Image src='/assets/icons/link-icon.webp' alt='링크' width={20} height={20} />
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              <Link
                href='/reviewer/transaction-management/inquire-message'
                className='inline-block h-[32px] rounded-[5px] bg-[#fff] px-[10px] text-[14px] font-[500] leading-[32px] text-[#2d2d2d] 2xl:text-[16px]'
              >
                문의하기
              </Link>
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              <button
                className='h-[32px] rounded-[5px] bg-[#f97090] px-[10px] text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'
                onClick={() =>
                  userType === 'reviewer'
                    ? setDeliverablesSubmission(true)
                    : setDeliverablesCheck(true)
                }
              >
                {userType === 'reviewer' ? '제출하기' : '컨펌하기'}
              </button>
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              <button
                className='h-[32px] rounded-[5px] bg-[#8586db] px-[10px] text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'
                onClick={() => setMannersEvaluationPopup(true)}
              >
                평가하기
              </button>
            </td>
            <td
              className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'
              onClick={() => setTransactionSchedule(true)}
            >
              <Image
                src='/assets/icons/scheduling-icon.webp'
                alt='스케쥴링 아이콘'
                width={32}
                height={32}
                className='mx-auto cursor-pointer'
              />
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              80,000 P
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              거래 취소
            </td>
            <td className='pb-[45px] text-center text-[14px] font-[500] text-[#fff] 2xl:text-[16px]'>
              2023.08.01
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
