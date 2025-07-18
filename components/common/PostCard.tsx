import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition w-full max-w-xl mx-auto mb-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{body}</p>
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>Post ID: {id}</span>
        <span>User ID: {userId}</span>
      </div>
    </div>
  );
};

export default PostCard;
