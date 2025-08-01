// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import { db } from "@/firebase/fireStore";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", message: "" });
    
//     toast.success("Details submitted successfully!");
//   };

//   return (
//     <div className=" h-screen !mb-[200px] flex !mx-auto items-center justify-center !text-white " id="contact">
//       <motion.form
//       onSubmit={handleSubmit}
//       className="max-w-md !mx-auto p-6 bg-white rounded-lg shadow-md"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className=" w-[350px] border-2 !p-4 rounded-2xl sm:w-[600px] sm:h-[700px] flex flex-col justify-evenly"
//     >
//       <h2 className="text-2xl font-bold !mb-4 text-white text-center">Contact Me</h2>

//       <motion.div whileFocus={{ scale: 1.03 }} className="mb-4">
//         <label className="block  !mb-1 text-white">Your Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full !px-4 !py-2 border border-gray-300 rounded"
//         />
//       </motion.div>

//       <motion.div whileFocus={{ scale: 1.03 }} className="mb-4">
//         <label className="block !mb-1 text-white">Your Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full !px-4 !py-2 border border-gray-300 rounded"
//         />
//       </motion.div>

//       <motion.div whileFocus={{ scale: 1.03 }} className="mb-4">
//         <label className="block  !mb-1 text-white">Message</label>
//         <textarea
//           name="message"
//           rows="4"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="w-full !px-4 !py-2 border border-gray-300 rounded"
//         ></textarea>
//       </motion.div>

//    <div className="w-full flex justify-center">
//    <motion.button
//         type="submit"
//         className="w-1/2 !m-auto border-2 bg-blue-600 text-white !py-2 rounded hover:bg-blue-700 transition"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Submit Now!
//       </motion.button>
//    </div>
//     </motion.form>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { db } from "@/firebase/fireStore";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      toast.success("Details submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className=" h-screen !mb-[200px] flex !mx-auto items-center justify-center !text-white " id="contact">
      <motion.form
        onSubmit={handleSubmit}
        className=" w-[350px] border-2 !p-4 rounded-2xl sm:w-[600px] sm:h-[700px] flex flex-col justify-evenly"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold !mb-4 text-white text-center">Contact Me</h2>

        <motion.div whileFocus={{ scale: 1.03 }} className="mb-4">
          <label className="block  !mb-1 text-white">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full !px-4 !py-2 border border-gray-300 rounded"
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.03 }} className="mb-4">
          <label className="block !mb-1 text-white">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full !px-4 !py-2 border border-gray-300 rounded"
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.03 }} className="mb-4">
          <label className="block  !mb-1 text-white">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full !px-4 !py-2 border border-gray-300 rounded"
          ></textarea>
        </motion.div>

        <div className="w-full flex justify-center">
          <motion.button
            type="submit"
            className="w-1/2 !m-auto border-2 bg-blue-600 text-white !py-2 rounded hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Now!
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
