import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent,Button} from 'react-mdl';
import Pdf from '../documents/CV_PedroDias_2019.pdf';

class Contact extends Component{
    render(){
        return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={8}>
                    <h2>Pedro Dias</h2>
                    <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                        alt="avatar"
                        style={{height:'250px'}} />
                    <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
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
                         <h3>Resume</h3>
                {/* Colored Raised button */}
                <Button href = {Pdf} target = "_blank" raised colored rel="noopener noreferrer">Download Resume (PT)</Button>


                </Cell>
                
                <Cell col={4}>
                <h3>Contacts</h3>
                <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'15px',fontFamily:'Josefin Sans'}}>
                            <i className="fa fa-phone-square"></i>
                            <a href="tel:(+351) 932 591 098">(+351) 932 591 098</a>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'15px',fontFamily:'Josefin Sans'}}>
                            <i className="fas fa-envelope-square"></i>
                            <a href="mailto:pedro.dias92@hotmail.com">pedro.dias92@hotmail.com</a></ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'15px',fontFamily:'Josefin Sans'}}>
                            <i className="fab fa-linkedin"></i>
                            <a target="_blank" href="https://www.linkedin.com/in/pedro-dias92/" rel="noopener noreferrer">www.linkedin.com/in/pedro-dias92/</a></ListItemContent>
                        </ListItem>
                    </List>
                </div>
                
                </Cell>
            </Grid>
        </div>
        )
    }
}


export default Contact