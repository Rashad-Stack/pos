export default function LoginPage() {
  return (
    <main>
      <section className="grid min-h-screen place-items-center">
        <div className="m-auto mx-auto w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
          <div className="mx-auto flex justify-center">
            <img
              className="h-7 w-auto sm:h-8"
              src="https://merakiui.com/images/logo.svg"
            />
          </div>
          <form className="mt-6">
            <div>
              <label htmlFor="username" className="block text-sm text-gray-800">
                Username
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
              />
            </div>
            <div className="mt-6">
              <button className="w-full transform rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
