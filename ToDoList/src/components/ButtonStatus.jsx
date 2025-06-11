
export default function ButtonStatus({msg, func}) {
    
    return(
    <>
        <button onClick={func}>{msg}</button>

    </>
    )
}