import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h1>warning!</h1>
          Are you sure?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="alex"
          timeAgo="Today at 4:45PM"
          content="Nice dude!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Tom"
          timeAgo="Today at 2:12PM"
          content="Nice boy!"
          avatar={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="zed"
          timeAgo="5days ago"
          content="Nice girl!"
          avatar={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
