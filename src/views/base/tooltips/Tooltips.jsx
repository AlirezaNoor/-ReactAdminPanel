// این صفحه توولتیپ هایت در در ساید بار هم به ان اشاره شده است
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CLink, CTooltip, CRow, CCol } from '@coreui/react'
import { DocsExample } from 'src/components'

const Tooltips = () => {
  return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>توضیحات راکت</strong> <small>مثال ابتدایی</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                بر روی پیوندهای زیر نشانه‌ها را ببینید:
              </p>
              <DocsExample href="components/tooltip">
                <p className="text-medium-emphasis">
                  لورم ایپسوم متنی است که تازه‌ترین صنعت چاپ و با کیفیت همچنان استفاده می‌شود.
                  <CTooltip content="متن نشانه">
                    <CLink> شما احتمالاً </CLink>
                  </CTooltip>
                  از آنها نشنیده‌اید. مد پنجره شسته برگردان فلان چاپ دیجیتال برای دیگر. فارم تو تیبل سیتان، مک‌سوینی'س فیکسی
                  کوینوا 8 بیت، آمریکن اپارل
                  <CTooltip content="متن نشانه">
                    <CLink> یک </CLink>
                  </CTooltip>
                  تری ریچاردسون وینیل شمبرای. با یک کارت بندی لطفاً شانتون، کارتیگانهای بان می لمو
                  تاندرکتس. توفو بایودیزل ویلیامزبورگ مارفا، فور لوکو مک‌سوینی''s پاکسازی وگان چمبری. یک هنرمند بسیار ایرانی
                  <CTooltip content="متن نشانه">
                    <CLink> هر چیز </CLink>
                  </CTooltip>
                  چیزی اغراق‌آمیز
                  در یک سنتی فارسی است. بانکسی آستین تو می‌توانی را بدهید.
                  <CTooltip content="متن نشانه">
                    <CLink> توییتر </CLink>
                  </CTooltip>
                  هندل رایگان.
                </p>
              </DocsExample>
              <p className="text-medium-emphasis small">
                بر روی دکمه‌های زیر نشانه‌ها را ببینید: بالا، راست، پایین و چپ. جهت‌ها هنگام استفاده از CoreUI در حالت RTL معکوس می‌شوند.
              </p>
              <DocsExample href="components/tooltip">
                <CTooltip
                    content="ویواموس ساجیتیس لاکوس ول آوگو لائورت روتروم فاوسیبوس."
                    placement="top"
                >
                  <CButton color="secondary">نشانه بالا</CButton>
                </CTooltip>
                <CTooltip
                    content="ویواموس ساجیتیس لاکوس ول آوگو لائورت روتروم فاوسیبوس."
                    placement="right"
                >
                  <CButton color="secondary">نشانه راست</CButton>
                </CTooltip>
                <CTooltip
                    content="ویواموس ساجیتیس لاکوس ول آوگو لائورت روتروم فاوسیبوس."
                    placement="bottom"
                >
                  <CButton color="secondary">نشانه پایین</CButton>
                </CTooltip>
                <CTooltip
                    content="ویواموس ساجیتیس لاکوس ول آوگو لائورت روتروم فاوسیبوس."
                    placement="left"
                >
                  <CButton color="secondary">نشانه چپ</CButton>
                </CTooltip>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
  )
}

export default Tooltips
