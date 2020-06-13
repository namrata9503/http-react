import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

    state = {
        posts: [],
        selectedId: null
    }


    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatePost = posts.map(post => {
                    return {
                        ...post,
                        author: 'nams'
                    }
                })
                this.setState({ posts: updatePost });

                //console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }


    postSeleced = (id) => {

        this.setState({ selectedId: id })
    }
    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Link to={'/posts/' + post.id} key={post.id}>
                    <Post

                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSeleced(post.id)}
                    /></Link>);
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />

            </div>

        );
    }
}

export default Posts
