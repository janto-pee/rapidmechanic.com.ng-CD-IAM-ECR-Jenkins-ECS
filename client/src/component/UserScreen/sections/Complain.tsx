export default function Complain() {
  return (
    <section className="p-6 text-gray-800 ">
      <form
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-200 ng-untouched ng-pristine ng-valid"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">Reach Out</h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold bg-yellow-500 rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
