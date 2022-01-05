
import React, {Component} from 'react';
import  './Footer.css';
export default class Footer extends Component {
    render(){
        return (
          <div className="mini-footer">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="copyright-text">
                    <p>©
                        <a href="/">DigitalOcean</a>. All rights reserved. Created by
                        <a href="/"> C.Vijaya kumar </a>
                    </p>
                </div>

                <div className="go_top">
                    <span className="icon-arrow-up"></span>
                </div>
            </div>
        </div>
    </div>
</div>
            
 
        )
    }
}