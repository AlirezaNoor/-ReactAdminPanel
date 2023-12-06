// همانطور که مشخص است برای بخش های مختلفی  از این استفاده می شود برای بخش کامپونت ها در منوی ساید بار است
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>واکنش آکاردئون</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              روی آکاردئون های زیر کلیک کنید تا محتوای آکاردئون را بزرگ یا کوچک کنید.
            </p>
            <DocsExample href="components/accordion">
              <CAccordion activeItemKey={2}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>ایتم های اکوردین #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>این اولین مورد است&#39;s بادی.</strong>توسط آن پنهان شده است
                    به‌طور پیش‌فرض، تا زمانی که افزونه collapse کلاس‌های مناسبی را که ما به آن استفاده می‌کنیم اضافه کند
                    سبک هر عنصر این کلاس ها ظاهر کلی و همچنین ظاهر را کنترل می کنند
                    نمایش و پنهان کردن از طریق انتقال CSS. شما می توانید هر یک از این را با سفارشی تغییر دهید
                    CSS یا نادیده گرفتن متغیرهای پیش فرض ما. It&#39;s همچنین شایان ذکر است که فقط
                    در مورد هر HTML می تواند در داخل <code>بدنه </code>, اگرچه
                    انتقال سرریز را محدود می کند.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>ایتم های اکوردین #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>ت&#39;s بادی.</strong>توسط آن پنهان شده است
                    به‌طور پیش‌فرض، تا زمانی که افزونه collapse کلاس‌های مناسبی را که ما به آن استفاده می‌کنیم اضافه کند
                    سبک هر عنصر این کلاس ها ظاهر کلی و همچنین ظاهر را کنترل می کنند
                    نمایش و پنهان کردن از طریق انتقال CSS. شما می توانید هر یک از این را با سفارشی تغییر دهید
                    CSS یا نادیده گرفتن متغیرهای پیش فرض ما. It&#39;s همچنین شایان ذکر است که فقط
                    در مورد هر HTML می تواند در داخل <code>بدنه </code>, اگرچه
                    انتقال سرریز را محدود می کند.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>ایتم های اکوردین #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>ت&#39;s بادی.</strong>توسط آن پنهان شده است
                    به‌طور پیش‌فرض، تا زمانی که افزونه collapse کلاس‌های مناسبی را که ما به آن استفاده می‌کنیم اضافه کند
                    سبک هر عنصر این کلاس ها ظاهر کلی و همچنین ظاهر را کنترل می کنند
                    نمایش و پنهان کردن از طریق انتقال CSS. شما می توانید هر یک از این را با سفارشی تغییر دهید
                    CSS یا نادیده گرفتن متغیرهای پیش فرض ما. It&#39;s همچنین شایان ذکر است که فقط
                    در مورد هر HTML می تواند در داخل <code>بدنه </code>, اگرچه
                    انتقال سرریز را محدود می کند.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>ریکت اکوردین</strong> <small>فلاش</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              <code>flush</code> را برای حذف <code>background-color</code> پیش‌فرض اضافه کنید.
              حاشیه‌ها و گوشه‌های گرد برای نمایش آکاردئون‌ها لبه به لبه با والدینشان
              ظرف
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion flush>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion ایتم #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>این اولین بدنه آکاردئونی مورد است.</strong> توسط پنهان شده است
                    به‌طور پیش‌فرض، تا زمانی که افزونه collapse کلاس‌های مناسبی را که ما به آن استفاده می‌کنیم اضافه کند
                    سبک هر عنصر این کلاس ها ظاهر کلی و همچنین ظاهر را کنترل می کنند
                    نمایش و پنهان کردن از طریق انتقال CSS. شما می توانید هر یک از این را با سفارشی تغییر دهید
                    CSS یا نادیده گرفتن متغیرهای پیش فرض ما. همچنین شایان ذکر است که فقط
                    در مورد هر HTML می‌تواند در <code>.accordion-body</code> برود، هرچند که
                    انتقال سرریز را محدود می کند.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion ایتم #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>این دومین مورد بدنه آکاردئونی است.</strong> توسط پنهان شده است
                    به‌طور پیش‌فرض، تا زمانی که افزونه collapse کلاس‌های مناسبی را که ما به آن استفاده می‌کنیم اضافه کند
                    سبک هر عنصر این کلاس ها ظاهر کلی و همچنین ظاهر را کنترل می کنند
                    نمایش و پنهان کردن از طریق انتقال CSS. شما می توانید هر یک از این ها را با سفارشی تغییر دهید
                    CSS یا نادیده گرفتن متغیرهای پیش فرض ما. همچنین شایان ذکر است که فقط
                    در مورد هر HTML می‌تواند درون <code>.accordion-body</code> برود، هرچند
                    انتقال سرریز را محدود می کند.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion ایتم #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>این دومین مورد بدنه آکاردئونی است.</strong> توسط پنهان شده است
                    به‌طور پیش‌فرض، تا زمانی که افزونه collapse کلاس‌های مناسبی را که ما به آن استفاده می‌کنیم اضافه کند
                    سبک هر عنصر این کلاس ها ظاهر کلی و همچنین ظاهر را کنترل می کنند
                    نمایش و پنهان کردن از طریق انتقال CSS. شما می توانید هر یک از این ها را با سفارشی تغییر دهید
                    CSS یا نادیده گرفتن متغیرهای پیش فرض ما. همچنین شایان ذکر است که فقط
                    در مورد هر HTML می‌تواند درون <code>.accordion-body</code> برود، هرچند
                    انتقال سرریز را محدود می کند.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>همیشه باز است</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              ویژگی <code>alwaysOpen</code> را اضافه کنید تا اقلام آکاردئونی باز بمانند
              مورد باز می شود
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion alwaysOpen>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>این اولین بدنه آکاردئونی مورد است.</strong> توسط پنهان شده است.
                    به‌طور پیش‌فرض، تا زمانی که افزونه collapse کلاس‌های مناسبی را که ما به آن استفاده می‌کنیم اضافه کند
                    سبک هر عنصر این کلاس ها ظاهر کلی و همچنین ظاهر را کنترل می کنند
                    نمایش و پنهان کردن از طریق انتقال CSS. شما می توانید هر یک از این ها را با سفارشی تغییر دهید
                    CSS یا نادیده گرفتن متغیرهای پیش فرض ما. همچنین شایان ذکر است که فقط
                    در مورد هر HTML می‌تواند درون <code>.accordion-body</code> برود، هرچند
                    انتقال سرریز را محدود می کند.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion ایتم #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>این دومین مورد از بدنه آکاردئونی است.</strong> توسط پنهان شده است.
                    به‌طور پیش‌فرض، تا زمانی که افزونه collapse کلاس‌های مناسبی را که ما به آن استفاده می‌کنیم اضافه کند
                    سبک هر عنصر این کلاس ها ظاهر کلی و همچنین ظاهر را کنترل می کنند
                    نمایش و پنهان کردن از طریق انتقال CSS. شما می توانید هر یک از این ها را با سفارشی تغییر دهید
                    CSS یا نادیده گرفتن متغیرهای پیش فرض ما. همچنین شایان ذکر است که فقط
                    در مورد هر HTML می‌تواند درون <code>.accordion-body</code> برود، هرچند
                    انتقال سرریز را محدود می کند.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion ایتم #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>این دومین مورد از بدنه آکاردئونی است.</strong> توسط پنهان شده است.
                    به‌طور پیش‌فرض، تا زمانی که افزونه collapse کلاس‌های مناسبی را که ما به آن استفاده می‌کنیم اضافه کند
                    سبک هر عنصر این کلاس ها ظاهر کلی و همچنین ظاهر را کنترل می کنند
                    نمایش و پنهان کردن از طریق انتقال CSS. شما می توانید هر یک از این ها را با سفارشی تغییر دهید
                    CSS یا نادیده گرفتن متغیرهای پیش فرض ما. همچنین شایان ذکر است که فقط
                    در مورد هر HTML می‌تواند در <code>.accordion-body</code> برود، هرچند که
                    انتقال سرریز را محدود می کند.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
