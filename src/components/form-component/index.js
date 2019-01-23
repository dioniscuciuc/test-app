import React from 'react';


export default class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title:'',
            body: '',
            tags: '',
            submitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTagsChange = (e) =>{
        this.setState({
            tags: e.target.value.split(",")
        })
    };

    handleBodyChange = (e) => {
      this.setState({
          body: e.target.value
      })
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
           submitted: true
        });
        if(this.state.title && this.state.body && this.state.tags.length){
            let savedPosts = JSON.parse(localStorage.getItem('simpalsPosts'));
            this.props.addPost({
                id: savedPosts[savedPosts.length - 1].id + 1,
                title: this.state.title,
                body: this.state.body,
                tags: this.state.tags
            });
            this.setState({
                title:'',
                body: '',
                tags: '',
                submitted: false
            })
        }

    };

    getInputClass = (type) => {
        let classes = ['form-group'];
        if(!this.state[type] && this.state.submitted) classes.push('has-error');

        return classes.join(' ');
    };

    render(){
        return (
            <form id="post-add" className="col-lg-4" onSubmit={this.handleSubmit}>
                <div className={this.getInputClass('title')}>
                    <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="form-control" name="title" placeholder="заголовок"/>
                </div>
                <div className={this.getInputClass('body')}>
                    <input type="text" value={this.state.body} onChange={this.handleBodyChange} className="form-control" name="body" placeholder="запись"/>
                </div>
                <div className={this.getInputClass('tags')}>
                    <input type="text" value={this.state.tags} onChange={this.handleTagsChange} className="form-control" name="tags" placeholder="тег, еще тег"/>
                </div>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
        )
    }
}