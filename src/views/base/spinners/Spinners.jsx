// این یک ویو برای ساید بار است در قسمت پایه
import React from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CSpinner, CRow} from '@coreui/react'
import {DocsExample} from 'src/components'
const Accordion = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Spinner</strong> <small>Border</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            از اسپینرهای حاشیه برای نشانگر بارگیری سبک استفاده کنید.
                        </p>
                        <DocsExample href="components/spinner">
                            <CSpinner/>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            چرخنده حاشیه از <code>currentColor</code> برای <code>border-color</code> خود استفاده می کند.
                            شما می توانید از هر یک از ابزارهای رنگ متن ما در اسپینر استاندارد استفاده کنید.
                        </p>
                        <DocsExample href="components/spinner#colors">
                            <CSpinner color="primary"/>
                            <CSpinner color="secondary"/>
                            <CSpinner color="success"/>
                            <CSpinner color="danger"/>
                            <CSpinner color="warning"/>
                            <CSpinner color="info"/>
                            <CSpinner color="light"/>
                            <CSpinner color="dark"/>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Spinner</strong> <small>Growing</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            اگر به اسپینر مرزی علاقه ندارید، به اسپینر رشد بروید. در حالی که آن را
                            از نظر فنی نمی چرخد، بارها و بارها رشد می کند!
                        </p>
                        <DocsExample href="components/spinner#growing-spinner">
                            <CSpinner variant="grow"/>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            بار دیگر، این اسپینر با <code>currentColor</code> ساخته شده است، بنابراین شما می توانید به
                            راحتی
                            ظاهر آن را تغییر دهد. در اینجا به رنگ آبی همراه با انواع پشتیبانی شده است.
                        </p>
                        <DocsExample href="components/spinner#growing-spinner">
                            <CSpinner color="primary" variant="grow"/>
                            <CSpinner color="secondary" variant="grow"/>
                            <CSpinner color="success" variant="grow"/>
                            <CSpinner color="danger" variant="grow"/>
                            <CSpinner color="warning" variant="grow"/>
                            <CSpinner color="info" variant="grow"/>
                            <CSpinner color="light" variant="grow"/>
                            <CSpinner color="dark" variant="grow"/>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Spinner</strong> <small>Size</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">ویژگی <code>size=&#34;sm&#34;</code> را اضافه کنید تا
                            اسپینر کوچکتری بسازید که بتواند به سرعت
                            در اجزای دیگر استفاده شود.
                        </p>
                        <DocsExample href="components/spinner#size">
                            <CSpinner size="sm"/>
                            <CSpinner size="sm" variant="grow"/>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Spinner</strong> <small>Buttons</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            از اسپینرهای درون دکمه ها برای نشان دادن یک عمل در حال پردازش یا انجام استفاده کنید
                            محل. همچنین می‌توانید متن را از عنصر چرخان تغییر دهید و از متن دکمه استفاده کنید
                            به عنوان مورد نیاز.
                        </p>
                        <DocsExample href="components/spinner#buttons">
                            <CButton disabled>
                                <CSpinner component="span" size="sm" aria-hidden="true"/>
                            </CButton>
                            <CButton disabled>
                                <CSpinner component="span" size="sm" aria-hidden="true"/>
                           در حال بارگذاری...
                            </CButton>
                        </DocsExample>
                        <DocsExample href="components/spinner#buttons">
                            <CButton disabled>
                                <CSpinner component="span" size="sm" variant="grow" aria-hidden="true"/>
                            </CButton>
                            <CButton disabled>
                                <CSpinner component="span" size="sm" variant="grow" aria-hidden="true"/>
                                در حال بارگذاری...
                            </CButton>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Accordion
