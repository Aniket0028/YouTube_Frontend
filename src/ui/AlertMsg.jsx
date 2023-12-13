const AlertMsg = (props)  => {
   
    return (
        <>
 {props.data[0] && 
 <div className="alert alert-danger alert-dismissible fade show" role="alert">
 {props.data[0]}
 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
 }


    {props.data[1] &&  
    <div className="alert alert-success alert-dismissible fade show" role="alert">
 {props.data[1]}
 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> }
        </>
    )

}
export default AlertMsg;