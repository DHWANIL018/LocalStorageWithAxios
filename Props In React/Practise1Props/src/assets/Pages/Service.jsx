// Shree Ganeshay namah 
import ServiceApi from './ServiceApi'
import ServiceCard from './ServiceCard'
function Service() {
    return (
        <>

            <div className="service_Section container">
                <div className="Service_Text">
                    <h3 className="mb-3 fw-bold">Our Team</h3>
                    <p className="mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.
                    </p>

                    <div className="card_Section">
                        <div className="row good">
                            {
                                ServiceApi.map(ele=>{
                                    return(
                                        <>
                                        <ServiceCard name={ele.name} Profession={ele.Profession} src={ele.src}/>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Service