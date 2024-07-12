export default function Skills({skill}){
    //console.log(skill)
    const {id, image, tecnologia} = skill
    

    return(        
        <>
            <div className="secc-10-mt20">
                <img src={`img/${image}`} alt="" />
                <span>{tecnologia}</span>
            </div>
        </>
    )
}