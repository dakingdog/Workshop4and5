import React from 'react';
import FeedItem from './feeditem';
import StatusUpdateEntry from './statusupdateentry';
import { getFeedData } from '../server';
import { postStatusUpdate } from '../server'

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }
  refresh() {
    getFeedData(this.props.user, (feedData) => {
      this.setState(feedData);
    });
  }
  onPost(postContents) {
    postStatusUpdate(4, "Amherst, MA", postContents, () => {
      this.refresh();
    });
  }
  render() {
    return (
      <div>
        <StatusUpdateEntry onPost={(postContents) => this.onPost(postContents)}/>
        { this.state.contents.map((feedItem) => {
            return (
              <FeedItem
                        key={ feedItem._id }
                        data={ feedItem } />
              );
          }) }
      </div>
    )
  }
  componentDidMount() {
    this.refresh();
  }
}