// این یک ویو و یا کامپوننت سمت  ساید برا است برای صفحه بندی ببینید و لذت ببر
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CPaginationItem,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Paginations = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              ما از بلوک بزرگی از پیوندهای متصل برای صفحه بندی خود استفاده می کنیم و از دست دادن پیوندها سخت می شود
              و به راحتی مقیاس پذیر - همه در حالی که مناطق ضربه بزرگ را فراهم می کند. صفحه بندی با لیست ساخته شده است
              عناصر HTML تا صفحه خوان ها بتوانند تعداد لینک های موجود را اعلام کنند. استفاده از a
              بسته بندی عنصر <code>&lt;nav&gt;</code> برای شناسایی آن به عنوان بخش پیمایش به
              صفحه خوان ها و سایر فناوری های کمکی.
            </p>
            <p className="text-medium-emphasis small">
                علاوه بر این، از آنجایی که صفحات احتمالاً دارای بیش از یک بخش ناوبری هستند،
                توصیه می شود یک <code>aria-label</code> توصیفی برای{' '} ارائه دهید
                <code>&lt;nav&gt;</code> تا هدف خود را منعکس کند. به عنوان مثال، اگر صفحه بندی
                جزء برای حرکت بین مجموعه ای از نتایج جستجو، یک برچسب مناسب استفاده می شود
                می تواند <code>aria-label=&#34;صفحات نتایج جستجو&#34;</code> باشد.
            </p>
            <DocsExample href="components/pagination">
              <CPagination aria-label="Page navigation example">
                <CPaginationItem>قبلی </CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>بعدی</CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong> <small>Working with icons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              آیا به دنبال استفاده از نماد یا نماد به جای متن برای برخی از پیوندهای صفحه بندی هستید؟ مطمئن باش
              برای ارائه پشتیبانی مناسب از صفحه خوان با ویژگی های <code>aria</code>.
            </p>
            <DocsExample href="components/pagination#working-with-icons">
              <CPagination aria-label="Page navigation example">
                <CPaginationItem aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong> <small>Disabled and active states</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              پیوندهای صفحه بندی برای شرایط مختلف قابل تنظیم هستند. استفاده کنید{' '}
              <code>غیرفعال</code> برای پیوندهایی که غیرقابل کلیک ظاهر می شوند و <code>.active</code> به
              صفحه فعلی را نشان می دهد.
            </p>
            <p className="text-medium-emphasis small">
                در حالی که پروپ <code>غیرفعال</code> از <code>pointer-events: هیچ</code> برای{' '} استفاده می کند
                <em>سعی کنید</em> عملکرد پیوند <code>&lt;a&gt;</code>s، آن CSS را غیرفعال کنید
                ویژگی هنوز استاندارد نشده است و ناوبری صفحه کلید را در نظر می گیرد. مانند
                به این ترتیب، ما همیشه <code>tabindex=&#34;-1&#34;</code> را روی پیوندهای غیرفعال اضافه می کنیم و استفاده می کنیم
                جاوا اسکریپت سفارشی برای غیرفعال کردن کامل عملکرد آنها.
            </p>
            <DocsExample href="components/pagination#disabled-and-active-states">
              <CPagination aria-label="Page navigation example">
                <CPaginationItem aria-label="Previous" disabled>
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem active>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              صفحه بندی بزرگتر یا کوچکتر را دوست دارید؟ <code>size=&#34;lg&#34;</code> یا{' '} را اضافه کنید
              <code>size=&#34;sm&#34;</code> برای اندازه های اضافی.
            </p>
            <DocsExample href="components/pagination#sizing">
              <CPagination size="lg" aria-label="Page navigation example">
                <CPaginationItem>قبلی</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>بعدی</CPaginationItem>
              </CPagination>
            </DocsExample>
            <DocsExample href="components/pagination#sizing">
              <CPagination size="sm" aria-label="Page navigation example">
                <CPaginationItem>قیلی</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>بعدی</CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong> <small>Alignment</small>
          </CCardHeader>
          <CCardBody>
              <p className="text-medium-emphasis small">
                  تراز اجزای صفحه بندی را با{' '} تغییر دهید
                  <a href="https://coreui.io/docs/utilities/flex/">ابزارهای flexbox</a>.
              </p>
            <DocsExample href="components/pagination#aligment">
              <CPagination className="justify-content-center" aria-label="Page navigation example">
                <CPaginationItem disabled>قبلی</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>بعدی</CPaginationItem>
              </CPagination>
            </DocsExample>
            <DocsExample href="components/pagination#aligment">
              <CPagination className="justify-content-end" aria-label="Page navigation example">
                <CPaginationItem disabled>قیلی</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>بعدی</CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Paginations
