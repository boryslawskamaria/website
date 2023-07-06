// clients section
import envato from 'common/assets/image/saasAppCreative/logos/envato.png';
import evernote from 'common/assets/image/saasAppCreative/logos/evernote.png';
import forbes from 'common/assets/image/saasAppCreative/logos/forbes.png';
import geekwire from 'common/assets/image/saasAppCreative/logos/geekwire.png';
import slack from 'common/assets/image/saasAppCreative/logos/slack.png';
import usaToday from 'common/assets/image/saasAppCreative/logos/usa-today.png';
// how it works section
import icon1 from 'common/assets/image/saasAppCreative/icons/1.png';
import icon2 from 'common/assets/image/saasAppCreative/icons/2.png';
import icon3 from 'common/assets/image/saasAppCreative/icons/3.png';
import icon4 from 'common/assets/image/saasAppCreative/icons/4.png';
// portfolio section
import portfolio1 from 'common/assets/image/saasAppCreative/portfolio1.png';
import portfolio2 from 'common/assets/image/saasAppCreative/portfolio2.png';
// features section
import fIcon1 from 'common/assets/image/saasAppCreative/icons/feature1.png';
import fIcon2 from 'common/assets/image/saasAppCreative/icons/feature2.png';
import fIcon3 from 'common/assets/image/saasAppCreative/icons/feature3.png';
import fIcon4 from 'common/assets/image/saasAppCreative/icons/feature4.png';
import fIcon5 from 'common/assets/image/saasAppCreative/icons/feature5.png';
import fIcon6 from 'common/assets/image/saasAppCreative/icons/feature6.png';
// blog/news feed section
import post1 from 'common/assets/image/saasAppCreative/blog1.png';
import post2 from 'common/assets/image/saasAppCreative/blog2.png';
import post3 from 'common/assets/image/saasAppCreative/blog3.png';
// footer
import logo from 'common/assets/image/saasAppCreative/logo.png';

export const menu_items = [
  {
    label: 'Home',
    path: '#home',
    offset: '70',
  },
  {
    label: 'Product',
    path: '#product',
    offset: '70',
  },
  {
    label: 'Our Offer',
    path: '#our-offer',
    offset: '70',
  },
  {
    label: 'Services',
    path: '#services',
    offset: '70',
  },
  {
    label: 'About Us',
    path: '#about-us',
    offset: '70',
  },
  {
    label: 'Blog',
    path: '#blog',
    offset: '70',
  },
];

export const clients = [envato, evernote, forbes, geekwire, slack, usaToday];

export const howTos = [
  {
    id: 1,
    icon: icon1,
    title: 'Data Collection and Analysis',
    text: `We gather data from various sources, including energy consumption patterns, weather conditions, grid infrastructure, and historical energy production. `,
    // linkLabel: 'Learn More',
    // link: '#',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Machine Learning Modelling',
    text: `We employ advanced machine learning models to develop predictive algorithms.  By continuously learning and adapting, our models provide accurate forecasts and optimisation recommendations.`,
    // linkLabel: 'Learn More',
    // link: '#',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Optimization Strategies and Recommendations',
    text: `We develop customised optimisation strategies for your company, which will focus on reducing overproduction, minimising wastage, and optimising energy distribution to meet demand efficiently. `,
    // linkLabel: 'Learn More',
    // link: '#',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Implementation and Monitoring',
    text: `We work closely with energy companies to implement them into their existing infrastructure.`,
    // linkLabel: 'Learn More',
    // link: '#',
  },
];

export const portfolios = [
  {
    id: 1,
    bgColor: '#E8FFD6',
    title: 'An AI-powered Dashboard',
    description: `Our customized AI-powered dashboard provides real-time energy demand predictions. It adapts to your specific needs and evolves with your changing requirements, ensuring you're always in control and ahead of the curve. It offers a visual representation of your energy data, enabling you to make informed decisions quickly and effectively.`,
    media: portfolio1,
  },
  {
    id: 2,
    bgColor: '#F0F9FE',
    title: 'Sustainable Transition Planning',
    description: `We offer a tailored sustainable transition planning service, providing you with the tools and insights to navigate the shift from traditional, carbon-intensive energy sources to cleaner, renewable alternatives. We understand that each company's journey to sustainability is unique, and our solutions are designed to guide you every step of the way.`,
    media: portfolio2,
  },
];

export const features = [
  {
    id: 1,
    icon: fIcon1,
    title: 'Accurate Energy Demand Predictions',
    content: `Our AI solution employs sophisticated machine learning algorithms to deliver highly accurate energy demand predictions, helping you to optimise your production and minimise waste.`,
  },
  {
    id: 2,
    icon: fIcon2,
    title: 'Real-Time Monitoring',
    content: ` Through our user-friendly dashboard, you can monitor energy demand in real-time, empowering you to make swift, data-led decisions.`,
  },
  {
    id: 3,
    icon: fIcon3,
    title: 'Tailored Solutions',
    content: `We recognise that every company has its own unique requirements. That's why our AI solution is customisable to fit your specific operational needs, ensuring optimal performance.`,
  },
  {
    id: 4,
    icon: fIcon4,
    title: 'Sustainable Transition Planning',
    content: `We offer guidance on your path to sustainability. Our solution provides insights on how to strategically shift from carbon-intensive energy sources to renewable alternatives.`,
  },
  {
    id: 5,
    icon: fIcon5,
    title: 'Cost Savings',
    content: `By reducing energy overproduction and underproduction, our AI solution can significantly lower your operational costs, providing you with a clear financial advantage.`,
  },
  {
    id: 6,
    icon: fIcon6,
    title: 'Contribution to Climate Goals',
    content: `With our solution, environmental stewardship becomes an integral part of your business strategy.`,
  },
];

export const posts = [
  {
    id: 1,
    date: 'June 25, 2023',
    image: post1,
    title: 'Unraveling the Differences: Graph Neural Networks (GNNs) and Graph Convolutional Networks (GCNs)',
    excerpt: {
      label: 'Learn More',
      link: 'https://boryslawskamaria.medium.com/unraveling-the-differences-graph-neural-networks-gnns-and-graph-convolutional-networks-gcns-32b646bd3e73',
    },
  },
  {
    id: 2,
    date: 'May 26, 2023',
    image: post2,
    title: 'Transforming Energy Forecasting: Harnessing the Power of Transformers',
    excerpt: {
      label: 'Learn More',
      link: 'https://boryslawskamaria.medium.com/transforming-energy-forecasting-harnessing-the-power-of-transformers-5f082f2a7b97',
    },
  },
  {
    id: 3,
    date: 'Aug 5, 2021',
    image: post3,
    title: `Deep neural networks: How does regularisation prevent overfitting?`,
    excerpt: {
      label: 'Learn More',
      link: 'https://boryslawskamaria.medium.com/deep-neural-networks-how-does-regularisation-prevent-overfitting-91edf3b47722',
    },
  },
];
export const footer = {
  about: {
    logo: logo,
    text: `Your trusted partner in grid optimisation solutions.`,
  },
  widgets: [
    {
      id: 2,
      title: 'Our Linked-in',
      list: [
        {
          id: 1,
          title: 'Enzum/ linked in',
          link: '#',
        },
        {
          id: 2,
          title: 'Customer Support',
          link: '#',
        },
    
  
      ],
    },
    {
      id: 3,
      title: 'Our Information',
      list: [
        {
          id: 1,
          title: 'Return Policy ',
          link: '#',
        },
        {
          id: 2,
          title: 'Privacy Policy',
          link: '#',
        },
     
   
       
      ],
    },
    {
      id: 4,
      title: 'My Account',
      list: [
        {
          id: 1,
          title: 'Press inquiries',
          link: '#',
        },
        {
          id: 2,
          title: 'Social media ',
          link: '#',
        },
     
    
      ],
    },
  ],
};

export const contacts = {
  contactInfo: {
    title: 'Contact info',
    address: `71-75 Shelton Street, Covent Garden, London`,
    phone: `+447862019500`,
    email: `contact@enzum.com`,
    link: 'https://www.linkedin.com/company/enzum',
  },
};
