//بخش فرم کنترلر در قسمت فرم ها
import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react';
import { DocsExample } from 'src/components';

const FormControl = () => {
  return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>کنترل فرم React</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="forms/form-control">
                <CForm>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">آدرس ایمیل</CFormLabel>
                    <CFormInput
                        type="email"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">نمونه متن</CFormLabel>
                    <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                  </div>
                </CForm>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>کنترل فرم React</strong> <small>اندازه‌بندی</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                ارتفاع‌ها را با استفاده از خاصیت <code>size</code> مانند <code>size=&#34;lg&#34;</code> و{' '}
                <code>size=&#34;sm&#34;</code> تنظیم کنید.
              </p>
              <DocsExample href="forms/form-control#sizing">
                <CFormInput
                    type="text"
                    size="lg"
                    placeholder="ورودی بزرگ"
                    aria-label="مثال ورودی بزرگ"
                />
                <br />
                <CFormInput
                    type="text"
                    placeholder="ورودی پیش‌فرض"
                    aria-label="مثال ورودی پیش‌فرض"
                />
                <br />
                <CFormInput
                    type="text"
                    size="sm"
                    placeholder="ورودی کوچک"
                    aria-label="مثال ورودی کوچک"
                />
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>کنترل فرم React</strong> <small>غیرفعال</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                برای دادن ظاهر خاکستری و حذف رویدادهای نشانگر از یک ورودی، ویژگی بولین
                <code>disabled</code> را اضافه کنید.
              </p>
              <DocsExample href="forms/form-control#disabled">
                <CFormInput
                    type="text"
                    placeholder="ورودی غیرفعال"
                    aria-label="مثال ورودی غیرفعال"
                    disabled
                />
                <br />
                <CFormInput
                    type="text"
                    placeholder="ورودی فقط‌خوان"
                    aria-label="مثال ورودی غیرفعال"
                    disabled
                    readOnly
                />
                <br />
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        ```jsx
        // ... (previous code)

        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>کنترل فرم React</strong> <small>فقط‌خوان</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                برای جلوگیری از اصلاح مقدار ورودی، ویژگی بولین <code>readOnly</code> را اضافه کنید.
                ورودی‌های فقط‌خوان، به شکل روشن‌تر (همانند ورودی‌های غیرفعال) ظاهر می‌شوند اما نشانگر
                استاندارد را حفظ می‌کنند.
              </p>
              <DocsExample href="forms/form-control#readonly">
                <CFormInput
                    type="text"
                    placeholder="ورودی فقط‌خوان اینجا..."
                    aria-label="مثال ورودی فقط‌خوان"
                    readOnly
                />
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>کنترل فرم React</strong> <small>فقط‌خوان متن ساده</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                اگر می‌خواهید در فرم خود ورودی‌های <code>&lt;input readonly&gt;</code> را به عنوان
                متن ساده استایل کنید، از خاصیت بولین <code>plainText</code> استفاده کنید تا استایل
                پیش‌فرض فیلد فرم را حذف کرده و حاشیه و اندازه پیش‌فرض را حفظ کند.
              </p>
              <DocsExample href="components/accordion">
                <CRow className="mb-3">
                  <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
                    ایمیل
                  </CFormLabel>
                  <div className="col-sm-10">
                    <CFormInput
                        type="text"
                        id="staticEmail"
                        defaultValue="email@example.com"
                        readOnly
                        plainText
                    />
                  </div>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    رمز عبور
                  </CFormLabel>
                  <div className="col-sm-10">
                    <CFormInput type="password" id="inputPassword" />
                  </div>
                </CRow>
              </DocsExample>
              <DocsExample href="components/accordion">
                <CForm className="row g-3">
                  <div className="col-auto">
                    <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
                      ایمیل
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="staticEmail2"
                        defaultValue="email@example.com"
                        readOnly
                        plainText
                    />
                  </div>
                  <div className="col-auto">
                    <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
                      رمز عبور
                    </CFormLabel>
                    <CFormInput type="password" id="inputPassword2" placeholder="رمز عبور" />
                  </div>
                  <div className="col-auto">
                    <CButton type="submit" className="mb-3">
                      تأیید هویت
                    </CButton>
                  </div>
                </CForm>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>کنترل فرم React</strong> <small>ورودی فایل</small>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="forms/form-control#file-input">
                <div className="mb-3">
                  <CFormLabel htmlFor="formFile">مثال ورودی فایل پیش‌فرض</CFormLabel>
                  <CFormInput type="file" id="formFile" />
                </div>
                {/* ... بخش‌های دیگر هم به همین ترتیب */}
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>کنترل فرم React</strong> <small>رنگ</small>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="forms/form-control#color">
                <CFormLabel htmlFor="exampleColorInput">انتخاب رنگ</CFormLabel>
                <CFormInput
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#563d7c"
                    title="رنگ خود را انتخاب کنید"
                />
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
  );
};

export default FormControl;
