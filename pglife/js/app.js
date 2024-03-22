class Box extends React.Component{   //defining a class and extending it to its react component 
    state= { color: 'black' };  //defining a state in react with default color as black

    changeColor(color){     //defining a function which takes parameter as color
        this.setState({color:color}); //using the set state property to change the colors
        console.log(color); //using it for printing actions on console 
    }

    render(){
    return (
        <div className = 'box'>
            <h1 className={this.state.color}> {this.props.heading} </h1>  
            <p>This is a paragraph using react which is my first demo hosted
            locally on the web browser via using the apache server</p> 
                <button onClick={()=>this.changeColor("red")}> RED </button> 
                <button onClick={()=>this.changeColor("blue")}> BLUE </button>
                <button  onClick={()=>this.changeColor("yellow")}> YELLOW </button>
                <button  onClick={()=>this.changeColor("green")}> GREEN </button>        
        </div>
    );
    }

};

const App = () =>{    //defining app with all heading and further things 
    return (
        <section>
        <div className='row'>
            <div className='col'>
                <Box  heading='First Heading'/>
                
            </div>
            <div className='col'>
                <Box heading='Second Heading'/>
                
            </div>
            <div className='col'>
                <Box heading='Third Heading'/>
               
            </div>
            <div className='col'>
                <Box heading='Forth Heading' />
             
            </div>
            <div className='col'>
                <Box heading='Fifth Heading' />
             
            </div>
            <div className='col'>
                <Box heading='Sixth Heading' />
             
            </div>
        </div>
        </section>
        
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('react-container')
);

