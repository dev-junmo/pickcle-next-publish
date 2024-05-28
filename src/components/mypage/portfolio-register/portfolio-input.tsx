import { type NextPageWithLayout } from 'src/types/common';
import { EditorState, convertToRaw } from 'draft-js';
import { type EditorProps } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

interface Props {
  contentType?: string;
  userType: string;
}

const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false,
});

export const PortfolioInput: NextPageWithLayout<Props> = ({ contentType, userType }) => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  return (
    <div className='mb-[50px] w-full'>
      <div>
        <label htmlFor='portfolio-title' className='block text-[20px] font-[500] text-[#fff]'>
          {userType === 'reviewer' ? '포트폴리오' : '제품소개서'} 제목{' '}
          <span
            className={`text-[20px] font-[500] ${
              userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
            }`}
          >
            ＊
          </span>
        </label>
        <input
          id='portfolio-title'
          className='mt-[15px] h-[50px] w-full rounded-[5px] bg-[#fff] pl-[15px]'
        />
      </div>
      {contentType === 'maker' ? (
        <div className='mt-[50px] flex flex-wrap items-center justify-between gap-[20px]'>
          <div className='w-[45%] lg:w-[235px]'>
            <label htmlFor='sns-select' className='block text-[20px] font-[500] text-[#fff]'>
              콘텐츠 종류{' '}
              <span
                className={`text-[20px] font-[500] ${
                  userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                }`}
              >
                ＊
              </span>
            </label>
            <select className='mt-[15px] h-[50px] w-full rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_20px_top_15px] bg-no-repeat pl-[15px] font-[500] text-[#2d2d2d]'>
              <option>영상</option>
              <option>사진</option>
              <option>기타</option>
            </select>
          </div>
          <div className='w-[45%] lg:w-[235px]'>
            <label htmlFor='category-select' className='block text-[20px] font-[500] text-[#fff]'>
              카테고리{' '}
              <span
                className={`text-[20px] font-[500] ${
                  userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                }`}
              >
                ＊
              </span>
            </label>
            <select className='mt-[15px] h-[50px] w-full rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_20px_top_15px] bg-no-repeat pl-[15px] font-[500] text-[#2d2d2d]'>
              <option>여행</option>
              <option>맛집</option>
              <option>생활</option>
              <option>뷰티</option>
            </select>
          </div>
          <div className='w-[45%] lg:w-[235px]'>
            <label htmlFor='sponsor-select' className='block text-[20px] font-[500] text-[#fff]'>
              {userType === 'reviewer' ? '선호' : '제공'} 협찬 방식{' '}
              <span
                className={`text-[20px] font-[500] ${
                  userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                }`}
              >
                ＊
              </span>
            </label>
            <select className='mt-[15px] h-[50px] w-full rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_20px_top_15px] bg-no-repeat pl-[15px] font-[500] text-[#2d2d2d]'>
              <option>제품 협찬</option>
              <option>방문 협찬</option>
              <option>No협찬</option>
            </select>
          </div>
          <div className='w-[45%] lg:w-[235px]'>
            <label htmlFor='sns-select' className='block text-[20px] font-[500] text-[#fff]'>
              대표 SNS 채널{' '}
              <span
                className={`text-[20px] font-[500] ${
                  userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                }`}
              >
                {' '}
                <span className='ml-[5px] text-[13px] font-[500]'>＊</span>
              </span>
            </label>
            <select className='mt-[15px] h-[50px] w-full rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_20px_top_15px] bg-no-repeat pl-[15px] font-[500] text-[#2d2d2d]'>
              <option>인스타그램</option>
              <option>유튜브</option>
              <option>블로그</option>
              <option>틱톡</option>
            </select>
          </div>
        </div>
      ) : (
        <div className='mt-[50px] flex flex-wrap items-center justify-between gap-[34px] xl:gap-[147px]'>
          <div className='w-[45%] lg:w-[235px]'>
            <label htmlFor='sns-select' className='block text-[20px] font-[500] text-[#fff]'>
              SNS채널{' '}
              <span
                className={`text-[20px] font-[500] ${
                  userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                }`}
              >
                {' '}
                <span className='ml-[8px] text-[14px] font-[500]'>
                  {userType === 'reviewer' ? '' : '중복 선택 가능'}＊
                </span>
              </span>
            </label>
            <select className='mt-[15px] h-[50px] w-full rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_20px_top_15px] bg-no-repeat pl-[15px] font-[500] text-[#2d2d2d]'>
              <option>인스타그램</option>
              <option>유튜브</option>
              <option>블로그</option>
              <option>틱톡</option>
            </select>
          </div>
          <div className='w-[45%] lg:w-[235px]'>
            <label htmlFor='category-select' className='block text-[20px] font-[500] text-[#fff]'>
              카테고리{' '}
              <span
                className={`text-[20px] font-[500] ${
                  userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                }`}
              >
                ＊
              </span>
            </label>
            <select className='mt-[15px] h-[50px] w-full rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_20px_top_15px] bg-no-repeat pl-[15px] font-[500] text-[#2d2d2d]'>
              <option>여행</option>
              <option>맛집</option>
              <option>생활</option>
              <option>뷰티</option>
            </select>
          </div>
          <div className='w-[45%] lg:w-[235px]'>
            <label htmlFor='sponsor-select' className='block text-[20px] font-[500] text-[#fff]'>
              선호 협찬 방식{' '}
              <span
                className={`text-[20px] font-[500] ${
                  userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
                }`}
              >
                ＊
              </span>
            </label>
            <select className='mt-[15px] h-[50px] w-full rounded-[5px] bg-[url(/assets/icons/arrow-bottom-small.webp)] bg-[length:20px_20px] bg-[right_20px_top_15px] bg-no-repeat pl-[15px] font-[500] text-[#2d2d2d]'>
              <option>제품 협찬</option>
              <option>방문 협찬</option>
              <option>No협찬</option>
            </select>
          </div>
        </div>
      )}
      <div
        className={`mt-[15px] flex items-center ${
          contentType === 'maker' ? 'justify-end' : 'justify-start pr-[107px]'
        }`}
      >
        {contentType !== 'maker' && userType === 'advertiser' && (
          <span className='text-[16px] font-[500] text-[#f97090]'>인스타그램, 유튜브</span>
        )}
      </div>
      {userType === 'advertiser' && (
        <div className='mt-[30px]'>
          <label className='block text-[20px] font-[500] text-[#fff]'>
            제품 / 서비스명 <span className='text-[20px] font-[500] text-[#8586db]'>＊</span>
          </label>
          <input
            className='mt-[15px] h-[50px] w-full rounded-[5px] bg-[#fff] pl-[15px] placeholder:text-[#cccccc]'
            placeholder='문구 제품/서비스명을 입력해주세요'
          />
        </div>
      )}
      <div className='mt-[30px]'>
        <b className='mb-[15px] block text-[20px] font-[500] text-[#fff]'>
          {userType === 'reviewer' ? '포트폴리오' : '제품소개서'} 상세설명{' '}
          <span
            className={`text-[20px] font-[500] ${
              userType === 'reviewer' ? 'text-[#f97090]' : 'text-[#8586db]'
            }`}
          >
            ＊
          </span>
        </b>
        {/* <textarea className='h-[500px] w-full lg:h-[680px]' /> */}
        <Editor
          toolbarStyle={{ marginBottom: '0px' }}
          editorState={editorState}
          toolbarClassName='toolbarClassName'
          wrapperClassName='wrapperClassName'
          editorClassName='editorClassName'
          editorStyle={{
            height: '600px',
            backgroundColor: '#fff',
            color: '#2d2d2d',
            paddingLeft: '15px',
          }}
          toolbar={{
            options: ['inline', 'list', 'textAlign', 'link'], // 원하는 옵션 선택
          }}
          localization={{
            locale: 'ko',
          }}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
};
