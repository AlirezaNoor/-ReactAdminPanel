//صفحه بیرند ها در قسمت ساید بار ایکون ها
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { brandSet } from '@coreui/icons'
import { DocsCallout } from 'src/components'

const toKebabCase = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export const getIconsView = (iconset) => {
  return Object.entries(iconset).map(([name, value]) => (
    <CCol className="mb-5" xs={6} sm={4} md={3} xl={2} key={name}>
      <CIcon icon={value} size="xxl" />
      <div>{toKebabCase(name)}</div>
    </CCol>
  ))
}

const CoreUIIcons = () => {
  return (
    <>
      <DocsCallout
        name="CoreUI Brand Icons"
        href="components/chart"
        Content="CoreUI Brand Icons. بسته CoreUI Icons با بیش از 1500 نماد در قالب های مختلف SVG، PNG و Webfonts ارائه می شود. نمادهای CoreUI نمادهایی هستند که به زیبایی برای اقدامات و موارد رایج ساخته شده اند. می توانید از آنها در محصولات دیجیتال خود برای وب یا استفاده کنید. اپلیکیشن موبایل."
      />
      <CCard className="mb-4">
        <CCardHeader>Brand Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(brandSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
