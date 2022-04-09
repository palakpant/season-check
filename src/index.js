import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';


class App extends React.Component{

  // eslint-disable-next-line no-useless-constructor
  //constructor(props){  
    
       //super(props);

       //initializing state

       //only time we do direct assignment---1
      // this.state={lat: null,errorMsg:''};


       //always put setstate inside a callback or a componentDidMount 
       


  // } 

   state ={
     lat:null,
     errorMsg:''
   };
    
   //LifeCycle Method
   componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(
      (position)=> this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMsg: err.message })
      
    );
   }

        //with ref to 1 otherwise use setState
        
        renderContent(){

          if(this.state.errorMsg && !this.state.lat){
            return <div>Error:{this.state.errorMsg}</div>
          }
          else if(this.state.lat && !this.state.errorMsg){
          return <SeasonDisplay lat={this.state.lat} />
          }
          else if(!this.state.lat && !this.state.errorMsg) {
            return (
              <Spinner message="Please accept the location request"/>
              
           
            )
           
          }
        }
        
      
      
      


     

  
 

  // render(){
   
  //   return (
  //   <div>
  //     Latitude: {this.state.lat} 
  //     <br/>
  //     Error: {this.state.errorMsg}
  //     </div>


  //   )
  // }

  //conditional rendering
  render(){

    return (

      <div className="border red">
        {this.renderContent()}
      </div>
    )
   
   
   


   
    
  }


}

ReactDOM.render(<App/>,document.querySelector('#root'));