/// این یک صفحه برای ساید بار سمت چپ پروژه هستش
//این صفحه لیست ها می باشد که در ساید بار موجود است
import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormCheck,
    CListGroup,
    CListGroupItem,
    CRow,
} from '@coreui/react'
import {DocsExample} from 'src/components'

const ListGroups = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>گروه React List</strong> <small>مثال اصلی</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            گروه لیست پیش فرض یک لیست نامرتب با آیتم ها و کلاس های CSS مناسب است.
                            با گزینه‌های زیر، یا در صورت نیاز با CSS خود، بر روی آن بسازید.
                        </p>
                        <DocsExample href="components/list-group">
                            <CListGroup>
                                <CListGroupItem>تست شماره 1</CListGroupItem>
                                <CListGroupItem>تست شماره2</CListGroupItem>
                                <CListGroupItem>تست شماره3</CListGroupItem>
                                <CListGroupItem>تست شماره4</CListGroupItem>
                                <CListGroupItem>تست شماره5</CListGroupItem>
                            </CListGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React List Group</strong> <small>Active items</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            ویژگی بولین <code>active</code> را به <code>&lt;CListGroupItem&gt;</code> اضافه کنید
                            انتخاب فعال فعلی را نشان می دهد.
                        </p>
                        <DocsExample href="components/list-group/#active-items">
                            <CListGroup>
                                <CListGroupItem active>شماره1 </CListGroupItem>
                                <CListGroupItem>شماره2</CListGroupItem>
                                <CListGroupItem>شماره3</CListGroupItem>
                                <CListGroupItem>شماره4</CListGroupItem>
                                <CListGroupItem>شماره5</CListGroupItem>
                            </CListGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React List Group</strong> <small>Disabled items</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            ویژگی بولی <code>disabled</code> را به <code>&lt;CListGroupItem&gt;</code> اضافه کنید
                            غیرفعال به نظر برسد.
                        </p>
                        <DocsExample href="components/list-group/#disabled-items">
                            <CListGroup>
                                <CListGroupItem>شماره5</CListGroupItem>
                                <CListGroupItem>شماره5</CListGroupItem>
                                <CListGroupItem>شماره5</CListGroupItem>
                                <CListGroupItem>شماره5</CListGroupItem>
                                <CListGroupItem>شماره5</CListGroupItem>
                            </CListGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React List Group</strong> <small>Links and buttons</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            از <code>&lt;a&gt;</code>ها یا <code>&lt;button&gt;</code>s برای ایجاد{' '} استفاده کنید
                            <em>عملکردپذیر</em> با افزودن{' '} موارد گروه را با حالت های شناور، غیرفعال و فعال فهرست
                            کنید
                            <code>component=&#34;a|دکمه&#34;</code>. ما این شبه کلاس ها را برای اطمینان از هم جدا می
                            کنیم
                            لیست گروه های ساخته شده از عناصر غیر تعاملی (مانند <code>&lt;li&gt;</code>s یا{' '}
                            <code>&lt;div&gt;</code>
                            s) هزینه کلیک یا ضربه زدن را ارائه نکنید.
                        </p>
                        <DocsExample href="components/list-group/#links-and-buttons">
                            <CListGroup>
                                <CListGroupItem component="a" href="#" active>
                                    شماره یک
                                </CListGroupItem>
                                <CListGroupItem component="a" href="#">
                                    شماره دو
                                </CListGroupItem>
                                <CListGroupItem component="a" href="#">
                                    شماره سه
                                </CListGroupItem>
                                <CListGroupItem component="a" href="#">
                                    شماره چهار
                                </CListGroupItem>
                                <CListGroupItem component="a" href="#" disabled>
                                    شماره پنج
                                </CListGroupItem>
                            </CListGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React List Group</strong> <small>Flush</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            ویژگی بولین <code>flush</code> را اضافه کنید تا برخی از حاشیه ها و گوشه های گرد را حذف کنید
                            فهرست اقلام را به صورت لبه به لبه در یک محفظه والد رندر کنید (مثلاً کارت).
                        </p>
                        <DocsExample href="components/list-group/#flush">
                            <CListGroup flush>
                                <CListGroupItem active>شماره1 </CListGroupItem>
                                <CListGroupItem>شماره2</CListGroupItem>
                                <CListGroupItem>شماره3</CListGroupItem>
                                <CListGroupItem>شماره4</CListGroupItem>
                                <CListGroupItem>شماره5</CListGroupItem>
                            </CListGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React List Group</strong> <small>Horizontal</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            اضافه کردن <code>layout=&#34;horizontal&#34;</code> برای تغییر طرح بندی موارد گروه لیست
                            از عمودی به افقی در تمام نقاط شکست. از طرف دیگر، یک پاسخگو را انتخاب کنید
                            نوع <code>.layout=&#34;horizontal-&#123;sm | md | lg | xl | xxl&#125;&#34;</code>{' '}
                            برای ایجاد یک گروه لیست به صورت افقی که از آن نقطه شکست شروع می شود{' '}
                            <code>دقیقه عرض</code>. در حال حاضر{' '}
                            <strong>گروه‌های فهرست افقی را نمی‌توان با گروه‌های فهرست هم‌سطح ترکیب کرد.</strong>
                        </p>
                        <DocsExample href="components/list-group/#flush">
                            {['', '-sm', '-md', '-lg', '-xl', '-xxl'].map((breakpoint, index) => (
                                <CListGroup className="mb-2" layout={`horizontal${breakpoint}`} key={index}>
                                    <CListGroupItem>شماره1 </CListGroupItem>
                                    <CListGroupItem>شماره2</CListGroupItem>
                                    <CListGroupItem>شماره3</CListGroupItem>

                                </CListGroup>
                            ))}
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React List Group</strong> <small>Contextual classes</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            از کلاس های متنی برای استایل دادن به آیتم های لیست با پس زمینه و رنگ حالت دار استفاده
                            کنید. </p>
                        <DocsExample href="components/list-group/#contextual-classes">
                            <CListGroup>
                                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
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
                                    <CListGroupItem color={color} key={index}>
                                        یک مورد ساده از فهرست {color}
                                    </CListGroupItem>
                                ))}
                            </CListGroup>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            کلاس های متنی همچنین با <code>&lt;a&gt;</code>s یا{' '} کار می کنند
                            <code>&lt;button&gt;</code>ها. توجه داشته باشید اضافه شدن سبک های شناور در اینجا وجود ندارد
                            در مثال قبلی همچنین وضعیت <code>active</code> پشتیبانی می شود. آن را اعمال کنید
                            یک انتخاب فعال را در یک مورد گروه فهرست متنی نشان می دهد.
                        </p>
                        <DocsExample href="components/list-group/#contextual-classes">
                            <CListGroup>
                                <CListGroupItem component="a" href="#">
                                    Dapibus ac facilisis in
                                </CListGroupItem>
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
                                    <CListGroupItem component="a" href="#" color={color} key={index}>یک مورد ساده از فهرست {color}
                                    </CListGroupItem>
                                ))}
                            </CListGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React List Group</strong> <small>With badges</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            برای نمایش تعداد خوانده‌نشده، فعالیت و موارد دیگر، نشان‌ها را به هر مورد گروه فهرست اضافه کنید.
                        </p>
                        <DocsExample href="components/list-group/#with-badges">
                            <CListGroup>
                                <CListGroupItem className="d-flex justify-content-between align-items-center">
                                شماره یک
                                    <CBadge color="primary" shape="rounded-pill">
                                        14
                                    </CBadge>
                                </CListGroupItem>
                                <CListGroupItem className="d-flex justify-content-between align-items-center">
                                 شماره دو
                                    <CBadge color="primary" shape="rounded-pill">
                                        2
                                    </CBadge>
                                </CListGroupItem>
                                <CListGroupItem className="d-flex justify-content-between align-items-center">
                               شماره سه
                                    <CBadge color="primary" shape="rounded-pill">
                                        1
                                    </CBadge>
                                </CListGroupItem>
                            </CListGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React List Group</strong> <small>Custom content</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            با
                            کمک از <a href="https://coreui.io/docs/utilities/flex/">ابزارهای flexbox</a>.
                        </p>
                        <DocsExample href="components/list-group/#custom-content">
                            <CListGroup>
                                <CListGroupItem component="a" href="#" active>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">
                               تا اون موقع دیگه نگران بارداریم نباشم. اما Maecenas به لبخند نیاز دارد
                                        کازینو چاپلوس است
                                    </p>
                                    <small>Donec id elit non mi porta.</small>
                                </CListGroupItem>
                                <CListGroupItem component="a" href="#">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">لیست ایتم های گروه</h5>
                                        <small className="text-medium-emphasis">سه روز پیش</small>
                                    </div>
                                    <p className="mb-1">
                               تا اون موقع دیگه نگران بارداریم نباشم. اما Maecenas به لبخند نیاز دارد
                                        کازینو چاپلوس است
                                    </p>
                                    <small className="text-medium-emphasis">شماره یک.</small>
                                </CListGroupItem>
                                <CListGroupItem component="a" href="#">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">لیست  ایتم های گروهی</h5>
                                        <small className="text-medium-emphasis">3 days ago</small>
                                    </div>
                                    <p className="mb-1">
                                        تا اون موقع دیگه نگران بارداریم نباشم. اما Maecenas به لبخند نیاز دارد
                                        کازینو چاپلوس است
                                    </p>
                                    <small className="text-medium-emphasis">شماره سه.</small>
                                </CListGroupItem>
                            </CListGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React List Group</strong> <small>Checkboxes and radios</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            چک باکس‌ها و رادیوهای CoreUI را در فهرست موارد گروه قرار دهید و به‌عنوان سفارشی‌سازی کنید
                            مورد نیاز است.
                        </p>
                        <DocsExample href="components/list-group/#checkboxes-and-radios">
                            <CListGroup>
                                <CListGroupItem>
                                    <CFormCheck label="شماره یک"/>
                                </CListGroupItem>
                                <CListGroupItem>
                                    <CFormCheck label="شماره دو" defaultChecked/>
                                </CListGroupItem>
                                <CListGroupItem>
                                    <CFormCheck label="شماره سه" defaultChecked/>
                                </CListGroupItem>
                                <CListGroupItem>
                                    <CFormCheck label="شمماره چهار"/>
                                </CListGroupItem>
                                <CListGroupItem>
                                    <CFormCheck label="شمار ه پنج"/>
                                </CListGroupItem>
                            </CListGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ListGroups
