import React from 'react';
import './Content.css'
import image from './resources/sky01.jpg';


class Content extends React.Component{



    render(){
        const style={
            backgroundImage: `url(${image})`
        }
        return(
            <div className="content-area">
                <div className="content01">                    

                    <div style={style} className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
                <div className="content02">content02</div>
                <div className="content03">content03</div>
            </div>
        )
    }

}


export default Content;