import React from 'react';

export default class Comment extends React.Component {
	render() {
		return (
			<div>
				<div className="media-left media-top">
				PIC
				</div>
				<div className="media-body">
					<a href="#">{this.props.author}</a> Hope everything is ok!
					<br /><a href="#">Like</a> · <a href="#">Reply</a> • {this.props.postDate} 
				</div>
			</div>	
		)
	}
}