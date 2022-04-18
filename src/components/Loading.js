import React from 'react'
import { Spinner } from 'react-bootstrap'
function Loading() {
    return (
        <div >
            <span className='me-2'>Please Wait</span>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
            <span className='ms-2'>Refresh If Products Are Not Displayed</span>
        </div>
    )
}

export default Loading