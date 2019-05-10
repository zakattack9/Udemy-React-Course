import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker'; // breaks code
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      {/* can also pass in regular JSX instead of another component */}
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure oyu want to do this?
        </div>
      </ApprovalCard>

      {/* passing in a component to another component as a property */}
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Hello World"
          // avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          comment="Foo Bar"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          comment="Code Code Code"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));