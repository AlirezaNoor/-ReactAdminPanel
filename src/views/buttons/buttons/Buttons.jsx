/// صفحه دکمه هادر ساید بار است که تمامی دکمه ها را در صفحه اصلی نمایش می دهد

import React from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CRow} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilBell} from '@coreui/icons'
import {DocsExample} from 'src/components'

const Buttons = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Button</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            CoreUI شامل مجموعه‌ای از اجزای دکمه‌های از پیش تعریف‌شده است که هر کدام مختص به خود هستند
                            هدف معنایی دکمه‌ها نشان می‌دهند که وقتی کاربر کلیک یا لمس می‌کند چه عملی انجام می‌شود
                            آی تی. دکمه‌های CoreUI برای مقداردهی اولیه عملیات، هم در پس‌زمینه یا هم در پس‌زمینه استفاده می‌شوند
                            پیش زمینه یک تجربه
                        </p>
                        <DocsExample href="components/buttons">
                            {['normal', 'active', 'disabled'].map((state, index) => (
                                <CRow className="align-items-center mb-3" key={index}>
                                    <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                                        {state.charAt(0).toUpperCase() + state.slice(1)}
                                    </CCol>
                                    <CCol xs>
                                        {[
                                            'primary',
                                            'secondary',
                                            'success',
                                            'danger',
                                            'warning',
                                            'info',
                                            'light',
                                            'dark',
                                        ].map((color, index) => (
                                            <CButton
                                                color={color}
                                                key={index}
                                                active={state === 'active'}
                                                disabled={state === 'disabled'}
                                            >
                                                {color.charAt(0).toUpperCase() + color.slice(1)}
                                            </CButton>
                                        ))}
                                        <CButton color="link">لینک</CButton>
                                    </CCol>
                                </CRow>
                            ))}
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Button</strong> <small>with icons</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            می‌توانید دکمه را با <a href="https://icons.coreui.io/">نمادهای CoreUI</a> ما ترکیب کنید.
                        </p>
                        <DocsExample href="components/buttons">
                            {['normal', 'active', 'disabled'].map((state, index) => (
                                <CRow className="align-items-center mb-3" key={index}>
                                    <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                                        {state.charAt(0).toUpperCase() + state.slice(1)}
                                    </CCol>
                                    <CCol xs>
                                        {[
                                            'primary',
                                            'secondary',
                                            'success',
                                            'danger',
                                            'warning',
                                            'info',
                                            'light',
                                            'dark',
                                        ].map((color, index) => (
                                            <CButton
                                                color={color}
                                                key={index}
                                                active={state === 'active'}
                                                disabled={state === 'disabled'}
                                            >
                                                <CIcon icon={cilBell} className="me-2"/>
                                                {color.charAt(0).toUpperCase() + color.slice(1)}
                                            </CButton>
                                        ))}
                                        <CButton color="link">
                                            <CIcon icon={cilBell} className="me-2"/>
                                            لینک
                                        </CButton>
                                    </CCol>
                                </CRow>
                            ))}
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>دکمه واکنش</strong> <small>جزئیات دکمه</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            مؤلفه <code>&lt;CButton&gt;</code> برای{' '} طراحی شده است
                            <code>&lt;button&gt;</code>، <code>&lt;a&gt;</code> یا <code>&lt;input&gt;</code>{' '}
                            عناصر (اگرچه برخی از مرورگرها ممکن است رندر کمی متفاوت اعمال کنند).
                        </p>
                        <p className="text-medium-emphasis small">
                            اگر از مؤلفه <code>&lt;CButton&gt;</code> به عنوان <code>&lt;a&gt;</code>{' '} استفاده می
                            کنید
                            عناصری که برای فعال کردن عملکرد استفاده می شوند. محتوای در حال فروپاشی، این پیوندها
                            باید یک <code>role=&#34;button&#34;</code> داده شود تا به اندازه کافی با آنها ارتباط برقرار
                            کند.
                            به معنای فناوری های کمکی مانند صفحه خوان ها.
                        </p>
                        <DocsExample href="components/buttons#button-components">
                            <CButton component="a" color="primary" href="#" role="button">
                                Link
                            </CButton>
                            <CButton type="submit" color="primary">
                                Button
                            </CButton>
                            <CButton component="input" type="button" color="primary" value="Input"/>
                            <CButton component="input" type="submit" color="primary" value="Submit"/>
                            <CButton component="input" type="reset" color="primary" value="Reset"/>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Button</strong> <small>outline</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            اگر به یک دکمه نیاز دارید، اما بدون رنگ های پس زمینه قوی. تنظیم{' '}
                            <code>variant=&#34;outline&#34;</code> برای حذف همه رنگ های پس زمینه.
                        </p>
                        <DocsExample href="components/buttons#outline-buttons">
                            {['normal', 'active', 'disabled'].map((state, index) => (
                                <CRow className="align-items-center mb-3" key={index}>
                                    <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                                        {state.charAt(0).toUpperCase() + state.slice(1)}
                                    </CCol>
                                    <CCol xs>
                                        {[
                                            'primary',
                                            'secondary',
                                            'success',
                                            'danger',
                                            'warning',
                                            'info',
                                            'light',
                                            'dark',
                                        ].map((color, index) => (
                                            <CButton
                                                color={color}
                                                variant="outline"
                                                key={index}
                                                active={state === 'active'}
                                                disabled={state === 'disabled'}
                                            >
                                                {color.charAt(0).toUpperCase() + color.slice(1)}
                                            </CButton>
                                        ))}
                                    </CCol>
                                </CRow>
                            ))}
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Button</strong> <small>ghost</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            اگر به یک نوع از دکمه نیاز دارید، <code>variant=&#34;ghost&#34;</code> را تنظیم کنید
                            برای حذف تمام رنگ های پس زمینه
                        </p>
                        <DocsExample href="components/buttons#ghost-buttons">
                            {['normal', 'active', 'disabled'].map((state, index) => (
                                <CRow className="align-items-center mb-3" key={index}>
                                    <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                                        {state.charAt(0).toUpperCase() + state.slice(1)}
                                    </CCol>
                                    <CCol xs>
                                        {[
                                            'primary',
                                            'secondary',
                                            'success',
                                            'danger',
                                            'warning',
                                            'info',
                                            'light',
                                            'dark',
                                        ].map((color, index) => (
                                            <CButton
                                                color={color}
                                                variant="ghost"
                                                key={index}
                                                active={state === 'active'}
                                                disabled={state === 'disabled'}
                                            >
                                                {color.charAt(0).toUpperCase() + color.slice(1)}
                                            </CButton>
                                        ))}
                                    </CCol>
                                </CRow>
                            ))}
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Button</strong> <small>Sizes</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            دکمه های بزرگتر یا کوچکتر؟ <code>size=&#34;lg&#34;</code> یا{' '} را اضافه کنید
                            <code>size=&#34;sm&#34;</code> برای اندازه های اضافی.
                        </p>
                        <DocsExample href="components/buttons#sizes">
                            <CButton color="primary" size="lg">
                                متن روی دکمه </CButton>
                            <CButton color="secondary" size="lg">
                                متن روی دکمه </CButton>
                        </DocsExample>
                        <DocsExample href="components/buttons#sizes">
                            <CButton color="primary" size="sm">
                                متن روی دکمه </CButton>
                            <CButton color="secondary" size="sm">
                                متن روی دکمه </CButton>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Button</strong> <small>Pill</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="components/buttons#pill-buttons">
                            {[
                                'primary',
                                'secondary',
                                'success',
                                'danger',
                                'warning',
                                'info',
                                'light',
                                'dark',
                            ].map((color, index) => (
                                <CButton color={color} shape="rounded-pill" key={index}>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </CButton>
                            ))}
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Button</strong> <small>Square</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="components/buttons#square">
                            {[
                                'primary',
                                'secondary',
                                'success',
                                'danger',
                                'warning',
                                'info',
                                'light',
                                'dark',
                            ].map((color, index) => (
                                <CButton color={color} shape="rounded-0" key={index}>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </CButton>
                            ))}
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Button</strong> <small>استیت غیر فعالمتن روی دکمه</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            پایه بولی <code>غیرفعال</code> را به هر <code>&lt;CButton&gt;</code>{' '} اضافه کنید
                            جزء غیر فعال به نظر رسیدن دکمه ها دکمه غیرفعال شده است{' '}
                            <code>pointer-events: هیچ</code> اعمال نمی شود، غیرفعال کردن حالت های شناور و فعال از
                            محرک
                        </p>
                        <DocsExample href="components/buttons#disabled-state">
                            <CButton color="primary" size="lg" disabled>
                                Primary دکمه
                            </CButton>
                            <CButton color="secondary" size="lg" disabled>
                                دکمه
                            </CButton>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            دکمه های غیرفعال شده با استفاده از مؤلفه <code>&lt;a&gt;</code> کمی متفاوت عمل می کنند:
                        </p>
                        <p className="text-medium-emphasis small">
                            <code>&lt;a&gt;</code>ها از ویژگی <code>غیرفعال</code> پشتیبانی نمی‌کنند، بنابراین
                            CoreUI باید <code>.disabled</code> className را اضافه کند تا دکمه‌ها غیرفعال به نظر برسند.
                            CoreUI همچنین باید به مؤلفه دکمه غیرفعال اضافه شود{' '}
                            ویژگی <code>aria-disabled=&#34;true&#34;</code> برای نشان دادن وضعیت مؤلفه
                            به فناوری های کمکی
                        </p>
                        <DocsExample href="components/buttons#disabled-state">
                            <CButton component="a" href="#" color="primary" size="lg" disabled>
                                Primary link
                            </CButton>
                            <CButton component="a" href="#" color="secondary" size="lg" disabled>
                                Link
                            </CButton>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Button</strong> <small>Block buttons</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">با استفاده از ابزارهای کمکی، دکمه‌هایی ایجاد کنید که
                            تمام عرض یک والدین را بپوشانند.
                        </p>
                        <DocsExample href="components/buttons#block-buttons">
                            <div className="d-grid gap-2">
                                <CButton color="primary">Button</CButton>
                                <CButton color="primary">Button</CButton>
                            </div>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            در اینجا یک تغییر پاسخگو ایجاد می کنیم که با دکمه های انباشته عمودی شروع می کنیم تا
                            نقطه شکست <code>md</code>، جایی که <code>.d-md-block</code> جایگزین{' '}
                            کلاس <code>.d-grid</code>، بنابراین ابزار <code>gap-2</code> را باطل می کند. تغییر اندازه
                            مرورگر شما برای دیدن تغییر آنها.
                        </p>
                        <DocsExample href="components/buttons#block-buttons">
                            <div className="d-grid gap-2 d-md-block">
                                <CButton color="primary">Button</CButton>
                                <CButton color="primary">Button</CButton>
                            </div>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            می توانید عرض دکمه های بلوک خود را با کلاس های عرض ستون شبکه تنظیم کنید. برای
                            به عنوان مثال، برای یک &#34;دکمه مسدود کردن&#34; نیمه عرض، از <code>.col-6</code> استفاده
                            کنید. آن را مرکز کنید
                            به صورت افقی با <code>.mx-auto</code> نیز.
                        </p>
                        <DocsExample href="components/buttons#block-buttons">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <CButton color="primary">دکمه</CButton>
                                <CButton color="primary">دکمه</CButton>
                            </div>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            ابزارهای اضافی را می توان برای تنظیم تراز دکمه ها در حالت افقی استفاده کرد.
                            در اینجا ما نمونه پاسخگوی قبلی خود را گرفته ایم و برخی از ابزارهای انعطاف پذیر و
                            یک ابزار حاشیه بر روی دکمه برای تراز کردن دکمه‌ها در زمانی که دیگر نیستند
                            انباشته.
                        </p>
                        <DocsExample href="components/buttons#block-buttons">
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <CButton color="primary" className="me-md-2">
                                    Button
                                </CButton>
                                <CButton color="primary">Button</CButton>
                            </div>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Buttons
