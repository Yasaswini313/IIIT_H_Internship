import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faFile,faTableList,faChartPie,faIdCard} from '@fortawesome/free-solid-svg-icons';
import "./index.css"

class SideBar extends Component{
    render(){
        return(
            <div className="sidebar">
                <div>
                <a href="#home" className="links" >
                    {/* <FontAwesomeIcon className="icon" icon={faHouse} /> */}
                    <FontAwesomeIcon className="icon" icon={faIdCard} />
                    Cards
                </a>
                <a href="#form" className="links" >
                    {/* <FontAwesomeIcon className="icon" icon={faHouse} /> */}
                    {/* <FontAwesomeIcon className="icon" icon={faBookBookmark} /> */}
                    <FontAwesomeIcon className="icon" icon={faFile} />

                    Form
                </a>
                <a href="#table" className="links" >
                    <FontAwesomeIcon className="icon" icon={faTableList} />
                 
                    Table
                </a>
                <a href="#charts" className="links" >
                    <FontAwesomeIcon className="icon" icon={faChartPie} />
                   
                    PieCharts
                </a>
                <a href="#contact" className="links" >
                    <FontAwesomeIcon className="icon" icon={faHouse} />
                    contact
                </a>
                </div>
            </div>
        )
    }
}

export default SideBar