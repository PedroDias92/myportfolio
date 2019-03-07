import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import avatarImg from '../images/avatar-img.png'

class Aboutme extends Component{
    render(){
        return(
        
        <div className="landingpageGrid">
            <Grid >
                <Cell col={4} >
                    <img 
                    alt="avatar img"
                    className="avatar-img"
                    src={avatarImg}
                    />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML | JavaScript | React | VueJS | NodeJS | MongoDB | Python3 | SQL</p>
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
                            {/* <a href="https://www.instagram.com/pedrodiaszargas/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>  */}
                        </div>
                    </div>
                </Cell>
                <Cell col={8} className="aboutMe">
                        <h1>Me talking about myself</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
                        Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
                        Duis sagittis ipsum. Praesent mauris. 
                        Fusce nec tellus sed augue semper porta. Mauris massa. 
                        Vestibulum lacinia arcu eget nulla. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Duis sagittis ipsum. Praesent mauris. 
                        Fusce nec tellus sed augue semper porta. Mauris massa. 
                        Vestibulum lacinia arcu eget nulla. 
                         </p>
                         <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
                        Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
                        Duis sagittis ipsum. Praesent mauris. 
                        Fusce nec tellus sed augue semper porta. Mauris massa. 
                        Vestibulum lacinia arcu eget nulla. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Duis sagittis ipsum. Praesent mauris. 
                        Fusce nec tellus sed augue semper porta. Mauris massa. 
                        Vestibulum lacinia arcu eget nulla. 
                         </p>
                </Cell>
            </Grid>
        </div>
        )
    }
}



export default Aboutme