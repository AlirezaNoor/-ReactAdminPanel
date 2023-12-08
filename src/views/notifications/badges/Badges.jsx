// بخش بدیخ ها در ساید بار هستش و ظفه نمایش رو بر عهده داره

import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CBadge, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const Badges = () => {
  return (
    <CRow>
      <CCol lg={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>بج‌ها در React</strong> <small>اخراجی</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              بج‌های Bootstrap برای سازگار شدن با اندازه عنصر والد از اندازه‌گیری نسبی قلم و واحدهای <code>em</code> استفاده می‌کنند.
            </p>
            <DocsExample href="components/badge">
              <h1>
                سرفصل نمونه <CBadge color="secondary">جدید</CBadge>
              </h1>
              <h2>
                سرفصل نمونه <CBadge color="secondary">جدید</CBadge>
              </h2>
              <h3>
                سرفصل نمونه <CBadge color="secondary">جدید</CBadge>
              </h3>
              <h4>
                سرفصل نمونه <CBadge color="secondary">جدید</CBadge>
              </h4>
              <h5>
                سرفصل نمونه <CBadge color="secondary">جدید</CBadge>
              </h5>
              <h6>
                سرفصل نمونه <CBadge color="secondary">جدید</CBadge>
              </h6>
            </DocsExample>
            <p className="text-medium-emphasis small">
              بج‌ها می‌توانند به عنوان بخشی از لینک‌ها یا دکمه‌ها برای ارائه یک شمارنده استفاده شوند.
            </p>
            <DocsExample href="components/badge">
              <CButton color="primary">
                اعلان‌ها <CBadge color="secondary">4</CBadge>
              </CButton>
            </DocsExample>
            <p className="text-medium-emphasis small">
              توجه داشته باشید که بسته به نحوه استفاده از آنها، بج‌ها ممکن است برای کاربران صفحه‌خوان و فناوری‌های کمکی مرتبط با آنها پیچیده باشند.
            </p>
            <p className="text-medium-emphasis small">
              مگر اینکه سیاق واضح باشد، در نظر بگیرید که متن اضافی را با یک قطعه متن اضافی پنهان دیده ارائه دهید.
            </p>
            <DocsExample href="components/badge">
              <CButton color="primary">
                پروفایل <CBadge color="secondary">9</CBadge>
                <span className="visually-hidden">پیام‌های خوانده نشده</span>
              </CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>بج‌ها در React</strong> <small>تغییرات زمینه‌ای</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              هر یک از ویژگی‌های <code>color</code> زیر را اضافه کنید تا ظاهر بج تغییر یابد.
            </p>
            <DocsExample href="components/badge#contextual-variations">
              <CBadge color="primary">اصلی</CBadge>
              <CBadge color="success">موفقیت</CBadge>
              <CBadge color="danger">خطر</CBadge>
              <CBadge color="warning">هشدار</CBadge>
              <CBadge color="info">اطلاعات</CBadge>
              <CBadge color="light">روشن</CBadge>
              <CBadge color="dark">تاریک</CBadge>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>بج‌ها در React</strong> <small>بج‌های پیل</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              از ویژگی <code>shape=&#34;rounded-pill&#34;</code> برای گرد کردن بج‌ها استفاده کنید.
            </p>
            <DocsExample href="components/badge#pill-badges">
              <CBadge color="primary" shape="rounded-pill">
                اصلی
              </CBadge>
              <CBadge color="success" shape="rounded-pill">
                موفقیت
              </CBadge>
              <CBadge color="danger" shape="rounded-pill">
                خطر
              </CBadge>
              <CBadge color="warning" shape="rounded-pill">
                هشدار
              </CBadge>
              <CBadge color="info" shape="rounded-pill">
                اطلاعات
              </CBadge>
              <CBadge color="light" shape="rounded-pill">
                روشن
              </CBadge>
              <CBadge color="dark" shape="rounded-pill">
                تاریک
              </CBadge>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Badges
