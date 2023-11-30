import { Component } from "react";
import "./index.css"

class TableRow extends Component{
    render(){

        const {data} = this.props 
        
        const {name,gender,dob,fav_place,fav_resort,opinion}= data
        return(
            <>
                <tr>
                    <td className="content">{name}</td>
                    <td className="content">{gender}</td>
                    <td className="content">{dob}</td>
                    {/* <td className="content">{gender}</td> */}
                    <td className="content">{fav_place}</td>
                    <td className="content">{fav_resort?.join(", ")}</td>
                    <td className="content">{opinion}</td>
                </tr>
            </>
        )
    }
}

export default TableRow