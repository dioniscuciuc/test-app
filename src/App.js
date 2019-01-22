import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postsActions from './actions/postsActions'
import Post from './components/post-component'
import Form from './components/form-component'

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    addPost: (data) => dispatch(postsActions.addPost(data)),
    removePost: (data) => dispatch(postsActions.removePost(data)),
    loadPosts: () => dispatch(postsActions.loadPosts())

});

class App extends Component {
  componentDidMount(){
    this.props.loadPosts();
  }


  getPosts = () => {
      return this.props.postReducer.map((post, index) => (<Post key={index} postData={post} removePost={this.props.removePost}/>))
  };

  render() {
      const sectionStyle = {
          padding: '0 40px'
      };
    return (
      <div className="App">
        <header className="App-header">
            <section style={sectionStyle}>
                <div id="posts" className="well">
                    {this.getPosts()}
                </div>
                <Form addPost={this.props.addPost} />
            </section>

        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
