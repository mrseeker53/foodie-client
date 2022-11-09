import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    // Dynamic title using hooks
    useTitle('Blog');

    return (
        // use grid
        <div className='grid grid-cols-1 gap-5 my-20 mx-12 md:mx-36'>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20 cursor-pointer'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in'>
                    1. Differences between SQL and NoSQL.
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>
                    <strong>SQL databases</strong> are primarily called as Relational Databases (RDBMS). <strong>NoSQL databases</strong> are primarily called as non-relational or distributed database.
                    <br />
                    SQL databases have fixed or static or predefined schema. NoSQL databases have dynamic schema.
                    <br />
                    SQL databases databases are not suited for hierarchical data storage. NoSQL databases databases are best suited for hierarchical data storage.
                    <br />
                    SQL databases databases are best suited for complex queries. NoSQL databases databases are not so good for complex queries.
                    <br />
                    SQL databases vertically scalable. NoSQL databases horizontally scalable.
                </div>
            </details>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20 cursor-pointer'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in'>
                    2. What is JWT, and how does it work?
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>
                    <strong>JSON Web Token (JWT)</strong> is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
                    <br />
                    Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources.
                    <br />
                    If the JWT contains the necessary data, the need to query the database for certain operations may be reduced, though this may not always be the case.
                </div>
            </details>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20 cursor-pointer'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in'>
                    3. What is the difference between javascript and Nodejs?
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>
                    <strong>Javascript</strong> is a programming language that is used for writing scripts on the website. <strong>Nodejs</strong> is a Javascript runtime environment.
                    <br />
                    Javascript is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. Nodejs is written in C, C++ and Javascript.
                    <br />
                    Javascript is basically used on the client-side. Nodejs is mostly used on the server-side.
                    <br />
                    Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.
                    <br />
                    Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                    <br />
                    Javascript is used in frontend development. Nodejs is used in server-side development.
                </div>
            </details>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20 cursor-pointer'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in'>
                    4. How does NodeJS handle multiple requests at the same time?
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>
                    <strong>NodeJS</strong> receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    <br />
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </div>
            </details>
        </div>
    );
};

export default Blog;