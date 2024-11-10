// Shree Ganeshay namah 

function ServiceCard(props){
    return(
        <>
          <div className=" col-lg-3 col-md-6 mb-5">
                            <div className="card size">
                                <img src={props.src} alt="" />
                                <div className="card-body">
                                    <h4 className=" card-title">{props.name}</h4>
                                    <h5 className=" card-text">{props.Profession}</h5>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default ServiceCard