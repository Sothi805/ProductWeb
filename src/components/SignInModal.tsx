// import React, { useState } from "react";

// type propsType={
//      isOpen: boolean,
//      onClose: () => void
//     }
    
// const LoginModal = ({ isOpen, onClose}:propsType ) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = () => {
//         // Here you would typically make an API call to log in
//         console.log("Logging in with:", { email, password });
//         // For demonstration, just close the modal
//         onClose();
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-xl font-semibold mb-4">Log In</h2>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
//                 />
//                 <div className="flex justify-end">
//                     <button
//                         className="bg-sky-500 text-white py-2 px-4 rounded-md mr-2"
//                         onClick={handleLogin}
//                     >
//                         Log In
//                     </button>
//                     <button
//                         className="bg-red-500 text-white py-2 px-4 rounded-md"
//                         onClick={onClose}
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginModal;
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SignInModal(props:any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default SignInModal