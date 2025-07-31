

function Welcome(props){
    return(
        <>
            <h1>
                Hello, {props.name}
            </h1>
            <p>
                {props.message}
            </p>
        </>
    )
}

export default Welcome