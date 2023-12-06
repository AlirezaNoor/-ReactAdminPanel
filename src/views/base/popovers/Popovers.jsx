//این یک صفحه برا یپاپ اور زاست که در ساید بار موجود می باشد
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CPopover, CRow, CCol } from '@coreui/react'
import { DocsExample } from 'src/components'

const Popovers = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Popover</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/popover">
              <CPopover
                title="تایتل پاپور"
                content="این یک پاپاور  است نتسی و جالب"
                placement="top"
              >
                <CButton color="danger" size="lg">
                  برای جابجایی popover کلیک کنید
                </CButton>
              </CPopover>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Popover</strong> <small>چهار جهت</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              چهار گزینه موجود است: تراز بالا، راست، پایین و چپ. جهت ها هستند
              هنگام استفاده از CoreUI برای React در RTL منعکس می شود.
            </p>
            <DocsExample href="components/popover#four-directions">

              <CPopover
                  content="این یک پاپاور  است نتسی و جالب"
                  placement="top"
              >
                <CButton color="secondary">پاپوور در راست</CButton>
              </CPopover>
              <CPopover
                  content="این یک پاپاور  است نتسی و جالب"
                placement="bottom"
              >
                <CButton color="secondary">پاپوور در پایین</CButton>
              </CPopover>
              <CPopover
                  content="این یک پاپاور  است نتسی و جالب"
                placement="left"
              >
                <CButton color="secondary">پاپوور در چپ</CButton>
              </CPopover>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Popovers
