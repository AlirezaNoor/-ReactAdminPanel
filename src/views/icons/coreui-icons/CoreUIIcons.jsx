/// صفحه  ایکون ها در قسمت ایکون ها در سمت راست جایی که ساید بار قرار دارد

import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { freeSet } from '@coreui/icons'
import { getIconsView } from '../brands/Brands.jsx'
import { DocsCallout } from 'src/components'

const CoreUIIcons = () => {
  return (
    <>
      <DocsCallout
        name="CoreUI Icons"
        href="components/chart"
        content="CoreUI Icons. بسته CoreUI Icons با بیش از 1500 آیکون در قالب های مختلف SVG، PNG و Webfonts ارائه می شود. نمادهای CoreUI نمادهایی هستند که به زیبایی برای اقدامات و موارد رایج ساخته شده اند. می توانید از آنها در محصولات دیجیتال خود برای وب یا موبایل استفاده کنید. برنامه."
      />
      <CCard className="mb-4">
        <CCardHeader>Free Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(freeSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
