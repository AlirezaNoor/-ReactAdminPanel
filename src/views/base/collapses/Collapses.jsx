/// این یک صفحه برای ساید بار سمت چپ پروژه هستش
import React, {useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CRow} from '@coreui/react'
import {DocsExample} from 'src/components'

const Collapses = () => {
    const [visible, setVisible] = useState(false)
    const [visibleHorizontal, setVisibleHorizontal] = useState(false)
    const [visibleA, setVisibleA] = useState(false)
    const [visibleB, setVisibleB] = useState(false)

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Collapse</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">می توانید از یک پیوند یا یک جزء دکمه استفاده کنید.</p>
                        <DocsExample href="components/collapse">
                            <CButton
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setVisible(!visible)
                                }}
                            >
                                Link
                            </CButton>
                            <CButton onClick={() => setVisible(!visible)}>Button</CButton>
                            <CCollapse visible={visible}>
                                <CCard className="mt-3">
                                    <CCardBody>
                                        ذهن آماده انتقاد از کلیشه است، زیرا ما تری را به چنین زندگی بلندی متهم می کنیم
                                        ریچاردسون به ماهی مرکب جای نگرانی نیست keffiyeh سوئیس، آبجو صنایع دستی کار سخت
                                        آندرسن معتقد است آنها نمی دانند که عاقلانه بیرون خواهند آمد.
                                    </CCardBody>
                                </CCard>
                            </CCollapse>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Collapse</strong> <small> افقی</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">می توانید از یک پیوند یا یک جزء دکمه استفاده کنید.</p>
                        <DocsExample href="components/collapse#horizontal">
                            <CButton
                                className="mb-3"
                                onClick={() => setVisibleHorizontal(!visibleHorizontal)}
                                aria-expanded={visibleHorizontal}
                                aria-controls="collapseWidthExample"
                            >
                                Button
                            </CButton>
                            <div style={{minHeight: '120px'}}>
                                <CCollapse id="collapseWidthExample" horizontal visible={visibleHorizontal}>
                                    <CCard style={{width: '300px'}}>
                                        <CCardBody>
                                            این مقداری از محتوای نگهدارنده مکان برای جمع کردن افقی است. پنهان است
                                            توسط
                                            پیش‌فرض و هنگام فعال شدن نشان داده می‌شود.
                                        </CCardBody>
                                    </CCard>
                                </CCollapse>
                            </div>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Collapse</strong> <small> چند هدف</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            یک <code>&lt;CButton&gt;</code> می تواند چندین عنصر را نشان داده و پنهان کند.
                        </p>
                        <DocsExample href="components/collapse#multiple-targets">
                            <CButton onClick={() => setVisibleA(!visibleA)}>Toggle first element</CButton>
                            <CButton onClick={() => setVisibleB(!visibleB)}>Toggle second element</CButton>
                            <CButton
                                onClick={() => {
                                    setVisibleA(!visibleA)
                                    setVisibleB(!visibleB)
                                }}
                            >
                                Toggle both elements
                            </CButton>
                            <CRow>
                                <CCol xs={6}>
                                    <CCollapse visible={visibleA}>
                                        <CCard className="mt-3">
                                            <CCardBody>
                                                ذهن آماده انتقاد از کلیشه است، زیرا اینگونه است که ما زندگی بالا را متهم می کنیم
                                                تری
                                                ریچاردسون به ماهی مرکب هرگز به کفیه سوئیسی، آبجوی دست ساز در محل کار اهمیت ندهید
                                                ما
                                                آندرسن معتقد است آنها نمی دانند که عاقلانه بیرون خواهند آمد.
                                            </CCardBody>
                                        </CCard>
                                    </CCollapse>
                                </CCol>
                                <CCol xs={6}>
                                    <CCollapse visible={visibleB}>
                                        <CCard className="mt-3">
                                            <CCardBody>
                                                ذهن آماده انتقاد از کلیشه است، زیرا اینگونه است که ما زندگی بالا را متهم می کنیم
                                                تری
                                                ریچاردسون به ماهی مرکب هرگز به کفیه سوئیسی، آبجوی دست ساز در محل کار اهمیت ندهید
                                                ما
                                                آندرسن معتقد است آنها نمی دانند که عاقلانه بیرون خواهند آمد.
                                            </CCardBody>
                                        </CCard>
                                    </CCollapse>
                                </CCol>
                            </CRow>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Collapses
