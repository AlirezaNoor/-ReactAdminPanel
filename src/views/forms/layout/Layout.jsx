import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Layout = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Form grid</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              فرم های پیچیده تری را می توان با استفاده از کلاس های گرید ما ساخت. از این ها برای طرح بندی فرم ها استفاده کنید
              که به چندین ستون، عرض های متنوع و گزینه های تراز اضافی نیاز دارند.
            </p>
            <DocsExample href="forms/layout#form-grid">
              <CRow>
                <CCol xs>
                  <CFormInput placeholder="First name" aria-label="First name" />
                </CCol>
                <CCol xs>
                  <CFormInput placeholder="Last name" aria-label="Last name" />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>طراحی</strong> <small>فاصله‌گذارها (Gutters)</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              با افزودن <a href="https://coreui.io/docs/layout/gutters/">کلاس‌های تغییر دهنده فاصله‌گذارها</a>،
              شما می‌توانید کنترلی داشته باشید بر روی عرض فاصله‌گذارها هم در جهت افقی و هم در جهت عمودی.
            </p>
            <DocsExample href="forms/layout#gutters">
              <CRow className="g-3">
                <CCol xs>
                  <CFormInput placeholder="نام" aria-label="نام" />
                </CCol>
                <CCol xs>
                  <CFormInput placeholder="نام خانوادگی" aria-label="نام خانوادگی" />
                </CCol>
              </CRow>
            </DocsExample>
            <p className="text-medium-emphasis small">
              می‌توانید با سیستم گرید، طراحی‌های پیچیده‌تری نیز ایجاد کنید.
            </p>
            <DocsExample href="forms/layout#gutters">
              <CForm className="row g-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="inputEmail4">ایمیل</CFormLabel>
                  <CFormInput type="email" id="inputEmail4" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputPassword4">رمزعبور</CFormLabel>
                  <CFormInput type="password" id="inputPassword4" />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel htmlFor="inputAddress">آدرس</CFormLabel>
                  <CFormInput id="inputAddress" placeholder="1234 خیابان اصلی" />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel htmlFor="inputAddress2">آدرس 2</CFormLabel>
                  <CFormInput id="inputAddress2" placeholder="آپارتمان، استودیو یا طبقه" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputCity">شهر</CFormLabel>
                  <CFormInput id="inputCity" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputState">استان</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>انتخاب کنید...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={2}>
                  <CFormLabel htmlFor="inputZip">کدپستی</CFormLabel>
                  <CFormInput id="inputZip" />
                </CCol>
                <CCol xs={12}>
                  <CFormCheck type="checkbox" id="gridCheck" label="مرا به خاطر بسپار" />
                </CCol>
                <CCol xs={12}>
                  <CButton type="submit">ورود</CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>طراحی</strong> <small>فرم افقی</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              با افزودن کلاس <code>.row</code> به گروه‌های فرم و استفاده از کلاس‌های <code>.col-*-*</code>
              برای مشخص کردن عرض برچسب‌ها و کنترل‌ها، می‌توانید فرم‌های افقی ایجاد کنید. حتما به
              <code>.col-form-label</code> نیز به <code>&lt;CFormLabel&gt;</code> های خود اضافه کنید
              تا به درستی به صورت عمودی با کنترل‌های فرم مرتبط شوند.
            </p>
            <p className="text-medium-emphasis small">
              گاهی اوقات ممکن است نیاز به استفاده از ابزارهای حاشیه‌زنی یا پر کردن با پایه (margin یا padding)
              باشد تا همان تراز بنیادی متن را برای شما ایجاد کند. به عنوان مثال، ما <code>padding-top</code>
              را از برچسب‌های ورودی رادیوی توده‌ای حذف کرده‌ایم تا متن بهتری را با خط پایه تراز کنیم.
            </p>
            <DocsExample href="forms/layout#horizontal-form">
              <CForm>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    ایمیل
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="email" id="inputEmail3" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    رمزعبور
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="password" id="inputPassword3" />
                  </CCol>
                </CRow>
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">رادیوها</legend>
                  <CCol sm={10}>
                    <CFormCheck
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="option1"
                        label="رادیو اول"
                        defaultChecked
                    />
                    <CFormCheck
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="option2"
                        label="رادیو دوم"
                    />
                    <CFormCheck
                        type="radio"
                        name="gridRadios"
                        id="gridRadios3"
                        value="option3"
                        label="رادیو سوم غیرفعال"
                        disabled
                    />
                  </CCol>
                </fieldset>
                <CRow className="mb-3">
                  <div className="col-sm-10 offset-sm-2">
                    <CFormCheck type="checkbox" id="gridCheck1" label="چک باکس نمونه" />
                  </div>
                </CRow>
                <CButton type="submit">ورود</CButton>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>



      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>طراحی</strong> <small>تنظیم اندازه برچسب‌های افقی فرم</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              حتما از <code>.col-form-label-sm</code> یا <code>.col-form-label-lg</code> برای اندازه‌گیری
              صحیح <code>&lt;CFormLabel&gt;</code> یا <code>&lt;legend&gt;</code> ها با اندازه‌های
              <code>.form-control-lg</code> و <code>.form-control-sm</code> استفاده کنید.
            </p>
            <DocsExample href="forms/layout#horizontal-form-label-sizing">
              <CRow className="mb-3">
                <CFormLabel
                    htmlFor="colFormLabelSm"
                    className="col-sm-2 col-form-label col-form-label-sm"
                >
                  ایمیل
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                      type="email"
                      className="form-control form-control-sm"
                      id="colFormLabelSm"
                      placeholder="col-form-label-sm"
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                  ایمیل
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="email" id="colFormLabel" placeholder="col-form-label" />
                </CCol>
              </CRow>
              <CRow>
                <CFormLabel
                    htmlFor="colFormLabelLg"
                    className="col-sm-2 col-form-label col-form-label-lg"
                >
                  ایمیل
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                      type="email"
                      className="form-control form-control-lg"
                      id="colFormLabelLg"
                      placeholder="col-form-label-lg"
                  />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>طراحی</strong> <small>تنظیم اندازه‌های ستون</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              همانطور که در مثال‌های قبلی نشان داده شده است، سیستم گرید ما به شما این امکان را می‌دهد
              که هر تعداد از <code>&lt;CCol&gt;</code> را داخل یک <code>&lt;CRow&gt;</code> قرار دهید.
              آن‌ها عرض دسترسی موجود را به طور مساوی بین خود تقسیم می‌کنند. همچنین می‌توانید یک زیرمجموعه
              از ستون‌های خود را انتخاب کنید تا فضای بیشتر یا کمتری اشغال کنند، در حالی که ستون‌های باقی‌مانده
              به طور مساوی بخش باقیمانده را تقسیم می‌کنند، با استفاده از کلاس‌های خاص ستون مانند
              <code>&lt;CCol sm=&#34;7&#34;&gt;</code>.
            </p>
            <DocsExample href="forms/layout#column-sizing">
              <CRow className="g-3">
                <CCol sm={7}>
                  <CFormInput placeholder="شهر" aria-label="شهر" />
                </CCol>
                <CCol sm>
                  <CFormInput placeholder="استان" aria-label="استان" />
                </CCol>
                <CCol sm>
                  <CFormInput placeholder="کدپستی" aria-label="کدپستی" />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>






      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>طراحی</strong> <small>اتوسایزینگ</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              در مثال زیر، از ابزار یکپارچه‌سازی فلکس‌باک برای مرکز چین عناصر استفاده شده و <code>&lt;CCol&gt;</code> به <code>&lt;CCol xs=&#34;auto&#34;&gt;</code>
              تغییر یافته است تا ستون‌ها تنها به اندازه لازم فضا را اشغال کنند. به عبارت دیگر، اندازه ستون بر اساس محتوا خودش تعیین می‌شود.
            </p>
            <DocsExample href="forms/layout#auto-sizing">
              <CForm className="row gy-2 gx-3 align-items-center">
                <CCol xs="auto">
                  <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                    نام
                  </CFormLabel>
                  <CFormInput id="autoSizingInput" placeholder="جین دو" />
                </CCol>
                <CCol xs="auto">
                  <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup">
                    نام کاربری
                  </CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput id="autoSizingInputGroup" placeholder="نام کاربری" />
                  </CInputGroup>
                </CCol>
                <CCol xs="auto">
                  <CFormLabel className="visually-hidden" htmlFor="autoSizingSelect">
                    ترجیح
                  </CFormLabel>
                  <CFormSelect id="autoSizingSelect">
                    <option>انتخاب کنید...</option>
                    <option value="1">یک</option>
                    <option value="2">دو</option>
                    <option value="3">سه</option>
                  </CFormSelect>
                </CCol>
                <CCol xs="auto">
                  <CFormCheck type="checkbox" id="autoSizingCheck" label="مرا به خاطر بسپار" />
                </CCol>
                <CCol xs="auto">
                  <CButton type="submit">ارسال</CButton>
                </CCol>
              </CForm>
            </DocsExample>
            <p className="text-medium-emphasis small">
              سپس می‌توانید دوباره با کلاس‌های مختص اندازه این کار را انجام دهید.
            </p>
            <DocsExample href="forms/layout#auto-sizing">
              <CForm className="row gx-3 gy-2 align-items-center">
                <CCol sm={3}>
                  <CFormLabel className="visually-hidden" htmlFor="specificSizeInputName">
                    نام
                  </CFormLabel>
                  <CFormInput id="specificSizeInputName" placeholder="جین دو" />
                </CCol>
                <CCol sm={3}>
                  <CFormLabel className="visually-hidden" htmlFor="specificSizeInputGroupUsername">
                    نام کاربری
                  </CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput id="specificSizeInputGroupUsername" placeholder="نام کاربری" />
                  </CInputGroup>
                </CCol>
                <CCol sm={3}>
                  <CFormLabel className="visually-hidden" htmlFor="specificSizeSelect">
                    ترجیح
                  </CFormLabel>
                  <CFormSelect id="specificSizeSelect">
                    <option>انتخاب کنید...</option>
                    <option value="1">یک</option>
                    <option value="2">دو</option>
                    <option value="3">سه</option>
                  </CFormSelect>
                </CCol>
                <CCol xs="auto">
                  <CFormCheck type="checkbox" id="autoSizingCheck2" label="مرا به خاطر بسپار" />
                </CCol>
                <CCol xs="auto">
                  <CButton type="submit">ارسال</CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>





      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>طراحی</strong> <small>فرم‌های درجا</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              از کلاس <code>&lt;CCol xs=&#34;auto&#34;&gt;</code> برای ایجاد طراحی‌های افقی استفاده کنید. با افزودن{' '}
              <a href="https://coreui.io/docs/layout/gutters/">کلاس‌های تغییردهنده فاصله</a>، می‌توانید فواصل را در جهت‌های افقی و عمودی داشته باشید.
              کلاس <code>.align-items-center</code> عناصر فرم را به وسیله مرکز چین کردن، باعث می‌شود که <code>&lt;CFormCheck&gt;</code> به درستی چین شود.
            </p>
            <DocsExample href="forms/layout#inline-forms">
              <CForm className="row row-cols-lg-auto g-3 align-items-center">
                <CCol xs={12}>
                  <CFormLabel className="visually-hidden" htmlFor="inlineFormInputGroupUsername">
                    نام کاربری
                  </CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput id="inlineFormInputGroupUsername" placeholder="نام کاربری" />
                  </CInputGroup>
                </CCol>
                <CCol xs={12}>
                  <CFormLabel className="visually-hidden" htmlFor="inlineFormSelectPref">
                    ترجیحات
                  </CFormLabel>
                  <CFormSelect id="inlineFormSelectPref">
                    <option>انتخاب کنید...</option>
                    <option value="1">یک</option>
                    <option value="2">دو</option>
                    <option value="3">سه</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12}>
                  <CFormCheck type="checkbox" id="inlineFormCheck" label="مرا به یاد داشته باش" />
                </CCol>
                <CCol xs={12}>
                  <CButton type="submit">ارسال</CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>



    </CRow>
  )
}

export default Layout
