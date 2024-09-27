
import { handleForm } from "./action";

export default async function Home() {
 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form action={handleForm}  className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          name="to"
          type="text"
          placeholder="Title..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="to-name"
          type="text"
          placeholder="Name... of the person you are sending to"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="to_email"
          type="email"
          placeholder="Email... of the person you are sending to"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          placeholder="Your message..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
}
