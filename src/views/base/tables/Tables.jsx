// این یک لیست از صفحات ما می باشد بخش جداول در قسمت ساید بار
import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import {DocsExample} from 'src/components'

const Tables = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Basic example</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            با استفاده از ابتدایی ترین جدول CoreUI، در اینجا نحوه مبتنی
                            بر <code>&lt;CTable&gt;</code> آمده است.
                            جداول در CoreUI نگاه می کنند.
                        </p>
                        <DocsExample href="components/table">
                            <CTable>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">کلاس</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>علی</CTableDataCell>
                                        <CTableDataCell>رضا</CTableDataCell>
                                        <CTableDataCell>امید</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>یاسر</CTableDataCell>
                                        <CTableDataCell>عادل </CTableDataCell>
                                        <CTableDataCell>جواد</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">تست</CTableDataCell>
                                        <CTableDataCell>تست</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Variants</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            از کلاس های متنی برای رنگ آمیزی جداول، ردیف های جدول یا سلول های فردی استفاده کنید.
                        </p>
                        <DocsExample href="components/table#variants">
                            <CTable>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">کلاس</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="primary">
                                        <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="secondary">
                                        <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="success">
                                        <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="danger">
                                        <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="warning">
                                        <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="info">
                                        <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="light">
                                        <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="dark">
                                        <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                        <CTableDataCell>ستون</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Striped rows</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            از ویژگی <code>striped</code> برای افزودن زبرا-striping به هر ردیف جدول در{' '} استفاده کنید
                            <code>&lt;CTableBody&gt;</code>.
                        </p>
                        <DocsExample href="components/table#striped-rows">
                            <CTable striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">کلاس</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستیمتن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            این کلاس ها را می توان به انواع جدول نیز اضافه کرد:
                        </p>
                        <DocsExample href="components/table#striped-rows">
                            <CTable color="dark" striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">متن تستی متن تستی</CTableDataCell>
                                        <CTableDataCell> متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <DocsExample href="components/table#striped-rows">
                            <CTable color="success" striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col"> متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col"> متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col"> متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col"> متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell> متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2"> متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Hoverable rows</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            از ویژگی <code>hover</code> برای فعال کردن حالت شناور در ردیف‌های جدول در یک{' '} استفاده
                            کنید
                            <code>&lt;CTableBody&gt;</code>.
                        </p>
                        <DocsExample href="components/table#hoverable-rows">
                            <CTable hover>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <DocsExample href="components/table#hoverable-rows">
                            <CTable color="dark" hover>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <DocsExample href="components/table#hoverable-rows">
                            <CTable striped hover>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستس</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Active tables</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="components/table#active-tables">
                            <CTable>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصلمتن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصلمتن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">سرفصلمتن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow active>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2" active>
                                            متن تستی
                                        </CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <DocsExample href="components/table#active-tables">
                            <CTable color="dark">
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow active>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2" active>
                                            متن تستس
                                        </CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Bordered tables</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            ویژگی <code>bordered</code> را برای حاشیه‌ها در تمام طرف‌های جدول و سلول‌ها اضافه کنید.متن
                            تستی
                        </p>
                        <DocsExample href="components/table#bordered-tables">
                            <CTable bordered>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">متن تستسی</CTableDataCell>
                                        <CTableDataCell>@twitter</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            <a href="https://coreui.io/docs/4.0/utilities/borders#border-color">
                                ابزارهای رنگ حاشیه
                            </a>{' '}
                            می توان برای تغییر رنگ اضافه کرد:
                        </p>
                        <DocsExample href="components/table#bordered-tables">
                            <CTable bordered borderColor="primary">
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>متن تستی</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            ویژگی <code>borderless</code> را برای جدول بدون حاشیه اضافه کنید.
                        </p>
                        <DocsExample href="components/table#tables-without-borders">
                            <CTable borderless>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <DocsExample href="components/table#tables-without-borders">
                            <CTable color="dark" borderless>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Small tables</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            برای فشرده‌تر کردن <code>&lt;CTable&gt;</code> ویژگی <code>small</code> را اضافه کنید
                            با برش تمام سلول های <code>padding</code> به نصف.متن تستی
                        </p>
                        <DocsExample href="components/table#small-tables">
                            <CTable small>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell> متن تسیی</CTableDataCell>
                                        <CTableDataCell> متن تسیی</CTableDataCell>
                                        <CTableDataCell>@ متن تسیی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">متن تستی</CTableDataCell>
                                        <CTableDataCell>@ متن تسیی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>چیدمان عمودی</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            سلول‌های جدول <code>&lt;CTableHead&gt;</code> همیشه در تراز عمودی با
                            پایین سلول های جدول در <code>&lt;CTableBody&gt;</code> تراز خود را از{' '} به ارث می برند
                            <code>&lt;CTable&gt;</code> و به طور پیش‌فرض در بالا تراز هستند. از تراز استفاده کنید
                            دارایی برای تراز مجدد در صورت نیاز
                        </p>
                        <DocsExample href="components/table#vertical-alignment">
                            <CTable align="middle" responsive>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col" className="w-25">
                                            سرفصل
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col" className="w-25">
                                            سرفصل
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col" className="w-25">
                                            سرفصل
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col" className="w-25">
                                            سرفصل
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableDataCell>
                                            این سلول <code>vertical-align: middle;</code> را از جدول به ارث می برد
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            این سلول <code>vertical-align: middle;</code> را از جدول به ارث می برد
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            این سلول <code>vertical-align: middle;</code> را از جدول به ارث می برد
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            این در اینجا برخی از متن نگهدارنده است که قصد دارد مقدار زیادی از آن را اشغال کند
                                            فضای عمودی، به demonsCTableRowat نحوه عملکرد تراز عمودی در
                                            را
                                            سلول های قبلی
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow align="bottom">
                                        <CTableDataCell>
                                            این سلول <code>vertical-align: bottom;</code> را از ردیف جدول به ارث می برد.
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            این سلول <code>vertical-align: bottom;</code> را از ردیف جدول به ارث می برد.
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            این سلول <code>vertical-align: bottom;</code> را از ردیف جدول به ارث می برد.
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            این در اینجا برخی از متن نگهدارنده است که قصد دارد مقدار زیادی از آن را اشغال کند
                                            فضای عمودی، به demonsCTableRowat نحوه عملکرد تراز عمودی در
                                            را
                                            سلول های قبلی
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>
                                            این سلول <code>vertical-align: middle;</code> را از جدول به ارث می برد
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            این سلول <code>vertical-align: middle;</code> را از جدول به ارث می برد
                                        </CTableDataCell>
                                        <CTableDataCell align="top">این سلول در بالا تراز شده است.</CTableDataCell>
                                        <CTableDataCell>
                                            این در اینجا برخی از متن نگهدارنده است که قصد دارد مقدار زیادی از آن را اشغال کند
                                            فضای عمودی، به demonsCTableRowat نحوه عملکرد تراز عمودی در
                                            را
                                            سلول های قبلی
                                        </CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Nesting</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            سبک‌های حاشیه، سبک‌های فعال و انواع جدول توسط جداول تودرتو به ارث نمی‌رسند.
                        </p>
                        <DocsExample href="components/table#nesting">
                            <CTable striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell colSpan="4">
                                            <CTable>
                                                <CTableHead>
                                                    <CTableRow>
                                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                                        <CTableHeaderCell scope="col">سرفصل</CTableHeaderCell>
                                                    </CTableRow>
                                                </CTableHead>
                                                <CTableBody>
                                                    <CTableRow>
                                                        <CTableHeaderCell scope="row">A</CTableHeaderCell>
                                                        <CTableDataCell>اول</CTableDataCell>
                                                        <CTableDataCell>اخر</CTableDataCell>
                                                    </CTableRow>
                                                    <CTableRow>
                                                        <CTableHeaderCell scope="row">B</CTableHeaderCell>
                                                        <CTableDataCell>اول</CTableDataCell>
                                                        <CTableDataCell>اخر</CTableDataCell>
                                                    </CTableRow>
                                                    <CTableRow>
                                                        <CTableHeaderCell scope="row">C</CTableHeaderCell>
                                                        <CTableDataCell>اول </CTableDataCell>
                                                        <CTableDataCell>اخر</CTableDataCell>
                                                    </CTableRow>
                                                </CTableBody>
                                            </CTable>
                                        </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                                        <CTableDataCell>@twitter</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Table head</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            مشابه جداول و جداول تیره، از مدفوع اصلاح کننده استفاده کنید{' '}
                            <code>color=&#34;روشن&#34;</code> یا <code>color=&#34;dark&#34;</code> برای ساخت{' '}
                            <code>&lt;CTableHead&gt;</code>ها خاکستری روشن یا تیره به نظر می رسند.
                        </p>
                        <DocsExample href="components/table#table-head">
                            <CTable>
                                <CTableHead color="light">
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>  متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <DocsExample href="components/table#table-head">
                            <CTable>
                                <CTableHead color="dark">
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>متن تستیReact Table</strong> <small>Table foot</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="components/table#table-foot">
                            <CTable>
                                <CTableHead color="light">
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan="2">این یک متن تستی است</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableDataCell> فوتر</CTableDataCell>
                                        <CTableDataCell> فوتر</CTableDataCell>
                                        <CTableDataCell> فوتر</CTableDataCell>
                                        <CTableDataCell> فوتر</CTableDataCell>
                                    </CTableRow>
                                </CTableHead>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Captions</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            یک <code>&lt;CTableCaption&gt;</code> مانند عنوان یک جدول عمل می کند. آن کمک می کند
                            کاربرانی که دارای صفحه خوان هستند تا جدولی را پیدا کنند و بفهمند در مورد آن چیست و
                            تصمیم بگیرند که آیا می خواهند آن را بخوانند.
                        </p>
                        <DocsExample href="components/table#captions">
                            <CTable>
                                <CTableCaption>List of users</CTableCaption>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">متن تستی</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>  متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            همچنین می توانید <code>&lt;CTableCaption&gt;</code> را در بالای جدول با{' '} قرار دهید
                            <code>caption=&#34;بالا&#34;</code>.
                        </p>
                        <DocsExample href="components/table#captions">
                            <CTable caption="top">
                                <CTableCaption>List of users</CTableCaption>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell>متن تستی</CTableDataCell>
                                        <CTableDataCell>متند تستی</CTableDataCell>
                                        <CTableDataCell>@متن تستی</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Tables
