import React from "react";
import {StyledCardHeader} from "./StyledCardHeader";
import wheel from '../../../../../assets/images/wheel_10-5.jpg'
import sonar from '../../../../../assets/images/tf520.jpg'
import boat from '../../../../../assets/images/toslon730.jpg'
import accessory from '../../../../../assets/images/ni-mh-aa-2850mah.jpg'

type HeaderPropsType = {
    imgSrc: string
    imgAlt: string
    id: string
}

export const CardHeader = (props: HeaderPropsType) => {

    const src = props.imgSrc === 'wheel' ? wheel :
        props.imgSrc === 'sonar' ? sonar :
        props.imgSrc === 'boat' ? boat :
        props.imgSrc === 'accessory' ? accessory : ''


    return <StyledCardHeader id={props.id}>
        <img src={src} alt="image card"/>
    </StyledCardHeader>
}

