function Card(props){
    let badgetext
    if(props.openSpots === 0){
        badgetext = "SOLDOUT"
    }else if (props.location === "Online"){
        badgetext = "ONLINE"
    }
    
    return (
        <div className="card">
            { badgetext && <div className="card--badge">{badgetext}</div>}
            <img src={`./images/${props.coverImg}`} className="card--image" alt="swimming"/>
            <div className="card--stats">
                <img src="./images/Star 1.png" className="card--stars" alt="star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})  •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title} </p>
            <p className="card--price"><span className="bold">From ${props.price}</span>/ person</p>
        </div>

    )
}

export default Card

