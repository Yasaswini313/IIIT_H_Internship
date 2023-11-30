import { Component } from "react";
import "./index.css"
import Table from "../table";
import Form from "../form";
import MyPieChart from "../piechart";
import Footer from "../footer";

class Body extends Component{

    state= {
        formData: [],
        resort_count:[]
    }

    componentDidMount() {
        const data = localStorage.getItem("formData");
        
        if (data && data.length > 0) {
            this.setState({
            formData: JSON.parse(data)
            });
        } else {
            localStorage.setItem("formData", JSON.stringify([]));
        }


    }

    

    updateForm = (data)=>{
        const {formData} = this.state
        this.setState({
            formData:[...formData,data]
        })
        const updatedForm = [...formData,data] 
        console.log(updatedForm)
        localStorage.setItem("formData",JSON.stringify(updatedForm))

    }

    render(){
        const {formData} = this.state


        const resorts = ["Finland","Malaysia","Singpore","Nepal","None"]
        let resorts_array=[]
        formData.forEach(item => {
            resorts_array = resorts_array.concat(item["fav_resort"]);
        });
        const resorts_count = []
        for (let i of resorts){
            const resort_object = {
                name:i,
                value:resorts_array.filter(item=>item===i).length
            }
            resorts_count.push(resort_object)
        }

        function calculateAgeStage(dob) {
            const birthDate = new Date(dob);
            const currentDate = new Date();
        
            let age = currentDate.getFullYear() - birthDate.getFullYear();
            const monthDiff = currentDate.getMonth() - birthDate.getMonth();
        
            if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
                age--;
            }
        
            let stage;
        
            if (age < 18) {
                stage = "Kid";
            } else if (age >= 18 && age < 60) {
                stage = "Adult";
            } else {
                stage = "Senior";
            }
        
            return stage;
        }

        const genders = ["male","female","others"]
        let genders_array=[]
        formData.forEach(item=>{
            genders_array= genders_array.concat(item["gender"])
        })
        const genders_count = []
        for (let i of genders){
            const gender_object = {
                name:i,
                value:genders_array.filter(item=>item===i).length
            }
            genders_count.push(gender_object)
        }

        

        const age_types = ["Kid", "Adult","Senior"]
        let ages_array = []
        formData.forEach(item=>{
            ages_array=ages_array.concat(calculateAgeStage(item.dob))
        })
        const ages_count=[]
        for (let i of age_types){
            const age_object={
                name:i,
                value: ages_array.filter(item=>item===i).length
            }
            ages_count.push(age_object)
        }




        let male_resorts_array=[]
        formData.forEach(item => {
            if(item["gender"]==="male"){
                male_resorts_array = male_resorts_array.concat(item["fav_resort"]) ;
            }
        });
        const male_resorts_count = []
        for (let i of resorts){
            const resort_object = {
                name:i,
                value:male_resorts_array.filter(item=>item===i).length
            }
            male_resorts_count.push(resort_object)
        }

        let female_resorts_array=[]
        formData.forEach(item => {
            if(item["gender"]==="female"){
                female_resorts_array = female_resorts_array.concat(item["fav_resort"]) ;
            }
        });
        const female_resorts_count = []
        for (let i of resorts){
            const resort_object = {
                name:i,
                value:female_resorts_array.filter(item=>item===i).length
            }
            female_resorts_count.push(resort_object)
        }


        return(
            <div className="body">
                <div className="cards-section" id="home"> 
                    <div className="cards-container">
                        <div className="card left-most" id="card">
                        <div className="front">
                        <div className="box content-box">
                            <div className="content">
                                <h3>what is  </h3>
                            </div>
                            <div className="image-container">
                                <img className="crickets" src="https://res.cloudinary.com/dxoq1rrh4/image/upload/v1700382838/download_jd9br6.jpg" alt="think" />
                            </div>
                            <h1>Resorts</h1>
                            <p>welcome to Malahini..!!</p>
                            <button><a href="https://www.malahini.mv/?utm_source=glopss&utm_medium=alltype&utm_campaign=affiliate#/">View</a></button>
                        </div>
                        </div>
                        </div>
                        <div className="card" id="card">
                        <div className="front">
                        <div className="box content-box">
                            <div className="content">
                                <h3>your</h3>
                            </div>
                            <div className="image-container">
                            <img className="crickets" src="https://res.cloudinary.com/dxoq1rrh4/image/upload/v1700383032/images_eyjerm.jpg" alt="think" />
                            </div>
                            <h1>Resorts</h1>
                            <p>welcome to Nusa..!!</p>
                            <button><a href="https://www.booking.com/resorts/city/id/nusa-dua-id.html?aid=861627&label=msn-MRyzl2uuovlEegS5nxpNsg-16820865021%3Atikwd-17266949149%3Aloc-90%3Aneo%3Amte%3Alp116070%3Adec%3Aqsnusa%20dua%20resorts&utm_campaign=Resorts%20-%20Indonesia&utm_medium=cpc&utm_term=MRyzl2uuovlEegS5nxpNsg&msclkid=b93874447e5519463203111a3eb14c9b&utm_source=bing&keep_landing=1&sid=38d18469361c6a46ca21c05f72657c0b">View</a></button>
                        </div>
                        </div>
                        </div>
                        <div className="card" id="card">                       
                        <div className="front">
                        <div className="box content-box">
                            <div className="content">
                               <h3>Favourite </h3>
                            </div>
                            <div className="image-container">
                                  <img className="crickets" src="https://res.cloudinary.com/dxoq1rrh4/image/upload/v1700383230/0988_kxx6ap.jpg" alt="think" />
                            </div>
                            <h1>Resorts</h1>
                            <p>welcome to Novotel..!!</p>
                            <button><a href="https://novotel.accor.com/a/en/india.html">View</a></button>
                        </div>
                        </div>
                        </div>
                        <div className="card right-most" id="card">                        
                        <div className="front">
                        <div className="box content-box">
                            <div className="content">
                                <h3>resort</h3>
                            </div>
                            <div className="image-container">
                                <img className="crickets" src="https://res.cloudinary.com/dxoq1rrh4/image/upload/v1700383146/yuio_rzcduv.jpg" alt="think" />
                            </div>
                            <h1>Resorts</h1>
                            <p>welcome to Soaltee ..!!</p>
                            <button><a href="https://www.tripadvisor.in/Hotel_Review-g2407100-d24980780-Reviews-Soaltee_Westend_Resort_Chitwan-Bharatpur_Chitwan_District_Narayani_Zone_Central_Regi.html">View</a></button>
                        </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className="form-section">
                    <Form updateForm={this.updateForm} />
                </div>
                <div className="table-container" id="table">
                    <Table formData={formData} />
                </div>
                <div id="charts" className="form-section">
                    <MyPieChart data={resorts_count} />
                    <MyPieChart data={genders_count} />
                    <MyPieChart data={ages_count} />
                    <MyPieChart data={male_resorts_count} />
                    <MyPieChart data={female_resorts_count} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Body