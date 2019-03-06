import React, {Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,CardText,Button} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={
            activeTab: 0
        };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="section group">
                    <div className="col span_1_of_3">
                        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://media.giphy.com/media/Sb7lRw4SiKDS3zXPfl/giphy.gif) center / cover'}}>Image Search</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button href="https://media.giphy.com/media/Sb7lRw4SiKDS3zXPfl/giphy.gif" target="_blank" colored>giphy</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col span_1_of_3">
                        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project #2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button href="https://media.giphy.com/media/Sb7lRw4SiKDS3zXPfl/giphy.gif" target="_blank" colored>giphy</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col span_1_of_3">
                        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project #3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button href="https://media.giphy.com/media/Sb7lRw4SiKDS3zXPfl/giphy.gif" target="_blank" colored>giphy</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div>
                    <h1>This is Vue</h1>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>This is MongoDB</h1>
                </div>
            )
        }
    }


    render(){
        return(
        <div className="category-tabs">
            <Tabs active={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>VueJS</Tab>
                <Tab>MongoDB</Tab>
            </Tabs>
            
            <Grid>
                <Cell col={12}>
                    <div className="content">
                        {this.toggleCategories()}
                    </div>
                </Cell>
            </Grid>
                
            
        </div>
        )
    }
}


export default Projects