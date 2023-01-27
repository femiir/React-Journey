import React from 'react'

const Card = (props) => {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.openSpots.toUpperCase() === "ONLINE") {
        badgeText = 'ONLINE'

    }


    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`..${props.coverImg}`} alt="" className='card--image' />
            <div className='class--stats'>
                <img src={`..${props.star}`} alt="star rating" className='card--star' />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span className='bold'>From ${props.price} </span>/ person</p>

        </div>
    )
}

export default Card