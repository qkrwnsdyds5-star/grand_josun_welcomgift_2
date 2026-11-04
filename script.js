/**
 * JOSUN ÉCLAT — Pure Vanilla JavaScript
 * Zero dependencies, Native Web APIs only
 * Features:
 *  1. Interactive Dashboard Landing Hub (First View on Load with 5 Main Navigation Buttons)
 *  2. 3 Completely Independent Presentation Branches: BUSAN, JEJU, and KIDS
 *  3. Seamless Slide Presentation System (0: Dashboard, 1: Intro, 2: Gifts, 3: Story, 4: Inspiration, 5: Concierge)
 *  4. Multi-Language Support (KO, EN, ZH, JA)
 *  5. Adult Gift Lineup (Busan Proposals 1, 2, 3 & Jeju Proposals 1, 2) vs Independent Kids Atelier Kit
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     01. Multi-Language Repository (KO, EN, ZH, JA)
     ========================================================================== */
  const I18N = {
    ko: {
      langCode: 'KO',
      langName: '한국어',
      brandSub: {
        busan: 'GRAND JOSUN BUSAN',
        jeju: 'GRAND JOSUN JEJU',
        kids: 'GRAND JOSUN KIDS'
      },
      chips: ['대시보드', '소개', '기프트', '스토리', '영감', '안내'],
      swipeHint: '좌우로 넘겨서 선물을 확인하세요',
      
      // 대시보드 첫 화면 텍스트 (디지털 가이드 바로가기 중심)
      dashboard: {
        badge: 'JOSUN ÉCLAT DIGITAL DASHBOARD',
        title: '감각적인 환대의 시작,<br><span class="title-highlight">조선 에끌라 웰컴 컬렉션</span>',
        subtitle: '부산과 제주의 자연을 담은 시그니처 디저트부터 온 가족의 키즈 아틀리에까지,<br class="hide-mobile">원하시는 메뉴를 눌러 조선 에끌라만의 특별한 환대 페이지를 바로 경험해 보세요.',
        navEyebrow: 'QUICK EXPLORE',
        navTitle: '디지털 가이드 바로가기',
        menus: {
          intro: { tag: 'WELCOME & HERO', title: '소개', desc: '에디션 웰컴 무드와 패키지 브로슈어 안내', action: '페이지 이동' },
          gift: { tag: 'SIGNATURE COLLECTION', title: '기프트', desc: '지역 디저트 시안 및 키즈 아틀리에 키트 상세', action: '페이지 이동' },
          story: { tag: 'HERITAGE & ARTISAN', title: '스토리', desc: '조선호텔 100년의 환대 & 베키아에누보 미식 철학', action: '페이지 이동' },
          inspiration: { tag: 'GENIUS LOCI', title: '영감', desc: '해운대 바다, 제주의 오름, 아이들의 동심 모티브', action: '페이지 이동' },
          info: { tag: 'CONCIERGE & INFO', title: '안내', desc: '호텔 위치, 컨시어지 및 서비스 가이드', action: '페이지 이동' }
        }
      },

      quickActions: {
        goToGift: '기프트 상세 보기 →',
        backToDash: '대시보드로 복귀'
      },

      hero: {
        badge_busan: 'GRAND JOSUN BUSAN WELCOME GIFT',
        badge_jeju: 'GRAND JOSUN JEJU WELCOME GIFT',
        badge_kids: 'GRAND JOSUN KIDS ATELIER',
        titleSub_busan: '여행의 순간을 담은',
        titleHighlight_busan: '작은 선물',
        titleSub_jeju: '자연의 품에 안긴',
        titleHighlight_jeju: '달콤한 환대',
        titleSub_kids: '온 가족이 함께하는',
        titleHighlight_kids: '쿠키 아틀리에',
        subtitle_busan: '푸른 해운대의 파도와 빛나는 도시가 머무는 곳, 그랜드 조선 부산에서 준비한 감각적인 환대의 시간을 마주해 보세요.',
        subtitle_jeju: '태고의 신비를 품은 한라산과 제주의 바람이 전하는 쉼, 오직 당신만을 위해 준비한 달콤한 여정을 시작합니다.',
        subtitle_kids: '동일한 기본 실루엣의 쿠키 캔버스 위에 아이의 무한한 상상력을 그리는 온 가족의 프라이빗 아틀리에 시간입니다.',
        caption_busan: '그랜드 조선 부산 시그니처 웰컴 패키지',
        caption_jeju: '그랜드 조선 제주 시그니처 웰컴 패키지',
        caption_kids: '그랜드 조선 키즈 쿠키 아틀리에 키트'
      },

      gifts: {
        eyebrow: 'CURATED HOSPITALITY',
        title: 'Our Signature Gift',
        desc: '머무시는 공간의 품격에 맞추어 정성스럽게 빚어낸 조선 에끌라의 웰컴 셀렉션입니다.',
        motifTitle: 'REGIONAL MOTIF',
        pairingLabel: 'PAIRING NOTE',
        tabs: {
          p1: '시안 1 : 시그니처',
          p2: '시안 2 : 쇼콜라',
          p3: '시안 3 : 마스터피스'
        },
        busan: {
          p1: {
            badge: 'PROPOSAL 01 · STANDARD',
            roomTag: 'BUSAN SELECTION 01',
            titleMain: '해운대 시그니처 디저트 세트 (시안 1)',
            titleSub: 'The Ocean Landmark Butter Sablé',
            img: './images/busan-gift-standard.png',
            desc: '부산의 랜드마크인 광안대교의 유려한 실루엣과 바다를 밝히는 등대, 항해하는 배, 갈매기, 조개껍질을 미니멀하게 형상화한 버터 사브레 디저트 세트입니다.',
            motifs: [
              { name: '광안대교', text: '유려한 현수교의 야경과 낭만' },
              { name: '등대 · 배', text: '해운대 앞바다의 길잡이와 설레는 항해' },
              { name: '조개 · 갈매기', text: '파도 소리가 머무는 백사장의 서정' }
            ],
            pairing: '체크인 직후, 객실 내 은은한 웰컴 티와 곁들이시면 더욱 풍성한 버터의 풍미와 달콤함을 느끼실 수 있습니다.'
          },
          p2: {
            badge: 'PROPOSAL 02 · SUITE EXCLUSIVE',
            roomTag: 'BUSAN SELECTION 02',
            titleMain: '베키아에누보 스페셜티 쇼콜라 & 티 (시안 2)',
            titleSub: 'Heritage Specialite Chocolat Collection',
            img: './images/busan-gift-suite.png',
            desc: '최고급 골드박 하드케이스 패키지와 수제 프리미엄 쇼콜라 4종(광안대교, 조개, 등대, 파도)으로 품격을 극대화한 스위트 전용 기프트입니다.',
            motifs: [
              { name: '광안대교 · 등대', text: '골드박으로 빛나는 부산의 찬란한 해양 랜드마크' },
              { name: '조개 · 물결치는 파도', text: '깊은 카카오의 풍미 속에 녹아든 해안의 미학' },
              { name: '스페셜티 하드케이스', text: '간직하고 싶은 럭셔리 기프트 패키징' }
            ],
            pairing: '객실 내 프리미엄 에스프레소 머신 또는 차갑게 칠링된 샴페인과 완벽한 마리아주를 이룹니다.'
          },
          p3: {
            badge: 'PROPOSAL 03 · MASTERPIECE',
            roomTag: 'BUSAN SELECTION 03',
            titleMain: '그랜드 조선 부산 마스터피스 기프트 (시안 3)',
            titleSub: 'Grand Josun Busan Masterpiece Ocean Gift',
            img: './images/busan-gift-proposal3.png',
            desc: '푸른 해운대 바다의 깊은 정취와 현대적인 감각을 결합한 완성형 시그니처 웰컴 기프트 박스로, 여행의 첫 장을 잊을 수 없는 감동으로 채웁니다.',
            motifs: [
              { name: '해운대 딥 네이비', text: '바다의 깊은 울림과 샴페인 골드의 반짝임' },
              { name: '장인 파티세리', text: '베키아에누보 파티시에의 섬세한 터치' },
              { name: '익스클루시브 박스', text: '오직 부산 투숙객만을 위한 특별한 환대 에디션' }
            ],
            pairing: '신선하게 우려낸 시그니처 블렌디드 티와 함께 여유로운 오션뷰 티타임을 즐겨보세요.'
          }
        },
        jeju: {
          p1: {
            badge: 'PROPOSAL 01 · NATURE',
            roomTag: 'JEJU SELECTION 01',
            titleMain: '한라 오름 시그니처 디저트 세트 (시안 1)',
            titleSub: 'The Island Nature Mold Selection',
            img: './images/jeju-gift.png',
            desc: '제주의 따뜻한 햇살을 머금은 감귤과 들판을 달리는 말, 남국의 정취를 품은 야자수, 돌하르방, 한라산 백록담을 보석 같은 6구 쇼콜라 몰드에 담아냈습니다.',
            motifs: [
              { name: '귤 & 한라봉', text: '제주의 따스한 햇살과 상큼한 활력' },
              { name: '말 & 야자수', text: '푸른 초원과 남국 휴양지의 평화로운 쉼' },
              { name: '돌하르방 & 한라산', text: '천혜의 자연이 빚어낸 영원한 안식' }
            ],
            pairing: '제주 유기농 녹차 또는 상큼한 감귤 블렌디드 티와 함께 즐기시면 조화로운 풍미를 경험하실 수 있습니다.'
          },
          p2: {
            badge: 'PROPOSAL 02 · SANCTUARY',
            roomTag: 'JEJU SELECTION 02',
            titleMain: '그랜드 조선 제주 마스터피스 셀렉션 (시안 2)',
            titleSub: 'Grand Josun Jeju Masterpiece Sanctuary Gift',
            img: './images/jeju-gift-suite.png',
            desc: '한라산 백록담의 설경과 곶자왈 원시림의 깊은 녹음을 형상화한 프리미엄 기프트 세트입니다. 정갈한 우든 & 골드 트레이 위에 제주의 사계를 수놓았습니다.',
            motifs: [
              { name: '백록담 설경', text: '신비로운 한라산 정상의 고요한 순수함' },
              { name: '곶자왈 원시림', text: '차분한 포레스트 그린이 선사하는 피톤치드 쉼' },
              { name: '마스터피스 트레이', text: '시간이 흘러도 변치 않는 제주의 미학' }
            ],
            pairing: '최고급 싱글 오리진 드립 커피 또는 깊은 향의 홍차와 함께 깊어가는 제주의 밤을 만끽해 보세요.'
          }
        }
      },

      kids: {
        eyebrow: 'FOR OUR LITTLE ARTISTS',
        title: 'Kids Cookie Atelier',
        desc: '아이의 상상력이 자유롭게 피어나는 시간. 동일한 기본 실루엣의 쿠키 캔버스 위에 우리 가족만의 특별한 이야기를 그려보세요.',
        specTag: '캔버스 쿠키 6ea · 세이프티 초코펜 · 데코 토핑 3종',
        navSteps: ['01 준비하기', '02 색상 선택', '03 자유 드로잉', '04 완성 & 나눔'],
        curatorTipBadge: "CURATOR'S TIP",
        steps: [
          {
            badge: 'STEP 01 / 04',
            title: '정갈한 쿠키 캔버스와 초코펜 준비',
            desc: '상자 속 6개의 정갈한 기본 쿠키를 트레이 위에 나란히 정돈합니다. 동봉된 초코펜이 부드럽게 나올 수 있도록 미온수에 살짝 담가 준비해 주세요.',
            tip: '초코펜의 앞부분을 가위로 1mm 정도만 얇게 잘라주시면 더욱 섬세하고 정교한 라인 드로잉이 가능합니다.'
          },
          {
            badge: 'STEP 02 / 04',
            title: '나만의 감각적인 색상 선택',
            desc: '화이트, 골드, 핑크, 스카이블루, 초코 등 준비된 다채로운 컬러 펜 중 오늘 우리 가족의 기분을 표현할 색상을 골라봅니다.',
            tip: '밝은 색으로 넓은 면을 먼저 채색하고, 굳은 뒤 진한 색으로 눈, 코, 장식 선을 더하면 번짐 없이 깔끔합니다.'
          },
          {
            badge: 'STEP 03 / 04',
            title: '정답이 없는 자유로운 아트 드로잉',
            desc: '정해진 틀은 없습니다. 바다의 파도, 제주의 별, 가족의 이니셜, 미소 짓는 얼굴 등 아이의 손길이 닿는 모든 선이 예술이 됩니다.',
            tip: '펜을 쿠키 표면에서 2~3mm 살짝 띄운 채 일정한 힘으로 짜주시면 매끄럽고 입체적인 라인이 완성됩니다.'
          },
          {
            badge: 'STEP 04 / 04',
            title: '토핑 장식 & 달콤한 나눔의 시간',
            desc: '반짝이는 슈가 토핑을 올리고 5분간 자연 건조합니다. 온 가족이 완성된 작품을 사진으로 남기고 함께 맛보는 특별한 순간을 즐겨보세요.',
            tip: '시원한 우유나 따뜻한 코코아와 함께 곁들이시면 더욱 부드럽고 풍부한 디저트 타임이 완성됩니다.'
          }
        ],
        brochureTag: 'FAMILY BROCHURE',
        brochureTitle: '온 가족이 함께 펼쳐보는 종이 브로슈어',
        brochureDesc: '패키지에 동봉된 리플렛을 마주하고 따뜻한 디저트 아트를 완성해 보세요.',
        allergyBtn: '식품 안전 및 보관 유의사항 안내',
        allergyLabel: '알레르기 안내',
        allergyText: '본 제품은 밀, 우유, 대두, 계란을 사용하는 제조 시설에서 안전하게 생산되었습니다. 특이 체질이나 알레르기가 있으신 고객께서는 패키지 후면의 상세 표시 라벨을 반드시 확인해 주시기 바랍니다.',
        storageLabel: '보관 방법',
        storageText: '직사광선과 고온다습한 장소를 피해 서늘한 실온에 보관하시기 바라며, 개봉 후에는 풍미 유지를 위해 가급적 빠른 시일 내에 섭취하시길 권장합니다.'
      },

      story: {
        eyebrow: 'HERITAGE & CRAFTSMANSHIP',
        title: 'The Sweetest Welcome',
        josunTitle: 'GRAND JOSUN',
        josunBody: '100년 전통의 환대 헤리티지 위에 현대적인 세련미를 더한 그랜드 조선. 머무시는 모든 공간과 찰나의 순간마다 따뜻하고 품격 있는 여정을 선사합니다.',
        vecchiaTitle: 'VECCHIA & NUOVO',
        vecchiaBody: '2005년부터 신세계푸드가 지켜온 정통 유러피언 파티세리 베키아에누보. 엄선된 최상의 재료와 장인정신으로 빚어낸 깊고 섬세한 미식의 즐거움을 전합니다.',
        eclatTitle: 'JOSUN ÉCLAT',
        eclatBody: '\'찬란한 광채\'와 \'빛나는 순간\'을 뜻하는 프랑스어 Éclat처럼, 여행의 가장 설레는 첫 장을 달콤한 빛으로 채우는 두 브랜드의 특별한 웰컴 셀렉션입니다.',
        kidsJosunTitle: 'GRAND JOSUN KIDS',
        kidsJosunBody: '아이와 부모 모두가 안락하게 누릴 수 있는 패밀리 프렌들리 환대. 객실과 키즈 라운지 전반에 걸쳐 안전하고 세심한 배려를 더합니다.',
        kidsVecchiaTitle: 'COOKIE ATELIER LAB',
        kidsVecchiaBody: '베키아에누보 파티시에가 아이들의 건강과 창의력을 고려하여 직접 구워낸 담백한 버터 쿠키와 안심 데코레이션 키트입니다.',
        kidsEclatTitle: 'KIDS ÉCLAT MOMENT',
        kidsEclatBody: '단순한 간식을 넘어 온 가족이 도란도란 모여 서로의 생각과 온기를 나누는 가장 달콤하고 빛나는 프라이빗 아틀리에 시간입니다.'
      },

      inspiration: {
        eyebrow: 'GENIUS LOCI',
        title: 'Inspired by Nature',
        busan: {
          title: '해운대의 깊은 바다와 수평선',
          subtitle: 'The Azure Horizon of Haeundae',
          text: '끝없이 펼쳐진 에메랄드빛 해운대 해변과 잔잔한 파도의 율동감에서 영감을 받았습니다. 딥 네이비의 깊은 울림과 샴페인 골드의 섬세한 반짝임이 부산에서의 특별한 휴식을 영원히 기억하게 합니다.',
          quote: '"파도가 밀려와 백사장에 남기는 고요한 흔적처럼, 여행의 가장 우아한 순간을 웰컴기프트에 담았습니다."',
          svgD: 'M 0,55 Q 40,20 80,55 T 160,55 T 240,55 T 300,55'
        },
        jeju: {
          title: '한라산의 능선과 곶자왈 원시림',
          subtitle: 'The Verdant Peak of Hallasan',
          text: '한라산의 유려한 능선과 태고의 신비를 간직한 곶자왈 숲의 깊은 녹음에서 영감을 얻었습니다. 차분한 포레스트 그린과 자연의 온기가 제주의 고요한 쉼 속으로 당신을 초대합니다.',
          quote: '"피톤치드 가득한 숲길을 걷듯, 제주의 맑고 순수한 자연을 정성껏 담아 전합니다."',
          svgD: 'M 0,70 Q 75,50 120,35 Q 150,15 180,35 Q 225,50 300,70'
        },
        kids: {
          title: '아이의 무한한 상상력과 순수한 동심',
          subtitle: 'Pure Canvas of Imagination',
          text: '정해진 형태를 강요하지 않고, 기본 쿠키 캔버스 위에 자유롭게 피어나는 아이들의 순수한 선과 다채로운 색채에서 영감을 얻었습니다. 가족이 함께 웃는 시간 자체가 예술입니다.',
          quote: '"어떠한 규칙도 없는 열린 도화지 위에, 아이의 반짝이는 호기심이 우리 가족만의 소중한 작품으로 피어납니다."',
          svgD: 'M 0,50 Q 50,15 100,50 T 200,50 Q 250,85 300,50'
        }
      },

      closing: {
        eyebrow: 'SPECIAL MEMORY FOR FAMILY',
        message: '"아이에게는 즐거움을,<br>가족에게는 특별한 추억을"',
        submessage: '조선 에끌라와 함께하는 여행의 첫 순간이<br>언제나 따뜻하고 빛나는 기억으로 남기를 바랍니다.',
        busanLoc: '부산광역시 해운대구 해운대해변로 292',
        jejuLoc: '제주특별자치도 서귀포시 중문관광로 72번길 60',
        notice: '※ 본 웹페이지는 그랜드 조선 호텔과 베키아에누보의 신규 웰컴기프트 상품 기획안 제안을 위해 제작된 하이파이 프로토타입 웹사이트입니다.'
      }
    },

    en: {
      langCode: 'EN',
      langName: 'English',
      brandSub: {
        busan: 'GRAND JOSUN BUSAN',
        jeju: 'GRAND JOSUN JEJU',
        kids: 'GRAND JOSUN KIDS'
      },
      chips: ['Dashboard', 'Intro', 'Gifts', 'Story', 'Inspiration', 'Concierge'],
      swipeHint: 'Swipe horizontally to explore gifts',

      dashboard: {
        badge: 'JOSUN ÉCLAT DIGITAL DASHBOARD',
        title: 'The Sweetest Welcome,<br><span class="title-highlight">JOSUN ÉCLAT Collections</span>',
        subtitle: 'Explore bespoke hospitality across Busan, Jeju, and Kids Cookie Atelier editions.<br class="hide-mobile">Click below to experience each curated page directly.',
        navEyebrow: 'QUICK EXPLORE',
        navTitle: 'Digital Guide Navigation',
        menus: {
          intro: { tag: 'WELCOME & HERO', title: 'Intro', desc: 'Edition mood & packaging brochure overview', action: 'Go to Page' },
          gift: { tag: 'SIGNATURE COLLECTION', title: 'Gifts', desc: 'Regional dessert lineups & kids atelier kit details', action: 'Go to Page' },
          story: { tag: 'HERITAGE & ARTISAN', title: 'Story', desc: 'Centennial hospitality & European patisserie craftsmanship', action: 'Go to Page' },
          inspiration: { tag: 'GENIUS LOCI', title: 'Inspiration', desc: 'Ocean waves, volcanic forests & pure imagination', action: 'Go to Page' },
          info: { tag: 'CONCIERGE & INFO', title: 'Concierge', desc: 'Hotel locations, concierge & guest service guides', action: 'Go to Page' }
        }
      },

      quickActions: {
        goToGift: 'View Gifts Detail →',
        backToDash: 'Back to Dashboard'
      },

      hero: {
        badge_busan: 'GRAND JOSUN BUSAN WELCOME GIFT',
        badge_jeju: 'GRAND JOSUN JEJU WELCOME GIFT',
        badge_kids: 'GRAND JOSUN KIDS ATELIER',
        titleSub_busan: 'Memories of Your Voyage,',
        titleHighlight_busan: 'The Sweet Welcome',
        titleSub_jeju: 'Embraced by Island Nature,',
        titleHighlight_jeju: 'Sweet Serenity',
        titleSub_kids: 'Cherished by the Whole Family,',
        titleHighlight_kids: 'Cookie Atelier',
        subtitle_busan: 'Where the emerald waves of Haeundae meet the sparkling skyline. Discover heartfelt hospitality crafted by Grand Josun Busan.',
        subtitle_jeju: 'Gentle breezes from Hallasan and ancient woodlands whisper tranquility. Begin your sweet journey curated exclusively for you.',
        subtitle_kids: 'A private family atelier hour where children sketch boundless dreams onto plain cookie canvases.',
        caption_busan: 'Grand Josun Busan Signature Welcome Package',
        caption_jeju: 'Grand Josun Jeju Signature Welcome Package',
        caption_kids: 'Grand Josun Kids Cookie Atelier Kit'
      },

      gifts: {
        eyebrow: 'CURATED HOSPITALITY',
        title: 'Our Signature Gift',
        desc: 'A curated selection from JOSUN ÉCLAT, artisanally tailored to the dignity of your sanctuary.',
        motifTitle: 'REGIONAL MOTIF',
        pairingLabel: 'PAIRING NOTE',
        tabs: {
          p1: 'Proposal 1 : Signature',
          p2: 'Proposal 2 : Chocolat',
          p3: 'Proposal 3 : Masterpiece'
        },
        busan: {
          p1: {
            badge: 'PROPOSAL 01 · STANDARD',
            roomTag: 'BUSAN SELECTION 01',
            titleMain: 'Haeundae Signature Butter Sablé (Prop 1)',
            titleSub: 'The Ocean Landmark Butter Sablé',
            img: './images/busan-gift-standard.png',
            desc: 'A butter sablé dessert set minimally sculpting Busan landmarks: Gwangan Bridge, guiding lighthouses, sailing boats, seagulls, and seashells.',
            motifs: [
              { name: 'Gwangan Bridge', text: 'Graceful suspension curves and seaside romance' },
              { name: 'Lighthouse & Boat', text: 'Warm beacon of Haeundae and exciting voyages' },
              { name: 'Shell & Seagull', text: 'Poetic nostalgia of waves lapping against sandy shores' }
            ],
            pairing: 'Pairs exceptionally well with the in-room signature welcome tea immediately upon check-in.'
          },
          p2: {
            badge: 'PROPOSAL 02 · SUITE EXCLUSIVE',
            roomTag: 'BUSAN SELECTION 02',
            titleMain: 'Vecchia & Nuovo Specialty Chocolat (Prop 2)',
            titleSub: 'Heritage Specialite Chocolat Collection',
            img: './images/busan-gift-suite.png',
            desc: 'An exclusive gift for suite guests featuring gold-foiled luxury rigid box packaging and 4 handcrafted chocolates.',
            motifs: [
              { name: 'Gwangan Bridge · Beacon', text: 'Marine landmark chocolate gilded with gold leaf' },
              { name: 'Seashell · Ocean Waves', text: 'Coastal aesthetics melting in rich cacao notes' },
              { name: 'Specialty Hardcase', text: 'Keepsake luxury gift packaging for cherished memories' }
            ],
            pairing: 'Forms a flawless marriage with in-room premium espresso or chilled dry champagne.'
          },
          p3: {
            badge: 'PROPOSAL 03 · MASTERPIECE',
            roomTag: 'BUSAN SELECTION 03',
            titleMain: 'Grand Josun Busan Masterpiece Gift (Prop 3)',
            titleSub: 'Grand Josun Busan Masterpiece Ocean Gift',
            img: './images/busan-gift-proposal3.png',
            desc: 'An ultimate signature welcome gift box harmonizing the deep spirit of Haeundae ocean with contemporary patisserie art.',
            motifs: [
              { name: 'Haeundae Deep Navy', text: 'Oceanic resonance illuminated by champagne gold' },
              { name: 'Artisan Patisserie', text: 'Delicate touches by Vecchia & Nuovo master chefs' },
              { name: 'Exclusive Keepsake', text: 'An extraordinary hospitality edition tailored for Busan' }
            ],
            pairing: 'Enjoy a tranquil ocean-view tea ceremony with freshly brewed specialty tea.'
          }
        },
        jeju: {
          p1: {
            badge: 'PROPOSAL 01 · NATURE',
            roomTag: 'JEJU SELECTION 01',
            titleMain: 'Halla Oreum Signature Dessert Set (Prop 1)',
            titleSub: 'The Island Nature Mold Selection',
            img: './images/jeju-gift.png',
            desc: 'Sunny Jeju mandarins, horses in meadows, palms, dol hareubang, and Mount Halla crafted into jewel-like 6-piece chocolate molds.',
            motifs: [
              { name: 'Mandarin & Hallabong', text: 'Warm island sunshine and refreshing vitality' },
              { name: 'Horse & Palm Tree', text: 'Peaceful leisure of green meadows and southern flora' },
              { name: 'Dol Hareubang & Halla', text: 'Eternal serenity sculpted by pure nature' }
            ],
            pairing: 'Delightful when paired with organic Jeju green tea or refreshing citrus blends.'
          },
          p2: {
            badge: 'PROPOSAL 02 · SANCTUARY',
            roomTag: 'JEJU SELECTION 02',
            titleMain: 'Grand Josun Jeju Masterpiece Gift (Prop 2)',
            titleSub: 'Grand Josun Jeju Masterpiece Sanctuary Gift',
            img: './images/jeju-gift-suite.png',
            desc: 'A premium gift set depicting the snowy peaks of Baengnokdam and primeval silence of Gotjawal woodland on an elegant wooden tray.',
            motifs: [
              { name: 'Baengnokdam Snowscape', text: 'Pure tranquility atop sacred volcanic heights' },
              { name: 'Gotjawal Primeval Forest', text: 'Phytoncide relaxation in deep forest green' },
              { name: 'Masterpiece Tray', text: 'Timeless island aesthetics to cherish forever' }
            ],
            pairing: 'Savor with single-origin drip coffee or aromatic black tea into the Jeju night.'
          }
        }
      },

      kids: {
        eyebrow: 'FOR OUR LITTLE ARTISTS',
        title: 'Kids Cookie Atelier',
        desc: 'Where children’s imagination blooms freely. Draw your family’s unique story upon identical cookie canvases.',
        specTag: '6 Canvas Cookies · Safety Choco Pens · 3 Topping Varieties',
        navSteps: ['01 Prepare', '02 Colors', '03 Free Draw', '04 Share'],
        curatorTipBadge: "CURATOR'S TIP",
        steps: [
          {
            badge: 'STEP 01 / 04',
            title: 'Arrange Plain Cookies & Soften Choco Pens',
            desc: 'Place 6 clean canvas cookies neatly onto the tray. Immerse chocolate pens in lukewarm water for gentle, smooth piping.',
            tip: 'Snip only 1mm of the pen tip with scissors to allow delicate, precise line drawings.'
          },
          {
            badge: 'STEP 02 / 04',
            title: 'Select Your Favorite Sensibility Colors',
            desc: 'Pick hues that express today’s mood: white, gold, pink, sky blue, or rich chocolate.',
            tip: 'Color the wider base areas first with lighter shades, then add fine outlines with darker tones once set.'
          },
          {
            badge: 'STEP 03 / 04',
            title: 'Unrestricted Free Art Drawing',
            desc: 'There are no wrong answers. Paint ocean waves, Jeju stars, initials, or smiles of your loved ones freely across the cookie.',
            tip: 'Hover the pen tip 2-3mm above the cookie surface while squeezing steadily to achieve elegant 3D chocolate lines.'
          },
          {
            badge: 'STEP 04 / 04',
            title: 'Complete & Share the Sweet Masterpiece',
            desc: 'Garnish with sparkling toppings and let rest for 5 minutes. Take a photo of your family creation and enjoy together.',
            tip: 'Pair with fresh cold milk or warm hot cocoa for an extra delightful patisserie treat.'
          }
        ],
        brochureTag: 'FAMILY BROCHURE',
        brochureTitle: 'Paper Brochure for Family Bonding',
        brochureDesc: 'Unfold the illustrated leaflet enclosed in the box and embark on a sweet art journey together.',
        allergyBtn: 'Food Safety & Storage Guidelines',
        allergyLabel: 'Allergen Notice',
        allergyText: 'Manufactured in a certified facility handling wheat, milk, soybean, and eggs. Guests with specific allergies are advised to check the detailed label on the back of the package.',
        storageLabel: 'Storage Advice',
        storageText: 'Store in a cool, dry place away from direct sunlight and humidity. Consume promptly after opening to enjoy optimal gourmet freshness.'
      },

      story: {
        eyebrow: 'HERITAGE & CRAFTSMANSHIP',
        title: 'The Sweetest Welcome',
        josunTitle: 'GRAND JOSUN',
        josunBody: 'Carrying a century of Korean luxury hospitality heritage into contemporary sophistication, Grand Josun curates warm and dignified journeys for every guest.',
        vecchiaTitle: 'VECCHIA & NUOVO',
        vecchiaBody: 'Shinsegae Food’s authentic European patisserie brand since 2005. Presenting deep culinary pleasures crafted with strictly selected ingredients and artisanal devotion.',
        eclatTitle: 'JOSUN ÉCLAT',
        eclatBody: 'Derived from the French word for "radiance" and "sparkling brilliance," Éclat illuminates the very first page of your voyage with sweet, memorable light.',
        kidsJosunTitle: 'GRAND JOSUN KIDS',
        kidsJosunBody: 'Thoughtfully crafted family hospitality ensuring comfort for both parents and children, featuring dedicated kids zones and gentle amenities.',
        kidsVecchiaTitle: 'COOKIE ATELIER LAB',
        kidsVecchiaBody: 'Hand-baked plain butter cookies and certified safety food pens prepared with utmost care by Vecchia & Nuovo master chefs.',
        kidsEclatTitle: 'KIDS ÉCLAT MOMENT',
        kidsEclatBody: 'More than just sweet treats—a private atelier hour where family conversations, imagination, and smiles shine together.'
      },

      inspiration: {
        eyebrow: 'GENIUS LOCI',
        title: 'Inspired by Nature',
        busan: {
          title: 'The Azure Horizon of Haeundae',
          subtitle: 'The Azure Horizon of Haeundae',
          text: 'Inspired by the emerald rhythm of Haeundae beach and the gentle ebb of coastal waves. Deep navy tones combined with champagne gold accents preserve your seaside rest forever.',
          quote: '"Like gentle waves leaving tranquil traces on the shore, we encapsulated the most elegant moment of travel."',
          svgD: 'M 0,55 Q 40,20 80,55 T 160,55 T 240,55 T 300,55'
        },
        jeju: {
          title: 'The Verdant Peak of Hallasan',
          subtitle: 'The Verdant Peak of Hallasan',
          text: 'Drawn from the gentle slopes of Hallasan and the verdant silence of Gotjawal ancient woodland. Calming forest greens and gold highlights welcome you to nature’s sanctuary.',
          quote: '"Like clean phytoncide whispering through ancient trees, we gift you serene rest nestled in nature’s arms."',
          svgD: 'M 0,70 Q 75,50 120,35 Q 150,15 180,35 Q 225,50 300,70'
        },
        kids: {
          title: 'Boundless Childlike Wonder',
          subtitle: 'Pure Canvas of Imagination',
          text: 'Inspired by the uninhibited brushstrokes of children blooming over plain cookie canvases. The laughter and warmth shared between parents and children become true art.',
          quote: '"Upon an open canvas with no set rules, a child’s bright wonder blossoms into a treasured family masterpiece."',
          svgD: 'M 0,50 Q 50,15 100,50 T 200,50 Q 250,85 300,50'
        }
      },

      closing: {
        eyebrow: 'SPECIAL MEMORY FOR FAMILY',
        message: '"Joy for Children,<br>Cherished Memories for Families"',
        submessage: 'May your very first moments with JOSUN ÉCLAT<br>remain as warm, radiant memories forever.',
        busanLoc: '292 Haeundaehaebyeon-ro, Haeundae-gu, Busan',
        jejuLoc: '60 Jungmungwangwang-ro 72beon-gil, Seogwipo-si, Jeju',
        notice: '※ This webpage is a high-fidelity prototype created for presenting the new welcome gift business proposal by Grand Josun Hotel and Vecchia & Nuovo.'
      }
    },

    zh: {
      langCode: 'ZH',
      langName: '中文',
      brandSub: {
        busan: 'GRAND JOSUN BUSAN',
        jeju: 'GRAND JOSUN JEJU',
        kids: 'GRAND JOSUN KIDS'
      },
      chips: ['仪表盘', '简介', '迎宾礼', '品牌故事', '自然灵感', '宾客指南'],
      swipeHint: '左右滑动浏览礼遇',

      dashboard: {
        badge: 'JOSUN ÉCLAT 尊贵数字仪表盘',
        title: '开启优雅款待之旅，<br><span class="title-highlight">JOSUN ÉCLAT 甄选系列</span>',
        subtitle: '从釜山与济州岛的自然甜点，到适合全家共创的儿童工坊，<br class="hide-mobile">点击下方菜单直接体验专属介绍页面。',
        navEyebrow: 'QUICK EXPLORE',
        navTitle: '数字指南快捷导航',
        menus: {
          intro: { tag: 'WELCOME & HERO', title: '简介', desc: '版本迎宾格调与礼盒折页总览', action: '前往页面' },
          gift: { tag: 'SIGNATURE COLLECTION', title: '迎宾礼', desc: '地域专属甜点方案与儿童工坊套件详情', action: '前往页面' },
          story: { tag: 'HERITAGE & ARTISAN', title: '品牌故事', desc: '百年款待底蕴与经典西点艺术匠心', action: '前往页面' },
          inspiration: { tag: 'GENIUS LOCI', title: '自然灵感', desc: '海云台碧波、济州秘境森林与纯真童心', action: '前往页面' },
          info: { tag: 'CONCIERGE & INFO', title: '宾客指南', desc: '酒店位置指引、礼宾服务与温馨提示', action: '前往页面' }
        }
      },

      quickActions: {
        goToGift: '查看礼遇详情 →',
        backToDash: '返回仪表盘'
      },

      hero: {
        badge_busan: '格兰德朝鲜釜山 尊贵迎宾礼遇',
        badge_jeju: '格兰德朝鲜济州 尊贵迎宾礼遇',
        badge_kids: '格兰德朝鲜儿童 创意饼干工坊',
        titleSub_busan: '珍藏旅途时光的',
        titleHighlight_busan: '甜蜜礼遇',
        titleSub_jeju: '漫步海岛自然的',
        titleHighlight_jeju: '静谧时光',
        titleSub_kids: '全家共创的温馨',
        titleHighlight_kids: '艺术工坊',
        subtitle_busan: '在碧波浩渺的海云台与繁星点点的都市相遇，品鉴格兰德朝鲜釜山为您精心准备的优雅礼遇。',
        subtitle_jeju: '汉拿山轻拂的古老微风与静谧绿意，为您的海岛疗愈之旅呈献纯粹甜蜜心意。',
        subtitle_kids: '在纯净的饼干画布上，释放孩子无限的想象力，与家人共度温馨的私享创作时光。',
        caption_busan: '格兰德朝鲜釜山 标志迎宾礼盒',
        caption_jeju: '格兰德朝鲜济州 标志迎宾礼盒',
        caption_kids: '格兰德朝鲜儿童 饼干艺术工坊套件'
      },

      gifts: {
        eyebrow: 'CURATED HOSPITALITY',
        title: 'Our Signature Gift',
        desc: '配合您下榻空间的优雅格调，JOSUN ÉCLAT以至臻匠心打造的迎宾甄选。',
        motifTitle: 'REGIONAL MOTIF',
        pairingLabel: 'PAIRING NOTE',
        tabs: {
          p1: '方案 1 : 经典标志',
          p2: '方案 2 : 尊贵巧克力',
          p3: '方案 3 : 艺术臻选'
        },
        busan: {
          p1: {
            badge: 'PROPOSAL 01 · STANDARD',
            roomTag: 'BUSAN SELECTION 01',
            titleMain: '海云台标志黄油酥饼礼盒 (方案 1)',
            titleSub: 'The Ocean Landmark Butter Sablé',
            img: './images/busan-gift-standard.png',
            desc: '以极简线条勾勒广安大桥的优美身姿、指引归航的灯塔、破浪前行的帆船、海鸥与贝壳的经典黄油酥饼。',
            motifs: [
              { name: '广安大桥', text: '跨海大桥的迷人夜色与海滨浪漫' },
              { name: '灯塔与帆船', text: '海云台港湾的温暖指引与启航' },
              { name: '贝壳与海鸥', text: '金色细沙与浪花交织的海岛诗意' }
            ],
            pairing: '办理入住后，搭配客房内的迎宾清茶细细品味，尽享浓郁纯正的黄油香气。'
          },
          p2: {
            badge: 'PROPOSAL 02 · SUITE EXCLUSIVE',
            roomTag: 'BUSAN SELECTION 02',
            titleMain: 'Vecchia & Nuovo特级巧克力礼盒 (方案 2)',
            titleSub: 'Heritage Specialite Chocolat Collection',
            img: './images/busan-gift-suite.png',
            desc: '专为套房贵宾打造的高端硬盒礼遇，采用烫金工艺包裹四款海洋地标造型的手工巧克力。',
            motifs: [
              { name: '金色地标巧克力', text: '浓郁黑巧克力雕琢的跨海大桥与灯塔' },
              { name: '贝壳与波浪', text: '在丝滑口感中融化的海滨美学' },
              { name: '奢雅精装硬盒', text: '值得珍藏的奢华迎宾礼遇' }
            ],
            pairing: '完美佐以客房内的精品浓缩咖啡或冰镇年份香槟。'
          },
          p3: {
            badge: 'PROPOSAL 03 · MASTERPIECE',
            roomTag: 'BUSAN SELECTION 03',
            titleMain: '格兰德朝鲜釜山 艺术臻选礼盒 (方案 3)',
            titleSub: 'Grand Josun Busan Masterpiece Ocean Gift',
            img: './images/busan-gift-proposal3.png',
            desc: '融汇海云台深邃海洋韵味与现代西点艺术的终极迎宾礼遇，为旅途首日留下难忘惊艳。',
            motifs: [
              { name: '深海湛蓝与香槟金', text: '蔚蓝波涛与璀璨光芒的和谐辉映' },
              { name: '西点大师手工', text: 'Vecchia & Nuovo甜点大师的细腻造诣' },
              { name: '专属限定礼盒', text: '专为釜山下榻贵宾定制的非凡款待' }
            ],
            pairing: '面朝海平线，细品新鲜萃取的特调红茶，领略海风午后。'
          }
        },
        jeju: {
          p1: {
            badge: 'PROPOSAL 01 · NATURE',
            roomTag: 'JEJU SELECTION 01',
            titleMain: '汉拿山岳标志甜点礼盒 (方案 1)',
            titleSub: 'The Island Nature Mold Selection',
            img: './images/jeju-gift.png',
            desc: '凝聚济州岛阳光柑橘、绿野骏马、南国棕榈、石头爷爷与白鹿潭圣景的6色手工巧克力。',
            motifs: [
              { name: '济州柑橘', text: '温暖阳光与自然鲜活的酸甜风味' },
              { name: '骏马与棕榈', text: '辽阔牧场与热带海岛的静谧惬意' },
              { name: '石头爷爷与汉拿山', text: '天地灵气雕琢的永恒治愈时光' }
            ],
            pairing: '搭配济州有机绿茶或柑橘特调茶，感受清雅和谐的味觉体验。'
          },
          p2: {
            badge: 'PROPOSAL 02 · SANCTUARY',
            roomTag: 'JEJU SELECTION 02',
            titleMain: '格兰德朝鲜济州 秘境臻选礼盒 (方案 2)',
            titleSub: 'Grand Josun Jeju Masterpiece Sanctuary Gift',
            img: './images/jeju-gift-suite.png',
            desc: '以白鹿潭冬日雪景与葛扎瓦原始森林静谧绿意为灵感的高级礼盒，于典雅木质托盘上呈现济州四季。',
            motifs: [
              { name: '白鹿潭雪景', text: '汉拿山巅纯洁神秘的静谧圣境' },
              { name: '葛扎瓦森林', text: '深林幽绿带来的自然负离子疗愈' },
              { name: '臻品木质托盘', text: '历久弥新的海岛奢雅美学' }
            ],
            pairing: '佐以高品质单品手冲咖啡或香浓红茶，沉浸于济州宁静夜色。'
          }
        }
      },

      kids: {
        eyebrow: 'FOR OUR LITTLE ARTISTS',
        title: 'Kids Cookie Atelier',
        desc: '释放孩子无拘无束的想象力。在专属饼干画布上，与家人一起绘制专属甜蜜故事。',
        specTag: '6枚素面饼干画布 · 安全巧克力笔 · 3种彩糖装饰',
        navSteps: ['01 准备就绪', '02 挑选色彩', '03 自由创作', '04 甜蜜分享'],
        curatorTipBadge: "CURATOR'S TIP",
        steps: [
          {
            badge: 'STEP 01 / 04',
            title: '整齐摆放饼干与软化巧克笔',
            desc: '将盒内6枚整洁的素面饼干平铺在托盘上。将配套的巧克力笔浸入温水中轻轻软化以便顺畅挤出。',
            tip: '用剪刀仅剪开笔尖约1毫米，能帮助勾勒更加精致立体的线条。'
          },
          {
            badge: 'STEP 02 / 04',
            title: '挑选今天喜爱的缤纷色彩',
            desc: '在白色、金色、粉色、天蓝和浓醇巧克力等丰富色彩中，挑选最能表达全家好心情的颜色。',
            tip: '先用浅色填满大面积底色，待凝固后再用深色勾勒眼睛和精致装饰线，画面更干净。'
          },
          {
            badge: 'STEP 03 / 04',
            title: '无拘无束的自由艺术创作',
            desc: '这里没有任何标准答案。大海浪花、济州繁星、家人姓名缩写或灿烂笑脸，皆为独一无二的杰作。',
            tip: '将笔尖保持在距离饼干表面2至3毫米的高度匀速挤压，即可画出圆润立体的线条。'
          },
          {
            badge: 'STEP 04 / 04',
            title: '点缀闪亮彩糖与全家分享',
            desc: '撒上晶莹糖珠并静置5分钟定型。与家人拍照合影留念，共度温馨品尝时光。',
            tip: '搭配一杯新鲜纯牛奶或温热可可，享受如同置身法式甜点工坊般的尊贵下午茶。'
          }
        ],
        brochureTag: 'FAMILY BROCHURE',
        brochureTitle: '全家共读的温馨纸质折页',
        brochureDesc: '展开礼盒内附带的精美插画折页，与孩子一同开启甜蜜的艺术创作之旅。',
        allergyBtn: '食品安全与保存指南',
        allergyLabel: '致敏物质提示',
        allergyText: '本产品生产线同时处理含有小麦、牛奶、大豆、鸡蛋的原料。特殊体质或过敏体质贵宾请务必确认包装背面的详细成分标示。',
        storageLabel: '保存建议',
        storageText: '请置于阴凉干燥处常温保存，避免阳光直射与潮湿高温环境。开封后请尽早食用完毕以保持最佳风味。'
      },

      story: {
        eyebrow: 'HERITAGE & CRAFTSMANSHIP',
        title: 'The Sweetest Welcome',
        josunTitle: 'GRAND JOSUN',
        josunBody: '历经百年沉淀的豪华款待底蕴与现代摩登美学相得益彰，格兰德朝鲜在每一处空间与时刻为您构筑典雅非凡旅程。',
        vecchiaTitle: 'VECCHIA & NUOVO',
        vecchiaBody: '源自2005年新世界食品的正统欧式烘焙品牌。精选至臻原料，以匠人之心呈现细腻醇厚的美食体验。',
        eclatTitle: 'JOSUN ÉCLAT',
        eclatBody: '源自法语“璀璨光芒”之意，Éclat将两大品牌的挚诚款待凝结为甜蜜光彩，照亮您旅程的启程瞬间。',
        kidsJosunTitle: 'GRAND JOSUN KIDS',
        kidsJosunBody: '为家庭宾客打造的温馨款待，在客房与儿童空间中传递贴心呵护与舒适体验。',
        kidsVecchiaTitle: 'COOKIE ATELIER LAB',
        kidsVecchiaBody: 'Vecchia & Nuovo西点大师为孩子们用心烘焙的纯正黄油饼干与安全装饰笔。',
        kidsEclatTitle: 'KIDS ÉCLAT MOMENT',
        kidsEclatBody: '不仅是一份甜点，更是全家人围坐在一起分享想象与欢笑的闪光时光。'
      },

      inspiration: {
        eyebrow: 'GENIUS LOCI',
        title: 'Inspired by Nature',
        busan: {
          title: '海云台的浩瀚海洋与水平线',
          subtitle: 'The Azure Horizon of Haeundae',
          text: '汲取自海云台蔚蓝海滩与拍岸浪花的柔和律动。深邃湛蓝的静谧与香槟金色的点点微光，让釜山的度假时光化为永恒印记。',
          quote: '“如同海浪涌向沙滩留下的安宁痕迹，我们把旅途最优雅的瞬间封存于此。”',
          svgD: 'M 0,55 Q 40,20 80,55 T 160,55 T 240,55 T 300,55'
        },
        jeju: {
          title: '汉拿山脉与葛扎瓦秘境森林',
          subtitle: 'The Verdant Peak of Hallasan',
          text: '灵感源自汉拿山起伏的柔美山脊与葛扎瓦古林浓密的新绿。静谧的深林之绿与自然暖意，邀您走入海岛的安宁怀抱。',
          quote: '“如漫步在满溢负离子的林间小径，我们呈献济州岛纯粹天然的心意。”',
          svgD: 'M 0,70 Q 75,50 120,35 Q 150,15 180,35 Q 225,50 300,70'
        },
        kids: {
          title: '孩子们无限的想象力与纯真童心',
          subtitle: 'Pure Canvas of Imagination',
          text: '不拘泥于固定框架，在纯白饼干画布上自由挥洒孩子纯真的线条与丰富色彩。家人相伴欢笑的时光即是最美艺术。',
          quote: '“在没有任何限制的画纸上，孩子闪闪发光的好奇心将绽放为全家珍贵的共同记忆。”',
          svgD: 'M 0,50 Q 50,15 100,50 T 200,50 Q 250,85 300,50'
        }
      },

      closing: {
        eyebrow: 'SPECIAL MEMORY FOR FAMILY',
        message: '“给孩子欢声笑语，<br>为家庭珍藏难忘回忆”',
        submessage: '愿与JOSUN ÉCLAT相伴的旅程最初片刻，<br>永远定格为温暖而闪光的珍贵记忆。',
        busanLoc: '釜山广域市海云台区海云台海边路292',
        jejuLoc: '济州特别自治道西归浦市中文观光路72号街60',
        notice: '※ 本网页为格兰德朝鲜酒店与Vecchia & Nuovo新迎宾礼企划案制作的高保真原型演示网站。'
      }
    },

    ja: {
      langCode: 'JA',
      langName: '日本語',
      brandSub: {
        busan: 'GRAND JOSUN BUSAN',
        jeju: 'GRAND JOSUN JEJU',
        kids: 'GRAND JOSUN KIDS'
      },
      chips: ['ダッシュボード', '紹介', 'ギフト', 'ストーリー', '着想', '案内'],
      swipeHint: '左右にスワイプしてギフトをご覧ください',

      dashboard: {
        badge: 'JOSUN ÉCLAT デジタルダッシュボード',
        title: '心温まるおもてなしの始まり、<br><span class="title-highlight">JOSUN ÉCLAT コレクション</span>',
        subtitle: '釜山・済州の自然を宿したシグネチャーデザートからご家族のアトリエまで、<br class="hide-mobile">メニューを選んで特別なご紹介ページをご体験ください。',
        navEyebrow: 'QUICK EXPLORE',
        navTitle: 'デジタルガイド ショートカット',
        menus: {
          intro: { tag: 'WELCOME & HERO', title: '紹介', desc: 'おもてなしの雰囲気とパッケージリーフレット', action: 'ページへ移動' },
          gift: { tag: 'SIGNATURE COLLECTION', title: 'ギフト', desc: '地域限定デザート案＆キッズアトリエキット詳細', action: 'ページへ移動' },
          story: { tag: 'HERITAGE & ARTISAN', title: 'ストーリー', desc: '100年の歴史を誇る伝統とお菓子の哲学', action: 'ページへ移動' },
          inspiration: { tag: 'GENIUS LOCI', title: '着想', desc: '海雲台の波、済州の森、子どもの自由な発想', action: 'ページへ移動' },
          info: { tag: 'CONCIERGE & INFO', title: '案内', desc: 'ホテル所在地、コンシェルジュ＆各種ご案内', action: 'ページへ移動' }
        }
      },

      quickActions: {
        goToGift: 'ギフト詳細を見る →',
        backToDash: 'ダッシュボードに戻る'
      },

      hero: {
        badge_busan: 'グランド朝鮮 釜山 ウェルカムギフト',
        badge_jeju: 'グランド朝鮮 済州 ウェルカムギフト',
        badge_kids: 'グランド朝鮮 キッズ クッキーアトリエ',
        titleSub_busan: '旅の瞬間を閉じ込めた',
        titleHighlight_busan: '小さなおもてなし',
        titleSub_jeju: '豊かな自然に抱かれた',
        titleHighlight_jeju: '甘いやすらぎ',
        titleSub_kids: '家族みんなで創る',
        titleHighlight_kids: 'クッキーアトリエ',
        subtitle_busan: '青く広がる海雲台の波と輝く街が出逢う場所。グランド朝鮮 釜山がご用意した洗練された時間をお愉しみください。',
        subtitle_jeju: '太古の神秘を宿す漢拿山と島の風が運ぶ休息。あなただけのために用意された甘い旅が始まります。',
        subtitle_kids: 'プレーンなクッキーキャンバスに、お子様の自由な創造性を描くご家族だけのプライベートなアトリエです。',
        caption_busan: 'グランド朝鮮 釜山 シグネチャーウェルカムパッケージ',
        caption_jeju: 'グランド朝鮮 済州 シグネチャーウェルカムパッケージ',
        caption_kids: 'グランド朝鮮 キッズ クッキーアトリエキット'
      },

      gifts: {
        eyebrow: 'CURATED HOSPITALITY',
        title: 'Our Signature Gift',
        desc: 'お過ごしいただく客室の品格に寄り添い、真心を込めて焼き上げたJOSUN ÉCLATのウェルカムセレクションです。',
        motifTitle: 'REGIONAL MOTIF',
        pairingLabel: 'PAIRING NOTE',
        tabs: {
          p1: '案 1 : シグネチャー',
          p2: '案 2 : ショコラ',
          p3: '案 3 : マスターピース'
        },
        busan: {
          p1: {
            badge: 'PROPOSAL 01 · STANDARD',
            roomTag: 'BUSAN SELECTION 01',
            titleMain: '海雲台シグネチャーサブレセット (案 1)',
            titleSub: 'The Ocean Landmark Butter Sablé',
            img: './images/busan-gift-standard.png',
            desc: '釜山のランドマークである広安大橋の優美な橋梁、海を照らす灯台、航海する船、カモメや貝殻をかたどったバターサブレセットです。',
            motifs: [
              { name: '広安大橋', text: '優美な吊り橋の夜景と海のロマン' },
              { name: '灯台と帆船', text: '海雲台の海を見守る光と旅立ち' },
              { name: '貝殻とカモメ', text: '波音が響く白い砂浜の叙情' }
            ],
            pairing: 'チェックイン後、客室のウェルカムティーとご一緒にお召し上がりいただくと、豊かなバターの風味が広がります。'
          },
          p2: {
            badge: 'PROPOSAL 02 · SUITE EXCLUSIVE',
            roomTag: 'BUSAN SELECTION 02',
            titleMain: 'Vecchia & Nuovo特製ショコラ＆ティー (案 2)',
            titleSub: 'Heritage Specialite Chocolat Collection',
            img: './images/busan-gift-suite.png',
            desc: '金箔押しの高級ハードケースに、海洋ランドマークをかたどった手作りショコラ4種を収めたスイート限定ギフトです。',
            motifs: [
              { name: '広安大橋・灯台', text: '金箔で輝く釜山の海のランドマーク' },
              { name: '貝殻と波の煌めき', text: '濃厚なカカオの口どけに溶け込む海の美学' },
              { name: '特製ハードケース', text: '旅の思い出として残しておきたいラグジュアリーボックス' }
            ],
            pairing: '客室のエスプレッソや、冷えたシャンパンとの贅沢なマリアージュをお楽しみいただけます。'
          },
          p3: {
            badge: 'PROPOSAL 03 · MASTERPIECE',
            roomTag: 'BUSAN SELECTION 03',
            titleMain: 'グランド朝鮮 釜山 マスターピース (案 3)',
            titleSub: 'Grand Josun Busan Masterpiece Ocean Gift',
            img: './images/busan-gift-proposal3.png',
            desc: '海雲台の深い海の情趣とモダンなパティスリー技術を結集した、忘れられない感動を届ける最高峰のギフトボックスです。',
            motifs: [
              { name: '海雲台ディープネイビー', text: '海の深い響きとシャンパンゴールドの煌めき' },
              { name: '熟練パティシエの手仕事', text: 'Vecchia & Nuovoの繊細なクラフトマンシップ' },
              { name: '限定ギフトボックス', text: '釜山にご滞在のお客様だけのための特別エディション' }
            ],
            pairing: '淹れたての特製ブレンドティーとともに、優雅なオーシャンビューティータイムをどうぞ。'
          }
        },
        jeju: {
          p1: {
            badge: 'PROPOSAL 01 · NATURE',
            roomTag: 'JEJU SELECTION 01',
            titleMain: '漢拿オルム シグネチャーデザート (案 1)',
            titleSub: 'The Island Nature Mold Selection',
            img: './images/jeju-gift.png',
            desc: '済州の太陽を浴びたみかん、緑野を駆ける馬、ヤシの木、トルハルバン、白鹿潭を色鮮やかな6個のショコラモールドに収めました。',
            motifs: [
              { name: 'みかん＆ハルラボン', text: '済州の温かい陽射しと爽やかな活力' },
              { name: '馬とヤシの木', text: '広大な草原と南国リゾートの穏やかな休息' },
              { name: 'トルハルバンと漢拿山', text: '大自然が育んだ永遠のやすらぎ' }
            ],
            pairing: '済州の有機栽培緑茶やシトラスティーと合わせて、調和のとれた味わいをご堪能ください。'
          },
          p2: {
            badge: 'PROPOSAL 02 · SANCTUARY',
            roomTag: 'JEJU SELECTION 02',
            titleMain: 'グランド朝鮮 済州 マスターピース (案 2)',
            titleSub: 'Grand Josun Jeju Masterpiece Sanctuary Gift',
            img: './images/jeju-gift-suite.png',
            desc: '漢拿山白鹿潭の雪景色とコッチャワルの原生林の深い緑を、端正なウッドトレイの上に表現したプレミアムギフトです。',
            motifs: [
              { name: '白鹿潭の雪景色', text: '神秘的な漢拿山山頂の静寂なる美しさ' },
              { name: 'コッチャワルの原生林', text: 'フォレストグリーンがもたらす森林浴のやすらぎ' },
              { name: '特製ウッドトレイ', text: '時を経ても色褪せない島の美学' }
            ],
            pairing: 'こだわりのハンドドリップコーヒーや香り高い紅茶とともに、更けゆく済州の夜をお過ごしください。'
          }
        }
      },

      kids: {
        eyebrow: 'FOR OUR LITTLE ARTISTS',
        title: 'Kids Cookie Atelier',
        desc: 'お子様の無限の想像力が花開くひととき。白いキャンバスクッキーの上に、家族だけの特別な物語を描いてみませんか。',
        specTag: 'キャンバスクッキー6枚 · 安全チョコペン · トッピング3種',
        navSteps: ['01 準備', '02 色選び', '03 お絵かき', '04 完成＆シェア'],
        curatorTipBadge: "CURATOR'S TIP",
        steps: [
          {
            badge: 'STEP 01 / 04',
            title: 'クッキーを並べてチョコペンを温める',
            desc: '箱の中の6枚のプレーンクッキーをトレイに並べます。付属のチョコペンをぬるま湯につけて描きやすくします。',
            tip: 'チョコペンの先端をハサミで1mmほど小さく切ると、繊細で美しいラインが描けます。'
          },
          {
            badge: 'STEP 02 / 04',
            title: 'お気に入りのカラーを選ぶ',
            desc: 'ホワイト、ゴールド、ピンク、スカイブルー、チョコの中から、今日の気分にぴったりな色を選びましょう。',
            tip: '明るい色でベースを塗り、乾いてから濃い色で目や鼻を描くときれいに仕上がります。'
          },
          {
            badge: 'STEP 03 / 04',
            title: '正解のない自由なお絵かき',
            desc: 'ルールはありません。海の波、済州の星、家族のイニシャル、笑顔など、自由な発想で描きましょう。',
            tip: 'ペン先をクッキーから2〜3mm少し浮かせて一定の力で絞ると、ふっくら立体的な線になります。'
          },
          {
            badge: 'STEP 04 / 04',
            title: 'トッピングで飾り付けて美味しくシェア',
            desc: 'キラキラのトッピングを乗せて5分ほど乾かします。出来上がった作品の写真を撮って、みんなでいただきましょう。',
            tip: '冷たいミルクや温かいココアと一緒にお召し上がりいただくと、最高のカフェタイムになります。'
          }
        ],
        brochureTag: 'FAMILY BROCHURE',
        brochureTitle: 'ご家族で広げる紙のリーフレット',
        brochureDesc: 'パッケージに同封されたリーフレットを見ながら、温かいスイーツアートをお楽しみください。',
        allergyBtn: '食品安全と保管に関するご案内',
        allergyLabel: 'アレルギー表示',
        allergyText: '本製品は小麦、乳成分、大豆、卵を使用する施設で製造されています。アレルギーをお持ちのお客様は、パッケージ背面の詳細表示を必ずご確認ください。',
        storageLabel: '保管方法',
        storageText: '直射日光、高温多湿を避けて涼しい場所で保管し、開封後は風味を保つためお早めにお召し上がりください。'
      },

      story: {
        eyebrow: 'HERITAGE & CRAFTSMANSHIP',
        title: 'The Sweetest Welcome',
        josunTitle: 'GRAND JOSUN',
        josunBody: '100年の歴史を持つ伝統的なおもてなしに現代的な洗練美を融合させたグランド朝鮮。ご滞在いただくすべての瞬間に品格ある時間をお届けします。',
        vecchiaTitle: 'VECCHIA & NUOVO',
        vecchiaBody: '2005年以来、新世界フードが守り続ける本格派ヨーロピアンパティスリー。厳選された最高の素材と職人技で深い美味しさをお届けします。',
        eclatTitle: 'JOSUN ÉCLAT',
        eclatBody: '「眩い輝き」を意味するフランス語Éclatのように、旅の始まりを甘美な光で彩る2つのブランドによる特別なウェルカムコレクションです。',
        kidsJosunTitle: 'GRAND JOSUN KIDS',
        kidsJosunBody: 'お子様にもご両親にも心地よいファミリーフレンドリーなおもてなしをお届けします。',
        kidsVecchiaTitle: 'COOKIE ATELIER LAB',
        kidsVecchiaBody: 'パティシエがお子様の健康を想い丁寧に焼き上げた安心安全のクッキーキットです。',
        kidsEclatTitle: 'KIDS ÉCLAT MOMENT',
        kidsEclatBody: '家族みんなで語り合い、笑顔を分かち合うかけがえのないプライベートアトリエのひとときです。'
      },

      inspiration: {
        eyebrow: 'GENIUS LOCI',
        title: 'Inspired by Nature',
        busan: {
          title: '海雲台の青い海と水平線',
          subtitle: 'The Azure Horizon of Haeundae',
          text: '果てしなく広がるエメラルドグリーンの砂浜と優しい波のリズムから着想を得ました。ディープネイビーの静寂とシャンパンゴールドの煌めきが、釜山での休暇を永遠の思い出にします。',
          quote: '「波が白い砂浜に残す穏やかな足跡のように、旅の最も優雅な瞬間を閉じ込めました」',
          svgD: 'M 0,55 Q 40,20 80,55 T 160,55 T 240,55 T 300,55'
        },
        jeju: {
          title: '漢拿山の稜線と太古の森コッチャワル',
          subtitle: 'The Verdant Peak of Hallasan',
          text: '漢拿山の優美な稜線と、原生林コッチャワルの深緑から着想を得ました。落ち着いたフォレストグリーンと大自然の温もりが、済州の静寂へと誘います。',
          quote: '「フィトンチッド香る森の小道を歩くように、済州の清らかな自然を心込めてお届けします」',
          svgD: 'M 0,70 Q 75,50 120,35 Q 150,15 180,35 Q 225,50 300,70'
        },
        kids: {
          title: 'お子様の無限の想像力と色彩',
          subtitle: 'Pure Canvas of Imagination',
          text: '決まった型にとらわれず、白いクッキーのキャンバスに描かれる純粋な線と豊かな色から着想を得ました。家族が笑顔で過ごす時間そのものが芸術です。',
          quote: '「正解のないキャンバスの上に、お子様の輝く想像力が家族だけのかけがえのない作品として実を結びます」',
          svgD: 'M 0,50 Q 50,15 100,50 T 200,50 Q 250,85 300,50'
        }
      },

      closing: {
        eyebrow: 'SPECIAL MEMORY FOR FAMILY',
        message: '「子どもたちには喜びを、<br>ご家族には特別な想い出を」',
        submessage: 'JOSUN ÉCLATと過ごす旅の最初のひとときが、<br>いつまでも心温まる輝かしい記憶となりますように。',
        busanLoc: '釜山広域市海雲台区海雲台海辺路292',
        jejuLoc: '済州特別自治道西帰浦市中文観光路72番ギル60',
        notice: '※ 本ウェブページは、グランド朝鮮ホテルとベッキア・エ・ヌーヴォの新規ウェルカムギフト商品企画案のための高品位プロトタイプです。'
      }
    }
  };

  /* ==========================================================================
     02. Application State
     ========================================================================== */
  const state = {
    category: 'busan',  // 'busan' | 'jeju' | 'kids' (3 Completely Independent Categories)
    proposal: 'p1',     // 'p1' | 'p2' | 'p3'
    lang: 'ko',         // 'ko' | 'en' | 'zh' | 'ja'
    slideIndex: 0,      // 0: Dashboard (Start View!), 1: Intro, 2: Gifts, 3: Story, 4: Inspiration, 5: Concierge
    totalSlides: 6,
    kidsStep: 1         // 1..4
  };

  /* ==========================================================================
     03. DOM Elements Cache
     ========================================================================== */
  const el = {
    // Body & Theme
    body: document.body,
    html: document.documentElement,

    // Header & Navigation
    brandHomeLink: document.getElementById('brandHomeLink'),
    headerHotelName: document.getElementById('headerHotelName'),
    btnBusan: document.getElementById('btnBusan'),
    btnJeju: document.getElementById('btnJeju'),
    btnKids: document.getElementById('btnKids'),

    // Lang Selector
    langSelectorWrap: document.getElementById('langSelectorWrap'),
    langTriggerBtn: document.getElementById('langTriggerBtn'),
    currentLangCode: document.getElementById('currentLangCode'),
    langOptionBtns: document.querySelectorAll('.lang-option-btn'),

    // Horizontal Slider
    presentationWrapper: document.getElementById('presentationWrapper'),
    slidesTrack: document.getElementById('slidesTrack'),
    slideItems: document.querySelectorAll('.slide-item'),
    slidePrevBtn: document.getElementById('slidePrevBtn'),
    slideNextBtn: document.getElementById('slideNextBtn'),

    // Bottom Pagination
    currentPageNum: document.getElementById('currentPageNum'),
    totalPageNum: document.getElementById('totalPageNum'),
    pageProgressFill: document.getElementById('pageProgressFill'),
    slideChipBtns: document.querySelectorAll('.slide-chip-btn'),

    // Slide 0: Dashboard Elements
    dashBadgeText: document.getElementById('dashBadgeText'),
    dashMainTitle: document.getElementById('dashMainTitle'),
    dashMainSubtitle: document.getElementById('dashMainSubtitle'),
    dashNavEyebrow: document.getElementById('dashNavEyebrow'),
    dashNavTitle: document.getElementById('dashNavTitle'),

    // 5 Dashboard Menu Cards ('소개', '기프트', '스토리', '영감', '안내')
    dashNavIntro: document.getElementById('dashNavIntro'),
    dashNavGift: document.getElementById('dashNavGift'),
    dashNavStory: document.getElementById('dashNavStory'),
    dashNavInspiration: document.getElementById('dashNavInspiration'),
    dashNavInfo: document.getElementById('dashNavInfo'),

    dashMenuTagIntro: document.getElementById('dashMenuTagIntro'),
    dashMenuTitleIntro: document.getElementById('dashMenuTitleIntro'),
    dashMenuDescIntro: document.getElementById('dashMenuDescIntro'),
    dashMenuActionIntro: document.getElementById('dashMenuActionIntro'),

    dashMenuTagGift: document.getElementById('dashMenuTagGift'),
    dashMenuTitleGift: document.getElementById('dashMenuTitleGift'),
    dashMenuDescGift: document.getElementById('dashMenuDescGift'),
    dashMenuActionGift: document.getElementById('dashMenuActionGift'),

    dashMenuTagStory: document.getElementById('dashMenuTagStory'),
    dashMenuTitleStory: document.getElementById('dashMenuTitleStory'),
    dashMenuDescStory: document.getElementById('dashMenuDescStory'),
    dashMenuActionStory: document.getElementById('dashMenuActionStory'),

    dashMenuTagInspire: document.getElementById('dashMenuTagInspire'),
    dashMenuTitleInspire: document.getElementById('dashMenuTitleInspire'),
    dashMenuDescInspire: document.getElementById('dashMenuDescInspire'),
    dashMenuActionInspire: document.getElementById('dashMenuActionInspire'),

    dashMenuTagInfo: document.getElementById('dashMenuTagInfo'),
    dashMenuTitleInfo: document.getElementById('dashMenuTitleInfo'),
    dashMenuDescInfo: document.getElementById('dashMenuDescInfo'),
    dashMenuActionInfo: document.getElementById('dashMenuActionInfo'),

    // Slide 1: Hero Elements
    heroBadgeText: document.getElementById('heroBadgeText'),
    heroTitleSub: document.getElementById('heroTitleSub'),
    heroTitleHighlight: document.getElementById('heroTitleHighlight'),
    heroSubtitle: document.getElementById('heroSubtitle'),
    heroPackagingImg: document.getElementById('heroPackagingImg'),
    heroCaptionText: document.getElementById('heroCaptionText'),
    swipeHintText: document.getElementById('swipeHintText'),
    btnGoToGiftFromHero: document.getElementById('btnGoToGiftFromHero'),
    btnBackToDashFromHero: document.getElementById('btnBackToDashFromHero'),
    txtGoToGift: document.getElementById('txtGoToGift'),
    txtBackToDash: document.getElementById('txtBackToDash'),

    // Slide 2: Gifts View Containers
    giftAdultView: document.getElementById('giftAdultView'),
    giftKidsView: document.getElementById('giftKidsView'),

    // Adult Gifts Elements
    giftEyebrow: document.getElementById('giftEyebrow'),
    giftSectionTitle: document.getElementById('giftSectionTitle'),
    giftSectionDesc: document.getElementById('giftSectionDesc'),
    proposalTabs: document.getElementById('proposalTabs'),
    giftCard: document.getElementById('giftCard'),
    giftBadge: document.getElementById('giftBadge'),
    giftImg: document.getElementById('giftImg'),
    giftRoomTag: document.getElementById('giftRoomTag'),
    giftTitleMain: document.getElementById('giftTitleMain'),
    giftTitleSub: document.getElementById('giftTitleSub'),
    giftDescription: document.getElementById('giftDescription'),
    motifBoxTitle: document.getElementById('motifBoxTitle'),
    giftMotifList: document.getElementById('giftMotifList'),
    pairingLabel: document.getElementById('pairingLabel'),
    giftPairingText: document.getElementById('giftPairingText'),

    // Kids Gifts Elements
    kidsEyebrow: document.getElementById('kidsEyebrow'),
    kidsSectionTitle: document.getElementById('kidsSectionTitle'),
    kidsSectionDesc: document.getElementById('kidsSectionDesc'),
    kidsKitSpecTag: document.getElementById('kidsKitSpecTag'),
    stepNavBtns: document.querySelectorAll('.step-nav-btn'),
    stepCard: document.getElementById('stepCard'),
    stepBadge: document.getElementById('stepBadge'),
    stepTitle: document.getElementById('stepTitle'),
    stepDesc: document.getElementById('stepDesc'),
    curatorTipBadge: document.getElementById('curatorTipBadge'),
    stepTip: document.getElementById('stepTip'),
    btnPrevStep: document.getElementById('btnPrevStep'),
    btnNextStep: document.getElementById('btnNextStep'),
    stepDots: document.querySelectorAll('#stepDots .dot'),
    brochureTag: document.getElementById('brochureTag'),
    brochureTitle: document.getElementById('brochureTitle'),
    brochureDesc: document.getElementById('brochureDesc'),
    allergyAccordionBtn: document.getElementById('allergyAccordionBtn'),
    allergyBtnText: document.getElementById('allergyBtnText'),
    allergyContent: document.getElementById('allergyContent'),
    allergyLabel: document.getElementById('allergyLabel'),
    allergyText: document.getElementById('allergyText'),
    storageLabel: document.getElementById('storageLabel'),
    storageText: document.getElementById('storageText'),

    // Story Section Elements
    storyEyebrow: document.getElementById('storyEyebrow'),
    storySectionTitle: document.getElementById('storySectionTitle'),
    storyJosunHeading: document.getElementById('storyJosunHeading'),
    storyJosunBody: document.getElementById('storyJosunBody'),
    storyVecchiaHeading: document.getElementById('storyVecchiaHeading'),
    storyVecchiaBody: document.getElementById('storyVecchiaBody'),
    storyEclatHeading: document.getElementById('storyEclatHeading'),
    storyEclatBody: document.getElementById('storyEclatBody'),

    // Inspiration Section Elements
    inspireEyebrow: document.getElementById('inspireEyebrow'),
    inspireSectionTitle: document.getElementById('inspireSectionTitle'),
    inspirationTitle: document.getElementById('inspirationTitle'),
    inspirationSubtitle: document.getElementById('inspirationSubtitle'),
    inspirationText: document.getElementById('inspirationText'),
    inspirationQuote: document.getElementById('inspirationQuote'),
    svgPath: document.getElementById('svgPath'),

    // Closing & Info Elements
    closingEyebrow: document.getElementById('closingEyebrow'),
    closingMessage: document.getElementById('closingMessage'),
    closingSubmessage: document.getElementById('closingSubmessage'),
    hotelInfoBusan: document.getElementById('hotelInfoBusan'),
    hotelInfoJeju: document.getElementById('hotelInfoJeju'),
    footerPrototypeNotice: document.getElementById('footerPrototypeNotice')
  };

  /* ==========================================================================
     04. Horizontal Presentation Slider Controller
     ========================================================================== */

  /**
   * 슬라이드 이동 (0: 대시보드, 1: 소개, 2: 기프트, 3: 스토리, 4: 영감, 5: 안내)
   * @param {number} targetIndex 0..5
   */
  function goToSlide(targetIndex) {
    if (targetIndex < 0) targetIndex = 0;
    if (targetIndex >= state.totalSlides) targetIndex = state.totalSlides - 1;

    state.slideIndex = targetIndex;

    // 슬라이드 트랙 transform 이동
    el.slidesTrack.style.transform = `translateX(-${targetIndex * 100}%)`;

    // 화살표 활성/비활성 제어
    el.slidePrevBtn.disabled = targetIndex === 0;
    el.slideNextBtn.disabled = targetIndex === state.totalSlides - 1;

    // 페이지 카운터 갱신 (01 / 06)
    el.currentPageNum.textContent = String(targetIndex + 1).padStart(2, '0');
    el.totalPageNum.textContent = String(state.totalSlides).padStart(2, '0');

    // 프로그레스 바 갱신
    const progressPercent = ((targetIndex + 1) / state.totalSlides) * 100;
    el.pageProgressFill.style.width = `${progressPercent}%`;

    // 하단 퀵 점프 칩 활성화 상태 갱신
    el.slideChipBtns.forEach((btn, idx) => {
      const isMatch = idx === targetIndex;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    // 슬라이드 내부 스크롤 리셋
    const currentSlideEl = el.slideItems[targetIndex];
    if (currentSlideEl) {
      const scrollArea = currentSlideEl.querySelector('.slide-scroll-area');
      if (scrollArea) scrollArea.scrollTop = 0;
    }
  }

  /* ==========================================================================
     05. Category Switching Logic (BUSAN / JEJU / KIDS — 3대 완전 독립)
     ========================================================================== */

  /**
   * 카테고리 전환 (부산, 제주, 키즈 완전 독립 브랜치)
   * @param {'busan'|'jeju'|'kids'} category
   * @param {boolean} jumpToSlide 슬라이드 자동 이동 여부
   * @param {number|null} targetSlideIndex 특정 슬라이드 인덱스
   */
  function setCategory(category, jumpToSlide = false, targetSlideIndex = null) {
    if (!['busan', 'jeju', 'kids'].includes(category)) category = 'busan';
    state.category = category;

    // 테마 속성 적용
    el.html.dataset.theme = category;
    el.body.dataset.theme = category;

    // 상단 헤더 중앙 스위처 버튼 상태 갱신
    el.btnBusan.classList.toggle('active', category === 'busan');
    el.btnBusan.setAttribute('aria-pressed', category === 'busan' ? 'true' : 'false');
    el.btnJeju.classList.toggle('active', category === 'jeju');
    el.btnJeju.setAttribute('aria-pressed', category === 'jeju' ? 'true' : 'false');
    el.btnKids.classList.toggle('active', category === 'kids');
    el.btnKids.setAttribute('aria-pressed', category === 'kids' ? 'true' : 'false');

    // 기프트 뷰 분기: 키즈일 때와 부산/제주일 때 완벽 분리
    if (category === 'kids') {
      el.giftAdultView.style.display = 'none';
      el.giftKidsView.style.display = 'block';
    } else {
      el.giftAdultView.style.display = 'block';
      el.giftKidsView.style.display = 'none';
      state.proposal = 'p1';
      renderProposalTabs();
      renderGiftCard();
    }

    // 전체 UI 텍스트 렌더링
    renderAllContent();

    // 슬라이드 이동 제어
    if (jumpToSlide) {
      if (targetSlideIndex !== null) {
        goToSlide(targetSlideIndex);
      } else {
        if (state.slideIndex !== 0) {
          goToSlide(state.slideIndex);
        }
      }
    }

    // URL 쿼리 파라미터 업데이트 (?location=busan|jeju|kids)
    updateUrlParams();
  }

  /* ==========================================================================
     06. Multi-Language Controller (KO, EN, ZH, JA)
     ========================================================================== */

  /**
   * 언어 전환
   * @param {'ko'|'en'|'zh'|'ja'} lang
   */
  function setLanguage(lang) {
    if (!I18N[lang]) lang = 'ko';
    state.lang = lang;
    el.html.lang = lang;

    // 헤더 현재 언어 코드 갱신
    el.currentLangCode.textContent = I18N[lang].langCode;

    // 드롭다운 버튼 활성화 갱신
    el.langOptionBtns.forEach(btn => {
      const isMatch = btn.dataset.lang === lang;
      btn.classList.toggle('active', isMatch);
    });

    // 로컬 스토리지 저장
    try {
      localStorage.setItem('josun_eclat_lang', lang);
    } catch (_) {}

    // 전체 UI 텍스트 업데이트
    renderAllContent();

    // URL 쿼리 동기화
    updateUrlParams();
  }

  /**
   * 언어 선택 드롭다운 토글
   */
  function toggleLangMenu(forceClose = false) {
    if (forceClose) {
      el.langSelectorWrap.classList.remove('open');
      el.langTriggerBtn.setAttribute('aria-expanded', 'false');
    } else {
      const isOpen = el.langSelectorWrap.classList.toggle('open');
      el.langTriggerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  }

  /* ==========================================================================
     07. Proposal Tabs & Gift Content Logic (부산 1, 2, 3 & 제주 1, 2)
     ========================================================================== */

  /**
   * 성인 기프트 시안 탭 렌더링 (부산/제주 전용)
   */
  function renderProposalTabs() {
    if (state.category === 'kids') return;

    const langData = I18N[state.lang];
    const cat = state.category;
    const proposals = cat === 'busan' ? ['p1', 'p2', 'p3'] : ['p1', 'p2'];

    el.proposalTabs.innerHTML = '';
    proposals.forEach(pKey => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `prop-tab-btn ${pKey === state.proposal ? 'active' : ''}`;
      btn.dataset.proposal = pKey;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', pKey === state.proposal ? 'true' : 'false');
      btn.textContent = langData.gifts.tabs[pKey] || pKey.toUpperCase();

      btn.addEventListener('click', () => {
        setProposal(pKey);
      });

      el.proposalTabs.appendChild(btn);
    });
  }

  /**
   * 시안 전환
   * @param {'p1'|'p2'|'p3'} propKey
   */
  function setProposal(propKey) {
    if (state.proposal === propKey) return;
    state.proposal = propKey;

    // 탭 UI 갱신
    const tabBtns = el.proposalTabs.querySelectorAll('.prop-tab-btn');
    tabBtns.forEach(btn => {
      const isMatch = btn.dataset.proposal === propKey;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    // 부드러운 페이드 전환 연출
    el.giftCard.classList.add('fade-out');
    setTimeout(() => {
      renderGiftCard();
      el.giftCard.classList.remove('fade-out');
      el.giftCard.classList.add('fade-in');
      setTimeout(() => el.giftCard.classList.remove('fade-in'), 300);
    }, 180);
  }

  /**
   * 선물 상세 카드 렌더링 (부산/제주)
   */
  function renderGiftCard() {
    if (state.category === 'kids') return;

    const langData = I18N[state.lang];
    const catGifts = langData.gifts[state.category] || langData.gifts.busan;
    const gift = catGifts[state.proposal] || catGifts.p1;

    el.giftBadge.textContent = gift.badge;
    el.giftRoomTag.textContent = gift.roomTag;
    el.giftTitleMain.textContent = gift.titleMain;
    el.giftTitleSub.textContent = gift.titleSub;
    el.giftImg.src = gift.img;
    el.giftImg.alt = gift.titleMain;
    el.giftDescription.textContent = gift.desc;
    el.giftPairingText.textContent = gift.pairing;

    // 모티브 목록 렌더링
    el.giftMotifList.innerHTML = gift.motifs
      .map(m => `<li><span class="motif-icon">◆</span> <strong>${m.name}</strong> : ${m.text}</li>`)
      .join('');
  }

  /* ==========================================================================
     08. Kids Atelier Stepper & Accordion Logic
     ========================================================================== */

  /**
   * 키즈 쿠키 스텝 이동 (1..4)
   * @param {number} stepNumber
   */
  function setKidsStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > 4) return;
    state.kidsStep = stepNumber;

    // 네비 버튼 활성화 갱신
    el.stepNavBtns.forEach(btn => {
      const s = parseInt(btn.dataset.step, 10);
      const isMatch = s === stepNumber;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    // 인디케이터 도트 갱신
    el.stepDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx + 1 === stepNumber);
    });

    // 이전/다음 화살표 비활성화 제어
    el.btnPrevStep.disabled = stepNumber === 1;
    el.btnNextStep.disabled = stepNumber === 4;

    // 스텝 콘텐츠 렌더링
    const langData = I18N[state.lang];
    const stepData = langData.kids.steps[stepNumber - 1];

    el.stepCard.style.opacity = '0';
    setTimeout(() => {
      el.stepBadge.textContent = stepData.badge;
      el.stepTitle.textContent = stepData.title;
      el.stepDesc.textContent = stepData.desc;
      el.stepTip.textContent = stepData.tip;
      el.stepCard.style.opacity = '1';
    }, 150);
  }

  /**
   * 알레르기 안내 아코디언 토글
   */
  function toggleAccordion() {
    const isExpanded = el.allergyAccordionBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      el.allergyAccordionBtn.setAttribute('aria-expanded', 'false');
      el.allergyContent.style.maxHeight = '0px';
    } else {
      el.allergyAccordionBtn.setAttribute('aria-expanded', 'true');
      el.allergyContent.style.maxHeight = el.allergyContent.scrollHeight + 'px';
    }
  }

  /* ==========================================================================
     09. Master Render Function (All Sections & Multi-Language)
     ========================================================================== */
  function renderAllContent() {
    const t = I18N[state.lang];
    const cat = state.category;

    // 1. Global Header
    el.headerHotelName.textContent = t.brandSub[cat];

    // 2. Bottom Chips & Swipe Hint
    el.swipeHintText.textContent = t.swipeHint;
    for (let i = 0; i < 6; i++) {
      const chipTxt = document.getElementById(`chipTxt${i}`);
      if (chipTxt && t.chips[i]) chipTxt.textContent = t.chips[i];
    }

    // 3. Slide 0: Dashboard Section
    if (el.dashBadgeText) el.dashBadgeText.textContent = t.dashboard.badge;
    if (el.dashMainTitle) el.dashMainTitle.innerHTML = t.dashboard.title;
    if (el.dashMainSubtitle) el.dashMainSubtitle.innerHTML = t.dashboard.subtitle;

    if (el.dashNavEyebrow) el.dashNavEyebrow.textContent = t.dashboard.navEyebrow;
    if (el.dashNavTitle) el.dashNavTitle.textContent = t.dashboard.navTitle;

    // Dashboard 5 Main Navigation Buttons
    const menus = t.dashboard.menus;
    if (el.dashMenuTagIntro) el.dashMenuTagIntro.textContent = menus.intro.tag;
    if (el.dashMenuTitleIntro) el.dashMenuTitleIntro.textContent = menus.intro.title;
    if (el.dashMenuDescIntro) el.dashMenuDescIntro.textContent = menus.intro.desc;
    if (el.dashMenuActionIntro) el.dashMenuActionIntro.textContent = menus.intro.action;

    if (el.dashMenuTagGift) el.dashMenuTagGift.textContent = menus.gift.tag;
    if (el.dashMenuTitleGift) el.dashMenuTitleGift.textContent = menus.gift.title;
    if (el.dashMenuDescGift) el.dashMenuDescGift.textContent = menus.gift.desc;
    if (el.dashMenuActionGift) el.dashMenuActionGift.textContent = menus.gift.action;

    if (el.dashMenuTagStory) el.dashMenuTagStory.textContent = menus.story.tag;
    if (el.dashMenuTitleStory) el.dashMenuTitleStory.textContent = menus.story.title;
    if (el.dashMenuDescStory) el.dashMenuDescStory.textContent = menus.story.desc;
    if (el.dashMenuActionStory) el.dashMenuActionStory.textContent = menus.story.action;

    if (el.dashMenuTagInspire) el.dashMenuTagInspire.textContent = menus.inspiration.tag;
    if (el.dashMenuTitleInspire) el.dashMenuTitleInspire.textContent = menus.inspiration.title;
    if (el.dashMenuDescInspire) el.dashMenuDescInspire.textContent = menus.inspiration.desc;
    if (el.dashMenuActionInspire) el.dashMenuActionInspire.textContent = menus.inspiration.action;

    if (el.dashMenuTagInfo) el.dashMenuTagInfo.textContent = menus.info.tag;
    if (el.dashMenuTitleInfo) el.dashMenuTitleInfo.textContent = menus.info.title;
    if (el.dashMenuDescInfo) el.dashMenuDescInfo.textContent = menus.info.desc;
    if (el.dashMenuActionInfo) el.dashMenuActionInfo.textContent = menus.info.action;

    // 4. Slide 1: Welcome & Hero
    el.heroBadgeText.textContent = t.hero[`badge_${cat}`];
    el.heroTitleSub.textContent = t.hero[`titleSub_${cat}`];
    el.heroTitleHighlight.textContent = t.hero[`titleHighlight_${cat}`];
    el.heroSubtitle.textContent = t.hero[`subtitle_${cat}`];
    el.heroCaptionText.textContent = t.hero[`caption_${cat}`];

    // Quick action buttons in Hero
    if (el.txtGoToGift) el.txtGoToGift.textContent = t.quickActions.goToGift;
    if (el.txtBackToDash) el.txtBackToDash.textContent = t.quickActions.backToDash;

    // Packaging image per category
    if (cat === 'jeju') {
      el.heroPackagingImg.src = './images/jeju-brochure.png';
    } else if (cat === 'kids') {
      el.heroPackagingImg.src = './images/kids-cookie-kit.png';
    } else {
      el.heroPackagingImg.src = './images/busan-brochure.png';
    }

    // 5. Slide 2: Gifts Section
    if (cat === 'kids') {
      el.giftAdultView.style.display = 'none';
      el.giftKidsView.style.display = 'block';

      el.kidsEyebrow.textContent = t.kids.eyebrow;
      el.kidsSectionTitle.textContent = t.kids.title;
      el.kidsSectionDesc.innerHTML = t.kids.desc;
      el.kidsKitSpecTag.innerHTML = `<span>${t.kids.specTag}</span>`;
      for (let i = 1; i <= 4; i++) {
        const navTxt = document.getElementById(`step${i}NavTxt`);
        if (navTxt) navTxt.textContent = t.kids.navSteps[i - 1];
      }
      el.curatorTipBadge.textContent = t.kids.curatorTipBadge;
      setKidsStep(state.kidsStep);

      el.brochureTag.textContent = t.kids.brochureTag;
      el.brochureTitle.textContent = t.kids.brochureTitle;
      el.brochureDesc.textContent = t.kids.brochureDesc;
      el.allergyBtnText.textContent = t.kids.allergyBtn;
      el.allergyLabel.textContent = t.kids.allergyLabel;
      el.allergyText.textContent = t.kids.allergyText;
      el.storageLabel.textContent = t.kids.storageLabel;
      el.storageText.textContent = t.kids.storageText;
    } else {
      el.giftAdultView.style.display = 'block';
      el.giftKidsView.style.display = 'none';

      el.giftEyebrow.textContent = t.gifts.eyebrow;
      el.giftSectionTitle.textContent = t.gifts.title;
      el.giftSectionDesc.textContent = t.gifts.desc;
      el.motifBoxTitle.textContent = t.gifts.motifTitle;
      el.pairingLabel.textContent = t.gifts.pairingLabel;
      renderProposalTabs();
      renderGiftCard();
    }

    // 6. Slide 3: Brand Story Section
    el.storyEyebrow.textContent = t.story.eyebrow;
    el.storySectionTitle.textContent = t.story.title;

    if (cat === 'kids') {
      el.storyJosunHeading.textContent = t.story.kidsJosunTitle || t.story.josunTitle;
      el.storyJosunBody.textContent = t.story.kidsJosunBody || t.story.josunBody;
      el.storyVecchiaHeading.textContent = t.story.kidsVecchiaTitle || t.story.vecchiaTitle;
      el.storyVecchiaBody.textContent = t.story.kidsVecchiaBody || t.story.vecchiaBody;
      el.storyEclatHeading.textContent = t.story.kidsEclatTitle || t.story.eclatTitle;
      el.storyEclatBody.textContent = t.story.kidsEclatBody || t.story.eclatBody;
    } else {
      el.storyJosunHeading.textContent = t.story.josunTitle;
      el.storyJosunBody.textContent = t.story.josunBody;
      el.storyVecchiaHeading.textContent = t.story.vecchiaTitle;
      el.storyVecchiaBody.textContent = t.story.vecchiaBody;
      el.storyEclatHeading.textContent = t.story.eclatTitle;
      el.storyEclatBody.textContent = t.story.eclatBody;
    }

    // 7. Slide 4: Inspiration Section
    el.inspireEyebrow.textContent = t.inspiration.eyebrow;
    el.inspireSectionTitle.textContent = t.inspiration.title;
    const inspireData = t.inspiration[cat] || t.inspiration.busan;
    el.inspirationTitle.textContent = inspireData.title;
    el.inspirationSubtitle.textContent = inspireData.subtitle;
    el.inspirationText.textContent = inspireData.text;
    el.inspirationQuote.textContent = inspireData.quote;
    el.svgPath.setAttribute('d', inspireData.svgD);

    // 8. Slide 5: Closing & Concierge Section
    el.closingEyebrow.textContent = t.closing.eyebrow;
    el.closingMessage.innerHTML = t.closing.message;
    el.closingSubmessage.innerHTML = t.closing.submessage;
    el.hotelInfoBusan.querySelector('span:first-of-type').textContent = t.closing.busanLoc;
    el.hotelInfoJeju.querySelector('span:first-of-type').textContent = t.closing.jejuLoc;
    el.footerPrototypeNotice.textContent = t.closing.notice;
  }

  /**
   * URL 쿼리 파라미터 업데이트 (?location=busan&lang=ko)
   */
  function updateUrlParams() {
    if (!window.history.replaceState) return;
    const params = new URLSearchParams(window.location.search);
    params.set('location', state.category);
    params.set('lang', state.lang);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', newUrl);
  }

  /**
   * URL 및 로컬 스토리지 초기 상태 복원
   */
  function initParamsFromUrl() {
    const params = new URLSearchParams(window.location.search);
    
    // Category from URL
    const locParam = params.get('location');
    if (locParam && ['busan', 'jeju', 'kids'].includes(locParam.toLowerCase())) {
      state.category = locParam.toLowerCase();
    }

    // Language from URL or localStorage
    const langParam = params.get('lang');
    if (langParam && ['ko', 'en', 'zh', 'ja'].includes(langParam.toLowerCase())) {
      state.lang = langParam.toLowerCase();
    } else {
      try {
        const savedLang = localStorage.getItem('josun_eclat_lang');
        if (savedLang && ['ko', 'en', 'zh', 'ja'].includes(savedLang)) {
          state.lang = savedLang;
        }
      } catch (_) {}
    }
  }

  /* ==========================================================================
     10. Gestures & Navigation Listeners
     ========================================================================== */

  function setupNavigationInteractions() {
    // 1. 헤더 브랜드 로고 클릭 -> 대시보드(0) 복귀
    if (el.brandHomeLink) {
      el.brandHomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(0);
      });
    }

    // 2. 슬라이드 좌우 화살표 버튼
    el.slidePrevBtn.addEventListener('click', () => goToSlide(state.slideIndex - 1));
    el.slideNextBtn.addEventListener('click', () => goToSlide(state.slideIndex + 1));

    // 3. 하단 칩 클릭 (0: 대시보드, 1: 소개, 2: 기프트, 3: 스토리, 4: 영감, 5: 안내)
    el.slideChipBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = parseInt(btn.dataset.goto, 10);
        goToSlide(target);
      });
    });

    // 4. 대시보드 메인 5대 바로가기 버튼 ('소개', '기프트', '스토리', '영감', '안내')
    if (el.dashNavIntro) el.dashNavIntro.addEventListener('click', () => goToSlide(1));
    if (el.dashNavGift) el.dashNavGift.addEventListener('click', () => goToSlide(2));
    if (el.dashNavStory) el.dashNavStory.addEventListener('click', () => goToSlide(3));
    if (el.dashNavInspiration) el.dashNavInspiration.addEventListener('click', () => goToSlide(4));
    if (el.dashNavInfo) el.dashNavInfo.addEventListener('click', () => goToSlide(5));

    // 5. 슬라이드 1(소개) 퀵 액션 버튼
    if (el.btnGoToGiftFromHero) {
      el.btnGoToGiftFromHero.addEventListener('click', () => goToSlide(2));
    }
    if (el.btnBackToDashFromHero) {
      el.btnBackToDashFromHero.addEventListener('click', () => goToSlide(0));
    }

    // 6. 상단 헤더 중앙 카테고리 스위처 버튼 이벤트 (부산 / 제주 / 키즈)
    el.btnBusan.addEventListener('click', () => setCategory('busan', false));
    el.btnJeju.addEventListener('click', () => setCategory('jeju', false));
    el.btnKids.addEventListener('click', () => setCategory('kids', false));

    // 7. 언어 드롭다운 이벤트
    el.langTriggerBtn.addEventListener('click', e => {
      e.stopPropagation();
      toggleLangMenu();
    });

    el.langOptionBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const selectedLang = btn.dataset.lang;
        setLanguage(selectedLang);
        toggleLangMenu(true);
      });
    });

    // 문서 바깥 클릭 시 드롭다운 닫기
    document.addEventListener('click', () => {
      toggleLangMenu(true);
    });

    // 8. 키보드 방향키 좌/우 지원
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        toggleLangMenu(true);
      }
      if (e.key === 'ArrowLeft') {
        goToSlide(state.slideIndex - 1);
      } else if (e.key === 'ArrowRight') {
        goToSlide(state.slideIndex + 1);
      }
    });

    // 9. 모바일 터치 스와이프
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    const swipeThreshold = 50;

    el.presentationWrapper.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    el.presentationWrapper.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handlePresentationSwipe();
    }, { passive: true });

    function handlePresentationSwipe() {
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
        if (diffX < 0) {
          goToSlide(state.slideIndex + 1);
        } else {
          goToSlide(state.slideIndex - 1);
        }
      }
    }

    // 10. 마우스 휠 가로 지원 (debounce 적용)
    let wheelCooldown = false;
    el.presentationWrapper.addEventListener('wheel', e => {
      if (Math.abs(e.deltaX) > 40 && !wheelCooldown) {
        wheelCooldown = true;
        if (e.deltaX > 0) {
          goToSlide(state.slideIndex + 1);
        } else {
          goToSlide(state.slideIndex - 1);
        }
        setTimeout(() => { wheelCooldown = false; }, 450);
      }
    }, { passive: true });

    // 11. 키즈 스텝퍼 버튼 이벤트
    el.stepNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const step = parseInt(btn.dataset.step, 10);
        setKidsStep(step);
      });
    });

    el.btnPrevStep.addEventListener('click', () => setKidsStep(state.kidsStep - 1));
    el.btnNextStep.addEventListener('click', () => setKidsStep(state.kidsStep + 1));

    // 12. 식품 안전 아코디언 이벤트
    el.allergyAccordionBtn.addEventListener('click', toggleAccordion);
  }

  /* ==========================================================================
     11. Initialize Application
     ========================================================================== */
  function init() {
    initParamsFromUrl();
    setCategory(state.category, false);
    setLanguage(state.lang);
    goToSlide(0); // 접속 시 첫 화면은 대시보드(0번 슬라이드)
    setupNavigationInteractions();
  }

  init();
});
