import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <div className="text-4xl font-bold mb-6 text-center">
          Login with GitHub
        </div>
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000/",
            })
          }
          className="w-full hover:cursor-pointer flex items-center justify-center py-3 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          <FaGithub className="mr-2" />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
