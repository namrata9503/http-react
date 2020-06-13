import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

import Posts from '../Blog/Posts/Posts';
import { Route, NavLink, Switch , Redirect } from 'react-router-dom';

import './Blog.css';
//import axios from 'axios';

class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">home</a></li> */}
                            <li><NavLink to="/posts/" exact activeClassName="my-active"
                                activeStyle={{ color: 'orange', textDecoration: 'underline' }}
                            >Posts</NavLink></li>

                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>new post</NavLink></li>

                        </ul>
                    </nav>
                </header>

                {/* <section className="Posts">
                   {posts}
                </section> */}
                {/* <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />


                </section> */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />

                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts"/>
                </Switch>


            </div>
        );
    }
}

export default Blog;