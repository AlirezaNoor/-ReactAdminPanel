/// صفحه پرچم در قسمت ایکون ها در سمت راست جایی که ساید بار قرار دارد
import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { getIconsView } from '../brands/Brands.jsx'
import { flagSet } from '@coreui/icons'
import { DocsCallout } from 'src/components'

const CoreUIIcons = () => {
  return (
    <>
      <DocsCallout
        name="CoreUI Flag Icons"
        href="components/chart"
        content="نمادهای پرچم CoreUI بسته CoreUI Icons با بیش از 1500 آیکون در قالب‌های مختلف SVG، PNG و Webfonts ارائه می‌شود. نمادهای CoreUI نمادهایی هستند که به زیبایی برای اقدامات و موارد رایج ساخته شده اند. می‌توانید از آنها در محصولات دیجیتالی خود برای وب یا اپلیکیشن موبایل استفاده کنید."
      />
      <CCard className="mb-4">
        <CCardHeader>Flag Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(flagSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
