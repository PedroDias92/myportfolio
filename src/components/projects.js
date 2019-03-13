import React, {Component} from 'react';
import {Tabs,Tab,Grid,Cell} from 'react-mdl';
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
                        url = "https://media.giphy.com/media/1SEPuIsJt0ZoNCKAzk/giphy.gif"
                        cardTitle=""
                        cardText = "ScoreBoard is part of Treehouse 'Learn React' , learn about JSX,Props, State, Components, Events, Lifting state up, Refs, Validate Props with PropTypes."
                        github="https://github.com/PedroDias92/score_board"
                        demo="https://scoreboard-7uwl7bh9t.now.sh"
                    />
                    <Project 
                        url = "https://media.giphy.com/media/Sb7lRw4SiKDS3zXPfl/giphy.gif"
                        cardTitle="Image Search app"
                        cardText = "Image Search app built with React that fetch data from https://unsplash.com/ API"
                        github="https://github.com/PedroDias92/image_search_app"
                        demo="https://react-image-search-nnl5ipfyh.now.sh"
                    />
                    <Project 
                        url = "https://media.giphy.com/media/BLqkNkDcyjk4j7Vqay/giphy.gif"
                        cardTitle=""
                        cardText = "Basic todo app made with React and Vue (in 'others' tab), help me understand the difference between the two framework's."
                        github="https://github.com/PedroDias92/todo-app-react"
                        demo="https://todoappreact-psgfuqdy2.now.sh/"
                    />
                    <hr/>
                    <h3 style={{textAlign:'center',marginTop:'auto'}}>More to come!</h3>
                    
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div>
                    <Project 
                        url = "https://media.giphy.com/media/2gWGcBMlywPPm1ZFmn/giphy.gif"
                        cardTitle="Meower"
                        cardText = "Meower - Twitter for Cats, a basic twitter clone built to demonstrate the full stack 🥞 client(HTML|CSS|javascript), server(NodeJs), database(MongoDB)."
                        github="https://github.com/PedroDias92/Meower_twiter-clone"
                        demo=""
                    />

                    <hr/>
                    <h3 style={{textAlign:'center',marginTop:'auto'}}>More to come!</h3>
                </div>
            )
        }
    }


    render(){
        return(
        <div className="category-tabs">
            <Tabs active={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
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