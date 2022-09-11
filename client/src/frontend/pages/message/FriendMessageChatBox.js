import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";

// import { getMessagesBetweenTwoUsers } from "../../../actions/chatActions";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
function FriendMessageChatBox(props) {
  const [showPicker, setShowPicker] = useState(false);

  // const dispatch = useDispatch();
  // const userState = useSelector((state) => state.auth.user);
  console.log("props", props);
  let {
    messages,
    oldMessages,
    userOne,
    userTwo,
    setMessage,
    sendMessage,
    message,
    scrollRef,
  } = props;
  console.log("props", props);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <h5 className="mesgs">
        Chat with{" "}
        <div className="incoming_msg_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>{" "}
        {userTwo && userTwo.userName}
      </h5>
      <div className="mesgs">
        <div className="msg_history">
          {messages &&
            messages.length > 0 &&
            messages.map((msg, index) =>
              msg.createdBy === userTwo._id ? (
                <div key={index} ref={scrollRef} className="incoming_msg">
                  <div className="received_msg">
                    <div className="received_withd_msg">
                      <p>{msg.message}</p>
                      <span className="time_date">
                        <Moment>{msg.createdAt}</Moment>
                      </span>
                    </div>
                  </div>
                </div>
              ) : msg.createdBy === userOne._id ? (
                <div key={index} ref={scrollRef} className="outgoing_msg">
                  <div className="sent_msg">
                    <p>{msg.message}</p>
                    <span className="time_date">
                      <Moment>{msg.createdAt}</Moment>
                    </span>
                  </div>
                </div>
              ) : (
                <div>Say Hi to {userTwo && userTwo.userName}</div>
              )
            )}
        </div>
        <div className="type_msg">
          <div className="input_msg_write">
            <input
              type="text"
              className="write_msg"
              placeholder="Type a message"
              name="message"
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
              onKeyPress={(event) =>
                event.key === "Enter" ? sendMessage(event) : null
              }
            />
            <button
              className="msg_send_btn"
              type="button"
              onClick={sendMessage}
              title="Send"
            >
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="msg_emoji_btn"
              onClick={() => setShowPicker(!showPicker)}
              title="Emoji"
            >
              <i className="fa fa-smile" aria-hidden="true"></i>
            </button>
            {showPicker === true ? (
              <Picker
                // set="apple"
                // sheetSize="32"
                // backgroundImageFn={() =>
                //   `https://unpkg.com/emoji-datasource@3.0.0/img/facebook/sheets/32.png`
                // }
                backgroundImageFn={() => `/dist/img/emoji/32.png`}
                i18n={{
                  search: "Search",
                  categories: {
                    search: "Search",
                    recent: "Recents",
                  },
                }}
                onSelect={(event) => setMessage(message + event.native)}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendMessageChatBox;
