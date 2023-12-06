//در این صفحه رنگ ها و هکس ها را مدیریت می کنن
import PropTypes from 'prop-types'
import React, {useEffect, useState, createRef} from 'react'
import classNames from 'classnames'
import {CRow, CCol, CCard, CCardHeader, CCardBody} from '@coreui/react'
import {rgbToHex} from '@coreui/utils'
import {DocsLink} from 'src/components'

const ThemeView = () => {
    const [color, setColor] = useState('rgb(255, 255, 255)')
    const ref = createRef()

    useEffect(() => {
        const el = ref.current.parentNode.firstChild
        const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
        setColor(varColor)
    }, [ref])

    return (
        <table className="table w-100" ref={ref}>
            <tbody>
            <tr>
                <td className="text-medium-emphasis">HEX:</td>
                <td className="font-weight-bold">{rgbToHex(color)}</td>
            </tr>
            <tr>
                <td className="text-medium-emphasis">RGB:</td>
                <td className="font-weight-bold">{color}</td>
            </tr>
            </tbody>
        </table>
    )
}

const ThemeColor = ({className, children}) => {
    const classes = classNames(className, 'theme-color w-75 rounded mb-3')
    return (
        <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
            <div className={classes} style={{paddingTop: '75%'}}></div>
            {children}
            <ThemeView/>
        </CCol>
    )
}

ThemeColor.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

const Colors = () => {
    return (
        <>
            <CCard className="mb-4">
                <CCardHeader>
                    تم رنگ ها
                    <DocsLink href="https://coreui.io/docs/utilities/colors/"/>
                </CCardHeader>
                <CCardBody>
                    <CRow>
                        <ThemeColor className="bg-primary">
                            <h6> Primary رنگ</h6>
                        </ThemeColor>
                        <ThemeColor className="bg-secondary">
                            <h6> Secondary رنگ </h6>
                        </ThemeColor>
                        <ThemeColor className="bg-success">
                            <h6> Success رنگ</h6>
                        </ThemeColor>
                        <ThemeColor className="bg-danger">
                            <h6> Danger رنگ</h6>
                        </ThemeColor>
                        <ThemeColor className="bg-warning">
                            <h6> Warning رنگ</h6>
                        </ThemeColor>
                        <ThemeColor className="bg-info">
                            <h6> Info رنگ</h6>
                        </ThemeColor>
                        <ThemeColor className="bg-light">
                            <h6> Light رنگ</h6>
                        </ThemeColor>
                        <ThemeColor className="bg-dark">
                            <h6> Dark زنگ</h6>
                        </ThemeColor>
                    </CRow>
                </CCardBody>
            </CCard>
        </>
    )
}

export default Colors
