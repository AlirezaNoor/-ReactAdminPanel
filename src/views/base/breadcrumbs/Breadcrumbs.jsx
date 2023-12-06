// همانگونه که مشخص است این یک صفحه است د رکه در منوی سمت راست دیده می شود
import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Breadcrumbs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong> برادکام  ریکت می باشد</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              پیمایش براد کارم پیوندهایی را به هر صفحه قبلی که کاربر پیمایش کرده است ارائه می دهد
              از طریق و مکان فعلی را در یک وب سایت یا یک برنامه نشان می دهد. شما ندارید
              برای اضافه کردن جداکننده ها، زیرا به طور خودکار از طریق CSS اضافه می شوند{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
                {' '}
                <code>::قبل</code>
              </a>{' '}
              and{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
                {' '}
                <code>محتوا</code>
              </a>
              .
            </p>
            <DocsExample href="components/breadcrumb">
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">خانه</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>کتابخانه</CBreadcrumbItem>
              </CBreadcrumb>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">خانه</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">کتابخانه </CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>دیتا</CBreadcrumbItem>
              </CBreadcrumb>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">خانه </CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">کتابخانخه ها</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">دیتا</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>بوت استرپ</CBreadcrumbItem>
              </CBreadcrumb>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
