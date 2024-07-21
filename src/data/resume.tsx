import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Sam",
  initials: "DV",
  url: "https://sam5.pro",
  location: "GD, China",
  locationLink: "https://www.google.com/maps/place/guangdong",
  description:
    "👨‍💻 7年工作经验: 5年前端开发, 3年后端开发, 包括移动端和区块链开发经验 🔗📱",
  summary:
    "熟练使用 React、Next.js和 Node,js。有移动端开发经验比如React Native 。在后端方面熟悉Java, MySQL、PostgreSQL和 GraphQL 数据库。熟练使用 Git、Docker、AWS、Jenkins和 Nginx 等工具和平台。区块链熟悉使用 Web3.js wagmiviemsonala.js 等库与以太坊区块链跟solana公链进行交互包括跟主链交互跟智能合约的交互",
  avatarUrl: "/icons/icon.svg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Blockchain",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#contact", icon: PencilLine, label: "Contact" },
  ],
  contact: {
    email: "samwuu67@gmail.com",
    tel: "+8618682062694",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sam5-hub",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sungwo_ng5",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:samwuu67@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "众智辰科技有限公司",
      href: "https://www.zhipin.com/companys/bb26f2deb77749a81XV90t27F1A~.html",
      badges: [],
      location: "广东深圳",
      title: "全栈开发工程师",
      logoUrl: "/atomic.png",
      start: "May 2022",
      end: "Jan 2024",
      description:
        "担任前端研发工程师,主要负责 Lioncash 催收系统的前端开发.落地了肯尼亚/尼日利亚/印尼的Lioncash业务,",
    },
    {
      company: "Zaful",
      badges: [],
      href: "https://www.zaful.com/",
      location: "环球易购电子商务有限公司",
      title: "全栈开发工程师",
      logoUrl: "/icons/zaful.jpg",
      start: "January 2019",
      end: "April 2022",
      description:
        "担任 JAVA & 前端研发工程师,主要负责广告投放管理后台和供应链物流系统产品的前端开发,包括 PC端、H5端和移动端开发",
    },
    {
      company: "深圳市辉煌明天科技",
      href: "http://www.btomorrow.cn/about.html",
      badges: [],
      location: "广东,深圳",
      title: "Java开发工程师",
      logoUrl: "/icons/sun.png",
      start: "January 2020",
      end: "April 2020",
      description:
        " 担任 JAVA 工程师,主要负责捕鱼达人跟游戏聊天室接口开发",
    },

  ],
  education: [
    {
      school: "东莞理工学院",
      href: "https://www.dgut.edu.cn/",
      degree: "学士学位",
      logoUrl: "/buildspace.jpg",
      start: "2011",
      end: "2016",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Online Courses",
      logoUrl: "/icons/udemy.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Coursera",
      href: "https://www.coursera.org/",
      degree: "Online Courses",
      logoUrl: "/icons/coursera.png",
      start: "2022",
      end: "2023",
    },
  ],
  projects: [

    {
      title: "Lioncash催收系统",
      href: "https://lioncash.ng/",
      dates: "Jan 2024 - Feb 2022",
      active: true,
      description:
        "该系统结合了实时通信、音视频通话、文档处理、第三方支付集成等核心技术，旨在提供卓越的催收体验并确保数据的安全。",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://lioncash.ng/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/showcase/lioncash.png",
      video: "",
    },
    {
      title: "HidingElephant",
      href: "https://hidingelephant.com/",
      dates: "Feb 2023 - May 2024",
      active: true,
      description:
        "HidingElephant 是一个面向专业人士的 AI 驱动徽标设计工具,巧妙地融合了图标和文本。它具有用于定制设计的高级 AI 模型,可以轻松将其转换为矢量格式,并促进徽标设计中的协作和创造力",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://hidingelephant.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/showcase/hiding-elephant-logo-maker.mp4",
    },
    {
      title: "Lioncash风控系统",
      href: "https://lioncash.ng/",
      dates: "Jun 2020 - May 2021",
      active: false,
      description:
        "主导了风控和催收系统的全面设计与实现。该系统对贷款风险进行精准评估，并通过实时数据分析提升催收效率，从而优化了整体贷款业务流程，提高了客户满意度",
      technologies: [
        "React",
        "JavaScript",
        "Echarts",
        "Machine Learning",
        "Big Data",
        "High Performance Databases",
        "WebRTC",
        "Live Chat",
        "Video Call",
      ],
      links: [
        {
          type: "Website",
          href: "https://lioncash.ng/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/showcase/echonote.png",
      video: "",
    },
    {
      title: "Zaful广告投放管理",
      href: "https://www.zaful.com/",
      dates: "Aug 2021 - Jan 2024",
      active: true,
      description:
        "我参与了两个核心项目：广告投放管理后台和供应链物流系统。在广告管理后台项目中，主导了前端界面的开发，实现了数据的动态可视化和实时性能监控。在供应链物流系统中，重点针对项目进行优化，提高了整体运营效率",
      technologies: [
        "Vue.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Echarts",
        "Docker",
        "Jenkins",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.zaful.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/showcase/zaful-01.mp4",
    },

   

  ],
  hobbys: [

  
    {
      title: "Lunroo",
      dates: "August, 2023",
      description: "Lunroo - 社交媒体营销的 AI 工具",
      image: "/icons/lunroo.svg",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lunroo.com/",
        },
      ]
    },

    {
      title: "Web Transpose",
      dates: "Jan, 2024",
      description: "Web Transpose 是一个 AI 网页抓取和爬虫 API 工具,可以高效地从网站提取产品名称和价格等数据。其 AI 增强的结构学习和分布式云爬行使其成为企业数据提取的理想选择。",
      image: "/icons/webtranspose.svg",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.webtranspose.com/",
        },
      ],
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    },
    {
      title: "HidingElephant",
      dates: "Jan, 2024",
      description: "HidingElephant 是一个面向专业人士的 AI 驱动徽标设计工具,巧妙地融合了图标和文本。它具有用于定制设计的高级 AI 模型,可以轻松将其转换为矢量格式,并促进徽标设计中的协作和创造力。",
      image: "/icons/app-logo-transparent.svg",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hidingelephant.com/",
        },
      ],
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    },
    {
      title: "LOGO Theme AI",
      dates: "Jan, 2024",
      description: "Logo Theme AI 利用人工智能为各种活动和风格创建定制的标志模型,支持各种文件格式。拥有超过200个模板,用户无需设计专业知识即可轻松转换标志以满足数字品牌需求,从社交媒体到新闻通讯。",
      image: "/icons/back-to-school.png",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://logo-theme-ai.com/",
        },
      ]
    },

  ],
} as const;
