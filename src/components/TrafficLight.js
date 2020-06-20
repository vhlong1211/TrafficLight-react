import React from 'react';
import './Trafficlight.css';
import classNames from 'classnames';

class TrafficLight extends React.Component(){
    constructor(){
        super();
        this.state={
            currColor:0};
        setInterval(function(){
            this.setState(
                {currColor:this.getNextColor(this.state.currColor)}
            )
        },1000);
    }
    
    getNextColor(color){
        if(color===0)
          return 1;
        if(color===1)
          return 2;
        if(color===2)
          return 0;
        
    }

    render(){
        let currColor=this.state.currColor
        return(
            <div className='TrafficLight'>
                <div className={classNames('bulb','red',{
                    active: currColor===0
                })} />
                <div className={classNames('bulb','yellow',{
                    active: currColor===1
                })} />
                <div className={classNames('bulb','blue',{
                    active: currColor===2
                })} />

            </div>
        )
            
        
    }
}
export default TrafficLight;