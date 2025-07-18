import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { useState } from "react";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  const [userList, setUserList] = useState<UserData[]>(users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (user: UserData) => {
    setUserList((prev) => [...prev, user]);
  };
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      <main className="flex flex-col gap-6 p-4 sm:p-6 md:p-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-green-700">
            Users
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm md:text-base transition-colors"
          >
            + Add User
          </button>
          <UserModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddUser}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userList?.map((user: UserProps) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}
