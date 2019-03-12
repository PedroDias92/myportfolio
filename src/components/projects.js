import React, {Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,CardText,Button} from 'react-mdl';
import Project from './project'

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
                <div className="row">
                    <Project 
                        url = "https://media.giphy.com/media/Sb7lRw4SiKDS3zXPfl/giphy.gif"
                        cardTitle="Image Search"
                        cardText = "ola tudo bem .Mauris sagittis pellentesque lacus eleifend lacinia..."
                        github="https://github.com/PedroDias92/image_search_app"
                        demo="https://react-image-search-nnl5ipfyh.now.sh"
                    />
                    <Project 
                        url = "http://www.getmdl.io/assets/demos/welcome_card.jpg"
                        cardTitle="Project 1"
                        cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.acinia..."
                        github="https://github.com/PedroDias92/image_search_app"
                        demo="https://react-image-search-nnl5ipfyh.now.sh"
                    />
                    <Project 
                        url = "http://www.getmdl.io/assets/demos/welcome_card.jpg"
                        cardTitle="Project 2"
                        cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis ppellentesque lacus eleifend lacinia.Mauris sagittis pellentesque lacellentesque lacus eleifend lacinia.Mauris sagittis pellentesque lacus eleifend lacinia..."
                        github="https://github.com/PedroDias92/image_search_app"
                        demo="https://react-image-search-nnl5ipfyh.now.sh"
                    />
                    <Project 
                        url = "http://www.getmdl.io/assets/demos/welcome_card.jpg"
                        cardTitle="Project 3"
                        cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia..."
                        github="https://github.com/PedroDias92/image_search_app"
                        demo="https://react-image-search-nnl5ipfyh.now.sh"
                    />
                    <Project 
                        url = "http://www.getmdl.io/assets/demos/welcome_card.jpg"
                        cardTitle="Project 4"
                        cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia..."
                        github="https://github.com/PedroDias92/image_search_app"
                        demo="https://react-image-search-nnl5ipfyh.now.sh"
                    />
                    <Project 
                        url = "http://www.getmdl.io/assets/demos/welcome_card.jpg"
                        cardTitle="Project 5"
                        cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia..."
                        github="https://github.com/PedroDias92/image_search_app"
                        demo="https://react-image-search-nnl5ipfyh.now.sh"
                    />
                    
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
                    <h1>This is Others</h1>
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
                <Tab>Others</Tab>
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