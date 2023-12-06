// این صفحه دراپ دان  ها می باشد که در ساید بار قرار دارد
import React from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDropdown,
    CDropdownDivider,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CRow,
} from '@coreui/react'
import {DocsExample} from 'src/components'

const Dropdowns = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Dropdown</strong> <small>Single button</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            در اینجا نحوه کار با <code>&lt;button&gt;</code>{' '} آورده شده است.
                            عناصر: در اینجا نحوه کار کردن آنها با <code>&lt;button&gt;</code>{' '}
                            عناصر:
                        </p>
                        <DocsExample href="components/dropdown#single-button">
                            <CDropdown>
                                <CDropdownToggle color="secondary">دکمه</CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">متن تستی</CDropdownItem>
                                    <CDropdownItem href="#">متن تستی </CDropdownItem>
                                    <CDropdownItem href="#">متن تستی </CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            بهترین بخش این است که می توانید این کار را با هر نوع دکمه ای نیز انجام دهید: </p>
                        <DocsExample href="components/dropdown#single-button">
                            <>
                                {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(
                                    (color, index) => (
                                        <CDropdown variant="btn-group" key={index}>
                                            <CDropdownToggle color={color}>{color}</CDropdownToggle>
                                            <CDropdownMenu>
                                                <CDropdownItem href="#">فعالیت</CDropdownItem>
                                                <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                                <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                                <CDropdownDivider/>
                                                <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                            </CDropdownMenu>
                                        </CDropdown>
                                    ),
                                )}
                            </>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Dropdown</strong> <small>Split button</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            به طور مشابه، کشویی دکمه تقسیم را با نشانه گذاری تقریباً مشابه با تک ایجاد کنید
                            دکمه‌های کشویی، اما با افزودن پایه بولی <code>split</code> برای مناسب
                            فاصله در اطراف حوضچه کشویی.
                        </p>
                        <p className="text-medium-emphasis small">
                            ما از این کلاس اضافی برای کاهش <code>padding</code> افقی در هر طرف استفاده می کنیم
                            25٪ از کاتر و حذف <code>margin-left</code> که برای
                            کشویی دکمه های عادی این تغییرات اضافی باعث می‌شود که کارت در مرکز تقسیم قرار گیرد
                            را فشار دهید و یک ناحیه ضربه با اندازه مناسب تری در کنار دکمه اصلی اجرا کنید.
                        </p>
                        <DocsExample href="components/dropdown#split-button">
                            <>
                                {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(
                                    (color, index) => (
                                        <CDropdown variant="btn-group" key={index}>
                                            <CButton color={color}>{color}</CButton>
                                            <CDropdownToggle color={color} split/>
                                            <CDropdownMenu>
                                                <CDropdownItem href="#">فعالیت</CDropdownItem>
                                                <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                                <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                                <CDropdownDivider/>
                                                <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                            </CDropdownMenu>
                                        </CDropdown>
                                    ),
                                )}
                            </>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Dropdown</strong> <small>Sizing</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            Button dropdowns work with buttons of all sizes, including default and split dropdown
                            buttons.
                        </p>
                        <DocsExample href="components/dropdown#sizing">
                            <CDropdown variant="btn-group">
                                <CDropdownToggle color="secondary" size="lg">
                              دکمه بزرگ
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">فعالیت</CDropdownItem>
                                    <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                    <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                    <CDropdownDivider/>
                                    <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            <CDropdown variant="btn-group">
                                <CButton color="secondary" size="lg">
                                    Large split button
                                </CButton>
                                <CDropdownToggle color="secondary" size="lg" split/>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">فعالیت</CDropdownItem>
                                    <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                    <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                    <CDropdownDivider/>
                                    <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </DocsExample>
                        <DocsExample href="components/dropdown#sizing">
                            <CDropdown variant="btn-group">
                                <CDropdownToggle color="secondary" size="sm">
                                    Small button
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">فعالیت</CDropdownItem>
                                    <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                    <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                    <CDropdownDivider/>
                                    <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            <CDropdown variant="btn-group">
                                <CButton color="secondary" size="sm">
                                    Small split button
                                </CButton>
                                <CDropdownToggle color="secondary" size="sm" split/>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">فعالیت</CDropdownItem>
                                    <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                    <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                    <CDropdownDivider/>
                                    <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Dropdown</strong> <small>Single button</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            برای مطابقت با نوار پیمایش تیره یا سبک سفارشی با مجموعه، از منوهای کشویی تیره تر انتخاب کنید{' '}
                            ویژگی <code>dark</code>. هیچ تغییری در موارد کشویی لازم نیست.
                        </p>
                        <DocsExample href="components/dropdown#dark-dropdowns">
                            <CDropdown dark>
                                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                    <CDropdownItem href="#">فعالیت های دیگر</CDropdownItem>
                                    <CDropdownItem href="#">تست</CDropdownItem>
                                    <CDropdownDivider/>
                                    <CDropdownItem href="#"> تست</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </DocsExample>
                        <p className="text-medium-emphasis small">And putting it to use in a navbar:</p>
                        <DocsExample href="components/dropdown#dark-dropdowns">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="https://coreui.io/react/">
                                        Navbar
                                    </a>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-coreui-toggle="collapse"
                                        data-coreui-target="#navbarNavDarkDropdown"
                                        aria-controls="navbarNavDarkDropdown"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                        <ul className="navbar-nav">
                                            <CDropdown dark component="li" variant="nav-item">
                                                <CDropdownToggle>Dropdown</CDropdownToggle>
                                                <CDropdownMenu>
                                                    <CDropdownItem href="#">فعالیت</CDropdownItem>
                                                    <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                                    <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                                    <CDropdownDivider/>
                                                    <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                                </CDropdownMenu>
                                            </CDropdown>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Dropdown</strong> <small>Dropup</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            با افزودن{' '} منوهای کشویی بالای عناصر را فعال کنید
                            <code>direction=&#34;dropup&#34;</code> به <code>&lt;CDropdown&gt;</code>{' '}
                            جزء.
                        </p>
                        <DocsExample href="components/dropdown#dropup">
                            <CDropdown variant="btn-group" direction="dropup">
                                <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">فعالیت</CDropdownItem>
                                    <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                    <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                    <CDropdownDivider/>
                                    <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            <CDropdown variant="btn-group" direction="dropup">
                                <CButton color="secondary">Small split button</CButton>
                                <CDropdownToggle color="secondary" split/>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">فعالیت</CDropdownItem>
                                    <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                    <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                    <CDropdownDivider/>
                                    <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Dropdown</strong> <small>Dropright</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            با افزودن{' '} منوهای کشویی را در سمت راست عناصر فعال کنید
                            <code>direction=&#34;dropend&#34;</code> به <code>&lt;CDropdown&gt;</code>{' '}
                            جزء.
                        </p>
                        <DocsExample href="components/dropdown#dropright">
                            <CDropdown variant="btn-group" direction="dropend">
                                <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">فعالیت</CDropdownItem>
                                    <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                    <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                    <CDropdownDivider/>
                                    <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            <CDropdown variant="btn-group" direction="dropend">
                                <CButton color="secondary">Small split button</CButton>
                                <CDropdownToggle color="secondary" split/>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">فعالیت</CDropdownItem>
                                    <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                    <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                    <CDropdownDivider/>
                                    <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Dropdown</strong> <small>Dropleft</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            با افزودن{' '} منوهای کشویی را در سمت چپ عناصر فعال کنید
                            <code>direction=&#34;dropstart&#34;</code> به <code>&lt;CDropdown&gt;</code>{' '}
                            جزء.
                        </p>
                        <DocsExample href="components/dropdown#dropleft">
                            <CButtonGroup>
                                <CDropdown variant="btn-group" direction="dropstart">
                                    <CDropdownToggle color="secondary" split/>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">فعالیت</CDropdownItem>
                                        <CDropdownItem href="#">فعالیت دیگری</CDropdownItem>
                                        <CDropdownItem href="#"> فعالیت ها</CDropdownItem>
                                        <CDropdownDivider/>
                                        <CDropdownItem href="#">فعالیت ها</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                                <CButton color="secondary">دکمه کوچک</CButton>
                            </CButtonGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Dropdowns
