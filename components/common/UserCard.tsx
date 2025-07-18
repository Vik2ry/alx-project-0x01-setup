import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all w-full max-w-xl mx-auto mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{user.name}</h2>

      <div className="space-y-2 text-sm text-gray-700">
        <p><span className="font-semibold text-indigo-600">Username:</span> {user.username}</p>
        <p><span className="font-semibold text-indigo-600">Email:</span> {user.email}</p>
        <p><span className="font-semibold text-indigo-600">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold text-indigo-600">Website:</span> <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="underline text-blue-500">{user.website}</a></p>

        <div>
          <p className="font-semibold text-indigo-600">Address:</p>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
        </div>

        <p><span className="font-semibold text-indigo-600">Geo:</span> lat: {user.address.geo.lat}, lng: {user.address.geo.lng}</p>

        <div>
          <p className="font-semibold text-indigo-600">Company:</p>
          <p>{user.company.name}</p>
          <p className="italic text-sm text-gray-500">{user.company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;