//چک باکس و رادیو باتمدر سایدر بار
import React from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CFormCheck, CFormSwitch, CRow} from '@coreui/react'
import {DocsExample} from 'src/components'

const ChecksRadios = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Checkbox</strong>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="forms/checks-radios">
                            <CFormCheck id="flexCheckDefault" label="Default checkbox"/>
                            <CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked/>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Checkbox</strong> <small>Disabled</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            ویژگی <code>disabled</code> و <code>&lt;label&gt;</code>های مرتبط را اضافه کنید
                            به طور خودکار برای مطابقت با رنگ روشن تر استایل می شوند تا به نشان دادن آن کمک کنند
                            وضعیت ورودی
                        </p>
                        <DocsExample href="forms/checks-radios#disabled">
                            <CFormCheck label="Disabled checkbox" disabled/>
                            <CFormCheck label="Disabled checked checkbox" defaultChecked disabled/>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Radio</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            ویژگی <code>disabled</code> و <code>&lt;label&gt;</code>های مرتبط را اضافه کنید
                            به طور خودکار برای مطابقت با رنگ روشن تر استایل می شوند تا به نشان دادن آن کمک کنند
                            وضعیت ورودی
                        </p>
                        <DocsExample href="forms/checks-radios#radios">
                            <CFormCheck
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                label="Default radio"
                            />
                            <CFormCheck
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                label="Checked radio"
                                defaultChecked
                            />
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Radio</strong> <small>Disabled</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="forms/checks-radios#disabled-1">
                            <CFormCheck
                                type="radio"
                                name="flexRadioDisabled"
                                id="flexRadioDisabled"
                                label="Disabled radio"
                                disabled
                            />
                            <CFormCheck
                                type="radio"
                                name="flexRadioDisabled"
                                id="flexRadioCheckedDisabled"
                                label="Disabled checked radio"
                                defaultChecked
                                disabled
                            />
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Switches</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            یک سوئیچ دارای نشانه گذاری یک چک باکس سفارشی است اما از <code>switch</code> بولی استفاده می کند.
                            به درستی رندر سوئیچ کلید. سوئیچ ها همچنین از <code>غیرفعال</code>{' '} پشتیبانی می کنند
                            صفت.
                        </p>
                        <DocsExample href="forms/checks-radios#switches">
                            <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>
                            <CFormSwitch
                                label="Checked switch checkbox input"
                                id="formSwitchCheckChecked"
                                defaultChecked
                            />
                            <CFormSwitch
                                label="Disabled switch checkbox input"
                                id="formSwitchCheckDisabled"
                                disabled
                            />
                            <CFormSwitch
                                label="Disabled checked switch checkbox input"
                                id="formSwitchCheckCheckedDisabled"
                                defaultChecked
                                disabled
                            />
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Switches</strong> <small>Sizes</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="forms/checks-radios#sizes">
                            <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>
                            <CFormSwitch
                                size="lg"
                                label="Large switch checkbox input"
                                id="formSwitchCheckDefaultLg"
                            />
                            <CFormSwitch
                                size="xl"
                                label="Extra large switch checkbox input"
                                id="formSwitchCheckDefaultXL"
                            />
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Checks and Radios</strong> <small>Default layout (stacked)</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            به‌طور پیش‌فرض، هر تعداد چک باکس و رادیو که برادر و برادر فوری هستند، خواهند بود
                            به صورت عمودی روی هم چیده شده و با فاصله مناسب.
                        </p>
                        <DocsExample href="forms/checks-radios#default-stacked">
                            <CFormCheck id="defaultCheck1" label="Default checkbox"/>
                            <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled/>
                        </DocsExample>
                        <DocsExample href="forms/checks-radios#default-stacked">
                            <CFormCheck
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="option1"
                                label="Default radio"
                                defaultChecked
                            />
                            <CFormCheck
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios2"
                                value="option2"
                                label="Second default radio"
                            />
                            <CFormCheck
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios3"
                                value="option3"
                                label="Disabled radio"
                                disabled
                            />
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Checks and Radios</strong> <small>Inline</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            با افزودن <code>inline</code>{' '} کادرهای انتخاب یا رادیوها را در همان ردیف افقی گروه بندی کنید
                            ویژگی بولی به هر <code>&lt;CFormCheck&gt;</code>.
                        </p>
                        <DocsExample href="forms/checks-radios#inline">
                            <CFormCheck inline id="inlineCheckbox1" value="option1" label="1"/>
                            <CFormCheck inline id="inlineCheckbox2" value="option2" label="2"/>
                            <CFormCheck
                                inline
                                id="inlineCheckbox3"
                                value="option3"
                                label="3 (disabled)"
                                disabled
                            />
                        </DocsExample>
                        <DocsExample href="forms/checks-radios#inline">
                            <CFormCheck
                                inline
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineCheckbox1"
                                value="option1"
                                label="1"
                            />
                            <CFormCheck
                                inline
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineCheckbox2"
                                value="option2"
                                label="2"
                            />
                            <CFormCheck
                                inline
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineCheckbox3"
                                value="option3"
                                label="3 (disabled)"
                                disabled
                            />
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Checks and Radios</strong> <small>Without labels</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            به یاد داشته باشید که هنوز نوعی نام در دسترس برای فناوری های کمکی (برای
                            به عنوان مثال، با استفاده از <code>aria-label</code>).
                        </p>
                        <DocsExample href="forms/checks-radios#without-labels">
                            <div>
                                <CFormCheck id="checkboxNoLabel" value="" aria-label="..."/>
                            </div>
                            <div>
                                <CFormCheck
                                    type="radio"
                                    name="radioNoLabel"
                                    id="radioNoLabel"
                                    value=""
                                    aria-label="..."
                                />
                            </div>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Toggle buttons</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            با استفاده از <code>button</code> boolean چک باکس های دکمه مانند و دکمه های رادیویی ایجاد
                            کنید
                            ویژگی در مؤلفه <code>&lt;CFormCheck&gt;</code>. این دکمه های ضامن می توانند
                            در صورت نیاز بیشتر در یک گروه دکمه گروه بندی شوند.
                        </p>
                        <DocsExample href="forms/checks-radios#toggle-buttons">
                            <CFormCheck
                                button={{color: 'primary '}}
                                id="btn-check"
                                autoComplete="off"
                                label="Single toggle"
                            />
                        </DocsExample>
                        <DocsExample href="forms/checks-radios#toggle-buttons">
                            <CFormCheck
                                button={{color: 'primary '}}
                                id="btn-check-2"
                                autoComplete="off"
                                label="Checked"
                                defaultChecked
                            />
                        </DocsExample>
                        <DocsExample href="forms/checks-radios#toggle-buttons">
                            <CFormCheck
                                button={{color: 'primary '}}
                                id="btn-check-3"
                                autoComplete="off"
                                label="Disabled"
                                disabled
                            />
                        </DocsExample>
                        <h3>Radio toggle buttons</h3>
                        <DocsExample href="forms/checks-radios#toggle-buttons">
                            <CFormCheck
                                button={{color: 'secondary'}}
                                type="radio"
                                name="options"
                                id="option1"
                                autoComplete="off"
                                label="Checked"
                                defaultChecked
                            />
                            <CFormCheck
                                button={{color: 'secondary'}}
                                type="radio"
                                name="options"
                                id="option2"
                                autoComplete="off"
                                label="Radio"
                            />
                            <CFormCheck
                                button={{color: 'secondary'}}
                                type="radio"
                                name="options"
                                id="option3"
                                autoComplete="off"
                                label="Radio"
                                disabled
                            />
                            <CFormCheck
                                button={{color: 'secondary'}}
                                type="radio"
                                name="options"
                                id="option4"
                                autoComplete="off"
                                label="Radio"
                            />
                        </DocsExample>
                        <h3>Outlined styles</h3>
                        <p className="text-medium-emphasis small">
                            انواع مختلف دکمه، مانند سبک های مختلف مشخص شده، پشتیبانی می شوند. </p>
                        <DocsExample href="forms/checks-radios#toggle-buttons">
                            <div>
                                <CFormCheck
                                    button={{color: 'primary', variant: 'outline'}}
                                    id="btn-check-outlined"
                                    autoComplete="off"
                                    label="Single toggle"
                                />
                            </div>
                            <div>
                                <CFormCheck
                                    button={{color: 'secondary', variant: 'outline'}}
                                    id="btn-check-2-outlined"
                                    autoComplete="off"
                                    label="Checked"
                                    defaultChecked
                                />
                            </div>
                            <div>
                                <CFormCheck
                                    button={{color: 'success', variant: 'outline'}}
                                    type="radio"
                                    name="options-outlined"
                                    id="success-outlined"
                                    autoComplete="off"
                                    label="Radio"
                                    defaultChecked
                                />
                                <CFormCheck
                                    button={{color: 'danger', variant: 'outline'}}
                                    type="radio"
                                    name="options-outlined"
                                    id="danger-outlined"
                                    autoComplete="off"
                                    label="Radio"
                                />
                            </div>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ChecksRadios
