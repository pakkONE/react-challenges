import React, { Component } from 'react';
import css from './css/Content.module.css';
import { savedPosts } from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader';

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    getData() {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

    componentDidMount() {
        this.getData();
        this.setState({
            posts: savedPosts
        })
    }

    handleEvent = (event) => {
        const name = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label id='searchInput'>Search:</label>
                        <input
                            type='search'
                            id='searchInput'
                            onChange={(event) => this.handleEvent(event)}
                        />
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? <PostItem savedPosts={this.state.posts} /> : <Loader />}

                </div>
            </div>
        )
    }
}

export default Content