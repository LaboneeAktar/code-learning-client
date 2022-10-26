import React from "react";
import exampleImg from "../../assets/images/example.PNG";

const Blog = () => {
  return (
    <div>
      <div className="dark:bg-gray-800  dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">October 26, 2022</span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              Cors
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">What is Cors?</h2>
            <p className="mt-2">
              Cross-origin resource sharing (CORS) is a browser mechanism which
              enables controlled access to resources located outside of a given
              domain. It extends and adds flexibility to the same-origin policy
              (SOP). However, it also provides potential for cross-domain
              attacks, if a website's CORS policy is poorly configured and
              implemented. CORS is not a protection against cross-origin attacks
              such as cross-site request forgery (CSRF).
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">October 26, 2022</span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              Firebase
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <h3 className="mt-2">
              Firebase helps you develop high-quality apps, grow your user base,
              and earn more money. Each feature works independently, and they
              work even better together. Firebase provides detailed
              documentation and cross-platform SDKs to help you build and ship
              apps on Android, iOS, the web, C++, and Unity. Firebase is great
              for quick projects: it's easy to set up, fast, in many cases
              requires only front-end logic. It lets you focus on your app
              instead of implementing custom authentication, web sockets or
              database connections.
              <br /> <br />
              User Authentication is the necessity of any online business. Let's
              check some of the top tools and Firebase alternatives.
              <p className="pl-10 pt-4">1. STYTCH</p>
              <p className="pl-10">2. Ory</p>
              <p className="pl-10"> 3. Supabase</p>
              <p className="pl-10"> 4. Okta</p>
              <p className="pl-10">5. PingIdentity</p>
              <p className="pl-10">6. Keycloak</p>
              <p className="pl-10">7. Frontegg</p>
              <p className="pl-10">8. Authress</p>
            </h3>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">October 26, 2022</span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              Private Route
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">How does private route work?</h2>
            <p className="mt-2">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
            <p className="pt-5">Example:</p>
            <img className="pt-3 rounded-lg" src={exampleImg} alt="" />
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">October 26, 2022</span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              Node
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              What is Node? How does Node work?
            </h2>
            <h3 className="mt-2">
              Node allows developers to write JavaScript code that runs directly
              in a computer process itself instead of in a browser. Node can,
              therefore, be used to write server-side applications with access
              to the operating system, file system, and everything else required
              to build fully-functional applications.
              <br />
              As an asynchronous event-driven JavaScript runtime, Node.js is
              designed to build scalable network applications. In the following
              "hello world" example, many connections can be handled
              concurrently. Upon each connection, the callback is fired, but if
              there is no work to be done, Node.js will sleep.
              <br /> <br />
              Working of Node.js: Node.js accepts the request from the clients
              and sends the response, while working with the request node.js
              handles them with a single thread. To operate I/O operations or
              requests node.js use the concept of threads. Thread is a sequence
              of instructions that the server needs to perform. It runs parallel
              on the server to provide the information to multiple clients.
              Node.js is an event loop single-threaded language. It can handle
              concurrent requests with a single thread without blocking it for
              one request. Node.js basically works on two concept{" "}
              <p> 1. Asynchronous </p>
              <p> 2. Non-blocking I/O </p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
