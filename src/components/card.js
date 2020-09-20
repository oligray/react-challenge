


function Card(props) {

    return (
        <animated.div>
            {...bind(props.bind)} 
            style={{ 
                transform: props.transform, 
                backgroundImage: props.imageUrl
            }} 
        </animated.div>
    )

}


