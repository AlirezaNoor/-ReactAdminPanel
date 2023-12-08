//بدنه چنبوترون
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CRow } from '@coreui/react'
import { DocsLink } from 'src/components'

const Jumbotrons = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          جامبوترون
          <DocsLink name="CJumbotron" />
        </CCardHeader>
        <CCardBody>
          <CContainer className="py-5" fluid>
            <h1 className="display-5 fw-bold">جامبوترون سفارشی</h1>
            <p className="col-md-8 fs-4">
              با استفاده از یک سری ابزار، می‌توانید این جامبوترون را ایجاد کنید، همانند نسخه‌های قبلی از بوت‌استرپ. نمونه‌های زیر را بررسی کنید تا ببینید چگونه می‌توانید آن را مجدداً طراحی و تنظیم کنید.
            </p>
            <CButton size="lg">دکمه نمونه</CButton>
          </CContainer>
          <CRow className="align-items-md-stretch">
            <CCol md={6}>
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>تغییر پس زمینه</h2>
                <p>
                  از ابزارهای background-color استفاده کنید و یک ابزار رنگ .text-* به آن اضافه کنید تا ظاهر جامبوترون را تغییر دهید. سپس، با تم‌های اضافی مؤلفه و غیره ترکیب و تطبیق دهید.
                </p>
                <CButton color="light" variant="outline">
                  دکمه نمونه مستندات
                </CButton>
              </div>
            </CCol>
            <CCol md={6}>
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>افزودن حاشیه</h2>
                <p>
                  یا، آن را روشن نگه دارید و یک حاشیه برای تعریف بیشتر مرزهای محتوای خود اضافه کنید. حتماً به زیر موتور نمایش اینجا نگاه کنید چون ما ترتیب و اندازه‌گیری محتوای هر دو ستون را برای ارتفاع مساوی تنظیم کرده‌ایم.
                </p>
                <CButton color="secondary" variant="outline">
                  دکمه نمونه مستندات
                </CButton>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Jumbotrons
