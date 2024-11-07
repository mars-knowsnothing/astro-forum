// src/i18n/index.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    toggleLanguage: '切换到中文版',
    tabs: {
      home: 'Home',
      //contact: 'Contact Information',
      // fees: 'Participation Fees',
      venue: 'Venue',
      schedule: 'Forum Schedule',
      registration: 'Registration',
    },
    home: {
      title: 'KIAA Reasearch Forum for Postdoctoral Scholars in Astronomy and Astrophysics',
      content: [
        'We are happy to announce the KIAA Postdoc Forum 2024, to be held in the Kavli Institute for Astronomy and Astrophysics at Peking University from November 25th to November 27th 2024. The forum is aimed at, but not restricted to, postdocs currently based in China or interested in pursuing an academic career here. Other early-career scientists are also welcome, both from China and abroad.',
        'We welcome contributions from a broad range of topics in theoretical and observational Astrophysics: from Stellar and Galaxy evolution to General Relativity and Cosmology. Our main goal is to foster networking and collaboration opportunities among participants, so a significant part of the forum will be devoted to open discussion and interaction. We will also ensure that every participant has time allotted to showcase their research.',
        'Astronomy in China has developed at a fast rate over the last decade, with new observational instrument and facilities planned or already operational (e.g., FAST, MUST, CSST, TianQin, Taiji, LHAASO), and increasing funding opportunities available. The KIAA postdoc forum is a chance for early-career scientists to grow their scientific network in China, with the prospect of continuing their scientific careers or further collaborating with Chinese institutions.'
      ],
      list_1_title: 'Scientific Organizing Committee:',
      list_1: [
        'Pablo Renard Guiral (p.renard.guiral AT gmail.com)',
        'Sunayana Maben (smaben AT nao.cas.cn)',
        'Hsu-Wen Chiang (jiangxw AT sustech.edu.cn)',
        'Huan Zhou (zhouh237 AT mail3.sysu.edu)',
        'Yun-Feng Wei (yfwei AT xmu.edu.cn)',
        'Yun Wang (wangyun AT pmo.ac.cn)'
      ],
      bannerText: [
        'KIAA Reasearch Forum for Postdoctoral Scholars in Astronomy and Astrophysics',
        'November 25 - 27 , 2024'
      ],
      list_2_title: 'Local Organizing Committee:',
      list_2: [
        'Veronica Vazquez Aceves, KIAA postdoc (veronica AT pku.edu.cn)',
        'Haonan Zheng, KIAA postdoc (hzzheng AT pku.edu.cn)',
        'Torben C. Frost, KIAA postdoc (torben.frost AT pku.edu.cn)',
        'Siqi Liu, KIAA postdoc (liusiqi_647 AT pku.edu.cn)',
        'Meng-Hua Chen, KIAA postdoc (physcmh AT pku.edu.cn)'
      ]
    },
    registration: {
      title: 'Registration',
      content: [
        'Registration for the 2024 PKU PostDocs Forum',
        ['Forum Homepage:', 'https://postdoc-forum-2024.kiaa-pku.cn'],
        'Forum Venue: KIAA-PKU Auditorium',
        'Forum Dates: November 25th to November 27th, 2024',
        'Registration Period: October 21th to November 15th, 2024',
        ['Registration Website:', 'https://www.wjx.top/vm/h4GMA99.aspx#'],
        'Registration QR Code:',
      ],
    },
    contact: {
      title: 'Contact Information',
      content: [
        'All information regarding the forum can be found on the website:',
        ['https://postdoc-forum-2024.kiaa-pku.cn/'],
        'If you have any questions, or need visa application support, please contact: ',
        // 将联系人信息作为数组
        'We are looking forward to meeting you at 2024 PKU International PhD Student Forum on the Frontiers of Modern Astronomy!',
      ],
    },
    fees: {
      title: 'Participation Fee',
      content: [],
    },
    venue: {
      title: 'Venue Information',
      content_1: 'This forum will take place at the Kavli Institute for Astronomy and Astrophysics at Peking University (KIAA-PKU), Yiheyuan Road 5, Haidian District, Beijing, China. To get further information, please pay attention to follow-up notifications. A PKU campus map showing the location of KIAA can be accessed here:',
      content_2: 'A PKU campus map showing the location of KIAA can be accessed here:',
      content_3: 'A map showing the location of PKU is here:',
      link_2: 'http://kavli.pku.edu.cn/visitor-info/maps',
      link_3: 'http://kavli.pku.edu.cn/sites/default/files/Visit_Info/images/pku_map_direction.pdf',
      hotel:'Hotels around Peking University:',
      hotel_link:'/hotels_en.pdf',
      hotel_link_text:'Download Information'
    },
    schedule: {
      subTitle: 'Preliminary Schedule:',
      schedule: [
        'Monday (November 25): Invited talks, discussion, poster session',
        'Tuesday (November 26): Invited talks, discussion, poster session',
        'Wednesday (November 27): Invited talks, discussion, poster session'
      ]
    }
    // ... 其他翻译内容
  },
  zh: {
    toggleLanguage: 'Switch to English Version',
    tabs: {
      home: '首页',
      // contact: '联系方式',
      // fees: '参会费用',
      venue: '会场',
      schedule: '论坛日程',
      registration: '注册方式',
    },
    home: {
      title: '科维理天文与天体物理博士后论坛',
      content: [
        '2024年科维理博士后论坛将于11月25日至27日，在北京大学科维理天文与天体物理研究所举行。本次论坛主要面向当前在中国或有意前来中国开展研究的博士后，同时也诚邀海内外其他青年学者参与。',
        '本次论坛将涵盖理论与观测天文学的多个领域，其议题包括恒星与星系的形成与演化、宇宙学以及广义相对论。论坛将为每位参与者提供展示自己研究的机会，并设立专门的开放讨论与交流环节，旨在促进参会者间的互动与合作。',
        '近年来，中国天文学研究取得了显著进展，有许多大科学装置已投入使用或正在规划中（如FAST、MUST、CSST、天琴、太极、LHAASO），相应的科研项目与工作岗位也在不断增加。在这一背景下，科维理博士后论坛致力为青年学者提供学术交流和职业发展的平台，同时推动学术领域的紧密互联，助力中国天文学研究的发展与影响力的提升。'
      ],
      list_1_title: '科学组织委员会：',
      list_1: [
        'Pablo Renard Guiral (p.renard.guiral AT gmail.com)',
        'Sunayana Maben (smaben AT nao.cas.cn)',
        'Hsu-Wen Chiang (jiangxw AT sustech.edu.cn)',
        'Huan Zhou (zhouh237 AT mail3.sysu.edu)',
        'Yun-Feng Wei (yfwei AT xmu.edu.cn)',
        'Yun Wang (wangyun AT pmo.ac.cn)'
      ],
      list_2_title: '地方组织委员会：',
      list_2: [
        'Veronica Vazquez Aceves, KIAA postdoc (veronica AT pku.edu.cn)',
        'Haonan Zheng, KIAA postdoc (hzzheng AT pku.edu.cn)',
        'Torben C. Frost, KIAA postdoc (torben.frost AT pku.edu.cn)',
        'Siqi Liu, KIAA postdoc (liusiqi_647 AT pku.edu.cn)',
        'Meng-Hua Chen, KIAA postdoc (physcmh AT pku.edu.cn)'
      ],
      bannerText: ['科维理天文与天体物理博士后论坛','2024年11月25日 至 11月27日'],
    },
    schedule: {
      subTitle: '初步日程',
      schedule: [
        '11月25日（星期一）：特邀报告、讨论、海报展示会',
        '11月26日（星期二）：特邀报告、讨论、海报展示会',
        '11月27日（星期三）：特邀报告、讨论、海报展示会',
      ]
    },
    registration: {
      title: '注册',
      content: [
        '<需要补充中文内容>',
        ['论坛主页：', 'https://postdoc-forum-2024.kiaa-pku.cn/'],
        '论坛地点：北京大学科维理天文与天体物理研究所报告厅',
        '论坛日期：2024 年 11 月 25 日至 11 月 27 日',
        '注册时间：2024 年 10 月 21 日至 2024 年 11 月 15 日',
        ['注册网站：', 'https://www.wjx.top/vm/h4GMA99.aspx#'],
        '注册二维码：',
      ],
    },
    fees: {
      title: '参会费用说明',
      content: [],
    },
    contact: {
      title: '联系方式',
      content: [
        '有关论坛的所有信息均可在网站上找到：',
        ["https://postdoc-forum-2024.kiaa-pku.cn/"],
        '如有任何问题，或需要签证申请支持，请联系：',
        // 将联系人信息作为数组
        [
          '孙敏老师, 电子邮箱：minsun1206@pku.edu.cn',
          '谢静老师, 电子邮箱：xiejing5166@pku.edu.cn',
        ],
        '我们期待在 2024 年北京大学现代天文学前沿国际博士生论坛与你相见！',
      ],
    },
    venue: {
      title: '会场信息',
      content_1: '本次活动将在北京大学科维理天文与天体物理研究所（KIAA-PKU）举行，地址在北京市海淀区颐和园路5号。获取更多信息，请关注后续通知。北京大学校园地图（标注了 KIAA 的位置）可在此获取：',
      content_2: '北京大学校园地图（标注了 KIAA 的位置）可在此获取：',
      content_3: '北京大学位置地图在此：',
      link_2: 'http://kavli.pku.edu.cn/visitor-info/maps',
      link_3: 'http://kavli.pku.edu.cn/sites/default/files/Visit_Info/images/pku_map_direction.pdf',
      hotel:'北京大学附近酒店信息:',
      hotel_link:'/hotels_zh.pdf',
      hotel_link_text:'下载酒店信息'
    },
    // ... 其他翻译内容
  },
};

const i18n = createI18n({
  locale: 'en', // 默认语言，可改为 'en'
  fallbackLocale: 'zh',
  messages,
});

export default i18n;
