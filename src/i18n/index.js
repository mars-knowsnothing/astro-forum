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
      title: 'Announcement of 2024 PKU International PhD Student Forum on the Frontiers of Modern Astronomy',
      content: [
        'We are happy to announce the KIAA Postdoc Forum 2024, to be held in the Kavli Institute for Astronomy and Astrophysics at Peking University from November 25th to November 27th 2024. The forum is aimed at, but not restricted to, postdocs currently based in China or interested in pursuing an academic career here. Other early-career scientists are also welcome, both from China and abroad.',
        'We welcome contributions from a broad range of topics in theoretical and observational Astrophysics: from Stellar and Galaxy evolution to General Relativity and Cosmology. Our main goal is to foster networking and collaboration opportunities among participants, so a significant part of the forum will be devoted to open discussion and interaction. We will also ensure that every participant has time allotted to showcase their research.',
        'Astronomy in China has developed at a fast rate over the last decade, with new observational instrument and facilities planned or already operational (e.g., FAST, MUST, CSST, TianQin, Taiji), and increasing funding opportunities available. The KIAA postdoc forum is a chance for early-career scientists to grow their scientific network in China, with the prospect of continuing their scientific careers or further collaborating with Chinese institutions.'
      ],
      list_1_title: 'Scientific Organizing Committee:',
      list_1: 'Pablo Renard Guiral, p.renard.guiral@gmail.com,Sunayana Maben, smaben@nao.cas.cn,Hsu-Wen Chiang, jiangxw@sustech.edu.cn,Huan Zhou, zhouh237@mail3.sysu.edu,Yun-Feng Wei, yfwei@xmu.edu.cn,Yun Wang, wangyun@pmo.ac.cn', 
      bannerText: [
        'POSTDOCS FORUM 2024',
        'November 25 - 27 , 2024'
      ],
      list_2_title: 'Local Organizing Committee:',
      list_2: 'Veronica Vazquez Aceves,Haonan Zheng,Torben C. Frost,Siqi Liu,Meng-Hua Chen'
    },
    registration: {
      title: 'Registration',
      content: [
        'Registration for the 2024 PKU PostDocs Forum',
        ['Forum Homepage:', '<需要确认域名>'],
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
        ['https://phd-forum-2024.kiaa-pku.cn/'],
        'If you have any questions, or need visa application support, please contact: ',
        // 将联系人信息作为数组
        [
          'Ms. Sun Min, Email: minsun1206@pku.edu.cn',
          'Ms. Xie Jing, Email: xiejing5166@pku.edu.cn',
        ],
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
      title: '2024 年北京大学现代天文学前沿国际博士生论坛通知',
      content: [
        '作为北京大学“学科质量年”活动之一，北京大学诚邀天文学和天体物理学专业的研究生参加将于2024年12月5日至10日在北京大学科维理天文与天体物理研究所（KIAA-PKU）举办的2024年北京大学现代天文学前沿国际博士生论坛。',
        '近年来，中国天文学发展迅速，在射电（FAST、TianMa、QTT）和光学（LAMOST、WFST、CSST）以及高能天体物理（DAMPE、HXMT、LHAASO、EP、SVOM）等领域的大批先进的地面和空间设施已经建成或正在建设中。本次论坛将涵盖射电天文学、太阳与行星、恒星与银河系、高能天体物理、星系与宇宙学等主题，重点关注相关设施取得的最新科学进展，并讨论如何有效参与其中的科学研究。论坛还将为学生提供展示和交流自己研究成果的机会。',
        '北京大学欢迎国内外的研究生参加本次论坛。所有讲座和讨论都将使用英语。本论坛由北京大学物理学院天文学系和科维理天文与天体物理研究所组织，旨在促进不同国家和地区天文学科研究生之间的学术交流，培养学生开展天文学和天体物理学前沿科学研究。',
        '欢迎各国和各地区的天文学专业研究生参加，鼓励所有学生在学习报告内容的同时展示自己的研究成果。',
        '我们期待在2024年北京大学现代天文学前沿国际博士生论坛上与您相见！'
      ],
      list_1_title: '科学组织委员会：',
      list_1: 'Gregory Herczeg（沈雷歌）, Luis C. Ho（何子山）, 江林华, 黎卓, 吴学兵 (主席), 张华伟',
      list_2_title: '地方组织委员会：',
      list_2: '刘黎黎, 刘树岩(主席), 孙敏, 谢静, 姚洁, 张硕',
      bannerText: ['2024 年北京大学现代天文学前沿国际博士生论坛'],
    },
    schedule: {
      subTitle: '初步日程',
      schedule: [
        '12月4日   报到',
        '12月5日   星系与宇宙学',
        '12月6日   高能天体物理',
        '12月7日   射电天文',
        '12月8日   恒星与银河系',
        '12月9日   太阳与行星',
        '12月10日  离会'
      ]
    },
    registration: {
      title: '注册方式',
      content: [
        '2024 年北京大学现代天文学前沿国际博士生论坛的注册将从 9 月 20 日开放至 10 月 25 日或报名名额招满为止，限额 100 名学生。参与者应注明他们是否希望进行口头报告或海报展示。被接受口头报告的同学将于 2024 年 11 月 1 日前收到通知。',
        '本次论坛不收取注册费。交通和住宿费用自理。论坛将为所有参会者提供每日午餐和晚餐。',
        ['论坛主页：', 'https://phd-forum-2024.kiaa-pku.cn/'],
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
