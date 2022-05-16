function Card(props){
    return(
        <div className="gambar">
            <img ></img>
        <div className='judul'>
            <h1>{props.judul}</h1>
            <div className='teks'>
            <h2>{props.teks}</h1>
            </div>
        </div>
        </div>
    )
};

export default Card;