export const supporter = {
  reviewerList: Array.from({ length: 20 }, (_, i) => i).map(v => {
    const category = {
      1: '여행',
      2: '문화',
      3: '디지털',
      4: '맛집',
      5: '생활',
      6: '식품',
      7: '패션',
      8: '뷰티',
      9: '키즈',
    }[(v % 9) + 1];

    const name = {
      1: '베리로즈베리즈',
      2: '월하',
      3: '베리로즈',
      4: '라피',
      5: '날갱',
    }[(v % 5) + 1];

    const introduce = {
      1: '리뷰어 베리로즈 입니다. 인스타 위주로 활동하고 있습니다!~',
      2: '리뷰어 월하 입니다. 인스타 위주로 활동하고 있습니다!~',
      3: '리뷰어 베리로즈 입니다. 인스타 위주로 활동하고 있습니다!~',
      4: '고양이만 생각 하는 라피 입니다. 반려동물 전문 틱톡커로 활동하고 있습니다.sdfsdf',
      5: '날으는 깨갱이 입니다 생활용품 전문 인스타를 운영 하고 있습니다',
    }[(v % 5) + 1];

    const snsChannel = {
      1: '/assets/icons/sns-channel-tiktok.webp',
      2: '/assets/icons/sns-channel-youtube.webp',
      3: '/assets/icons/sns-channel-instagram.webp',
      4: '/assets/icons/sns-channel-blog.webp',
    }[(v % 4) + 1];

    const hashtag = {
      1: ['#인스타', '#인스타뷰티'],
      2: ['#인스타', '#인스타뷰티'],
      3: ['#인스타', '#인스타뷰티'],
      4: ['#틱톡', '#우리쫑사랑해', '#냥뇽이만만세'],
      5: ['#인테리어는화이트', '#이것도한번너프해보시지요'],
    }[(v % 5) + 1];

    return {
      id: v,
      category: category || '',
      img: `/assets/images/reviewer-thumb-img0${(v % 5) + 1}.jpg`,
      name: name || '',
      introduce: introduce || '',
      snsChannel: snsChannel || '',
      hashtag: hashtag || [],
      url: '/supporter/reviewer/portfolio-list' || '',
    };
  }),
  advertiserList: Array.from({ length: 20 }, (_, i) => i).map(v => {
    const category = {
      1: '여행',
      2: '문화',
      3: '디지털',
      4: '맛집',
      5: '생활',
      6: '식품',
      7: '패션',
      8: '뷰티',
      9: '키즈',
    }[(v % 9) + 1];

    const name = {
      1: 'LG전자',
      2: '아이깨끗해',
      3: '독도토너',
      4: '나그참파',
      5: '로하스밀',
    }[(v % 5) + 1];

    const introduce = {
      1: '차원이 다른 가치를 제공하는 LG전자 노트북, TV 및 냉장고 등 다양한 제품',
      2: '향균 세균까지 씻어요~! 핸드워시는 역시 아이깨끗해',
      3: '건강한 원료를 바탕으로 피부가 좋아지는 화장품을 만듭니다.',
      4: '전세계가 사랑하는향 나그참파',
      5: '건강한 아기와 행복한 엄마를 위한 믿을수 있는 이유식',
    }[(v % 5) + 1];

    const snsChannel = {
      1: '/assets/icons/sns-channel-tiktok.webp',
      2: '/assets/icons/sns-channel-youtube.webp',
      3: '/assets/icons/sns-channel-instagram.webp',
      4: '/assets/icons/sns-channel-blog.webp',
    }[(v % 4) + 1];

    const hashtag = {
      1: ['#엘지그램', '#엘지전자'],
      2: ['#아이깨끗해', '#핸드워시'],
      3: ['#독도토너', '#저자극'],
      4: ['#저자극', '#인도전통의향'],
      5: ['#로하스밀', '#믿을수있는이유식'],
    }[(v % 5) + 1];

    return {
      id: v,
      category: category || '',
      img: `/assets/images/advertiser-thumb-img0${(v % 4) + 1}.webp`,
      name: name || '',
      introduce: introduce || '',
      snsChannel: snsChannel || '',
      hashtag: hashtag || [],
      url: '/supporter/advertiser/introduction-list' || '',
    };
  }),
  reviewerInfo: {
    thumbnail: '/assets/images/reviewer-thumb-img01.jpg',
    representSnsChannel: '/assets/icons/sns-channel-instagram.webp',
    representCategory: '뷰티',
    preferSponsorshipWay: '제품 협찬',
    name: '드로세라',
    description:
      '드로세라 입니다. 지속적인 뷰티 콘텐츠 경험으로 전문적이고 상세한 제품 리뷰를 약속 드립니다.',
    hashtag: ['#인스타그램', '#뷰티', '#N년차'],
    portfolioList: Array.from({ length: 10 }, (_, i) => i).map(v => {
      const title = {
        1: '안녕하세요~ 여행 인플루언서 드로세라입니다.',
        2: '안녕하세요~ 맛집 인플루언서 드로세라입니다.',
        3: '안녕하세요~ 독서 인플루언서 드로세라입니다.',
        4: '안녕하세요~ 키보드 인플루언서 드로세라입니다.',
      }[(v % 4) + 1];

      const cateogry = {
        1: '여행',
        2: '맛집',
        3: '문화',
        4: '생활',
      }[(v % 4) + 1];

      const snsChannel = {
        1: '/assets/icons/sns-channel-blog.webp',
        2: '/assets/icons/sns-channel-tiktok.webp',
        3: '/assets/icons/sns-channel-instagram.webp',
        4: '/assets/icons/sns-channel-youtube.webp',
      }[(v % 4) + 1];

      return {
        id: v,
        title: title || '',
        snsChannel: snsChannel || '',
        cateogry: cateogry || '',
        represent: (v === 0 && true) || false,
      };
    }),
    mannerEvaluation: [
      {
        item: '퀄리티가 좋아요',
        result: 31,
      },
      {
        item: '마감기한을 잘 지켜요',
        result: 120,
      },
      {
        item: '응답이 빨라요',
        result: 245,
      },
      {
        item: '센스 있어요',
        result: 22,
      },
      {
        item: '책임감이 있어요',
        result: 31,
      },
      {
        item: '매너가 좋아요',
        result: 9999,
      },
    ],
    portfolioDetail: {
      profileImage: [
        '/assets/images/reviewer-thumb-img01.jpg',
        '/assets/images/reviewer-thumb-img02.jpg',
        '/assets/images/reviewer-thumb-img03.jpg',
        '/assets/images/reviewer-thumb-img04.jpg',
        '/assets/images/reviewer-thumb-img05.jpg',
      ],
      snsChannel: '/assets/icons/sns-channel-instagram.webp',
      category: '여행',
      preferSponsorshipWay: '제품 협찬',
      title: '안녕하세요~ 여행 인플루언서 드로세라입니다.',
    },
  },
  advertiserInfo: {
    thumbnail: '/assets/images/advertiser-thumb-img04.webp',
    representSnsChannel: '/assets/icons/sns-channel-instagram.webp',
    representCategory: '생활',
    preferSponsorshipWay: '제품 협찬',
    name: '나그참파',
    description: '전세계가 사랑하는향 나그참파',
    hashtag: ['#나그참파', '#인도향', '#이너피스'],
    portfolioList: Array.from({ length: 4 }, (_, i) => i).map(v => {
      const title = {
        1: '💚한율_어린쑥 수분진정플루이드💚',
        2: '💚한율_어린쑥 수분진정플루이드💚',
        3: '💚한율_어린쑥 수분진정플루이드💚',
        4: '💚한율_어린쑥 수분진정플루이드💚',
      }[(v % 4) + 1];

      const cateogry = {
        1: '여행',
        2: '맛집',
        3: '문화',
        4: '생활',
      }[(v % 4) + 1];

      const snsChannel = {
        1: '/assets/icons/sns-channel-blog.webp',
        2: '/assets/icons/sns-channel-tiktok.webp',
        3: '/assets/icons/sns-channel-instagram.webp',
        4: '/assets/icons/sns-channel-youtube.webp',
      }[(v % 4) + 1];

      return {
        id: v,
        title: title || '',
        snsChannel: snsChannel || '',
        cateogry: cateogry || '',
        represent: (v === 0 && true) || false,
      };
    }),
    mannerEvaluation: [
      {
        item: '가이드 설명이 좋아요',
        result: 31,
      },
      {
        item: '매너가 좋아요',
        result: 120,
      },
      {
        item: '응답이 빨라요',
        result: 245,
      },
      {
        item: '친절해요',
        result: 22,
      },
      {
        item: '컨펌이 빨라요',
        result: 31,
      },
      {
        item: '책임감이 있어요',
        result: 9999,
      },
    ],
    portfolioDetail: {
      profileImage: [
        '/assets/images/advertiser-thumb-img01.webp',
        '/assets/images/advertiser-thumb-img02.webp',
        '/assets/images/advertiser-thumb-img03.webp',
        '/assets/images/advertiser-thumb-img04.webp',
        '/assets/images/advertiser-thumb-img05.webp',
      ],
      snsChannel: '/assets/icons/sns-channel-instagram.webp',
      category: '여행',
      preferSponsorshipWay: '제품 협찬',
      title: '최고의 퍼포먼스를 위해 초 경량성을 추구하는 몽벨을 소개합니다.',
    },
  },
};

export const maker = {
  pictureContents: {
    reviewerList: Array.from({ length: 20 }, (_, i) => i).map(v => {
      const category = {
        1: '여행',
        2: '문화',
        3: '디지털',
        4: '맛집',
        5: '생활',
        6: '식품',
        7: '패션',
        8: '뷰티',
        9: '키즈',
      }[(v % 9) + 1];

      const name = {
        1: '베리로즈베리즈',
        2: '월하',
        3: '베리로즈',
        4: '라피',
        5: '날갱',
      }[(v % 5) + 1];

      const introduce = {
        1: '리뷰어 베리로즈 입니다. 인스타 위주로 활동하고 있습니다!~',
        2: '리뷰어 월하 입니다. 인스타 위주로 활동하고 있습니다!~',
        3: '리뷰어 베리로즈 입니다. 인스타 위주로 활동하고 있습니다!~',
        4: '고양이만 생각 하는 라피 입니다. 반려동물 전문 틱톡커로 활동하고 있습니다.sdfsdf',
        5: '날으는 깨갱이 입니다 생활용품 전문 인스타를 운영 하고 있습니다',
      }[(v % 5) + 1];

      const snsChannel = {
        1: '/assets/icons/picture-icon.webp',
        2: '/assets/icons/picture-icon.webp',
        3: '/assets/icons/picture-icon.webp',
        4: '/assets/icons/picture-icon.webp',
      }[(v % 4) + 1];

      const hashtag = {
        1: ['#인스타', '#인스타뷰티'],
        2: ['#인스타', '#인스타뷰티'],
        3: ['#인스타', '#인스타뷰티'],
        4: ['#틱톡', '#우리쫑사랑해', '#냥뇽이만만세'],
        5: ['#인테리어는화이트', '#이것도한번너프해보시지요'],
      }[(v % 5) + 1];

      return {
        id: v,
        category: category || '',
        img: `/assets/images/reviewer-thumb-img0${(v % 5) + 1}.jpg`,
        name: name || '',
        introduce: introduce || '',
        snsChannel: snsChannel || '',
        hashtag: hashtag || [],
        url: '/supporter/reviewer/portfolio-list' || '',
      };
    }),
    advertiserList: Array.from({ length: 20 }, (_, i) => i).map(v => {
      const category = {
        1: '여행',
        2: '문화',
        3: '디지털',
        4: '맛집',
        5: '생활',
        6: '식품',
        7: '패션',
        8: '뷰티',
        9: '키즈',
      }[(v % 9) + 1];

      const name = {
        1: 'LG전자',
        2: '아이깨끗해',
        3: '독도토너',
        4: '나그참파',
        5: '로하스밀',
      }[(v % 5) + 1];

      const introduce = {
        1: '차원이 다른 가치를 제공하는 LG전자 노트북, TV 및 냉장고 등 다양한 제품',
        2: '향균 세균까지 씻어요~! 핸드워시는 역시 아이깨끗해',
        3: '건강한 원료를 바탕으로 피부가 좋아지는 화장품을 만듭니다.',
        4: '전세계가 사랑하는향 나그참파',
        5: '건강한 아기와 행복한 엄마를 위한 믿을수 있는 이유식',
      }[(v % 5) + 1];

      const snsChannel = {
        1: '/assets/icons/picture-icon.webp',
        2: '/assets/icons/picture-icon.webp',
        3: '/assets/icons/picture-icon.webp',
        4: '/assets/icons/picture-icon.webp',
      }[(v % 4) + 1];

      const hashtag = {
        1: ['#엘지그램', '#엘지전자'],
        2: ['#아이깨끗해', '#핸드워시'],
        3: ['#독도토너', '#저자극'],
        4: ['#저자극', '#인도전통의향'],
        5: ['#로하스밀', '#믿을수있는이유식'],
      }[(v % 5) + 1];

      return {
        id: v,
        category: category || '',
        img: `/assets/images/advertiser-thumb-img0${(v % 4) + 1}.webp`,
        name: name || '',
        introduce: introduce || '',
        snsChannel: snsChannel || '',
        hashtag: hashtag || [],
        url: '/supporter/advertiser/introduction-list' || '',
      };
    }),
  },
  vedioContents: {
    reviewerList: Array.from({ length: 20 }, (_, i) => i).map(v => {
      const category = {
        1: '여행',
        2: '문화',
        3: '디지털',
        4: '맛집',
        5: '생활',
        6: '식품',
        7: '패션',
        8: '뷰티',
        9: '키즈',
      }[(v % 9) + 1];

      const name = {
        1: '베리로즈베리즈',
        2: '월하',
        3: '베리로즈',
        4: '라피',
        5: '날갱',
      }[(v % 5) + 1];

      const introduce = {
        1: '리뷰어 베리로즈 입니다. 인스타 위주로 활동하고 있습니다!~',
        2: '리뷰어 월하 입니다. 인스타 위주로 활동하고 있습니다!~',
        3: '리뷰어 베리로즈 입니다. 인스타 위주로 활동하고 있습니다!~',
        4: '고양이만 생각 하는 라피 입니다. 반려동물 전문 틱톡커로 활동하고 있습니다.sdfsdf',
        5: '날으는 깨갱이 입니다 생활용품 전문 인스타를 운영 하고 있습니다',
      }[(v % 5) + 1];

      const snsChannel = {
        1: '/assets/icons/vedio-icon.webp',
        2: '/assets/icons/vedio-icon.webp',
        3: '/assets/icons/vedio-icon.webp',
        4: '/assets/icons/vedio-icon.webp',
      }[(v % 4) + 1];

      const hashtag = {
        1: ['#인스타', '#인스타뷰티'],
        2: ['#인스타', '#인스타뷰티'],
        3: ['#인스타', '#인스타뷰티'],
        4: ['#틱톡', '#우리쫑사랑해', '#냥뇽이만만세'],
        5: ['#인테리어는화이트', '#이것도한번너프해보시지요'],
      }[(v % 5) + 1];

      return {
        id: v,
        category: category || '',
        img: `/assets/images/reviewer-thumb-img0${(v % 5) + 1}.jpg`,
        name: name || '',
        introduce: introduce || '',
        snsChannel: snsChannel || '',
        hashtag: hashtag || [],
        url: '/supporter/reviewer/portfolio-list' || '',
      };
    }),
    advertiserList: Array.from({ length: 20 }, (_, i) => i).map(v => {
      const category = {
        1: '여행',
        2: '문화',
        3: '디지털',
        4: '맛집',
        5: '생활',
        6: '식품',
        7: '패션',
        8: '뷰티',
        9: '키즈',
      }[(v % 9) + 1];

      const name = {
        1: 'LG전자',
        2: '아이깨끗해',
        3: '독도토너',
        4: '나그참파',
        5: '로하스밀',
      }[(v % 5) + 1];

      const introduce = {
        1: '차원이 다른 가치를 제공하는 LG전자 노트북, TV 및 냉장고 등 다양한 제품',
        2: '향균 세균까지 씻어요~! 핸드워시는 역시 아이깨끗해',
        3: '건강한 원료를 바탕으로 피부가 좋아지는 화장품을 만듭니다.',
        4: '전세계가 사랑하는향 나그참파',
        5: '건강한 아기와 행복한 엄마를 위한 믿을수 있는 이유식',
      }[(v % 5) + 1];

      const snsChannel = {
        1: '/assets/icons/vedio-icon.webp',
        2: '/assets/icons/vedio-icon.webp',
        3: '/assets/icons/vedio-icon.webp',
        4: '/assets/icons/vedio-icon.webp',
      }[(v % 4) + 1];

      const hashtag = {
        1: ['#엘지그램', '#엘지전자'],
        2: ['#아이깨끗해', '#핸드워시'],
        3: ['#독도토너', '#저자극'],
        4: ['#저자극', '#인도전통의향'],
        5: ['#로하스밀', '#믿을수있는이유식'],
      }[(v % 5) + 1];

      return {
        id: v,
        category: category || '',
        img: `/assets/images/advertiser-thumb-img0${(v % 4) + 1}.webp`,
        name: name || '',
        introduce: introduce || '',
        snsChannel: snsChannel || '',
        hashtag: hashtag || [],
        url: '/supporter/advertiser/introduction-list' || '',
      };
    }),
  },
  etcContents: {
    reviewerList: Array.from({ length: 20 }, (_, i) => i).map(v => {
      const category = {
        1: '여행',
        2: '문화',
        3: '디지털',
        4: '맛집',
        5: '생활',
        6: '식품',
        7: '패션',
        8: '뷰티',
        9: '키즈',
      }[(v % 9) + 1];

      const name = {
        1: '베리로즈베리즈',
        2: '월하',
        3: '베리로즈',
        4: '라피',
        5: '날갱',
      }[(v % 5) + 1];

      const introduce = {
        1: '리뷰어 베리로즈 입니다. 인스타 위주로 활동하고 있습니다!~',
        2: '리뷰어 월하 입니다. 인스타 위주로 활동하고 있습니다!~',
        3: '리뷰어 베리로즈 입니다. 인스타 위주로 활동하고 있습니다!~',
        4: '고양이만 생각 하는 라피 입니다. 반려동물 전문 틱톡커로 활동하고 있습니다.sdfsdf',
        5: '날으는 깨갱이 입니다 생활용품 전문 인스타를 운영 하고 있습니다',
      }[(v % 5) + 1];

      const snsChannel = {
        1: '/assets/icons/etc-icon.webp',
        2: '/assets/icons/etc-icon.webp',
        3: '/assets/icons/etc-icon.webp',
        4: '/assets/icons/etc-icon.webp',
      }[(v % 4) + 1];

      const hashtag = {
        1: ['#인스타', '#인스타뷰티'],
        2: ['#인스타', '#인스타뷰티'],
        3: ['#인스타', '#인스타뷰티'],
        4: ['#틱톡', '#우리쫑사랑해', '#냥뇽이만만세'],
        5: ['#인테리어는화이트', '#이것도한번너프해보시지요'],
      }[(v % 5) + 1];

      return {
        id: v,
        category: category || '',
        img: `/assets/images/reviewer-thumb-img0${(v % 5) + 1}.jpg`,
        name: name || '',
        introduce: introduce || '',
        snsChannel: snsChannel || '',
        hashtag: hashtag || [],
        url: '/supporter/reviewer/portfolio-list' || '',
      };
    }),
    advertiserList: Array.from({ length: 20 }, (_, i) => i).map(v => {
      const category = {
        1: '여행',
        2: '문화',
        3: '디지털',
        4: '맛집',
        5: '생활',
        6: '식품',
        7: '패션',
        8: '뷰티',
        9: '키즈',
      }[(v % 9) + 1];

      const name = {
        1: 'LG전자',
        2: '아이깨끗해',
        3: '독도토너',
        4: '나그참파',
        5: '로하스밀',
      }[(v % 5) + 1];

      const introduce = {
        1: '차원이 다른 가치를 제공하는 LG전자 노트북, TV 및 냉장고 등 다양한 제품',
        2: '향균 세균까지 씻어요~! 핸드워시는 역시 아이깨끗해',
        3: '건강한 원료를 바탕으로 피부가 좋아지는 화장품을 만듭니다.',
        4: '전세계가 사랑하는향 나그참파',
        5: '건강한 아기와 행복한 엄마를 위한 믿을수 있는 이유식',
      }[(v % 5) + 1];

      const snsChannel = {
        1: '/assets/icons/etc-icon.webp',
        2: '/assets/icons/etc-icon.webp',
        3: '/assets/icons/etc-icon.webp',
        4: '/assets/icons/etc-icon.webp',
      }[(v % 4) + 1];

      const hashtag = {
        1: ['#엘지그램', '#엘지전자'],
        2: ['#아이깨끗해', '#핸드워시'],
        3: ['#독도토너', '#저자극'],
        4: ['#저자극', '#인도전통의향'],
        5: ['#로하스밀', '#믿을수있는이유식'],
      }[(v % 5) + 1];

      return {
        id: v,
        category: category || '',
        img: `/assets/images/advertiser-thumb-img0${(v % 4) + 1}.webp`,
        name: name || '',
        introduce: introduce || '',
        snsChannel: snsChannel || '',
        hashtag: hashtag || [],
        url: '/supporter/advertiser/introduction-list' || '',
      };
    }),
  },

  reviewerInfo: {
    thumbnail: '/assets/images/reviewer-thumb-img01.jpg',
    representSnsChannel: '/assets/icons/sns-channel-instagram.webp',
    representCategory: '뷰티',
    preferSponsorshipWay: '제품 협찬',
    name: '드로세라',
    description:
      '드로세라 입니다. 지속적인 뷰티 콘텐츠 경험으로 전문적이고 상세한 제품 리뷰를 약속 드립니다.',
    hashtag: ['#인스타그램', '#뷰티', '#N년차'],
    portfolioList: Array.from({ length: 10 }, (_, i) => i).map(v => {
      const title = {
        1: '안녕하세요~ 여행 인플루언서 드로세라입니다.',
        2: '안녕하세요~ 맛집 인플루언서 드로세라입니다.',
        3: '안녕하세요~ 독서 인플루언서 드로세라입니다.',
        4: '안녕하세요~ 키보드 인플루언서 드로세라입니다.',
      }[(v % 4) + 1];

      const cateogry = {
        1: '여행',
        2: '맛집',
        3: '문화',
        4: '생활',
      }[(v % 4) + 1];

      const snsChannel = {
        1: '/assets/icons/sns-channel-blog.webp',
        2: '/assets/icons/sns-channel-tiktok.webp',
        3: '/assets/icons/sns-channel-instagram.webp',
        4: '/assets/icons/sns-channel-youtube.webp',
      }[(v % 4) + 1];

      return {
        id: v,
        title: title || '',
        snsChannel: snsChannel || '',
        cateogry: cateogry || '',
        represent: (v === 0 && true) || false,
      };
    }),
    mannerEvaluation: [
      {
        item: '퀄리티가 좋아요',
        result: 31,
      },
      {
        item: '마감기한을 잘 지켜요',
        result: 120,
      },
      {
        item: '응답이 빨라요',
        result: 245,
      },
      {
        item: '센스 있어요',
        result: 22,
      },
      {
        item: '책임감이 있어요',
        result: 31,
      },
      {
        item: '매너가 좋아요',
        result: 9999,
      },
    ],
    portfolioDetail: {
      profileImage: [
        '/assets/images/reviewer-thumb-img01.jpg',
        '/assets/images/reviewer-thumb-img02.jpg',
        '/assets/images/reviewer-thumb-img03.jpg',
        '/assets/images/reviewer-thumb-img04.jpg',
        '/assets/images/reviewer-thumb-img05.jpg',
      ],
      snsChannel: '/assets/icons/sns-channel-instagram.webp',
      category: '여행',
      preferSponsorshipWay: '제품 협찬',
      title: '안녕하세요~ 여행 인플루언서 드로세라입니다.',
    },
  },
  advertiserInfo: {
    thumbnail: '/assets/images/advertiser-thumb-img04.webp',
    representSnsChannel: '/assets/icons/sns-channel-instagram.webp',
    representCategory: '생활',
    preferSponsorshipWay: '제품 협찬',
    name: '나그참파',
    description: '전세계가 사랑하는향 나그참파',
    hashtag: ['#나그참파', '#인도향', '#이너피스'],
    portfolioList: Array.from({ length: 4 }, (_, i) => i).map(v => {
      const title = {
        1: '💚한율_어린쑥 수분진정플루이드💚',
        2: '💚한율_어린쑥 수분진정플루이드💚',
        3: '💚한율_어린쑥 수분진정플루이드💚',
        4: '💚한율_어린쑥 수분진정플루이드💚',
      }[(v % 4) + 1];

      const cateogry = {
        1: '여행',
        2: '맛집',
        3: '문화',
        4: '생활',
      }[(v % 4) + 1];

      const snsChannel = {
        1: '/assets/icons/sns-channel-blog.webp',
        2: '/assets/icons/sns-channel-tiktok.webp',
        3: '/assets/icons/sns-channel-instagram.webp',
        4: '/assets/icons/sns-channel-youtube.webp',
      }[(v % 4) + 1];

      return {
        id: v,
        title: title || '',
        snsChannel: snsChannel || '',
        cateogry: cateogry || '',
        represent: (v === 0 && true) || false,
      };
    }),
    mannerEvaluation: [
      {
        item: '가이드 설명이 좋아요',
        result: 31,
      },
      {
        item: '매너가 좋아요',
        result: 120,
      },
      {
        item: '응답이 빨라요',
        result: 245,
      },
      {
        item: '친절해요',
        result: 22,
      },
      {
        item: '컨펌이 빨라요',
        result: 31,
      },
      {
        item: '책임감이 있어요',
        result: 9999,
      },
    ],
    portfolioDetail: {
      profileImage: [
        '/assets/images/advertiser-thumb-img01.webp',
        '/assets/images/advertiser-thumb-img02.webp',
        '/assets/images/advertiser-thumb-img03.webp',
        '/assets/images/advertiser-thumb-img04.webp',
        '/assets/images/advertiser-thumb-img05.webp',
      ],
      snsChannel: '/assets/icons/sns-channel-instagram.webp',
      category: '여행',
      preferSponsorshipWay: '제품 협찬',
      title: '최고의 퍼포먼스를 위해 초 경량성을 추구하는 몽벨을 소개합니다.',
    },
  },
};
