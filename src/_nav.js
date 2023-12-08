// در این صفحه بحث نام گذاری مسیر دهی و ایکون دهی ساید بار را داریم بسیار کاربردی و زیبا

import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'داشبورد',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'جدید',
    },
  },
  {
    component: CNavTitle,
    name: 'عمومی',
  },
  {
    component: CNavItem,
    name: 'رنگ ها',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'متن نگاری',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'کامپونت ها',
  },
  {
    component: CNavGroup,
    name: 'پایه',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'منوی کشویی',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'برد کرامب',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'کارد ها',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'کاروسل',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'کالبس',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'لیست ها',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'نوبار و تب ها',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'جامبوترون',
        to: '/base/Jumbotrons',
      },
      {
        component: CNavItem,
        name: 'صفحه بندی',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'پلیس هلدر',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'پاپ اور',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'پروگرس بار ها',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'اسپینر ها',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'جداول',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'تولتیپ ها',
        to: '/base/tooltips',
      },
      {
        component: CNavItem,
        name: 'نوبار',
        to: '/base/Navbars',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'دکمه ها',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'دکمه',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'گروه دکمه ها',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'دراپ دون ها',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'فرم ها',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'فرم کنترلر ها',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'سلکتوره',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'چکباکس-رادیوها',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'رنج ',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'اینپوت گروپ',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'لیبل شناور',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'لایه ها',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: ' تاییده ها',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'نمودار ها',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'ایکون ها',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ایکون ها',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'جدید',
        },
      },
      {
        component: CNavItem,
        name: 'پرچم ها',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'برند ها',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'نوتیف ها',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'آلارت ها',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'علاِم',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'مدال ها',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'توست ها',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'جدید',
    },
  },
  {
    component: CNavTitle,
    name: 'افزونه ها',
  },
  {
    component: CNavGroup,
    name: 'صفحات ',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ورود',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'ساخت ',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'ارور404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'ارور 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'داکیومنت پنل',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
