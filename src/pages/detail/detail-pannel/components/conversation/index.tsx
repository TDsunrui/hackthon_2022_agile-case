import { Avatar } from "antd";

import "./index.scss";

function Conversation() {
  return (
    <div className="conversation">
      <div className="conversation-item">
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <div className="conversation-con">
          <div className="conversation-user">
            <span className="black">chengyu dai</span> Draft @ 25 Apr 07:36 PM
          </div>

          <p>Hello</p>

          <p>
            Welcome to Zoho Desks new Unified Ticket Screen. Here, you have
            complete context of the ticket. Now that you had received your first
            ticket, did you notice that it has been assigned to you? To respond
            to this ticket smartly, check out the Auto-Suggested Solutions in
            the pane to your left.
          </p>

          <p>
            When you're done composing your response, you may send it and close
            the ticket.
          </p>

          <p>
            Whatever action you perform, be rest assured that you can always
            track them under the ticket's history. With that, you're one step
            closer to delivering top-notch customer service!
          </p>

          <p>Cheers,</p>
          <p>Team Zoho Desk</p>
          <p>1 888 900 9646</p>
        </div>
      </div>
      <div className="conversation-item">
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <div className="conversation-con">
          <div className="conversation-user">
            <span className="black">chengyu dai</span> 20 Apr 11:20 PM (6 days ago)
          </div>

          <p>Hello</p>

          <p>
            Welcome to Zoho Desks new Unified Ticket Screen. Here, you have
            complete context of the ticket. Now that you had received your first
            ticket, did you notice that it has been assigned to you? To respond
            to this ticket smartly, check out the Auto-Suggested Solutions in
            the pane to your left.
          </p>

          <p>
            When you're done composing your response, you may send it and close
            the ticket.
          </p>

          <p>
            Whatever action you perform, be rest assured that you can always
            track them under the ticket's history. With that, you're one step
            closer to delivering top-notch customer service!
          </p>

          <p>Cheers,</p>
          <p>Team Zoho Desk</p>
          <p>1 888 900 9646</p>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
