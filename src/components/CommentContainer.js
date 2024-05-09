import React from "react";
import CommentList from "./CommentList";

const commentData = [
  {
    name: "Mohit",
    text: "Lorem ipsum dolor sit amet.",
    replies: [],
  },
  {
    name: "Mohit",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "Mohit",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "Mohit",
            text: "Lorem ipsum dolor sit amet.",
            replies: [
              {
                name: "Mohit",
                text: "Lorem ipsum dolor sit amet.",
                replies: [
                  {
                    name: "Mohit",
                    text: "Lorem ipsum dolor sit amet.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Mohit",
        text: "Lorem ipsum dolor sit amet.",
        replies: [],
      },
      {
        name: "Mohit",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "Mohit",
            text: "Lorem ipsum dolor sit amet.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Mohit",
    text: "Lorem ipsum dolor sit amet.",
    replies: [],
  },
  {
    name: "Mohit",
    text: "Lorem ipsum dolor sit amet.",
    replies: [],
  },
  {
    name: "Mohit",
    text: "Lorem ipsum dolor sit amet.",
    replies: [],
  },
  {
    name: "Mohit",
    text: "Lorem ipsum dolor sit amet.",
    replies: [],
  },
];

const CommentContainer = () => {
  return (
    <div>
      <h1 className="pt-4 m-2 text-xl font-bold">Comments :</h1>
      <div className="pl-2">
        <CommentList comments={commentData} />
      </div>
    </div>
  );
};

export default CommentContainer;
