/// این یک صفحه برای ساید بار سمت چپ پروژه هستش
import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCarousel,
    CCarouselCaption,
    CCarouselItem,
    CCol,
    CRow,
} from '@coreui/react'
import {DocsExample} from 'src/components'

import AngularImg from 'src/assets/images/angular.jpg'
import ReactImg from 'src/assets/images/react.jpg'
import VueImg from 'src/assets/images/vue.jpg'

const slidesLight = [
    'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23AAA%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23BBB%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23EEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23E5E5E5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
]

const Carousels = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>کروسل ها</strong> <small> </small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">اینجا یک چرخ فلک با اسلاید است</p>
                        <DocsExample href="components/carousel">
                            <CCarousel>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={ReactImg} alt="slide 1"/>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={AngularImg} alt="slide 2"/>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={VueImg} alt="slide 3"/>
                                </CCarouselItem>
                            </CCarousel>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Carousel</strong> <small>With controls</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            افزودن کنترل های قبلی و بعدی توسط ویژگی <code>controls</code>.
                        </p>
                        <DocsExample href="components/carousel/#with-controls">
                            <CCarousel controls>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={ReactImg} alt="slide 1"/>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={AngularImg} alt="slide 2"/>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={VueImg} alt="slide 3"/>
                                </CCarouselItem>
                            </CCarousel>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>چرخ و فلک</strong> <small>دارای نشانگر</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            می توانید نشانگرها را به چرخ و فلک وصل کنید، در طول کنترل ها را نیز.
                        </p>
                        <DocsExample href="components/carousel/#with-indicators">
                            <CCarousel controls indicators>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={ReactImg} alt="slide 1"/>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={AngularImg} alt="slide 2"/>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={VueImg} alt="slide 3"/>
                                </CCarouselItem>
                            </CCarousel>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>چرخ و فلک</strong> <small>با شرح</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            می‌توانید با عنصر <code>&lt;CCarouselCaption&gt;</code> به اسلایدها زیرنویس اضافه کنید
                            در هر <code>&lt;CCarouselItem&gt;</code>. آنها را می توان بلافاصله در پنهان کرد
                            درگاه های نمایش کوچکتر، همانطور که در زیر نشان داده شده است، با اختیاری{' '}
                            <a href="https://coreui.io/4.0/utilities/display">ابزارهای نمایش</a>. ما آنها را پنهان می
                            کنیم
                            با <code>.d-none</code> و آنها را روی دستگاه‌های متوسط ​​با{' '} بکشید
                            <code>.d-md-block</code>.
                        </p>
                        <DocsExample href="components/carousel/#with-captions">
                            <CCarousel controls indicators>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={ReactImg} alt="slide 1"/>
                                    <CCarouselCaption className="d-none d-md-block"><h5>اولین برچسب اسلاید</h5>
                                        <p>برخی از محتوای نگهدارنده مکان نماینده برای اسلاید اول.</p>
                                    </CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={AngularImg} alt="slide 2"/>
                                    <CCarouselCaption className="d-none d-md-block">
                                        <h5>دومین برچسب اسلاید</h5>
                                        <p>برخی از محتوای نگهدارنده مکان نماینده برای اسلاید اول.</p>
                                    </CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={VueImg} alt="slide 3"/>
                                    <CCarouselCaption className="d-none d-md-block">
                                        <h5>سومین برچسب اسلاید</h5>
                                        <p>برخی از محتوای نگهدارنده مکان نماینده برای اسلاید اول.</p>
                                    </CCarouselCaption>
                                </CCarouselItem>
                            </CCarousel>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Carousel</strong> <small>Crossfade</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            برای متحرک سازی اسلایدها <code>transition=&#34;crossfade&#34;</code> را به چرخ فلک خود اضافه کنید
                            با یک انتقال محو به جای یک اسلاید.
                        </p>
                        <DocsExample href="components/carousel/#crossfade">
                            <CCarousel controls transition="crossfade">
                                <CCarouselItem>
                                    <img className="d-block w-100" src={ReactImg} alt="slide 1"/>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={AngularImg} alt="slide 2"/>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={VueImg} alt="slide 3"/>
                                </CCarouselItem>
                            </CCarousel>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Carousel</strong> <small>Dark variant</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            برای کنترل‌های تیره‌تر، ویژگی <code>dark</code> را به <code>CCarousel</code> اضافه کنید.
                            شاخص ها و شرح ها کنترل‌ها از پر سفید پیش‌فرضشان معکوس شده‌اند
                            با ویژگی <code>filter</code> CSS. زیرنویس‌ها و کنترل‌ها Sass اضافی دارند
                            متغیرهایی که <code>color</code> و <code>background-color</code> را سفارشی می کنند.
                        </p>
                        <DocsExample href="components/carousel/#dark-variant">
                            <CCarousel controls indicators dark>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={slidesLight[0]} alt="slide 1"/>
                                    <CCarouselCaption className="d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={slidesLight[1]} alt="slide 2"/>
                                    <CCarouselCaption className="d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={slidesLight[2]} alt="slide 3"/>
                                    <CCarouselCaption className="d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </CCarouselCaption>
                                </CCarouselItem>
                            </CCarousel>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Carousels
