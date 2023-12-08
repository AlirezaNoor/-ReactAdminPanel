// این صفحه مدال ها در قسمت ساید بار می باشد
import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CPopover,
  CRow,
  CTooltip,
} from '@coreui/react'
import {DocsExample} from 'src/components'

const LiveDemo = () => {
  const [visible, setVisible] = useState(false);

  return (
      <>
        <CButton onClick={() => setVisible(!visible)}>راه‌اندازی مودال دمو</CButton>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>عنوان مودال</CModalTitle>
          </CModalHeader>
          <CModalBody>واو، شما این متن را در یک مودال می‌خوانید!</CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              بستن
            </CButton>
            <CButton color="primary">ذخیره تغییرات</CButton>
          </CModalFooter>
        </CModal>
      </>
  );
};
const StaticBackdrop = () => {
  const [visible, setVisible] = useState(false);

  return (
      <>
        <CButton onClick={() => setVisible(!visible)}>راه‌اندازی مودال با زمینه ثابت</CButton>
        <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>عنوان مودال</CModalTitle>
          </CModalHeader>
          <CModalBody>
            من بسته نخواهم شد اگر بیرون از من کلیک کنید. حتی سعی نکنید دکمه‌ی escape را بفشارید.
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              بستن
            </CButton>
            <CButton color="primary">ذخیره تغییرات</CButton>
          </CModalFooter>
        </CModal>
      </>
  );
};

const ScrollingLongContent = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const ScrollingLongContent2 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
      <CModal scrollable visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const VerticallyCentered = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Vertically centered modal</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
          به متن های برخورده اید که با نام لورم ایپسوم
          شناخته می‌شوند.
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const VerticallyCentered2 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Vertically centered scrollable modal</CButton>
      <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
          <p>
            گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const TooltipsPopovers = () => {
  const [visible, setVisible] = useState(false);
  return (
      <>
        <CButton onClick={() => setVisible(!visible)}>نمایش مودال</CButton>
        <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>عنوان مودال</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <h5>پاپ‌اوور در یک مودال</h5>
            <p>
              این{' '}
              <CPopover title="عنوان پاپ‌اوور" content="محتوای بدنه پاپ‌اوور در این قسمت تنظیم شده است.">
                <CButton>دکمه</CButton>
              </CPopover>{' '}
              یک پاپ‌اوور را با کلیک فعال می‌کند.
            </p>
            <hr />
            <h5>تولتیپ‌ها در یک مودال</h5>
            <p>
              <CTooltip content="تولتیپ">
                <CLink>این لینک</CLink>
              </CTooltip>{' '}
              و{' '}
              <CTooltip content="تولتیپ">
                <CLink>آن لینک</CLink>
              </CTooltip>{' '}
              دارای تولتیپ هستند که با هوور نمایش داده می‌شوند.
            </p>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              بستن
            </CButton>
            <CButton color="primary">ذخیره تغییرات</CButton>
          </CModalFooter>
        </CModal>
      </>
  );
};


const OptionalSizes = () => {
  const [visibleXL, setVisibleXL] = useState(false);
  const [visibleLg, setVisibleLg] = useState(false);
  const [visibleSm, setVisibleSm] = useState(false);
  return (
      <>
        <CButton onClick={() => setVisibleXL(!visibleXL)}>مودال بسیار بزرگ</CButton>
        <CButton onClick={() => setVisibleLg(!visibleLg)}>مودال بزرگ</CButton>
        <CButton onClick={() => setVisibleSm(!visibleSm)}>مودال کوچک</CButton>
        <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
          <CModalHeader>
            <CModalTitle>مودال بسیار بزرگ</CModalTitle>
          </CModalHeader>
          <CModalBody>...</CModalBody>
        </CModal>
        <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
          <CModalHeader>
            <CModalTitle>مودال بزرگ</CModalTitle>
          </CModalHeader>
          <CModalBody>...</CModalBody>
        </CModal>
        <CModal size="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
          <CModalHeader>
            <CModalTitle>مودال کوچک</CModalTitle>
          </CModalHeader>
          <CModalBody>...</CModalBody>
        </CModal>
      </>
  );
};
const FullscreenModal = () => {
  const [visible, setVisible] = useState(false)
  const [visibleSm, setVisibleSm] = useState(false)
  const [visibleMd, setVisibleMd] = useState(false)
  const [visibleLg, setVisibleLg] = useState(false)
  const [visibleXL, setVisibleXL] = useState(false)
  const [visibleXXL, setVisibleXXL] = useState(false)

  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Full screen</CButton>
      <CButton onClick={() => setVisibleSm(!visibleSm)}>Full screen below sm</CButton>
      <CButton onClick={() => setVisibleMd(!visibleMd)}>Full screen below md</CButton>
      <CButton onClick={() => setVisibleLg(!visibleLg)}>Full screen below lg</CButton>
      <CButton onClick={() => setVisibleXL(!visibleXL)}>Full screen below xl</CButton>
      <CButton onClick={() => setVisibleXXL(!visibleXXL)}>Full screen below xxl</CButton>
      <CModal fullscreen visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>صفحه کامل</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal fullscreen="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
        <CModalHeader>
          <CModalTitle>صفحه کامل sm</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal fullscreen="md" visible={visibleMd} onClose={() => setVisibleMd(false)}>
        <CModalHeader>
          <CModalTitle>صفحه کامل md</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal fullscreen="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>صفحه کامل lg</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal fullscreen="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
        <CModalHeader>
          <CModalTitle> صفحه کامل</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal fullscreen="xxl" visible={visibleXXL} onClose={() => setVisibleXXL(false)}>
        <CModalHeader>
          <CModalTitle>صفحه کامل xxl</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
    </>
  )
}

const Modals = () => {
  return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>ری‌اکت مدال</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                در زیر، نمونه‌ای از یک مدال استاتیک (به این معنی که موقعیت و نمایش آن بازنویسی شده‌اند) آورده شده است. همچنین هدر مدال، بدنه مدال (که برای یک <code>padding</code> لازم است) و فوتر مدال (اختیاری) نیز در آن قرار دارند. توصیه می‌شود هر زمان که امکان دارد، هدرهای مدال همراه با اقدامات رد شدن صریح اضافه شوند یا اقدام رد شدن دیگری فراهم شود.
              </p>
              <DocsExample href="components/modal">
                <CModal
                    className="show d-block position-static"
                    backdrop={false}
                    keyboard={false}
                    portal={false}
                    visible
                >
                  <CModalHeader>
                    <CModalTitle>عنوان مدال</CModalTitle>
                  </CModalHeader>
                  <CModalBody>متن بدنه مدال در اینجا قرار می‌گیرد.</CModalBody>
                  <CModalFooter>
                    <CButton color="secondary">بستن</CButton>
                    <CButton color="primary">ذخیره تغییرات</CButton>
                  </CModalFooter>
                </CModal>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>ری‌اکت مدال</strong> <small>نمونه زنده</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                با کلیک بر روی دکمه زیر، یک مدال کارکردی را نمونه زنده کنید. این مدال از بالای صفحه پایین افتاده و از بالا به پایین صفحه پدیدار می‌شود.
              </p>
              <DocsExample href="components/modal#live-demo">{LiveDemo()}</DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>ری‌اکت مدال</strong> <small>پس‌زمینه استاتیک</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                اگر یک کننده <code>onDimsiss</code> به مؤلفه Modal ارائه ندهید، مدال شما به عنوان آنکه پس‌زمینه استاتیک است، عمل خواهد کرد، به این معنی که هنگام کلیک خارج از آن بسته نخواهد شد. بر روی دکمه زیر کلیک کنید تا آن را امتحان کنید.
              </p>
              <DocsExample href="components/modal#static-backdrop">{StaticBackdrop()}</DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>ری‌اکت مدال</strong> <small>محتوای بلند با اسکرول</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                اگر یک کننده <code>onDimsiss</code> به مؤلفه Modal ارائه ندهید، مدال شما به عنوان آنکه پس‌زمینه استاتیک است، عمل خواهد کرد، به این معنی که هنگام کلیک خارج از آن بسته نخواهد شد. بر روی دکمه زیر کلیک کنید تا آن را امتحان کنید.
              </p>
              <DocsExample href="components/modal#scrolling-long-content">
                {ScrollingLongContent()}
              </DocsExample>
              <p className="text-medium-emphasis small">
                همچنین می‌توانید یک مدال قابل اسکرول ایجاد کنید که اجازه اسکرول بدنه مدال را با افزودن ویژگی <code>scrollable</code> به آن، بدهید.
              </p>
              <DocsExample href="components/modal#scrolling-long-content">
                {ScrollingLongContent2()}
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>ری‌اکت مدال</strong> <small>وسط‌چین عمودی</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                با اضافه کردن <code>alignment=&#34;center&#34;</code> به <code>&lt;CModal&gt;</code> می‌توانید مدال را عمودی وسط چین کنید.
              </p>
              <DocsExample href="components/modal#vertically-centered">
                {VerticallyCentered()}
              </DocsExample>
              <DocsExample href="components/modal#vertically-centered">
                {VerticallyCentered2()}
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>ری‌اکت مدال</strong> <small>تولتیپ‌ها و پاپ‌اوورها</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                می‌توان <code>&lt;CTooltips&gt;</code> و <code>&lt;CPopovers&gt;</code> را در مدال‌ها قرار داد. هنگامی که مدال‌ها بسته می‌شوند، هر تولتیپ و پاپ‌اووری که درون آنها وجود دارد، به صورت خودکار رد می‌شود.
              </p>
              <DocsExample href="components/modal#tooltips-and-popovers">
                {TooltipsPopovers()}
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>ری‌اکت مدال</strong> <small>اندازه‌های اختیاری</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                مدال‌ها سه اندازه اختیاری دارند که از طریق کلاس‌های اصلاحی بر روی یک <code>&lt;CModal&gt;</code> قابل اعمال هستند. این اندازه‌ها در برخی از نقاط توقف در صفحه برای جلوگیری از اسکرول افقی در پهنای نمایشگرهای باریک فعال می‌شوند.
              </p>
              <table className="table">
                <thead>
                <tr>
                  <th>اندازه</th>
                  <th>خاصیت اندازه</th>
                  <th>حداکثر عرض مدال</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>کوچک</td>
                  <td>
                    <code>&#39;sm&#39;</code>
                  </td>
                  <td>
                    <code>300px</code>
                  </td>
                </tr>
                <tr>
                  <td>پیش‌فرض</td>
                  <td className="text-medium-emphasis">هیچکدام</td>
                  <td>
                    <code>500px</code>
                  </td>
                </tr>
                <tr>
                  <td>بزرگ</td>
                  <td>
                    <code>&#39;lg&#39;</code>
                  </td>
                  <td>
                    <code>800px</code>
                  </td>
                </tr>
                <tr>
                  <td>خیلی بزرگ</td>
                  <td>
                    <code>&#39;xl&#39;</code>
                  </td>
                  <td>
                    <code>1140px</code>
                  </td>
                </tr>
                </tbody>
              </table>
              <DocsExample href="components/modal#optional-sizes">{OptionalSizes()}</DocsExample>
            </CCardBody>
          </CCard>
        </CCol>





        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>ری‌اکت مدال</strong> <small>مدال تمام صفحه</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                یک اختیار دیگر، گزینه‌ای برای ظاهر کردن یک مدال که صفحه کاربر را پوشش دهد وجود دارد، که از طریق ویژگی <code>fullscrean</code> در دسترس است.
              </p>
              <table className="table">
                <thead>
                <tr>
                  <th>ویژگی fullscrean</th>
                  <th>در دسترس بودن</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <code>true</code>
                  </td>
                  <td>همیشه</td>
                </tr>
                <tr>
                  <td>
                    <code>&#39;sm&#39;</code>
                  </td>
                  <td>
                    زیر <code>576px</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>&#39;md&#39;</code>
                  </td>
                  <td>
                    زیر <code>768px</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>&#39;lg&#39;</code>
                  </td>
                  <td>
                    زیر <code>992px</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>&#39;xl&#39;</code>
                  </td>
                  <td>
                    زیر <code>1200px</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>&#39;xxl&#39;</code>
                  </td>
                  <td>
                    زیر <code>1400px</code>
                  </td>
                </tr>
                </tbody>
              </table>
              <DocsExample href="components/modal#fullscreen-modal">{FullscreenModal()}</DocsExample>
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>
  )
}

export default Modals
