// بخش ساید بار است مه در سایبار در قسمت نوتیف ها قرار دارد
import React, { useRef, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CToast,
  CToastBody,
  CToastClose,
  CToastHeader,
  CToaster,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const ExampleToast = () => {
  const [toast, addToast] = useState(0);
  const toaster = useRef();

  const exampleToast = (
      <CToast title="CoreUI برای React.js">
        <CToastHeader closeButton>
          <svg
              className="rounded me-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
          >
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </svg>
          <strong className="me-auto">CoreUI برای React.js</strong>
          <small>7 دقیقه پیش</small>
        </CToastHeader>
        <CToastBody>سلام، دنیا! این یک پیام تست است.</CToastBody>
      </CToast>
  );

  return (
      <>
        <CButton onClick={() => addToast(exampleToast)}>ارسال یک پیام</CButton>
        <CToaster ref={toaster} push={toast} placement="top-end" />
      </>
  );
}


const Toasts = () => {
  return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>React Toast</strong> <small>Basic</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                اعلان‌ها همانند آنچه که نیاز دارید انعطاف‌پذیر هستند و تنها مارک‌آپ لازم دارند. حداقل، ما یک
                المان واحد برای نگهداری محتوای "ناناپذیر" شما نیاز داریم و استفاده قوی از یک دکمه ردیابی را تشویق
                می‌کنیم.
              </p>
              <DocsExample href="components/toast">
                <CToast title="CoreUI برای React.js" autohide={false} visible={true}>
                  <CToastHeader closeButton>
                    <svg
                        className="rounded me-2"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                    >
                      <rect width="100%" height="100%" fill="#007aff"></rect>
                    </svg>
                    <strong className="me-auto">CoreUI برای React.js</strong>
                    <small>7 دقیقه پیش</small>
                  </CToastHeader>
                  <CToastBody>سلام، دنیا! این یک پیام تست است.</CToastBody>
                </CToast>
              </DocsExample>
              <DocsExample href="components/toast">{ExampleToast()}</DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>React Toast</strong> <small>Translucent</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                اعلان‌ها به اندازه کافی نیمه‌شفاف هستند تا با آنچه که زیر آنهاست تطابق داشته باشند.
              </p>
              <DocsExample href="components/toast#translucent">
                <div className="bg-dark p-3">
                  <CToast title="CoreUI برای React.js" autohide={false} visible={true}>
                    <CToastHeader closeButton>
                      <svg
                          className="rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                          role="img"
                      >
                        <rect width="100%" height="100%" fill="#007aff"></rect>
                      </svg>
                      <strong className="me-auto">CoreUI برای React.js</strong>
                      <small>7 دقیقه پیش</small>
                    </CToastHeader>
                    <CToastBody>سلام، دنیا! این یک پیام تست است.</CToastBody>
                  </CToast>
                </div>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>React Toast</strong> <small>Stacking</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                شما می‌توانید اعلان‌ها را با قرار دادن آنها در یک ظرف اعلان پشت سر هم کنید که به طور عمودی یک
                فاصله اضافه خواهد کرد.
              </p>
              <DocsExample href="components/toast#stacking">
                <CToaster>
                  <CToast title="CoreUI برای React.js" autohide={false} visible={true}>
                    <CToastHeader closeButton>
                      <svg
                          className="rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                          role="img"
                      >
                        <rect width="100%" height="100%" fill="#007aff"></rect>
                      </svg>
                      <strong className="me-auto">CoreUI برای React.js</strong>
                      <small>7 دقیقه پیش</small>
                    </CToastHeader>
                    <CToastBody>سلام، دنیا! این یک پیام تست است.</CToastBody>
                  </CToast>
                  <CToast title="CoreUI برای React.js" autohide={false} visible={true}>
                    <CToastHeader closeButton>
                      <svg
                          className="rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                          role="img"
                      >
                        <rect width="100%" height="100%" fill="#007aff"></rect>
                      </svg>
                      <strong className="me-auto">CoreUI برای React.js</strong>
                      <small>7 دقیقه پیش</small>
                    </CToastHeader>
                    <CToastBody>سلام، دنیا! این یک پیام تست است.</CToastBody>
                  </CToast>
                </CToaster>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>React Toast</strong> <small>Custom content</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                اعلان‌های خود را با حذف زیرمجموعه‌ها، تنظیم آنها با{' '}
                <a href="https://coreui.io/docs/4.0/utilities/api">خدمات</a>، یا اضافه کردن مارک‌آپ خودتان سفارشی
                کنید. در اینجا ما با حذف پیش‌فرض{' '}
                <code>&lt;CToastHeader&gt;</code>
                ، اضافه کردن یک آیکون مخفی سفارشی از{' '}
                <a href="https://icons.coreui.io">آیکون‌های CoreUI</a> و استفاده از برخی از{' '}
                <a href="https://coreui.io/docs/4.0/utilities/flex">خدمات باکس انعطاف‌پذیری</a> برای تنظیم طرح
                ایجاد کرده‌ایم.
              </p>
              <DocsExample href="components/toast#custom-content">
                <CToast autohide={false} className="align-items-center" visible={true}>
                  <div className="d-flex">
                    <CToastBody>سلام، دنیا! این یک پیام تست است.</CToastBody>
                    <CToastClose className="me-2 m-auto" />
                  </div>
                </CToast>
              </DocsExample>
              <p className="text-medium-emphasis small">
                به عنوان یک الگو، همچنین می‌توانید کنترل‌ها و اجزاء اضافی را به اعلان‌ها اضافه کنید.
              </p>
              <DocsExample href="components/toast#custom-content">
                <CToast autohide={false} visible={true}>
                  <CToastBody>
                    سلام، دنیا! این یک پیام تست است.
                    <div className="mt-2 pt-2 border-top">
                      <CButton type="button" color="primary" size="sm">
                        اقدام کنید
                      </CButton>
                      <CToastClose component={CButton} color="secondary" size="sm" className="ms-1">
                        ببندید
                      </CToastClose>
                    </div>
                  </CToastBody>
                </CToast>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>React Toast</strong> <small>Custom content</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                با ادامه به مثال بالا، می‌توانید با استفاده از{' '}
                <a href="https://coreui.io/docs/4.0/utilities/colors">رنگ</a> و{' '}
                <a href="https://coreui.io/docs/4.0//utilities/background">پس‌زمینه</a>، طرح‌های رنگ مختلف اعلان
                را ایجاد کنید. در اینجا ما{' '}
                <code>color=&#34;primary&#34;</code>
                را تنظیم کرده‌ایم و به{' '}
                <code>&lt;Ctoast&gt;</code>، کلاس <code>.text-white</code> را اضافه کرده‌ایم و سپس ویژگی{' '}
                <code>white</code> را به دکمه بستن خود تنظیم کرده‌ایم. برای یک لبه تیز، مرز پیش‌فرض را با{' '}
                <code>.border-0</code> حذف می‌کنیم.
              </p>
              <DocsExample href="components/toast#color-schemes">
                <CToast
                    autohide={false}
                    color="primary"
                    className="text-white align-items-center"
                    visible={true}
                >
                  <div className="d-flex">
                    <CToastBody>سلام، دنیا! این یک پیام تست است.</CToastBody>
                    <CToastClose className="me-2 m-auto" white />
                  </div>
                </CToast>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
  );
};

export default Toasts
