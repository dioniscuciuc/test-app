import React from 'react';


export default class Post extends React.Component{

    getTags = () => {
        return this.props.postData.tags.map((tag, index)=>{
            return ( <button key={index} className="btn btn-xs btn-default">{tag}</button> )
        })
    };

    deletePost = () =>{
        this.props.removePost(this.props.postData.id)
    };

    render(){
        return  (
            <article>
                <header>
                    <h3>{this.props.postData.title}</h3>
                </header>
                <section>
                    <p>{this.props.postData.body}</p>
                </section>
                <footer>
                    <div className="tags">
                        {this.getTags()}
                    </div>
                </footer>
                <div className="controls">
                    <button onClick={this.deletePost} className="btn btn-danger btn-mini">удалить</button>
                </div>
            </article>
        )
    }
}