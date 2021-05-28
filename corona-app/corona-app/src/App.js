import React from  'react';
// import Cards from './Components/Cards/Cards';
// import Charts from './Components/Charts/Charts';
// import CountryPicker from './Components/CountryPicker/CountryPicker';

import {Cards, Charts, CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchDAta} from './api';
import coronaImg from './img/corona.jpg'; 

class App extends React.Component{

    state = {
        data : {},
        country : '',
    }

    async componentDidMount(){
        const fetchedDAta = await fetchDAta();
        // console.log(data);
        this.setState({data :fetchedDAta});
    }

    handleCountryChange = async (country) =>{
        //fetch data
        const fetchedData = await fetchDAta(country);
        // sconsole.log(fetchedData);
        this.setState({data : fetchedData , country:country});
        //set data
    }

    render(){
        const {data , country} = this.state;
        return(
            <div className ={styles.container}> 
            <img className= {styles.image} src = {coronaImg}/>
                <Cards data = {data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Charts data = {data} country = {country}/>
            </div>
        )
    }
}

export default App;