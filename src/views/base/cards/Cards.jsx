
/// این یک صفحه از  کارت ها هست که تمامی  نمونه ها در ان موجود است
// این صفحه crad ها  در منوی درازی است
import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardGroup,
    CCardHeader,
    CCardImage,
    CCardLink,
    CCardSubtitle,
    CCardText,
    CCardTitle,
    CListGroup,
    CListGroupItem,
    CNav,
    CNavItem,
    CNavLink,
    CCol,
    CRow,
} from '@coreui/react'
import {DocsExample} from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Cards = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Card</strong> <small>Example</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            کارت‌ها با کمترین نشانه‌گذاری و سبک‌های ممکن ساخته می‌شوند، اما همچنان موفق هستند
                            دسته ای از کنترل و سفارشی سازی را ارائه می دهد. ساخته شده با فلکس باکس، آنها را آسان ارائه
                            می دهند
                            با سایر اجزای CoreUI به خوبی ترکیب و تراز کنید. کارت ها بالا، چپ و
                            حاشیه سمت راست به طور پیش فرض، بنابراین استفاده کنید{' '}
                            <a href="https://coreui.io/docs/utilities/spacing">ابزارهای فاصله گذاری</a> که نیاز است
                            آنها هیچ عرض ثابتی برای شروع ندارند، بنابراین تمام عرض والد آن را پر می کنند.
                        </p>
                        <p className="text-medium-emphasis small">
                            در زیر نمونه ای از کارت پایه با محتوای ترکیبی و عرض ثابت آورده شده است. کارت ها دارند
                            بدون عرض ثابت برای شروع، بنابراین آنها به طور طبیعی تمام عرض والد آن را پر می کنند
                            عنصر
                        </p>
                        <DocsExample href="components/card">
                            <CCard style={{width: '18rem'}}>
                                <CCardImage orientation="top" src={ReactImg}/>
                                <CCardBody>
                                    <CCardTitle>Card title</CCardTitle>
                                    <CCardText>
                                        چند نمونه متن کوتاه برای ساختن عنوان کارت و تشکیل بخش عمده آن
                                        محتوای کارت.
                                    </CCardText>
                                    <CButton href="#">برو به ی جایی</CButton>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Card</strong> <small>بدنه </small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            بلوک اصلی کارت <code>&lt;CCardBody&gt;</code> است. هر وقت خواستی ازش استفاده کن
                            به یک بخش پر شده در کارت نیاز دارید.
                        </p>
                        <DocsExample href="components/card/#body">
                            <CCard>
                                <CCardBody>این مقداری متن در بدنه کارت است.</CCardBody>
                            </CCard>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>کارت ها</strong> <small>عناوین، متن و پیوندها</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            عناوین کارت توسط مؤلفه <code>&lt;CCardTitle&gt;</code> مدیریت می‌شوند. به طور یکسان،
                            پیوندها توسط <code>&lt;CCardLink&gt;</code> پیوست و در کنار یکدیگر جمع‌آوری می‌شوند.{' '}
                            کامپونت ها.
                        </p>
                        <p className="text-medium-emphasis small">
                            زیرنویس‌ها توسط مؤلفه <code>&lt;CCardSubtitle&gt;</code> مدیریت می‌شوند. اگر{' '}
                            <code>&lt;CCardTitle&gt;</code> همچنین موارد <code>&lt;CCardSubtitle&gt;</code>
                            ذخیره شده در یک مورد <code>&lt;CCardBody&gt;</code>، عنوان کارت و زیرنویس
                            به درستی مرتب شده است
                        </p>
                        <DocsExample href="components/card/#titles-text-and-links">
                            <CCard style={{width: '18rem'}}>
                                <CCardBody>
                                    <CCardTitle>تیتل کارت ها</CCardTitle>
                                    <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
                                    <CCardText>
                                        چند نمونه متن کوتاه برای ساخت عنوان کارت و تشکیل بخش عمده آن
                                        محتوای کارت.
                                    </CCardText>
                                    <CCardLink href="#">لینک کارت ها</CCardLink>
                                    <CCardLink href="#">لینک نویسند ها</CCardLink>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Card</strong> <small>Images</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            <code>.card-img-top</code> یک تصویر را در بالای کارت قرار می دهد. با{' '}
                            <code>.card-text</code>, متن را می توان به کارت اضافه کرد. متن در داخل{' '}
                            <code>.card-text</code>همچنین می توان با تگ های معمولی HTML استایل داد.
                        </p>
                        <DocsExample href="components/card/#images">
                            <CCard style={{width: '18rem'}}>
                                <CCardImage orientation="top" src={ReactImg}/>
                                <CCardBody>
                                    <CCardText>
                                        چند نمونه متن کوتاه برای ساختن عنوان کارت و تشکیل بخش عمده آن
                                        محتوای کارت.
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>کارت ها</strong> <small>لیست گروه ها</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            لیستی از محتوا را در یک کارت با یک گروه فهرست هموار ایجاد کنید. </p>
                        <DocsExample href="components/card/#list-groups">
                            <CRow>
                                <CCol lg={4}>
                                    <CCard>
                                        <CListGroup flush>
                                            <CListGroupItem>تست </CListGroupItem>
                                            <CListGroupItem>تست</CListGroupItem>
                                            <CListGroupItem>تست</CListGroupItem>
                                        </CListGroup>
                                    </CCard>
                                </CCol>
                                <CCol lg={4}>
                                    <CCard>
                                        <CCardHeader>Header</CCardHeader>
                                        <CListGroup flush>
                                            <CListGroupItem>تست</CListGroupItem>
                                            <CListGroupItem>تست</CListGroupItem>
                                            <CListGroupItem>تست</CListGroupItem>
                                        </CListGroup>
                                    </CCard>
                                </CCol>
                                <CCol lg={4}>
                                    <CCard>
                                        <CListGroup flush>
                                            <CListGroupItem>تست</CListGroupItem>
                                            <CListGroupItem>تست</CListGroupItem>
                                            <CListGroupItem>تست</CListGroupItem>
                                        </CListGroup>
                                        <CCardFooter>فوتر</CCardFooter>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>کارت ها</strong> <small>پوست مرغ!!!</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            برای ساختن کارتی که نیاز دارید، بسیاری از انواع محتوا را ترکیب و مطابقت دهید یا همه چیز را
                            پرتاب کنید
                            در آنجا. در زیر، سبک‌های تصویر، بلوک‌ها، سبک‌های متن و یک گروه فهرست نشان داده شده است
                            در یک کارت با عرض ثابت پیچیده شده است.
                        </p>
                        <DocsExample href="components/card/#kitchen-sink">
                            <CCard style={{width: '18rem'}}>
                                <CCardImage orientation="top" src={ReactImg}/>
                                <CCardBody>
                                    <CCardTitle>سرفصل کارت</CCardTitle>
                                    <CCardText>
                                        چند نمونه متن کوتاه برای ساختن عنوان کارت و تشکیل بخش عمده آن
                                        محتوای کارت.
                                    </CCardText>
                                </CCardBody>
                                <CListGroup flush>
                                    <CListGroupItem>تست</CListGroupItem>
                                    <CListGroupItem>تست</CListGroupItem>
                                    <CListGroupItem>تست</CListGroupItem>
                                </CListGroup>
                                <CCardBody>
                                    <CCardLink href="#">لینک کارد ها</CCardLink>
                                    <CCardLink href="#">سایر لینک ها</CCardLink>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>کارت </strong> <small>هدر و فوتر</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            یک سرصفحه و/یا پاورقی اختیاری در کارت اضافه کنید.
                        </p>
                        <DocsExample href="components/card/#header-and-footer">
                            <CCard>
                                <CCardHeader>هدر</CCardHeader>
                                <CCardBody>
                                    <CCardTitle>درمان عنوان ویژه</CCardTitle>
                                    <CCardText>
                                        با متن پشتیبان زیر به عنوان راهنما طبیعی برای محتوای اضافی.
                                    </CCardText>
                                    <CButton href="#">برو به جایی</CButton>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            سرصفحه های کارت را می توان با اضافه کردن حالت قبلی شکل
                            داد. <code>component=&#34;h5&#34;</code>.
                        </p>
                        <DocsExample href="components/card/#header-and-footer">
                            <CCard>
                                <CCardHeader component="h5">هدر </CCardHeader>
                                <CCardBody>
                                    <CCardTitle>درمان عنوان ویژه</CCardTitle>
                                    <CCardText>
                                        با متن پشتیبان زیر به عنوان راهنما طبیعی برای محتوای اضافی. </CCardText>
                                    <CButton href="#">برو به جایی</CButton>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                        <DocsExample href="components/card/#header-and-footer">
                            <CCard>
                                <CCardHeader>Quote</CCardHeader>
                                <CCardBody>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            مشتری بسیار مهم است، مشتری توسط مشتری دنبال خواهد شد. به بیان کامل
                                            بود
                                            از قبل
                                        </p>
                                        <footer className="blockquote-footer">
                                            شخصی معروف در <cite title="Source Title">عنوان منبع</cite>
                                        </footer>
                                    </blockquote>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                        <DocsExample href="components/card/#header-and-footer">
                            <CCard>
                                <CCardHeader>Quote</CCardHeader>
                                <CCardBody>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            مشتری بسیار مهم است، مشتری توسط مشتری دنبال خواهد شد. به بیان کامل
                                            بود
                                            از قبل
                                        </p>
                                        <footer className="blockquote-footer">
                                            شخصی معروف در <cite title="Source Title">عنوان منبع</cite>
                                        </footer>
                                    </blockquote>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Card</strong> <small>Body</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            کارت‌ها هیچ <code>عرض</code> خاصی را برای شروع فرض نمی‌کنند، بنابراین 100% عرض خواهند داشت.
                            مگر خلافش گفته شود. شما می توانید این را در صورت نیاز با CSS سفارشی، شبکه تنظیم کنید
                            کلاس‌ها، میکس‌های Grid Sass یا خدمات.
                        </p>
                        <h3>استفاده از نشانه گذاری شبکه</h3>
                        <p className="text-medium-emphasis small">
                            با استفاده از شبکه، کارت ها را در صورت نیاز در ستون ها و ردیف ها بپیچید.
                        </p>
                        <DocsExample href="components/card/#sizing">
                            <CRow>
                                <CCol sm={6}>
                                    <CCard>
                                        <CCardBody>
                                            <CCardTitle>درمان عنوان ویژه</CCardTitle>
                                            <CCardText>
                                                با متن پشتیبان زیر به عنوان راهنما طبیعی برای محتوای اضافی. </CCardText>
                                            <CButton href="#">برو به جایی</CButton>
                                        </CCardBody>
                                    </CCard>
                                </CCol>
                                <CCol sm={6}>
                                    <CCard>
                                        <CCardBody>
                                            <CCardTitle>یک هدر کاستوم</CCardTitle>
                                            <CCardText>
                                                با متن پشتیبان زیر به عنوان راهنما طبیعی برای محتوای اضافی. </CCardText>
                                            <CButton href="#">برو به جایی</CButton>
                                        </CCardBody>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </DocsExample>
                        <h3>با استفاده از خدمات شهری</h3>
                        <p className="text-medium-emphasis small">
                            استفاده از برخی از{' '}
                            <a href="https://coreui.io/docs/utilities/sizing/">ابزارهای اندازه‌گیری موجود</a> به
                            به سرعت عرض یک کارت را تنظیم کنید.
                        </p>
                        <DocsExample href="components/card/#sizing">
                            <CCard className="w-75">
                                <CCardBody>
                                    <CCardTitle>هدر کارد</CCardTitle>
                                    <CCardText>
                                        با متن پشتیبان زیر به عنوان راهنما طبیعی برای محتوای اضافی. </CCardText>
                                    <CButton href="#">برو به جایی</CButton>
                                </CCardBody>
                            </CCard>
                            <CCard className="w-50">
                                <CCardBody>
                                    <CCardTitle>هدر کارد </CCardTitle>
                                    <CCardText>
                                        با متن پشتیبان زیر به عنوان راهنما طبیعی برای محتوای اضافی. </CCardText>
                                    <CButton href="#">برو به جایی</CButton>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                        <strong>استفاده از CSS سفارشی</strong>
                        <p className="text-medium-emphasis small">
                            از custom css در پروژه خود
                        </p>
                        <DocsExample href="components/card/#sizing">
                            <CCard style={{width: '18rem'}}>
                                <CCardBody>
                                    <CCardTitle>یک تایتل خاص هدفمند</CCardTitle>
                                    <CCardText>
                                        With supporting text below as a natural lead-in to additional content.
                                    </CCardText>
                                    <CButton href="#">برو به ی جایی</CButton>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>کارت</strong> <small>الاین کرد تکست ها</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            می‌توانید فوراً ترتیب متن هر کارت را تغییر دهید - به طور کلی یا خاص
                            قطعات—با{' '}
                            <a href="https://coreui.io/docs/utilities/text/#text-alignment">کلاس های تراز متن</a>
                            .
                        </p>
                        <DocsExample href="components/card/#text-alignment">
                            <CCard style={{width: '18rem'}}>
                                <CCardBody>
                                    <CCardTitle>الاین کرد تکست ها</CCardTitle>
                                    <CCardText>
                                        با متن پشتیبان زیر به عنوان یک منبع طبیعی برای محتوای اضافیt.
                                    </CCardText>
                                    <CButton href="#">Go somewhere</CButton>
                                </CCardBody>
                            </CCard>
                            <CCard className="text-center" style={{width: '18rem'}}>
                                <CCardBody>
                                    <CCardTitle>درمان عنوان ویژه</CCardTitle>
                                    <CCardText>
                                        با متن پشتیبان زیر به عنوان راهنما طبیعی برای محتوای اضافی.
                                    </CCardText>
                                    <CButton href="#">برو به جایی</CButton>
                                </CCardBody>
                            </CCard>
                            <CCard className="text-end" style={{width: '18rem'}}>
                                <CCardBody>
                                    <CCardTitle>درمان عنوان ویژه</CCardTitle>
                                    <CCardText>
                                        با متن پشتیبان زیر به عنوان راهنما طبیعی برای محتوای اضافی.
                                    </CCardText>
                                    <CButton href="#">برو به جایی</CButton>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>کارت ها</strong> <small>نویکیشن ها</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            با{' '} ما مقداری پیمایش به <code>&lt;CCardHeader&gt;</code> اضافه کنید
                            جزء <code>&lt;CNav&gt;</code>.
                        </p>
                        <DocsExample href="components/card/##navigation">
                            <CCard className="text-center">
                                <CCardHeader>
                                    <CNav variant="tabs" className="card-header-tabs">
                                        <CNavItem>
                                            <CNavLink href="#" active>
                                                فعال
                                            </CNavLink>
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
                                </CCardHeader>
                                <CCardBody>
                                    <CCardTitle>هدر هدفمند جذاب</CCardTitle>
                                    <CCardText>
                                        با متن پشتیبان زیر به عنوان راهنما طبیعی برای محتوای اضافی. </CCardText>
                                    <CButton href="#">برو به جایی</CButton>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                        <DocsExample href="components/card/##navigation">
                            <CCard className="text-center">
                                <CCardHeader>
                                    <CNav variant="pills" className="card-header-pills">
                                        <CNavItem>
                                            <CNavLink href="#" active>
                                                فعال
                                            </CNavLink>
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
                                </CCardHeader>
                                <CCardBody>
                                    <CCardTitle>هدر هدفمند مفهوم دار</CCardTitle>
                                    <CCardText>
                                        با متن پشتیبان زیر به عنوان راهنما طبیعی برای محتوای اضافی.
                                    </CCardText>
                                    <CButton href="#">برو به جایی</CButton>
                                </CCardBody>
                            </CCard>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>کارت ها</strong> <small>برش عکس ها </small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            همانند سرصفحه ها و پاورقی ها، کارت ها می توانند شامل تصویر بالا و پایین باشند
                            caps&#34;—تصاویر در بالا یا پایین کارت.
                        </p>
                        <DocsExample href="components/card/#image-caps">
                            <CRow>
                                <CCol lg={6}>
                                    <CCard className="mb-3">
                                        <CCardImage orientation="top" src={ReactImg}/>
                                        <CCardBody>
                                            <CCardTitle>سرفصل کارت ها</CCardTitle>
                                            <CCardText>
                                                این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                                محتوای اضافی این محتوا کمی طولانی تر است.
                                            </CCardText>
                                            <CCardText>
                                                <small className="text-medium-emphasis">اخرین ابدیت سه دقیقه قبل!</small>
                                            </CCardText>
                                        </CCardBody>
                                    </CCard>
                                </CCol>
                                <CCol lg={6}>
                                    <CCard className="mb-3">
                                        <CCardBody>
                                            <CCardTitle></CCardTitle>
                                            <CCardText>
                                                این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                                محتوای اضافی این محتوا کمی طولانی تر است.
                                            </CCardText>
                                            <CCardText>
                                                <small className="text-medium-emphasis">اخرین ابدیت سه دقیقه قبل!</small>
                                            </CCardText>
                                        </CCardBody>
                                        <CCardImage orientation="bottom" src={ReactImg}/>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>کارت ها</strong> <small>استایل کار ها</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            کارت‌ها شامل گزینه‌های مختلفی برای سفارشی کردن پس‌زمینه، حاشیه‌ها و رنگ‌هایشان هستند.
                        </p>
                        <h3>پس زمینه و رنگ ها</h3>
                        <p className="text-medium-emphasis small">
                            برای تغییر ظاهر کارت از ویژگی <code>color</code> استفاده کنید.
                        </p>
                        <DocsExample href="components/card/#background-and-color">
                            <CRow>
                                {[
                                    {color: 'primary', textColor: 'white'},
                                    {color: 'secondary', textColor: 'white'},
                                    {color: 'success', textColor: 'white'},
                                    {color: 'danger', textColor: 'white'},
                                    {color: 'warning'},
                                    {color: 'info', textColor: 'white'},
                                    {color: 'light'},
                                    {color: 'dark', textColor: 'white'},
                                ].map((item, index) => (
                                    <CCol lg={4} key={index}>
                                        <CCard color={item.color} textColor={item.textColor} className="mb-3">
                                            <CCardHeader>هدر</CCardHeader>
                                            <CCardBody>
                                                <CCardTitle>{item.color}تایتیل کارت</CCardTitle>
                                                <CCardText>
                                                    چند متن مثال سریع برای ساختن عنوان کارت و تشکیل آن
                                                    بخش عمده ای از
                                                    محتوای کارت
                                                </CCardText>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                ))}
                            </CRow>
                        </DocsExample>
                        <h3>بردر</h3>
                        <p className="text-medium-emphasis small">
                            از <a href="https://coreui.io/docs/utilities/borders/">ابزارهای مرزی</a> برای تغییر استفاده کنید
                            فقط <code>رنگ حاشیه</code> یک کارت. توجه داشته باشید که می توانید{' '}
                            ویژگی <code>textColor</code> در <code>&lt;CCard&gt;</code> یا زیر مجموعه ای از
                            محتویات کارت مطابق شکل زیر.
                        </p>
                        <DocsExample href="components/card/#border">
                            <CRow>
                                {[
                                    {color: 'primary', textColor: 'primary'},
                                    {color: 'secondary', textColor: 'secondary'},
                                    {color: 'success', textColor: 'success'},
                                    {color: 'danger', textColor: 'danger'},
                                    {color: 'warning', textColor: 'warning'},
                                    {color: 'info', textColor: 'info'},
                                    {color: 'light'},
                                    {color: 'dark'},
                                ].map((item, index) => (
                                    <CCol lg={4} key={index}>
                                        <CCard textColor={item.textColor} className={`mb-3 border-${item.color}`}>
                                            <CCardHeader>هدر</CCardHeader>
                                            <CCardBody>
                                                <CCardTitle>{item.color} تایتل کارد ها</CCardTitle>
                                                <CCardText>
                                                    چند متن مثال سریع برای ساختن عنوان کارت و تشکیل آن
                                                    بخش عمده ای از
                                                    محتوای کارت
                                                </CCardText>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                ))}
                            </CRow>
                        </DocsExample>
                        <h3>بوردر بالا</h3>
                        <p className="text-medium-emphasis small">
                            از <a href="https://coreui.io/docs/utilities/borders/">ابزارهای مرزی</a> برای تغییر استفاده کنید
                            فقط <code>رنگ حاشیه</code> یک کارت. توجه داشته باشید که می توانید{' '}
                            ویژگی <code>textColor</code> در <code>&lt;CCard&gt;</code> یا زیر مجموعه ای از
                            محتویات کارت مطابق شکل زیر.
                        </p>
                        <DocsExample href="components/card/#top-border">
                            <CRow>
                                {[
                                    {color: 'primary', textColor: 'primary'},
                                    {color: 'secondary', textColor: 'secondary'},
                                    {color: 'success', textColor: 'success'},
                                    {color: 'danger', textColor: 'danger'},
                                    {color: 'warning', textColor: 'warning'},
                                    {color: 'info', textColor: 'info'},
                                    {color: 'light'},
                                    {color: 'dark'},
                                ].map((item, index) => (
                                    <CCol lg={4} key={index}>
                                        <CCard
                                            textColor={item.textColor}
                                            className={`mb-3 border-top-${item.color} border-top-3`}
                                        >
                                            <CCardHeader>Header</CCardHeader>
                                            <CCardBody>
                                                <CCardTitle>{item.color} card title</CCardTitle>
                                                <CCardText>
                                                    چند متن مثال سریع برای ساختن عنوان کارت و تشکیل آن
                                                    بخش عمده ای از
                                                    محتوای کارت
                                                </CCardText>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                ))}
                            </CRow>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Card</strong> <small>Card groups</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            از گروه‌های کارت برای رندر کردن کارت‌ها به‌عنوان یک عنصر منفرد و متصل با عرض و مساوی استفاده کنید
                            ستون های ارتفاع گروه‌های کارت به صورت پشته‌ای شروع می‌شوند و از <code>display: flex;</code> استفاده می‌کنند
                            با ابعاد یکنواخت که از نقطه شکست <code>sm</code> شروع می شود، متصل می شوند.
                        </p>
                        <DocsExample href="components/card/#card-groups">
                            <CCardGroup>
                                <CCard>
                                    <CCardImage orientation="top" src={ReactImg}/>
                                    <CCardBody>
                                        <CCardTitle>تایتل کارد ها</CCardTitle>
                                        <CCardText>
                                            این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                            محتوای اضافی این محتوا کمی طولانی تر است.
                                        </CCardText>
                                        <CCardText>
                                            <small className="text-medium-emphasis">آخرین به روز رسانی 3 دقیقه قبل</small>
                                        </CCardText>
                                    </CCardBody>
                                </CCard>
                                <CCard>
                                    <CCardImage orientation="top" src={ReactImg}/>
                                    <CCardBody>
                                        <CCardTitle>تایتل کارد ها</CCardTitle>
                                        <CCardText>
                                            این کارت دارای متن پشتیبان در زیر به عنوان ورودی طبیعی به موارد اضافی است
                                            محتوا.
                                        </CCardText>
                                        <CCardText>
                                            <small className="text-medium-emphasis">آخرین به روز رسانی 3 دقیقه قبل</small>
                                        </CCardText>
                                    </CCardBody>
                                </CCard>
                                <CCard>
                                    <CCardImage orientation="top" src={ReactImg}/>
                                    <CCardBody>
                                        <CCardTitle>تایتل کارد ها</CCardTitle>
                                        <CCardText>
                                            این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                            محتوای اضافی این محتوا کمی طولانی تر است.
                                        </CCardText>
                                        <CCardText>
                                            <small className="text-medium-emphasis">آخرین به روز رسانی 3 دقیقه قبل</small>
                                        </CCardText>
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            هنگام استفاده از گروه های کارت با پاورقی، محتوای آنها به طور خودکار ردیف می شود.
                        </p>
                        <DocsExample href="components/card/#card-groups">
                            <CCardGroup>
                                <CCard>
                                    <CCardImage orientation="top" src={ReactImg}/>
                                    <CCardBody>
                                        <CCardTitle>هدر کارت ها</CCardTitle>
                                        <CCardText>
                                            این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                            محتوای اضافی این محتوا کمی طولانی تر است.
                                        </CCardText>
                                    </CCardBody>
                                    <CCardFooter>
                                        <small className="text-medium-emphasis">آخرین به روز رسانی 3 دقیقه قبل</small>
                                    </CCardFooter>
                                </CCard>
                                <CCard>
                                    <CCardImage orientation="top" src={ReactImg}/>
                                    <CCardBody>
                                        <CCardTitle>Card title</CCardTitle>
                                        <CCardText>
                                            این کارت دارای متن پشتیبان در زیر به عنوان ورودی طبیعی به موارد اضافی است
                                            محتوا.
                                        </CCardText>
                                    </CCardBody>
                                    <CCardFooter>
                                        <small className="text-medium-emphasis">آخرین به روز رسانی 3 دقیقه قبل</small>
                                    </CCardFooter>
                                </CCard>
                                <CCard>
                                    <CCardImage orientation="top" src={ReactImg}/>
                                    <CCardBody>
                                        <CCardTitle>تایتل کارت</CCardTitle>
                                        <CCardText>
                                            این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                            محتوای اضافی این کارت حتی محتوای طولانی تری نسبت به اولین نمایش داده شده دارد
                                            که عمل ارتفاع برابر.
                                        </CCardText>
                                    </CCardBody>
                                    <CCardFooter>
                                        <small className="text-medium-emphasis">آخرین به روز رسانی 3 دقیقه قبل</small>
                                    </CCardFooter>
                                </CCard>
                            </CCardGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>کارت</strong> <small>گرید کارت </small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            از مؤلفه <code>CRow</code> استفاده کنید و{' '}
                            <code>&#123;xs|sm|md|lg|xl|xxl&#125;=&#123;&#123; cols: * ویژگی &#125;&#125;</code>
                            برای کنترل تعداد ستون‌های شبکه (که دور کارت‌های شما پیچیده شده‌اند) که در هر ردیف نشان می‌دهید. برای
                            به عنوان مثال، در اینجا <code>xs=&#123;&#123;cols: 1&#125;&#125;</code> نشان داده شده است
                            کارت‌ها روی یک ستون، و <code>md=&#123;&#123;cols: 1&#125;&#125;</code> تقسیم می‌شوند
                            چهار کارت به عرض مساوی در چندین ردیف، از نقطه شکست متوسط ​​به بالا.
                        </p>
                        <DocsExample href="components/card/#grid-cards">
                            <CRow xs={{cols: 1, gutter: 4}} md={{cols: 2}}>
                                <CCol xs>
                                    <CCard>
                                        <CCardImage orientation="top" src={ReactImg}/>
                                        <CCardBody>
                                            <CCardTitle>تایتل کارت </CCardTitle>
                                            <CCardText>
                                                این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                                محتوای اضافی این محتوا کمی طولانی تر است.
                                            </CCardText>
                                        </CCardBody>
                                        <CCardFooter>
                                            <small className="text-medium-emphasis">آخرین به روز رسانی 3 دقیقه قبل</small>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                                <CCol xs>
                                    <CCard>
                                        <CCardImage orientation="top" src={ReactImg}/>
                                        <CCardBody>
                                            <CCardTitle>هدر کارت </CCardTitle>
                                            <CCardText>
                                                این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                                محتوای اضافی این محتوا کمی طولانی تر است.
                                            </CCardText>
                                        </CCardBody>
                                        <CCardFooter>
                                            <small className="text-medium-emphasis">اخری ابدیت 3 دقیقه پیش</small>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                                <CCol xs>
                                    <CCard>
                                        <CCardImage orientation="top" src={ReactImg}/>
                                        <CCardBody>
                                            <CCardTitle>کارت هدر</CCardTitle>
                                            <CCardText>
                                                این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                                محتوای اضافی این محتوا کمی طولانی تر است.
                                            </CCardText>
                                        </CCardBody>
                                        <CCardFooter>
                                            <small className="text-medium-emphasis">اخرین ابدیت چند قیقه پیش </small>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                                <CCol xs>
                                    <CCard>
                                        <CCardImage orientation="top" src={ReactImg}/>
                                        <CCardBody>
                                            <CCardTitle>هدر تایتل</CCardTitle>
                                            <CCardText>
                                                این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                                محتوای اضافی این محتوا کمی طولانی تر است.
                                            </CCardText>
                                        </CCardBody>
                                        <CCardFooter>
                                            <small className="text-medium-emphasis">اخرین ابدیت چند دقیقه پیش</small>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            آن را به <code>md=&#123;&#123; cols: 3&#125;&#125;</code> و شما
                            بسته بندی کارت چهارم
                        </p>
                        <DocsExample href="components/card/#grid-cards">
                            <CRow xs={{cols: 1, gutter: 4}} md={{cols: 3}}>
                                <CCol xs>
                                    <CCard>
                                        <CCardImage orientation="top" src={ReactImg}/>
                                        <CCardBody>
                                            <CCardTitle>تایتل کارت</CCardTitle>
                                            <CCardText>
                                                این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                                محتوای اضافی این محتوا کمی طولانی تر است.
                                            </CCardText>
                                        </CCardBody>
                                        <CCardFooter>
                                            <small className="text-medium-emphasis"> اخرین ابدپت چند دقیقه پیش</small>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                                <CCol xs>
                                    <CCard>
                                        <CCardImage orientation="top" src={ReactImg}/>
                                        <CCardBody>
                                            <CCardTitle>تایتیل کارت ها</CCardTitle>
                                            <CCardText>
                                                این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                                محتوای اضافی این محتوا کمی طولانی تر است.
                                            </CCardText>
                                        </CCardBody>
                                        <CCardFooter>
                                            <small className="text-medium-emphasis">اخرین ابدیت چند دقیقه پیش</small>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                                <CCol xs>
                                    <CCard>
                                        <CCardImage orientation="top" src={ReactImg}/>
                                        <CCardBody>
                                            <CCardTitle>کارت تایتل</CCardTitle>
                                            <CCardText>
                                                این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                                محتوای اضافی این محتوا کمی طولانی تر است.
                                            </CCardText>
                                        </CCardBody>
                                        <CCardFooter>
                                            <small className="text-medium-emphasis">اخرین ابدیت چند دقیقه پیش</small>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                                <CCol xs>
                                    <CCard>
                                        <CCardImage orientation="top" src={ReactImg}/>
                                        <CCardBody>
                                            <CCardTitle>کارت تایتل</CCardTitle>
                                            <CCardText>
                                                این یک کارت گسترده تر با متن پشتیبانی در زیر به عنوان یک ورودی طبیعی است
                                                محتوای اضافی این محتوا کمی طولانی تر است.
                                            </CCardText>
                                        </CCardBody>
                                        <CCardFooter>
                                            <small className="text-medium-emphasis">اخرین ابدیت چند دقیقه پیش</small>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Cards
