/// این برای بخش تایپو گرافی است که در سایئدبار فرار دارد
import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Typography = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          سرفصل ها
          <DocsLink href="https://coreui.io/docs/content/typography/" />
        </CCardHeader>
        <CCardBody>
          <p>
            مستندات و نمونه هایی برای تایپوگرافی بوت استرپ، از جمله تنظیمات جهانی،
            سرفصل‌ها، متن اصلی، فهرست‌ها و موارد دیگر.
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>سرفصل ها</th>
                <th>مثال ها</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h1"> h1هدر از نوع  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h2">h2.هدر از نوع </span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h3">h3. هدر از نوع </span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h4">h4. هدر از نوع </span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h5">h5. هدر از نوع </span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h6">h6.هدر از نوع </span>
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>سر فصل ها</CCardHeader>
        <CCardBody>
          <p>
            <code className="highlighter-rouge">.h1</code> از طریق
            <code className="highlighter-rouge">.h6</code>
            کلاس ها نیز در دسترس هستند، برای زمانی که می خواهید سبک فونت یک عنوان را مطابقت دهید
            نمی تواند از عنصر HTML مرتبط استفاده کند.
          </p>
          <div className="bd-example">
            <p className="h1">h1.  عنوان بوت استرپ</p>
            <p className="h2">h2. عنوان بوت استرپ</p>
            <p className="h3">h3. عنوان بوت استرپ</p>
            <p className="h4">h4. عنوان بوت استرپ</p>
            <p className="h5">h5. عنوان بوت استرپ</p>
            <p className="h6">h6. عنوان بوت استرپ</p>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <div className="card-header">نمایش سرفصل ها</div>
        <div className="card-body">
          <p>
            عناصر عنوان سنتی به گونه‌ای طراحی شده‌اند که بهترین عملکرد را در محتوای صفحه شما داشته باشند.
            هنگامی که به یک عنوان برای متمایز شدن نیاز دارید، از <strong>عنوان نمایش</strong> استفاده کنید
            - یک سبک عنوان بزرگتر و کمی با نظر بیشتر.
          </p>
          <div className="bd-example bd-example-type">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="display-1">نمایش 1</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="display-2">نمایش  2</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="display-3">نمایش  3</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="display-4">نمایش 4</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>عناصر متن درون خطی</CCardHeader>
        <CCardBody>
          <p>
            عناصر عنوان سنتی به گونه‌ای طراحی شده‌اند که بهترین عملکرد را در محتوای صفحه شما داشته باشند.
            هنگامی که به یک عنوان برای متمایز شدن نیاز دارید، از <strong>عنوان نمایش</strong> استفاده کنید
            - یک سبک عنوان بزرگتر و کمی با نظر بیشتر.
          </p>
          <div className="bd-example">
            <p>
              می توانید از تگ علامت گذاری برای <mark> برجسته کردن</mark> متن استفاده کنید.
            </p>
            <p>
              <del>این خط متن به عنوان متن حذف شده تلقی می شود.</del>
            </p>
            <p>
              <s>این خط از متن قرار است دیگر دقیق نباشد.</s>
            </p>
            <p>
              <ins>این خط متن به‌عنوان افزوده‌ای به سند تلقی می‌شود.</ins>
            </p>
            <p>
              <u>این خط متن به صورت زیرخط دار ارائه می شود</u>
            </p>
            <p>
              <small>این خط از متن به عنوان چاپ ظریف در نظر گرفته شده است.</small>
            </p>
            <p>
              <strong>این خط به صورت متن پررنگ ارائه شده است.</strong>
            </p>
            <p>
              <em>این خط به صورت متن ایتالیک ارائه شده است.</em>
            </p>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>تراز فهرست توضیحات</CCardHeader>
        <CCardBody>
          <p>
            با استفاده از کلاس های از پیش تعریف شده سیستم گرید ما، اصطلاحات و توضیحات را به صورت افقی تراز کنید
            (یا میکس های معنایی). برای مدت طولانی تر، می توانید به صورت اختیاری یک{' '} اضافه کنید
            کلاس <code className="highlighter-rouge">.text-truncate</code> برای کوتاه کردن متن
            با بیضی
          </p>
          <div className="bd-example">
            <dl className="row">
              <dt className="col-sm-3">لیست های توضیحات</dt>
              <dd className="col-sm-9">لیست توضیحات برای تعریف اصطلاحات عالی است.</dd>

              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>
                  Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
                </p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </dd>

              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

              <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
              <dd className="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus.
              </dd>

              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
