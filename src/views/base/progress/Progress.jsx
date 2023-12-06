// این یکی پروگرس بار است که و صحفه ایتم سایدبار است
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CProgress, CProgressBar, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const Progress = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              کامپوننت های Progress با دو عنصر HTML، مقداری CSS برای تنظیم عرض و a ساخته شده اند
              چند ویژگی ما&#39;استفاده نمی‌کنیم{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">
                عنصر <code>&lt;پیشرفت&gt;</code> HTML5
              </a>
              ، اطمینان حاصل کنید که می توانید نوارهای پیشرفت را روی هم قرار دهید، آنها را متحرک کنید و برچسب های متنی را روی آنها قرار دهید.
            </p>
            <DocsExample href="components/progress">
              <CProgress className="mb-3">
                <CProgressBar value={0} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Labels</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              با قرار دادن متن در {' '} برچسب ها را به نوارهای پیشرفت خود اضافه کنید
              <code>&lt;CProgressBar&gt;</code>.
            </p>
            <DocsExample href="components/progress#labels">
              <CProgress className="mb-3">
                <CProgressBar value={25}>25%</CProgressBar>
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Height</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              ما فقط مقدار <code>height</code> را روی <code>&lt;CProgress&gt;</code> تنظیم می کنیم، بنابراین اگر
              شما آن مقدار را تغییر می‌دهید <code>&lt;CProgressBar&gt;</code> داخلی به طور خودکار
              بر این اساس اندازه را تغییر دهید
            </p>
            <DocsExample href="components/progress#height">
              <CProgress height={1} className="mb-3">
                <CProgressBar value={25}></CProgressBar>
              </CProgress>
              <CProgress height={20} className="mb-3">
                <CProgressBar value={25}></CProgressBar>
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Backgrounds</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              برای تغییر ظاهر نوارهای پیشرفت فردی از پایه <code>color</code> استفاده کنید.
            </p>
            <DocsExample href="components/progress#backgrounds">
              <CProgress className="mb-3">
                <CProgressBar color="success" value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="info" value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Multiple bars</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              در صورت نیاز، چندین نوار پیشرفت را در یک جزء پیشرفت قرار دهید.
            </p>
            <DocsExample href="components/progress#multiple-bars">
              <CProgress className="mb-3">
                <CProgressBar value={15} />
                <CProgressBar color="success" value={30} />
                <CProgressBar color="info" value={20} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Striped</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              <code>variant=&#34;striped&#34;</code> را به هر <code>&lt;CProgressBar&gt;</code> اضافه کنید
              یک نوار از طریق گرادیان CSS روی رنگ پس‌زمینه نوار پیشرفت اعمال کنید.
            </p>
            <DocsExample href="components/progress#striped">
              <CProgress className="mb-3">
                <CProgressBar color="success" variant="striped" value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="info" variant="striped" value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" variant="striped" value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" variant="striped" value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Animated stripes</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              گرادیان راه راه نیز می تواند متحرک شود. افزودن ویژگی <code>animated</code> به{' '}
              <code>&lt;CProgressBar&gt;</code> برای متحرک سازی نوارها از راست به چپ از طریق CSS3
              تصاوير متحرك.
            </p>
            <DocsExample href="components/progress#animated-stripes">
              <CProgress className="mb-3">
                <CProgressBar color="success" variant="striped" animated value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="info" variant="striped" animated value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" variant="striped" animated value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" variant="striped" animated value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Progress
