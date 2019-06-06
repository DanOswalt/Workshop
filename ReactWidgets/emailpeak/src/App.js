import React from 'react';
import Inbox from './Inbox.js';
import './App.css';

const emails = [{
    sender: "boof@booey.com",
    subject: "Do not delete this message!!",
    date: "July 15th",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut adipisci consequatur odio quis architecto voluptate, laboriosam corrupti omnis quae fugit repellendus dignissimos veniam amet nesciunt id dolorum, aperiam velit! Accusamus."
  },
  {
    sender: "noof@nooey.com",
    subject: "Your inbox is full",
    date: "July 12th",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut adipisci consequatur odio quis architecto voluptate, laboriosam corrupti omnis quae fugit repellendus dignissimos veniam amet nesciunt id dolorum, aperiam velit! Accusamus."
  },
  {
    sender: "boof@booey.com",
    subject: "Hi there",
    date: "July 4th",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut adipisci consequatur odio quis architecto voluptate, laboriosam corrupti omnis quae fugit repellendus dignissimos veniam amet nesciunt id dolorum, aperiam velit! Accusamus."
  }
]

function App() {
  return (
    <div className="App">
      <Inbox emails={emails} />
    </div>
  );
}

export default App;
