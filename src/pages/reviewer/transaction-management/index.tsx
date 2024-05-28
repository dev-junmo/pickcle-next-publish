import Image from 'next/image';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import GradePopup from 'src/components/mypage/grade-popup';
import TransactionSchedule from 'src/components/transaction-management/transaction-schedule';
import { TransactionDataTable } from 'src/components/transaction-management/tracsaction-data-table';

import { type NextPageWithLayout } from 'src/types/common';
import OfferCancellation from 'src/components/transaction-management/offer-cancellation';
import MannersEvaluation from 'src/components/transaction-management/manners-evaluation';
import CoordinationRequest from 'src/components/transaction-management/coordination-request';
import DeliverablesSubmission from 'src/components/transaction-management/deliverables-submission';

interface Props {}

const userTypeTab = ['나의 제안', '브랜드의 제안'];
const monthTab = ['1개월', '3개월', '6개월', '1년'];

const TransactionManagement: NextPageWithLayout<Props> = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentMonthTab, setCurrentMonthTab] = useState(0);
  const [transactionSchedulePopup, setTransactionSchedule] = useState(false);
  const [offerCancellationPopup, setOfferCancellationPopup] = useState(false);
  const [mannersEvaluationPopup, setMannersEvaluationPopup] = useState(false);
  const [coordinationRequestPopup, setCoordinationRequestPopup] = useState(false);
  const [deliverablesSubmission, setDeliverablesSubmission] = useState(false);
  const [deliverablesCheck, setDeliverablesCheck] = useState(false);

  return (
    <>
      <div className='mx-auto mt-[100px] w-full px-[20px] xl:w-[1040px] xl:px-0 2xl:w-[1420px]'>
        <b className='text-[30px] font-[500] text-[#fff]'>나의 거래 관리</b>
        <div className='mt-[40px] items-end justify-between lg:flex lg:border-b lg:border-[#707070]'>
          <ul className='flex items-center border-b border-[#707070]'>
            {userTypeTab.map((v, i) => (
              <li
                key={i}
                className={`relative mr-[5px] cursor-pointer py-[5px] text-[18px] font-bold text-[#fff] before:absolute before:bottom-[-4px] before:left-0 before:h-[6px] before:w-full before:bg-[#f97090] md:text-[20px] 2xl:text-[25px] ${
                  currentTab === i ? 'before:block' : 'before:hidden'
                } first:after:ml-[5px] first:after:inline-block first:after:content-['/'] last:mr-0`}
                onClick={() => {
                  setCurrentTab(i);
                }}
              >
                {v}
              </li>
            ))}
          </ul>
          <div className='mt-[30px] lg:mb-[10px] lg:mt-0'>
            <button className='mb-[10px] h-[40px] w-[150px] rounded-[5px] bg-[#f97090] text-[18px] font-bold text-[#fff] md:h-[50px] md:rounded-[10px] md:text-[20px]'>
              나의 스케쥴링
            </button>
          </div>
        </div>
        <div className='items-center justify-between border-b border-[#707070] py-[30px] lg:flex'>
          <ul className='flex items-center gap-[15px] md:gap-[25px]'>
            {monthTab.map((m, i) => (
              <li
                key={i}
                className={`h-[30px] w-[60px] cursor-pointer rounded-[5px] bg-[#000] text-center text-[16px] font-bold leading-[28px] text-[#fff] md:h-[40px] md:w-[80px] md:rounded-[10px] md:text-[20px] md:leading-[40px] ${
                  currentMonthTab === i ? 'bg-[#f97090]' : 'border border-[#707070]'
                }`}
                onClick={() => setCurrentMonthTab(i)}
              >
                {m}
              </li>
            ))}
          </ul>
          <div className='mt-[30px] flex items-center lg:mt-0'>
            <input
              type='date'
              className='h-[40px] w-[150px] rounded-[10px] px-[10px] text-center'
            />
            <span className='mx-[5px] text-[#fff]'>-</span>
            <input
              type='date'
              className='h-[40px] w-[150px] rounded-[10px] px-[10px] text-center'
            />
            <button className='ml-[10px] h-[40px] w-[100px] rounded-[5px] bg-[#f97090] text-[20px] font-bold text-[#fff] md:rounded-[10px]'>
              조회
            </button>
          </div>
        </div>
        <div className='my-[30px] items-center lg:flex'>
          <ul className='mr-[34px] flex items-center gap-[24px]'>
            <li className=''>
              <label htmlFor='supprter-radio' className='relative flex items-center'>
                <input
                  defaultChecked
                  type='radio'
                  id='supprter-radio'
                  className='peer hidden'
                  name='date-radio'
                  value='서포터'
                />
                <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full bg-[#fff] p-[5px] before:hidden before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                <span className='text-[20px] font-[500] text-[#f97090] lg:text-[20px]'>서포터</span>
              </label>
            </li>
            <li className=''>
              <label htmlFor='maker-radio' className='relative flex items-center'>
                <input
                  type='radio'
                  id='maker-radio'
                  className='peer hidden'
                  name='date-radio'
                  value='메이커'
                />
                <span className='relative mr-[10px] inline-block h-[20px] w-[20px] shrink-0 rounded-full bg-[#fff] p-[5px] before:hidden before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#f97090] peer-checked:before:block' />
                <span className='text-[20px] font-[500] text-[#8586db] lg:text-[20px]'>메이커</span>
              </label>
            </li>
          </ul>
          <div className='mt-[10px] lg:mt-0'>
            <select className='mr-[25px] h-[40px] w-[190px] rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_11px_top_11px] bg-no-repeat pl-[15px] text-[20px] font-[500] text-[#2d2d2d] md:w-[155px] xl:w-[190px]'>
              <option>브랜드명</option>
            </select>
            <select className='mr-[25px] mt-[10px] h-[40px] w-[190px] rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_11px_top_11px] bg-no-repeat pl-[15px] text-[20px] font-[500] text-[#2d2d2d] md:mt-0 md:w-[155px] xl:w-[190px]'>
              <option>진행 현황</option>
            </select>
          </div>
          <div className='mt-[10px] lg:mt-0'>
            <button className='h-[40px] w-[100px] rounded-[5px] bg-[#cccccc] text-[20px] font-bold text-[#fff] md:rounded-[10px] lg:ml-[10px]'>
              초기화
            </button>
            <button className='ml-[25px] h-[40px] w-[100px] rounded-[5px] bg-[#f97090] text-[20px] font-bold text-[#fff] md:rounded-[10px]'>
              조회
            </button>
          </div>
        </div>
        <TransactionDataTable
          setTransactionSchedule={setTransactionSchedule}
          setOfferCancellationPopup={setOfferCancellationPopup}
          setMannersEvaluationPopup={setMannersEvaluationPopup}
          setCoordinationRequestPopup={setCoordinationRequestPopup}
          setDeliverablesSubmission={setDeliverablesSubmission}
          setDeliverablesCheck={setDeliverablesCheck}
          currentTab={currentTab}
          userType='reviewer'
        />
      </div>
      <TransactionSchedule
        transactionSchedulePopup={transactionSchedulePopup}
        setTransactionSchedule={setTransactionSchedule}
      />
      <OfferCancellation
        offerCancellationPopup={offerCancellationPopup}
        setOfferCancellationPopup={setOfferCancellationPopup}
      />
      <MannersEvaluation
        mannersEvaluationPopup={mannersEvaluationPopup}
        setMannersEvaluationPopup={setMannersEvaluationPopup}
        userType='reviewer'
      />
      <CoordinationRequest
        coordinationRequestPopup={coordinationRequestPopup}
        setCoordinationRequestPopup={setCoordinationRequestPopup}
        userType='reviewer'
      />
      <DeliverablesSubmission
        deliverablesSubmission={deliverablesSubmission}
        setDeliverablesSubmission={setDeliverablesSubmission}
      />
    </>
  );
};

TransactionManagement.getLayout = page => <Layout>{page}</Layout>;

export default TransactionManagement;
