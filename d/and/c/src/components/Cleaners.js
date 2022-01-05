
import React, {Component} from 'react';
import  './Home.css';

export default class Cleaners extends Component {
    render(){
        return (
   

    <div className="row">

        <div className="col-3">
            <div className="card " style={{width: 250}}>
                <img className="card-img-top" src={require('../assets/logos/b20.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Harpic: In just Rs.199</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b21.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Cleaners:Service in Rs.879</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b22.jpg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">Cleaners:package in Rs.599 </p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b23.jpg')} style={{width: 150,height: 150}} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">Cleaners:Wash spray in Rs.289</p>
                </div>
            </div>
        </div>

    </div>

            
 
        )
    }
}