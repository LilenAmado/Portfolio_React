export default function Gustos_Item({item}){
    //console.log(item)
    const {id, clases, titulo} = item
    

    return(        
        <>
            <div className="card">
                <div className="box">
                    <i className={clases}></i> <br /><br />
                    <div className="text">{titulo}</div>
                </div>
            </div>
        </>
    )
}