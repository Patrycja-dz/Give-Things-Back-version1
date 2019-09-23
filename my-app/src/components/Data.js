import React from 'react'

const Data = ({dane})=>{
    if(!dane.length){
        return null ;
    }
    const org = dane.map(dane=>{
        return(
            <li className="organization_li">
                <div className="first_data">
                <p className="first_organization">{dane.nazwa}</p>
                <p className="second_organization">{dane.cele}</p>
                <p className="last_thing">{dane.rzeczy}</p>
                </div>
            </li>
        )
    })
    return(
        <div className="organization_div">
            <ul>
                {org}
            </ul>
        </div>
    )
}



export default  Data