// این یک ویو و یا کامپوننت سمت  سایدبر است برای صفحه بندی ببینید و لذت ببر

import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CPlaceholder,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Placeholders = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              در مثال زیر، یک جزء کارت معمولی را می گیریم و با آن دوباره ایجاد می کنیم
              متغیرهایی که برای ایجاد یک &#34;کارت بارگیری&#34; اعمال شدند. اندازه و تناسب هستند
              بین این دو یکسان
            </p>
            <DocsExample href="components/placeholder">
              <div className="d-flex justify-content-around p-3">
                <CCard style={{ width: '18rem' }}>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      چند نمونه متن کوتاه برای ساختن عنوان کارت و تشکیل بخش عمده آن
                      محتوای کارت.
                    </CCardText>
                    <CButton href="#">برو به جایی</CButton>
                  </CCardBody>
                </CCard>
                <CCard style={{ width: '18rem' }}>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    width="100%"
                    height="162"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                  </CCardImage>
                  <CCardBody>
                    <CPlaceholder component={CCardTitle} animation="glow" xs={7}>
                      <CPlaceholder xs={6} />
                    </CPlaceholder>
                    <CPlaceholder component={CCardText} animation="glow">
                      <CPlaceholder xs={7} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={6} />
                      <CPlaceholder xs={8} />
                    </CPlaceholder>
                    <CPlaceholder
                      component={CButton}
                      disabled
                      href="#"
                      tabIndex={-1}
                      xs={6}
                    ></CPlaceholder>
                  </CCardBody>
                </CCard>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              ایجاد متغیرهایی با مولفه <code>&lt;CPlaceholder&gt;</code> و یک شبکه
              ستون propx (به عنوان مثال، <code>xs={6}</code>) برای تنظیم <code>عرض</code>. آنها می توانند
              متن را در یک عنصر جایگزین کنید یا به عنوان یک کلاس اصلاح کننده به یک عنصر موجود اضافه شود
              جزء.
            </p>
            <DocsExample href="components/placeholder">
              <p aria-hidden="true">
                <CPlaceholder xs={6} />
              </p>
              <CPlaceholder
                component={CButton}
                aria-hidden="true"
                disabled
                href="#"
                tabIndex={-1}
                xs={4}
              ></CPlaceholder>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong> <small> Width</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              می‌توانید <code>عرض</code> را از طریق کلاس‌های ستون شبکه، ابزارهای عرض یا
              سبک های درون خطی
            </p>
            <DocsExample href="components/placeholder#width">
              <CPlaceholder xs={6} />
              <CPlaceholder className="w-75" />
              <CPlaceholder style={{ width: '30%' }} />
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong> <small> Color</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              به طور پیش‌فرض، <code>&lt;CPlaceholder&gt;</code> از <code>currentColor</code> استفاده می‌کند. این
              را می توان با یک رنگ سفارشی یا کلاس کاربردی لغو کرد.
            </p>
            <DocsExample href="components/placeholder#color">
              <CPlaceholder xs={12} />

              <CPlaceholder color="primary" xs={12} />
              <CPlaceholder color="secondary" xs={12} />
              <CPlaceholder color="success" xs={12} />
              <CPlaceholder color="danger" xs={12} />
              <CPlaceholder color="warning" xs={12} />
              <CPlaceholder color="info" xs={12} />
              <CPlaceholder color="light" xs={12} />
              <CPlaceholder color="dark" xs={12} />
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong> <small> Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
                اندازه <code>&lt;CPlaceholder&gt;</code>ها بر اساس سبک تایپوگرافی
                عنصر والد آنها را با <code>size</code> سفارشی کنید: <code>lg</code>،{' '}
                <code>sm</code> یا <code>xs</code>.
            </p>
            <DocsExample href="components/placeholder#sizing">
              <CPlaceholder xs={12} size="lg" />
              <CPlaceholder xs={12} />
              <CPlaceholder xs={12} size="sm" />
              <CPlaceholder xs={12} size="xs" />
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong> <small> Animation</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              متغیرهای متحرک با <code>animation=&#34;glow&#34;</code> یا{' '}
              <code>animation=&#34;wave&#34;</code> برای انتقال بهتر درک چیزی
              <em>فعال</em> بارگیری می شود.
            </p>
            <DocsExample href="components/placeholder#animation">
              <CPlaceholder component="p" animation="glow">
                <CPlaceholder xs={12} />
              </CPlaceholder>

              <CPlaceholder component="p" animation="wave">
                <CPlaceholder xs={12} />
              </CPlaceholder>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Placeholders
