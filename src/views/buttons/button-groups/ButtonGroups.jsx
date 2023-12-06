// این هم صفحه لیست دکمه هاست  که در اینن صحه قرار دارد وبرای ساید بار است
import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButtonGroup,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const ButtonGroups = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Basic example</span>
          </CCardHeader>
          <CCardBody>
            <p>
              مجموعه ای از اجزای <code>&lt;CButton&gt;</code> را در{' '} بپیچید
              <code>&lt;CButtonGroup&gt;</code>.{' '}
            </p>
            <DocsExample href="components/button-group">
              <CButtonGroup role="group" aria-label="Basic example">
                <CButton color="primary">دکمه</CButton>
                <CButton color="primary">دکمه</CButton>
                <CButton color="primary">دکمه</CButton>
              </CButtonGroup>
            </DocsExample>
            <p>
              این کلاس‌ها همچنین می‌توانند به گروه‌هایی از پیوندها، به عنوان جایگزینی برای{' '} اضافه شوند.
              اجزای <code>&lt;CNav&gt;</code>.جهت ها
            </p>
            <DocsExample href="components/button-group">
              <CButtonGroup>
                <CButton href="#" color="primary" active>
                  Active link
                </CButton>
                <CButton href="#" color="primary">
                  Link
                </CButton>
                <CButton href="#" color="primary">
                  Link
                </CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Mixed styles</span>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/button-group#mixed-styles">
              <CButtonGroup role="group" aria-label="Basic mixed styles example">
                <CButton color="danger">جهت ها</CButton>
                <CButton color="warning">جهت ها</CButton>
                <CButton color="success">جهت ها</CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Outlined styles</span>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/button-group#outlined-styles">
              <CButtonGroup role="group" aria-label="Basic outlined example">
                <CButton color="primary" variant="outline">
                  Left
                </CButton>
                <CButton color="primary" variant="outline">
                  Middle
                </CButton>
                <CButton color="primary" variant="outline">
                  Right
                </CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Checkbox and radio button groups</span>
          </CCardHeader>
          <CCardBody>
            <p>
              چک باکس دکمه مانند و دکمه های رادیویی را در یک دکمه بدون درز با هم ترکیب کنید
              گروه
            </p>
            <DocsExample href="components/button-group#checkbox-and-radio-button-groups">
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  button={{ variant: 'outline' }}
                  id="btncheck1"
                  autoComplete="off"
                  label="Checkbox 1"
                />
                <CFormCheck
                  button={{ variant: 'outline' }}
                  id="btncheck2"
                  autoComplete="off"
                  label="Checkbox 2"
                />
                <CFormCheck
                  button={{ variant: 'outline' }}
                  id="btncheck3"
                  autoComplete="off"
                  label="Checkbox 3"
                />
              </CButtonGroup>
            </DocsExample>
            <DocsExample href="components/button-group#checkbox-and-radio-button-groups">
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ variant: 'outline' }}
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  label="Radio 1"
                />
                <CFormCheck
                  type="radio"
                  button={{ variant: 'outline' }}
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  label="Radio 2"
                />
                <CFormCheck
                  type="radio"
                  button={{ variant: 'outline' }}
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                  label="Radio 3"
                />
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Button toolbar</span>
          </CCardHeader>
          <CCardBody>
            <p>
              برای اجزای پیچیده‌تر، مجموعه‌ای از گروه‌های دکمه را به نوار ابزار دکمه‌ها بپیوندید. استفاده کنید
              کلاس های کاربردی در صورت نیاز برای فاصله بین گروه ها، دکمه ها و موارد دیگر.
            </p>
            <DocsExample href="components/button-group#button-toolbar">
              <CButtonToolbar role="group" aria-label="Toolbar with button groups">
                <CButtonGroup className="me-2" role="group" aria-label="First group">
                  <CButton color="primary">1</CButton>
                  <CButton color="primary">2</CButton>
                  <CButton color="primary">3</CButton>
                  <CButton color="primary">4</CButton>
                </CButtonGroup>
                <CButtonGroup className="me-2" role="group" aria-label="Second group">
                  <CButton color="secondary">5</CButton>
                  <CButton color="secondary">6</CButton>
                  <CButton color="secondary">7</CButton>
                </CButtonGroup>
                <CButtonGroup className="me-2" role="group" aria-label="Third group">
                  <CButton color="info">8</CButton>
                </CButtonGroup>
              </CButtonToolbar>
            </DocsExample>
            <p>
              برای اجزای پیچیده‌تر، مجموعه‌ای از گروه‌های دکمه را به نوار ابزار دکمه‌ها بپیوندید. استفاده کنید
              کلاس های کاربردی در صورت نیاز برای فاصله بین گروه ها، دکمه ها و موارد دیگر.
            </p>
            <DocsExample href="components/button-group#button-toolbar">
              <CButtonToolbar className="mb-3" role="group" aria-label="Toolbar with button groups">
                <CButtonGroup className="me-2" role="group" aria-label="First group">
                  <CButton color="secondary" variant="outline">
                    1
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    2
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    3
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    4
                  </CButton>
                </CButtonGroup>
                <CInputGroup>
                  <CInputGroupText>@</CInputGroupText>
                  <CFormInput
                    placeholder="Input group example"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                  />
                </CInputGroup>
              </CButtonToolbar>
              <CButtonToolbar
                className="justify-content-between"
                role="group"
                aria-label="Toolbar with button groups"
              >
                <CButtonGroup className="me-2" role="group" aria-label="First group">
                  <CButton color="secondary" variant="outline">
                    1
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    2
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    3
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    4
                  </CButton>
                </CButtonGroup>
                <CInputGroup>
                  <CInputGroupText>@</CInputGroupText>
                  <CFormInput
                    placeholder="Input group example"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                  />
                </CInputGroup>
              </CButtonToolbar>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Sizing</span>
          </CCardHeader>
          <CCardBody>
            <p>
              از طرف دیگر، برای پیاده سازی کلاس های اندازه دکمه برای هر دکمه در یک گروه، تنظیم کنید{' '}
              ویژگی <code>size</code> برای همه <code>&lt;CButtonGroup&gt;</code>&#39;ها، از جمله
              هر کدام هنگام تودرتو کردن گروه های متعدد.
            </p>
            <DocsExample href="components/button-group#sizing">
              <CButtonGroup size="lg" role="group" aria-label="Large button group">
                <CButton color="dark" variant="outline">
                  چپ
                </CButton>
                <CButton color="dark" variant="outline">
                  وسط
                </CButton>
                <CButton color="dark" variant="outline">
                  راست
                </CButton>
              </CButtonGroup>
              <br />
              <CButtonGroup role="group" aria-label="Default button group">
                <CButton color="dark" variant="outline">
                  چپ
                </CButton>
                <CButton color="dark" variant="outline">
                  وسط
                </CButton>
                <CButton color="dark" variant="outline">
                  راست
                </CButton>
              </CButtonGroup>
              <br />
              <CButtonGroup size="sm" role="group" aria-label="Small button group">
                <CButton color="dark" variant="outline">
                  چپ
                </CButton>
                <CButton color="dark" variant="outline">
                  وسط
                </CButton>
                <CButton color="dark" variant="outline">
                  راست
                </CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Nesting</span>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              یک <code>&lt;CButtonGroup&gt;</code> داخل دیگری قرار دهید{' '}
              <code>&lt;CButtonGroup&gt;</code> هنگامی که به منوهای کشویی همراه با یک سری نیاز دارید
              از دکمه ها
            </p>
            <DocsExample href="components/button-group#nesting">
              <CButtonGroup role="group" aria-label="Button group with nested dropdown">
                <CButton color="primary">1</CButton>
                <CButton color="primary">2</CButton>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="primary">دراپ دون</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">اکشن</CDropdownItem>
                    <CDropdownItem href="#">اکشن دیگر</CDropdownItem>
                    <CDropdownItem href="#">یک چیز دیگر </CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">متن تستی</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Vertical variation</span>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
                مجموعه‌ای از دکمه‌ها را ایجاد کنید که به‌جای افقی، به‌صورت عمودی روی هم قرار گرفته باشند.{' '}
                <strong>کشویی دکمه تقسیم در اینجا پشتیبانی نمی شود.</strong>
            </p>
            <DocsExample href="components/button-group/#vertical-variation">
              <CButtonGroup vertical role="group" aria-label="Vertical button group">
                <CButton color="dark">دکمه</CButton>
                <CButton color="dark">دکمه</CButton>
                <CButton color="dark">دکمه</CButton>
                <CButton color="dark">دکمه</CButton>
                <CButton color="dark">دکمه</CButton>
                <CButton color="dark">دکمه</CButton>
                <CButton color="dark">دکمه</CButton>
              </CButtonGroup>
            </DocsExample>
            <DocsExample href="components/button-group/#vertical-variation">
              <CButtonGroup vertical role="group" aria-label="Vertical button group">
                <CButton color="primary">دکمه</CButton>
                <CButton color="primary">دکمه</CButton>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="primary">دراپ دون</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">اکشن</CDropdownItem>
                    <CDropdownItem href="#">اکشن  </CDropdownItem>
                    <CDropdownItem href="#">اکشن  </CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">اکشن  </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CButton color="primary">دکمه</CButton>
                <CButton color="primary">دکمه</CButton>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">اکشن</CDropdownItem>
                    <CDropdownItem href="#">اکشن دیگر</CDropdownItem>
                    <CDropdownItem href="#">یک پیز دیگر</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">یک چیز دیگر</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="primary">دراپ دون</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">متن تستی</CDropdownItem>
                    <CDropdownItem href="#">متن تستی  </CDropdownItem>
                    <CDropdownItem href="#">متن تستی    </CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">متن تستی</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="primary">دراپ دون</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">فعالیت </CDropdownItem>
                    <CDropdownItem href="#">فعالیت دیگر</CDropdownItem>
                    <CDropdownItem href="#">یک چیز دیگر اینجا</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">متن تستی</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CButtonGroup>
            </DocsExample>
            <DocsExample href="components/button-group/#vertical-variation">
              <CButtonGroup vertical role="group" aria-label="Vertical button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="vbtnradio"
                  id="vbtnradio1"
                  autoComplete="off"
                  label="Radio 1"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="vbtnradio"
                  id="vbtnradio2"
                  autoComplete="off"
                  label="Radio 2"
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="vbtnradio"
                  id="vbtnradio3"
                  autoComplete="off"
                  label="Radio 3"
                />
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ButtonGroups
