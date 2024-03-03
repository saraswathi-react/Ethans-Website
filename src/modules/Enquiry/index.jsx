import React from 'react'
import GetInTouch from './Partials/GetInTouch'
import Feedbackform from './Partials/Feedbackform'
import Footersection from '@modules/Footer/Footersection'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'

const Enquiry = () => {
    return (
        <div>
            <GetInTouch />
            <Feedbackform />
            <Footersection />
            <BacktoTopPage/>
        </div>
    )
}

export default Enquiry