import {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./index.css"

class Navbar extends Component{
    
    toggleSidebar=()=>{

        const sidebar = document.querySelector(".sidebar")
        if(sidebar.style.left=="-1000px"){
            sidebar.style.position="relative"
            sidebar.style.left="0px"
        }
        else{
            sidebar.style.position="absolute"
            sidebar.style.left="-1000px"
            
        }
    }
    handleSearch=(e)=>{
        const searchWord = e.target.value
        const datas = document.querySelectorAll(".content")
        for(let i of datas){
          let temp=""
          for(let j of i.textContent.split(" ")){
            
            if(j.includes(searchWord)){
              console.log(j)
              const wordStartIndex= j.indexOf(searchWord)
              const wordEndIndex = wordStartIndex+searchWord.length
              temp+= `${j.slice(0,wordStartIndex)}<span className="search-word">${j.slice(wordStartIndex,wordEndIndex)}</span>${j.slice(wordEndIndex,j.length)} `
              console.log(temp)
            }
            else{
              temp+=j+" "
            }
            i.innerHTML=temp
          }
        }
    }



    render(){
        return(
            <div>
            <nav className='navbar'>
                <button className='menu-button' onClick={this.toggleSidebar}>
                <FontAwesomeIcon className='search-icon' icon={faBars} />

                </button>
                <div className='searchbar-container' >
                    <label htmlFor='search-bar'><FontAwesomeIcon className='search-icon' icon={faSearch} /></label>
                    <input type='search' onChange={this.handleSearch} className='search-bar' id='search-bar' placeholder='Search Here...!' />
                </div>
            </nav>
            </div>
        )
    }
}

export default Navbar