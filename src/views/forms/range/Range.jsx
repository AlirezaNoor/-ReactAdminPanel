// رنج ها در ساید بار در این صفحه نمیش داده می شود
import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CFormLabel, CFormRange, CRow } from '@coreui/react';
import { DocsExample } from 'src/components';

const Range = () => {
  return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>رینج React</strong> <small></small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                با استفاده از <code>&lt;CFormRange&gt;</code>، کنترل‌های <code>&lt;input
                type=&#34;range&#34;&gt;</code> سفارشی ایجاد کنید.
              </p>
              <DocsExample href="forms/range">
                <CFormLabel htmlFor="customRange1">مثال رینج</CFormLabel>
                <CFormRange id="customRange1" />
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>رینج React</strong> <small>غیرفعال</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                برای به وجود آوردن ظاهر خاکستری و حذف رویدادهای اشاره گر، ویژگی بولین <code>disabled</code> را به یک ورودی اضافه کنید.
              </p>
              <DocsExample href="forms/range#disabled">
                <CFormLabel htmlFor="disabledRange">رینج غیرفعال</CFormLabel>
                <CFormRange id="disabledRange" disabled />
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>رینج React</strong> <small>حداقل و حداکثر</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                ورودی‌های رینج مقادیر ضمنی برای <code>min</code> و <code>max</code> دارند - به ترتیب <code>0</code> و <code>100</code>. می‌توانید مقادیر جدیدی برای آن‌ها با استفاده از ویژگی‌های <code>min</code> و <code>max</code> مشخص کنید.
              </p>
              <DocsExample href="forms/range#min-and-max">
                <CFormLabel htmlFor="customRange2">مثال رینج</CFormLabel>
                <CFormRange min="0" max="5" defaultValue="3" id="customRange2" />
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>رینج React</strong> <small>گام‌ها</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                به طور پیش‌فرض، ورودی‌های رینج به مقادیر صحیح می‌پیوندند. برای تغییر این ویژگی، می‌توانید یک مقدار <code>step</code> مشخص کنید. در مثال زیر، تعداد گام‌ها را با استفاده از <code>step=&#34;0.5&#34;</code> دو برابر می‌کنیم.
              </p>
              <DocsExample href="forms/range#steps">
                <CFormLabel htmlFor="customRange3">مثال رینج</CFormLabel>
                <CFormRange min="0" max="5" step="0.5" defaultValue="3" id="customRange3" />
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
  );
};

export default Range;
