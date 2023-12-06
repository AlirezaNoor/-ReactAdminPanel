/// اینپوت های شیناور را می بینید که در زیر گروه فرم ها م یباشد
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CFormFloating,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const FloatingLabels = () => {
  return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>برچسب‌های شناور React</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                یک زوج از عناصر <code>&lt;CFormInput&gt;</code> و <code>&lt;CFormLabel&gt;</code>{' '}
                را درون <code>CFormFloating</code> قرار دهید تا بتوانید برچسب‌های شناور با فیلدهای متنی فعال کنید. یک <code>placeholder</code> بر روی هر <code>&lt;CFormInput&gt;</code> نیاز است، زیرا روش ما برای برچسب‌های شناور کاملاً با CSS از عنصر شبه‌عناصر <code>:placeholder-shown</code> استفاده می‌کند. همچنین توجه داشته باشید که <code>&lt;CFormInput&gt;</code> باید اولین عنصر باشد تا بتوانیم از یک انتخاب‌کننده هم‌خوان (مثل <code>~</code>) استفاده کنیم.
              </p>
              <DocsExample href="forms/floating-labels">
                <CFormFloating className="mb-3">
                  <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
                  <CFormLabel htmlFor="floatingInput">آدرس ایمیل</CFormLabel>
                </CFormFloating>
                <CFormFloating>
                  <CFormInput type="password" id="floatingPassword" placeholder="رمز عبور" />
                  <CFormLabel htmlFor="floatingPassword">رمز عبور</CFormLabel>
                </CFormFloating>
              </DocsExample>
              <p className="text-medium-emphasis small">
                زمانی که یک <code>value</code> از قبل تعریف شده است، برچسب‌های <code>&lt;CFormLabel&gt;</code> به طور خودکار به موقعیت شناور خود تنظیم می‌شوند.
              </p>
              <DocsExample href="forms/floating-labels">
                <CFormFloating>
                  <CFormInput
                      type="email"
                      id="floatingInputValue"
                      placeholder="name@example.com"
                      defaultValue="test@example.com"
                  />
                  <CFormLabel htmlFor="floatingInputValue">ورودی با مقدار</CFormLabel>
                </CFormFloating>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>برچسب‌های شناور React</strong> <small>نواحی متنی</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                به طور پیش‌فرض، <code>&lt;CFormTextarea&gt;</code>ها به اندازه‌ای هستند که با <code>&lt;CFormInput&gt;</code>ها هم‌ارتفاع باشند.
              </p>
              <DocsExample href="forms/floating-labels#textareas">
                <CFormFloating>
                  <CFormTextarea
                      id="floatingTextarea"
                      placeholder="یک نظر ارسال کنید"
                  ></CFormTextarea>
                  <CFormLabel htmlFor="floatingTextarea">نظرات</CFormLabel>
                </CFormFloating>
              </DocsExample>
              <p className="text-medium-emphasis small">
                برای تنظیم ارتفاع سفارشی بر روی <code>&lt;CFormTextarea;&gt;</code> خود، از ویژگی <code>rows</code> استفاده نکنید. به جای آن، یک ارتفاع صریح (توسط خودش یا از طریق CSS سفارشی) تعیین کنید.
              </p>
              <DocsExample href="forms/floating-labels#textareas">
                <CFormFloating>
                  <CFormTextarea
                      placeholder="یک نظر ارسال کنید"
                      id="floatingTextarea2"
                      style={{ height: '100px' }}
                  ></CFormTextarea>
                  <CFormLabel htmlFor="floatingTextarea2">نظرات</CFormLabel>
                </CFormFloating>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>برچسب‌های شناور React</strong> <small>انتخاب‌ها</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                به جز <code>&lt;CFormInput&gt;</code>، برچسب‌های شناور تنها بر روی <code>&lt;CFormSelect&gt;</code>ها در دسترس هستند. آنها به همان روش کار می‌کنند، اما برخلاف <code>&lt;CFormInput&gt;</code>ها، همیشه <code>&lt;CFormLabel&gt;</code> را در وضعیت شناور خود نشان می‌دهند. <strong>انتخاب‌هایی با <code>size</code> و <code>multiple</code> پشتیبانی نمی‌شوند.</strong>
              </p>
              <DocsExample href="forms/floating-labels#selects">
                <CFormFloating>
                  <CFormSelect id="floatingSelect" aria-label="مثال انتخاب‌کننده با برچسب شناور">
                    <option>این منوی انتخاب را باز کنید</option>
                    <option value="1">یک</option>
                    <option value="2">دو</option>
                    <option value="3">سه</option>
                  </CFormSelect>
                  <CFormLabel htmlFor="floatingSelect">با انتخاب‌ها کار می‌کند</CFormLabel>
                </CFormFloating>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>برچسب‌های شناور React</strong> <small>طراحی</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                هنگام کار با سیستم گرید CoreUI for Bootstrap، اطمینان حاصل کنید که عناصر فرم را درون کلاس‌های ستون قرار دهید.
              </p>
              <DocsExample href="forms/floating-labels#layout">
                <CRow xs={{ gutter: 2 }}>
                  <CCol md>
                    <CFormFloating>
                      <CFormInput
                          type="email"
                          id="floatingInputGrid"
                          placeholder="name@example.com"
                          defaultValue="email@example.com"
                      />
                      <CFormLabel htmlFor="floatingInputGrid">آدرس ایمیل</CFormLabel>
                    </CFormFloating>
                  </CCol>
                  <CCol md>
                    <CFormFloating>
                      <CFormSelect id="floatingSelectGrid" aria-label="مثال انتخاب‌کننده با برچسب شناور">
                        <option>این منوی انتخاب را باز کنید</option>
                        <option value="1">یک</option>
                        <option value="2">دو</option>
                        <option value="3">سه</option>
                      </CFormSelect>
                      <CFormLabel htmlFor="floatingSelectGrid">با انتخاب‌ها کار می‌کند</CFormLabel>
                    </CFormFloating>
                  </CCol>
                </CRow>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
  )
}

export default FloatingLabels
