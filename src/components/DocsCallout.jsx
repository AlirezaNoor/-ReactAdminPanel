//این برای ادامه هر کامپوننت هست که  برای اطلاعات بیشتر نمایش بده هستش
import PropTypes from 'prop-types'
import React from 'react'
import { CCallout, CLink } from '@coreui/react'

const DocsCallout = (props) => {
  const { content, href, name } = props

  const plural = name.slice(-1) === 's' ? true : false

  const _href = `https://coreui.io/react/docs/${href}`

  return (
    <CCallout color="info" className="bg-white">
      {content
        ? content
        : `یک کامپوننت React ${name} به عنوان نسخه Native React.js برای Bootstrap ${name} ایجاد شده است.
      ${name} ${plural ? 'دارای' : 'دارد'} برخی از ویژگی‌ها، نوع‌ها و طرح‌های منحصر به فردی است که با نیازهای سیستم طراحی CoreUI هماهنگ است.`}
      <br />
      <br />
      برای کسب اطلاعات بیشتر، لطفاً به{' '}
      <CLink href={_href} target="_blank">
        مستندات کتابخانه کامپوننت‌های CoreUI برای React.js
      </CLink>{' '}
      رسمی ما مراجعه کنید.
    </CCallout>
  )
}

DocsCallout.propTypes = {
  content: PropTypes.string,
  href: PropTypes.string,
  name: PropTypes.string,
}

export default React.memo(DocsCallout)
