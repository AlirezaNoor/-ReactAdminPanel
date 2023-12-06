//بخش فرم کنترلر در قسمت فرم ها

import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CFormSelect, CRow } from '@coreui/react';
import { DocsExample } from 'src/components';

const Select = () => {
  return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>انتخابگر React</strong> <small>پیش‌فرض</small>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="forms/select">
                <CFormSelect aria-label="مثال انتخاب پیش‌فرض">
                  <option>این منوی انتخاب را باز کنید</option>
                  <option value="1">یک</option>
                  <option value="2">دو</option>
                  <option value="3">سه</option>
                </CFormSelect>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>انتخابگر React</strong> <small>اندازه‌گیری</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                شما همچنین می‌توانید از اندازه‌گیری‌های سفارشی کوچک و بزرگ برای تطابق با ورودی‌های متنی
                با اندازه مشابه استفاده کنید.
              </p>
              <DocsExample href="forms/select#sizing">
                <CFormSelect size="lg" className="mb-3" aria-label="مثال انتخاب بزرگ">
                  <option>این منوی انتخاب را باز کنید</option>
                  <option value="1">یک</option>
                  <option value="2">دو</option>
                  <option value="3">سه</option>
                </CFormSelect>
                <CFormSelect size="sm" className="mb-3" aria-label="مثال انتخاب کوچک">
                  <option>این منوی انتخاب را باز کنید</option>
                  <option value="1">یک</option>
                  <option value="2">دو</option>
                  <option value="3">سه</option>
                </CFormSelect>
              </DocsExample>
              <p className="text-medium-emphasis small">
                ویژگی <code>multiple</code> نیز پشتیبانی می‌شود:
              </p>
              <DocsExample href="forms/select#sizing">
                <CFormSelect size="lg" multiple aria-label="مثال انتخاب چندتایی">
                  <option>این منوی انتخاب را باز کنید</option>
                  <option value="1">یک</option>
                  <option value="2">دو</option>
                  <option value="3">سه</option>
                </CFormSelect>
              </DocsExample>
              <p className="text-medium-emphasis small">
                و همچنین ویژگی <code>htmlSize</code>:
              </p>
              <DocsExample href="forms/select#sizing">
                <CFormSelect size="lg" multiple aria-label="مثال انتخاب چندتایی با htmlSize">
                  <option>این منوی انتخاب را باز کنید</option>
                  <option value="1">یک</option>
                  <option value="2">دو</option>
                  <option value="3">سه</option>
                </CFormSelect>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>انتخابگر React</strong> <small>غیرفعال</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                با افزودن ویژگی بولین <code>disabled</code> به یک انتخاب، ظاهر خاکستری شده و رویدادهای نشانگر
                از بین می‌رود.
              </p>
              <DocsExample href="forms/select#disabled">
                <CFormSelect aria-label="مثال انتخاب غیرفعال" disabled>
                  <option>این منوی انتخاب را باز کنید</option>
                  <option value="1">یک</option>
                  <option value="2">دو</option>
                  <option value="3">سه</option>
                </CFormSelect>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
  );
};

export default Select;
