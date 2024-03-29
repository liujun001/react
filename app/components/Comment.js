import React,{ Component }from 'react'
import marked from 'marked'

export class Comment extends Component{
  rawMarkup(){
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }

  render(){
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
}
