import './Photos.css'

const Photos = (props) => {
    return(
        <div className='block'> 
            <h1>Title here</h1>
            <h3>{props.id}</h3>
            <p>{props.title}</p>
            <img src={props.thumbnailUrl}/>
        </div>
    )
}

export default Photos