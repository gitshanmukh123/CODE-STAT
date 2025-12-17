import React, { useRef } from 'react';
import './common.css'; // Import any additional styles
import Navbar from '../commonelement/Navbar';
import Sidebar from '../commonelement/Sidebar';
import Footer from './Footer';
import Swal from 'sweetalert2';

function Contact() {
  const [sidebar, setSidebar] = React.useState(false);
  const formRef = useRef(null); // Create a ref for the form

  const HandleSidebar = (info) => {
    setSidebar(info);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8f4575df-9197-44d3-8b8b-a8ad3e854291");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {

      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      }).then(() => {
        formRef.current.reset(); // Reset the form fields
      });
    }
  };

  return (
    <div className={`App bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white font-sans`}>
      {/* Navbar */}
      <Navbar HandleSidebar={HandleSidebar} sidebar={sidebar} />
      {/* Navbar end */}

      {/* Sidebar */}
      {sidebar && <Sidebar />}
      {/* Sidebar end */}

      <section className="flex flex-col justify-center items-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg md:text-xl mb-8 text-center">Feel Free and Send me Your Feedback</p>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:w-2/3 mx-auto">
            <form ref={formRef} onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  name='name'
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  name='email'
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  name='message'
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
                  type="submit"
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>

          {/* Notice Board */}
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg mt-8">
            <div className="bg-blue-600 text-white text-center py-4 rounded-t-lg">
              <h1 className="text-2xl font-bold">Notice!</h1>
            </div>
            <div className="p-6">
              <p className="text-gray-700 dark:text-white text-lg font-semibold">
                <q> Once you submit your query, please wait a moment for a response and check your email regularly.</q> Thank you!
              </p>
            </div>
          </div>
          {/* Notice Board end */}

        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Touch Me</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">My Location</h3>
                <p>New York</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                <p>dontverdo@yaaho.com</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Call Me</h3>
                <p>+01 4759845954</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Contact;
