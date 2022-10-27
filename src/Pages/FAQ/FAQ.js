import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl text-center font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 text-center dark:text-gray-400">
            Feel free to ask any Question.
          </p>
          <div className="space-y-4">
            <details className="w-10/12 mx-auto bg-slate-200 border-2 rounded-lg">
              <summary className="px-4 py-6 text-lg focus:outline-none focus-visible:ring-violet-400">
                Q. How do I select a course?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Visit the{" "}
                <Link className="text-blue-600 hover:underline" to="/courses">
                  Courses
                </Link>{" "}
                page to browse our offerings. You can choose your favourite
                subject. Then click this course which you selected. Read some
                details of this course and get premium. Click this button. It's
                will redirect you login page if you are not logged in our
                website. If you don't have any account you can create a new
                account. After that you will go to checkout page. Then you can
                chekout and purchase this course.
              </p>
            </details>
            <details className="w-10/12 mx-auto bg-slate-200 border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none text-lg focus-visible:ring-violet-400">
                Q. What is online learning like?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                For those who have never encountered online learning, the
                biggest question is often what it is actually like. The caveat,
                as you know, is that online learning comes in several forms.
                Therefore, this is your chance to explain that to people. Point
                out that there are different types of online courses and
                programs, and that they'll have to decide which is best for
                them. Then, explain the types of courses you offer and how your
                online programs work to give them all the information they need.
                This not only gives them information, but it increases their
                trust because you're being transparent and giving them
                straightforward answers.{" "}
              </p>
            </details>
            <details className="w-10/12 mx-auto bg-slate-200 border rounded-lg">
              <summary className="px-4 py-6 text-lg focus:outline-none focus-visible:ring-violet-400">
                Q. Does online learning really work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                There's always a skeptic, and when it comes to online learning,
                there are often several of them. Everyone wants to know if
                online courses “really work”—and that's a hard question to
                answer because there are several factors to consider. On a
                general basis, yes, online learning can be effective. However,
                that depends on whether the courses are set up properly, the
                provider is educated and experienced, and if the person taking
                the courses does well in a virtual learning environment. You
                should be able to explain these things to people so that they
                know what they're getting into. Then, you can invite them to
                contact you to discuss whether it would be right for them.
              </p>
            </details>
            <details className="w-10/12 mx-auto bg-slate-200 border rounded-lg">
              <summary className="px-4 py-6 text-lg focus:outline-none focus-visible:ring-violet-400">
                Q. Can I take more than one course at a time?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                If you are new to online learning, we recommend that you begin
                with one course. As our courses are offered frequently
                throughout the year, you can always come back and continue your
                studies with one or more topics.
              </p>
            </details>
            <details className="w-10/12 mx-auto bg-slate-200 border rounded-lg">
              <summary className="px-4 py-6 text-lg focus:outline-none focus-visible:ring-violet-400">
                Q. How long is my course?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                We currently offer 4-week, 6-week, and 8-week courses. <br />
                * For a 4-week or 6-week course, you can expect to spend 5-7
                hours a week reviewing and completing the course material.
                <br /> * For an 8-week course, you can expect to spend 8-10
                hours a week reviewing and completing the course material.
                <br /> You will also have read-only access to your course in
                Canvas for 90 days after its conclusion to review the course
                materials at your leisure.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
