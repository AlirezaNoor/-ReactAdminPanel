// بخش الرت ها در ساید بار هستش و ظفه نمایش رو بر عهده داره
import React from 'react'
import {
  CAlert,
  CAlertHeading,
  CAlertLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Alerts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>هشدار React</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              هشدار React برای هر طول متنی آماده شده است، همچنین دارای یک دکمه بستن اختیاری است. برای استایل دهی، از یکی از ویژگی‌های رنگ{' '}
              <code>color</code> (مانند <code>primary</code>) استفاده کنید. برای بستن درون خطی، از{' '}
              <a href="https://coreui.io/react/docs/4.0/components/alert#dismissing">
                ویژگی dismissing
              </a>
              {' '}
              استفاده کنید.
            </p>
            <DocsExample href="components/alert">
              <CAlert color="primary">یک هشدار ابتدایی اصلی - بررسی کنید!</CAlert>
              <CAlert color="secondary">یک هشدار ابتدایی فرعی - بررسی کنید!</CAlert>
              <CAlert color="success">یک هشدار موفقیت آمیز - بررسی کنید!</CAlert>
              <CAlert color="danger">یک هشدار خطر - بررسی کنید!</CAlert>
              <CAlert color="warning">یک هشدار هشدار - بررسی کنید!</CAlert>
              <CAlert color="info">یک هشدار اطلاعاتی - بررسی کنید!</CAlert>
              <CAlert color="light">یک هشدار روشن - بررسی کنید!</CAlert>
              <CAlert color="dark">یک هشدار تاریک - بررسی کنید!</CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>هشدار React</strong> <small>رنگ لینک</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              از کامپوننت <code>&lt;CAlertLink&gt;</code> استفاده کنید تا به طور فوری لینک‌های با رنگ مطابق درون هر هشدار بدهید.
            </p>
            <DocsExample href="components/alert#link-color">
              <CAlert color="primary">
                یک هشدار ابتدایی اصلی با <CAlertLink href="#">یک لینک نمونه</CAlertLink>. اگر دوست دارید، کلیک کنید.
              </CAlert>
              <CAlert color="secondary">
                یک هشدار ابتدایی فرعی با <CAlertLink href="#">یک لینک نمونه</CAlertLink>. اگر دوست دارید، کلیک کنید.
              </CAlert>
              <CAlert color="success">
                یک هشدار موفقیت آمیز با <CAlertLink href="#">یک لینک نمونه</CAlertLink>. اگر دوست دارید، کلیک کنید.
              </CAlert>
              <CAlert color="danger">
                یک هشدار خطر با <CAlertLink href="#">یک لینک نمونه</CAlertLink>. اگر دوست دارید، کلیک کنید.
              </CAlert>
              <CAlert color="warning">
                یک هشدار هشدار با <CAlertLink href="#">یک لینک نمونه</CAlertLink>. اگر دوست دارید، کلیک کنید.
              </CAlert>
              <CAlert color="info">
                یک هشدار اطلاعاتی با <CAlertLink href="#">یک لینک نمونه</CAlertLink>. اگر دوست دارید، کلیک کنید.
              </CAlert>
              <CAlert color="light">
                یک هشدار روشن با <CAlertLink href="#">یک لینک نمونه</CAlertLink>. اگر دوست دارید، کلیک کنید.
              </CAlert>
              <CAlert color="dark">
                یک هشدار تاریک با <CAlertLink href="#">یک لینک نمونه</CAlertLink>. اگر دوست دارید، کلیک کنید.
              </CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>هشدار React</strong> <small>محتوای اضافی</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              هشدار همچنین می‌تواند از اجزاء و عناصر تکمیلی مانند عنوان، پاراگراف و جداکننده استفاده کند.
            </p>
            <DocsExample href="components/alert#additional-content">
              <CAlert color="success">
                <CAlertHeading tag="h4">کار خوب انجام شد!</CAlertHeading>
                <p>
                  آها، شما به‌موفقیت این پیام هشدار مهم را خواندید. این متن نمونه یکم بلندتر اجرا می‌شود تا بتوانید ببینید چگونه فاصله داخل یک هشدار با این نوع محتوا کار می‌کند.
                </p>
                <hr />
                <p className="mb-0">
                  هر زمان که نیاز دارید، مطمئن شوید از ابزارهای حاشیه استفاده کنید تا همه چیز به خوبی و ترتیب شده باشد.
                </p>
              </CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>هشدار React</strong> <small>اخراجی</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              هشدارها همچنین می‌توانند به سادگی اخراجی شوند. فقط <code>dismissible</code> را اضافه کنید.
            </p>
            <DocsExample href="components/alert#dismissing">
              <CAlert
                color="warning"
                dismissible
                onClose={() => {
                  alert('👋 خوب، سلام! ممنون از اینکه من را اخراج کردید.')
                }}
              >
                <strong>همینطور ادامه بدهید</strong> و بروید و آن اخراج را در آنجا به سمت راست کلیک کنید.
              </CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Alerts
