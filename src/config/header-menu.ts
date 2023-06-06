import { tHeaderMenu } from 'src/types'

export const headerMenuConfig: tHeaderMenu = {
  headerMenu: [
    {
      id: 1,
      title: 'Home',
      href: '/',
      holderCName: 'header-submenu-holder group',
      submenuCName: 'header-submenu',
      headerSubmenu: [
        {
          id: 'home-default',
          submenuTitle: 'Home V1 – Default',
          submenuPath: '/',
        },
        {
          id: 'home-boxed',
          submenuTitle: 'Home V2 – Boxed',
          submenuPath: '/home-boxed',
        },
        {
          id: 'home-carousel',
          submenuTitle: 'Home V3 – Carousel',
          submenuPath: '/home-carousel',
        },
        {
          id: 'home-categories',
          submenuTitle: 'Home V4 – Categories',
          submenuPath: '/home-categories',
        },
        {
          id: 'home-collection',
          submenuTitle: 'Home V5 – Collection',
          submenuPath: '/home-collection',
        },
      ],
    },
    {
      id: 2,
      title: 'Products',
      href: '/products/left-sidebar',
      holderCName: 'header-megamenu-holder group',
      megamenuCName: 'header-megamenu',
      headerMegamenu: [
        {
          id: 'group-one',
          groupName: 'Group One',
          groupItems: [
            {
              id: 'product-3-columns',
              megamenuTitle: 'Product 3 Columns',
              megamenuPath: '/products/3-columns',
            },
            {
              id: 'product-4-columns',
              megamenuTitle: 'Product 4 Columns',
              megamenuPath: '/products/4-columns',
            },
            {
              id: 'product-5-columns',
              megamenuTitle: 'Product 5 Columns',
              megamenuPath: '/products/5-columns',
            },
            {
              id: 'product-6-columns',
              megamenuTitle: 'Product 6 Columns',
              megamenuPath: '/products/6-columns',
            },
            {
              id: 'product-categories',
              megamenuTitle: 'Product Categories',
              megamenuPath: '/products/categories',
            },
          ],
        },
        {
          id: 'group-two',
          groupName: 'Group Two',
          groupItems: [
            {
              id: 'product-carousel',
              megamenuTitle: 'Product Carousel',
              megamenuPath: '/products/carousel',
            },
            {
              id: 'product-left-sidebar',
              megamenuTitle: 'Product Left Sidebar',
              megamenuPath: '/products/left-sidebar',
            },
            {
              id: 'product-right-sidebar',
              megamenuTitle: 'Product Right Sidebar',
              megamenuPath: '/products/right-sidebar',
            },
          ],
        },
        {
          id: 'related-product',
          groupName: 'Related Product',
          groupItems: [
            {
              id: 'cart',
              megamenuTitle: 'Cart',
              megamenuPath: '/cart',
            },
            {
              id: 'checkout',
              megamenuTitle: 'Checkout',
              megamenuPath: '/checkout',
            },
            {
              id: 'auth',
              megamenuTitle: 'Auth',
              megamenuPath: '/auth',
            },
            {
              id: 'wishlist',
              megamenuTitle: 'Wishlist',
              megamenuPath: '/wishlist',
            },
          ],
        },
        { id: 'empty-list', groupName: '', groupItems: [] },
      ],
    },
    {
      id: 3,
      title: 'Pages',
      href: '/',
      holderCName: 'header-submenu-holder group',
      submenuCName: 'header-submenu',
      headerSubmenu: [
        {
          id: 'about',
          submenuTitle: 'About Us',
          submenuPath: '/about',
        },
        {
          id: 'contact',
          submenuTitle: 'Contact',
          submenuPath: '/contact',
        },
        {
          id: 'faq',
          submenuTitle: 'FAQ Page',
          submenuPath: '/faq',
        },
        {
          id: 'coming-soon',
          submenuTitle: 'Coming Soon',
          submenuPath: '/coming-soon',
        },
      ],
    },
    {
      id: 4,
      title: 'Blogs',
      href: '/blogs/sidebar',
      holderCName: 'header-submenu-holder group',
      submenuCName: 'header-submenu',
      headerSubmenu: [
        {
          id: 'default',
          submenuTitle: 'Blog Default',
          submenuPath: '/blogs/default',
        },
        {
          id: 'list',
          submenuTitle: 'Blog List',
          submenuPath: '/blogs/list',
        },
        {
          id: 'masonry',
          submenuTitle: 'Blog Masonry',
          submenuPath: '/blogs/masonry',
        },
        {
          id: 'sidebar',
          submenuTitle: 'Blog Sidebar',
          submenuPath: '/blogs/sidebar',
        },
      ],
    },
  ],
}

export const languageTitle = 'Language'
export const languageList = [
  { id: 'language-01', text: 'English', path: '/' },
  { id: 'language-02', text: 'French', path: '/' },
  { id: 'language-03', text: 'Arabric', path: '/' },
]
export const currencyTitle = 'Currency'
export const currencyList = [
  { id: 'currency - 01', text: 'USD - US Dollar', path: '/' },
  { id: 'currency - 02', text: 'Euro', path: '/' },
  { id: 'currency - 03', text: 'Pound', path: '/' },
]

export const contactInfoTitle = 'Contact Us'
export const contactInfo =
  '69 Halsey St, Ny 10002, New York, United States <br/> support.center@helendo.co <br/> (0091) 8547 632521'
export const socialTitle = 'Follow US On Socials'
export const socialList = [
  {
    id: 1,
    socialIcon: 'FaFacebookF',
    path: 'https://www.facebook.com/',
  },
  { id: 2, socialIcon: 'FaTwitter', path: 'https://twitter.com/' },
  { id: 3, socialIcon: 'FaTumblr', path: 'https://www.tumblr.com/' },
]

export const categoryList = [
  { id: 1, title: 'All' },
  { id: 2, title: 'Accessories' },
  { id: 3, title: 'Decoration' },
  { id: 4, title: 'Furniture' },
]

export const accountMenuConfig = [
  {
    id: 1,
    title: 'ACCOUNT OVERVIEW',
    href: '/account',
  },
  {
    id: 2,
    title: 'ORDERS',
    href: '/account/orders',
  },
  {
    id: 3,
    title: 'RETURNS',
    href: '/account/returns',
  },
  {
    id: 4,
    title: 'ADDRESSES',
    href: '/account/address',
  },
  {
    id: 5,
    title: 'REWARDS',
    href: '/account/rewards',
  },
  {
    id: 6,
    title: 'REFER A FRIEND',
    href: '/account/refer-a-friend',
  },
  {
    id: 7,
    title: 'HELP',
    href: '/account/help',
  },
  {
    id: 8,
    title: 'RESET',
    href: '/account/reset',
  },
]
