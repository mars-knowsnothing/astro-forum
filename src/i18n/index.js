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
        'Astronomy in China has developed at a fast rate over the last decade, with new observational instrument and facilities planned or already operational (e.g., FAST, MUST, CSST, TianQin, Taiji), and increasing funding opportunities available. The KIAA postdoc forum is a chance for early-career scientists to grow their scientific network in China, with the prospect of continuing their scientific careers or further collaborating with Chinese institutions.'
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
        'Registration Period: <需要确认注册时间>',
        ['Registration Website:', 'https://www.wjx.top/vm/h4GMA99.aspx#'],
        'Registration QR Code:<需要提供二维码>',
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
      title: '科维里天文与天体物理博士后论坛',
      content: [
        '我们很高兴宣布2024年KIAA博士后论坛将于2024年11月25日至11月27日在北京大学卡弗里天文与天体物理研究所举行。本次论坛主要面向目前在中国的博士后研究人员或有意在中国发展学术事业的博士后，但不限于此。其他早期职业阶段的科学家，无论是来自中国还是海外，也同样欢迎参加。',
        '我们欢迎来自理论和观测天文学广泛领域的贡献：从恒星与星系演化到广义相对论和宇宙学。我们的主要目标是促进参与者之间的网络和合作机会，因此论坛的相当一部分时间将专门用于开放讨论和互动交流。此外，我们还将确保每位参与者都有机会展示他们的研究。',
        '在过去十年中，中国的天文学发展迅速，新观测仪器和设施正在规划或已投入使用（例如FAST、MUST、CSST、天琴、太极），并且获得的资助机会也在增加。KIAA博士后论坛为早期职业科学家提供了在中国扩大科学网络的机会，展望未来，他们可以继续在中国发展科学事业或与中国机构进一步合作。'
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
      bannerText: ['科维里天文与天体物理博士后论坛','2024年11月25日 至 11月27日'],
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
        '论坛日期：2024 年 12 月 5 日至 12 月 10 日',
        '注册时间：2024 年 9 月 20 日至 2024 年 10 月 25 日（100名，额满即止）',
        ['注册网站：', 'https://www.wjx.cn/vm/PWcW4Z4.aspx#'],
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
        ["https://phd-forum-2024.kiaa-pku.cn/"],
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
