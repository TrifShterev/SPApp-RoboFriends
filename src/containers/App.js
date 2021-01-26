import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox'
import {robots} from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
class App extends Component{
    constructor(){
        super()
    this.state= {
    robots: robots,
    searchfield:''
      }

    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())    
    .then(users=> this.setState({robots: users}));   

    
}

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
            
    }


    render(){

        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if (this.state.robots.length=== 0) {
    return <h1>Loading</h1>

            } else {

                return(
                    <div className ='tc'>
                        <h1 className='f1'>Trifon's RoboFriends</h1>
                        <SearchBox searchChange= {this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                 <CardList robots={filteredRobots} />
                            </ErrorBoundry>                        
                        </Scroll>                  
                    </div>
            
                );
    
        }

       

    }

    
}
export default App;