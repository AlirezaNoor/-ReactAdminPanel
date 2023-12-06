// این یک صفحه نمایشی برای nav ]ا در ساید بار سمت راست است
import React from 'react'
import {
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardHeader,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CNav,
    CNavItem,
    CNavLink,
} from '@coreui/react'
import {DocsExample} from 'src/components'

const Navs = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Navs</strong> <small>Base navs</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            کامپوننت پایه <code>.nav</code> با flexbox ساخته شده است و قوی است
                            پایه ای برای ساخت انواع اجزای ناوبری. این شامل برخی از سبک است
                            نادیده گرفتن (برای کار با لیست ها)، برخی از لایه های پیوند برای مناطق بازدید بزرگتر، و پایه
                            یک ظاهر طراحی غیر فعال
                        </p>
                        <DocsExample href="components/nav#base-nav">
                            <CNav>
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        اکتیو
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" disabled>
                                        غیر فعال
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            کلاس ها در سراسر جهان استفاده می شوند، بنابراین نشانه گذاری شما می تواند بسیار انعطاف پذیر
                            باشد. استفاده کنید{' '}
                            <code>&lt;ul&gt;</code> مانند بالا، <code>&lt;ol&gt;</code> در صورت سفارش شما
                            موارد مهم است، یا موارد خود را با عنصر <code>&lt;nav&gt;</code> بچرخانید. زیرا
                            .nav از نمایشگر استفاده می‌کند: انعطاف‌پذیر، پیوندهای ناوبری همان رفتاری را دارند که موارد
                            ناوبری انجام می‌دهند، اما
                            بدون علامت گذاری اضافی
                        </p>
                        <DocsExample href="components/nav#base-nav">
                            <CNav component="nav">
                                <CNavLink href="#" active>
                                    اکتیو
                                </CNavLink>
                                <CNavLink href="#">لینک</CNavLink>
                                <CNavLink href="#">لینک</CNavLink>
                                <CNavLink href="#" disabled>
                                    غیر فعال
                                </CNavLink>
                            </CNav>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Navs</strong> <small>Horizontal alignment</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            تراز افقی ناوبری خود را با{' '} تغییر دهید
                            <a href="https://coreui.io/docs/layout/grid/#horizontal-alignment">
                                ابزارهای فلکس باکس
                            </a>
                            . به طور پیش‌فرض، ناوبری‌ها به چپ تراز هستند، اما می‌توانید به راحتی آنها را به مرکز یا راست
                            تغییر دهید
                            هم راستا.
                        </p>
                        <p className="text-medium-emphasis small">
                            در مرکز با <code>.justify-content-center</code>:
                        </p>
                        <DocsExample href="components/nav#horizontal-alignment">
                            <CNav className="justify-content-center">
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        اکتیو
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" disabled>
                                        غیر فعال
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            تراز راست با <code>.justify-content-end</code>:
                        </p>
                        <DocsExample href="components/nav#base-nav">
                            <CNav className="justify-content-end">
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        اکتیو
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" disabled>
                                        غیرفعال
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Navs</strong> <small>Vertical</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            پیمایش خود را با تغییر جهت مورد انعطاف پذیر با {' '} پشته کنید
                            ابزار <code>.flex-column</code>. باید آنها را در برخی از درگاه‌های نمایش انباشته کرد، اما نه
                            دیگران؟ از نسخه های پاسخگو (به عنوان مثال <code>.flex-sm-column</code>) استفاده کنید.
                        </p>
                        <DocsExample href="components/nav#vertical">
                            <CNav className="flex-column">
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        اکتیو
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" disabled>
                                        غیر فعال
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Navs</strong> <small>Tabs</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            ناوبری اصلی را از بالا می گیرد و کلاس <code>variant=&#34;tabs&#34;</code> را اضافه می کند.
                            برای ایجاد یک رابط زبانه ای
                        </p>
                        <DocsExample href="components/nav#tabs">
                            <CNav variant="tabs">
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        اکتیو
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" disabled>
                                        غیر فعال
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Navs</strong> <small>Pills</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            همان HTML را انتخاب کنید، اما به جای آن از <code>variant=&#34;pills&#34;</code> استفاده
                            کنید: </p>
                        <DocsExample href="components/nav#pills">
                            <CNav variant="pills">
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        اکتیو
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" disabled>
                                        غیر فعال
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Navs</strong> <small>پر کنید و توجیه کنید</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            محتویات <code>.nav</code>&#39; خود را مجبور کنید تا تمام عرض موجود را گسترش دهید.
                            دو کلاس اصلاح کننده برای پر کردن متناسب تمام فضای موجود با{' '}
                            <code>.nav-item</code>s، از <code>layout=&#34;fill&#34;</code> استفاده کنید. توجه کنید که همه
                            فضای افقی اشغال شده است، اما همه آیتم های nav دارای عرض یکسانی نیستند.
                        </p>
                        <DocsExample href="components/nav#fill-and-justify">
                            <CNav variant="pills" layout="fill">
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        اکتیو
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" disabled>
                                        غیر فعال
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            برای عناصر با عرض مساوی، از <code>layout=&#34;justified&#34;</code> استفاده کنید. همه افقی
                            فضا توسط پیوندهای ناو اشغال خواهد شد، اما بر خلاف .nav-fill بالا، هر مورد ناوبری
                            به همان عرض خواهد بود.
                        </p>
                        <DocsExample href="components/nav#fill-and-justify">
                            <CNav variant="pills" layout="justified">
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        اکتیو
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" disabled>
                                        غیر فعال
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Navs</strong> <small>Working with flex utilities</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            اگر به تغییرات ناوبری پاسخگو نیاز دارید، از یک سری از{' '} استفاده کنید
                            <a href="https://coreui.io/docs/utilities/flex">ابزارهای flexbox</a>. در حالی که بیشتر
                            به طور کامل، این ابزارها سفارشی سازی بیشتری را در نقاط شکست پاسخگو ارائه می دهند. که در
                            در مثال زیر، ناو ما در پایین ترین نقطه شکست انباشته می شود، سپس با a سازگار می شود
                            طرح افقی که عرض موجود را با شروع از نقطه شکست کوچک پر می کند.
                        </p>
                        <DocsExample href="components/nav#working-with-flex-utilities">
                            <CNav component="nav" variant="pills" className="flex-column flex-sm-row">
                                <CNavLink href="#" active>
                                    فعال
                                </CNavLink>
                                <CNavLink href="#">لینک</CNavLink>
                                <CNavLink href="#">لینک</CNavLink>
                                <CNavLink href="#" disabled>
                                    غیر فعال
                                </CNavLink>
                            </CNav>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Navs</strong> <small>Tabs with dropdowns</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="components/nav#tabs-with-dropdowns">
                            <CNav>
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        Active
                                    </CNavLink>
                                </CNavItem>
                                <CDropdown variant="nav-item">
                                    <CDropdownToggle color="secondary">دکمه دراپ دان</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">فعالیت </CDropdownItem>
                                        <CDropdownItem href="#">فعالیت دیگر</CDropdownItem>
                                        <CDropdownItem href="#">خیلی چیز های دیگر</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" disabled>
                                        غیر فعال
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Navs</strong> <small>Pills with dropdowns</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="components/nav#pills-with-dropdowns">
                            <CNav variant="pills">
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        فعالیت
                                    </CNavLink>
                                </CNavItem>
                                <CDropdown variant="nav-item">
                                    <CDropdownToggle color="secondary">دکمه ها</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">فعالیت </CDropdownItem>
                                        <CDropdownItem href="#">فعالیت های دیگر</CDropdownItem>
                                        <CDropdownItem href="#">برخی دیگر </CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                                <CNavItem>
                                    <CNavLink href="#">لینک</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" disabled>
                                        Disabled
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Navs
