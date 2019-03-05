import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import avatarImg from '../images/avatar-img.png'

class Landingpage extends Component{
    render(){
        return(
        <div style={{width: '100%', margin:'auto'}}>
            <Grid className="landingpageGrid">
                <Cell col={12}>
                    <img 
                    alt="avatar img"
                    className="avatar-img"
                    src={avatarImg}
                    />
                    <div className="banner-text">
                        <h1>Full stack web developer</h1>
                        <hr/>
                        <p>HTML | JavaScript | React | VueJS | NodeJS | MongoDB | Python3.x | SQL</p>
                        <div className="socialLinks">
                            {/* linkedIn */}
                            <a href="https://www.linkedin.com/in/pedro-dias92/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            {/* github */}
                            <a href="https://github.com/PedroDias92" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github-square"></i>
                            </a>
                            {/* instagram */}
                            <a href="https://www.instagram.com/pedrodiaszargas/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default Landingpage;