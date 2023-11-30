import { Component } from "react";
import "./index.css"
import TableRow from "../tableRow";

class Table extends Component{
    render(){

        const {formData} = this.props

        return(
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Favourite resort</th>
                            <th>Favourite place</th>
                            <th>Opinion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.map(item=>(
                            <TableRow key={item.id} data = {item} />
                        ))}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table