// این بخش همان گونه که می بیند مروط به متن های در فوتر می باشدimport React from 'react'import { CFooter } from '@coreui/react'const AppFooter = () => {  return (    <CFooter>      <div>        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">          پنل ادمین        </a>        <span className="ms-1">&copy;1402  سال </span>      </div>      <div className="ms-auto">        <span className="me-1">قدرت گرفته شده توسط</span>        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">         سازمان &amp; داشپورد نمونه        </a>      </div>    </CFooter>  )}export default React.memo(AppFooter)