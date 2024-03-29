import "./Reply.module.css";
import iconPlus from "../../assets/images/icon-plus.svg";
import iconMinus from "../../assets/images/icon-minus.svg";
import iconDelete from "../../assets/images/icon-delete.svg";
import iconEdit from "../../assets/images/icon-edit.svg";
import iconReply from "../../assets/images/icon-reply.svg";
import { useState } from "react";

const Reply = (props) => {
	const [score, setScore] = useState(props.counter);

	function increaseScore() {
		if (score > props.counter) {
			return "";
		}
		return setScore((prevDate) => prevDate + 1);
	}

	function decreaseScore() {
		if (score < props.counter) {
			return "";
		}
		setScore((prevDate) => prevDate - 1);
	}
	return (
		<>
			<div className="reply">
				<hr className="reply-divider" />
				<div className="replySection">
					<div className="comment flex-desktop">
						<div className="commentRate commentRate-column">
							<img
								alt=""
								onClick={increaseScore}
								src={iconPlus}
							/>
							<p>{score}</p>
							<img
								alt=""
								onClick={decreaseScore}
								src={iconMinus}
							/>
						</div>
						<div>
							<div className="userInfo">
								<img
									alt=""
									className="userPicture"
									src={props.image}
								/>
								<p className="userName">{props.username}</p>
								{props.currentUser && (
									<p className="myCard">you</p>
								)}
								<p className="commentDate">{props.createdAt}</p>
								{props.currentUser ? (
									<div className="editComment hide">
										<span onClick={props.handleDelete}>
											<img alt="" src={iconDelete} />
											<span className="deleteEditedComment">
												Delete
											</span>
										</span>
										<span onClick={props.handleEdit}>
											<img alt="" src={iconEdit} />
											<span className="editComment-edit">
												Edit
											</span>
										</span>
									</div>
								) : (
									<div className="editComment hide">
										<div onClick={props.handleReply}>
											<img alt="" src={iconReply} />
											<span className="replyEditedComment">
												Reply
											</span>
										</div>
									</div>
								)}
							</div>
							<p className="commentMessage">
								<span className="mention">
									@{props.replyingTo}
								</span>{" "}
								{props.content}
							</p>
							<div className="commentInfo">
								<div className="commentRate show-flex">
									<img
										alt=""
										onClick={increaseScore}
										src={iconPlus}
									/>
									<p>{score}</p>
									<img
										alt=""
										onClick={decreaseScore}
										src={iconMinus}
									/>
								</div>
								{props.currentUser ? (
									<div className="editComment show">
										<span onClick={props.handleDelete}>
											<img alt="" src={iconDelete} />
											<span className="deleteEditedComment">
												Delete
											</span>
										</span>
										<span onClick={props.handleEdit}>
											<img alt="" src={iconEdit} />
											<span className="editComment-edit">
												Edit
											</span>
										</span>
									</div>
								) : (
									<div className="editComment show">
										<div onClick={props.handleReply}>
											<img alt="" src={iconReply} />
											<span className="replyEditedComment">
												Reply
											</span>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Reply;
