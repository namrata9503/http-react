import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state={
        clickedPost: null
    }

    componentDidMount(){
        console.log(this.props);
        this.loadData();
    
    
          
    }

    componentDidUpdate(){
            this.loadData();
    }

    loadData(){
        if(this.props.match.params.id){
            if(!this.state.clickedPost || (this.state.clickedPost && this.state.clickedPost.id !== this.props.match.params.id)){
                axios.get('/posts/'+ this.props.match.params.id)
                .then(response => {
                    //console.log(response.data);
                    this.setState({clickedPost: response.data});
                })
            }
            

        }

    }

    deleteData = () =>{
            axios.delete('/posts/'+  this.props.match.params.id)
            .then(response =>{
                console.log(response);
            })
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if( this.props.match.params.id){
            post = <p style={{textAlign: 'center'}}>Loading....</p>;
        }

        if(this.state.clickedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.clickedPost.title}</h1>
                    <p>{this.state.clickedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deleteData}>Delete</button>
                    </div>
                </div>
    
            );
        }
     
        return post;
    }
}

export default FullPost;