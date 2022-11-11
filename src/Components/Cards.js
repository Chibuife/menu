const Cards = (menuObject)=>{
    return(
        <div>
            {menuObject.map((item)=>{
                return(
                    <>
                    <div className="image"><img src={item.img} alt="" /></div>
                    <div>
                    <h3>{item.title}</h3>
                    <div>{item.amount}</div>
                    </div>
                    <p>{item.description}</p>
                    </>
                )
            })}
        </div>
    )
}
export default Cards;