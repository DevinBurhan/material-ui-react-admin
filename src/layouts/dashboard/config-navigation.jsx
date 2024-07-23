import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'management',
    icon: icon('ic_analytics'),
    children: [
      {
        title: 'users',
        path: '/management/users',
        icon: icon('ic_user'),
      },
      {
        title: 'reports',
        icon: icon('ic_blog'),
        children: [
          {
            title: 'daily',
            path: '/management/reports/daily',
            icon: icon('ic_lock'),
          },
          {
            title: 'monthly',
            path: '/management/reports/monthly',
            icon: icon('ic_lock'),
          },
        ],
      },
    ],
  },
  // {
  //   title: 'user',
  //   path: '/user',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'product',
  //   path: '/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
