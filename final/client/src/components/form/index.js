import { Component } from "react";
import "./index.css"
import {v4 as uuidv4} from "uuid"


class Form extends Component{
    
    state = {
        name:"",
        dob:"",
        gender:"",
        fav_place:"choose fav resorts..!😶‍🌫️",
        fav_resort:[],
        opinion:""
    }

    changeName = (e)=>{
        this.setState({
            name:e.target.value
        })
    }

    changedob = (e)=>{
        this.setState({
            dob:e.target.value
        })
    }

    changeGender=(e)=>{
        console.log(e.target.value)
        this.setState({
            gender:e.target.value
        })
    }

    changeOpinion=(e)=>{
        this.setState({
            fav_place:e.target.value
        })
    }

    changeFavteam=(e)=>{
        let {fav_resort} = this.state
        console.log(e.target.value)
        
        if(fav_resort.includes(e.target.value)){

            fav_resort = fav_resort.filter(item => item !== e.target.value);
        }
        else{
            fav_resort=[...fav_resort,e.target.value]
        }
        
        this.setState({
            fav_resort
        })
    }
    onChangeOpinion=(e)=>{
        this.setState({
            opinion:e.target.value
        })
    }



    render(){

        const {updateForm} = this.props
        const {name,dob,gender,fav_place,fav_resort,opinion}= this.state
        const submitForm= (e)=>{
            e.preventDefault()
            const warning = document.querySelector(".warning")
            if(name===""){
                warning.textContent="* Enter your name first..!"
            }
            else if(dob===""){
                warning.textContent="* Say your DOB first too..!"
            }
            else if(gender===""){
                warning.textContent="* What's your gender..!?"
            }
            else if(fav_resort.length===0){
                warning.textContent="* Cool..! Atleast select 'None of these' option..!"
            }
            else if(opinion===""){
                warning.textContent="* Last one..! Opinion please..!!"
            }
            else{
                warning.textContent=""
                const data={
                    id: uuidv4(),
                    name,
                    dob,
                    gender,
                    fav_place,
                    fav_resort,
                    opinion
                }
                updateForm(data)
                const genderRadios = document.querySelectorAll('input[name="gender"]');
                genderRadios.forEach(radio => radio.checked = false);

                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(checkbox => checkbox.checked = false);
                this.setState({
                    name: "",
                    dob: "",
                    gender: "",
                    fav_place: "choose fav place..!😶‍🌫️",
                    fav_resort: [],
                    opinion:""
                });
            }
            
        }

        return(
            <div className="form-container" id="form">
                <form onSubmit={submitForm}>
                    <label htmlFor="name">Name</label><br/>
                    <input onChange={this.changeName} className="searchbar-container search-bar input" placeholder="Enter Your Name" type="text" id="name"/><br/>
                    
                    <label htmlFor="DOB">Which generation kid are you?</label>
                    <input onChange={this.changedob} className="searchbar-container search-bar input" placeholder="Enter Your DOB" type="date" id="DOB"/><br/>
                    
                    <label htmlFor="gender">Choose your gender...?</label><br/>
                    <input onChange={this.changeGender} className="check" id="male" type="radio" name="gender" value="male"/>
                    <label htmlFor="male">Male</label><br/>
                    <input onChange={this.changeGender} className="check" id="female" type="radio" name="gender" value="female"/>
                    <label htmlFor="female">Female</label><br/>
                    <input onChange={this.changeGender} className="check" id="others" type="radio" name="gender" value="others"/>
                    <label htmlFor="others">Others</label><br/>
                       
                    <div className="mt">
                    <label htmlFor="dropdown">Which resorts do u like more...?</label><br/>
                    <select onChange={this.changeOpinion} id="dropdown" className="searchbar-container search-bar input">
                        <option>Soaltee westend chitwan..!</option>
                        <option>Malahini..!</option>
                        <option>Nusa Dua..!</option>
                        <option>Novotel..!</option>
                       
                    </select>
                    </div>
                    <div className="mt">
                    <label>What is Your favourite places...?</label> <br/>
                    <input onClick={this.changeFavteam} className="check" id="india&aus" value="Finland" type="checkbox" />
                    <label  htmlFor="india&aus">Finland</label> <br/>
                    <input onClick={this.changeFavteam} className="check" value="Malaysia" id="nez" type="checkbox" />
                    <label  htmlFor="nez">Malaysia</label> <br/>
                    <input onClick={this.changeFavteam} className="check" id="Eng" value="Singpore" type="checkbox" />
                    <label  htmlFor="Eng">Singpore</label> <br/>
                    <input onClick={this.changeFavteam} className="check" value="Nepal" id="Sri" type="checkbox" />
                    <label  htmlFor="Sri">Nepal</label> <br/>
                    <input onClick={this.changeFavteam} className="check" value="None" id="none" type="checkbox" />
                    <label  htmlFor="none">None of these</label> <br/>
                    </div>
                    <label id="opinion">What is your opinion on resorts?</label>
                    <textarea onChange={this.onChangeOpinion} className="searchbar-container search-bar input" value={opinion} placeholder="Say your opinion here..!" />
                    <p className="warning"></p>
                    <input  onSubmit={submitForm} className="menu-button searchbar-container input" type="submit" value="Submit my response..!" />
                </form>
            </div>
        )
    }
}

export default Form