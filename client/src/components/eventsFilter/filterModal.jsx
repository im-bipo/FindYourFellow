import React from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";

const filterModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f9f8ff", // Example background color
    border: "1px solid #ccc", // Example border
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Example box shadow
    padding: "24px", // Example padding
    height: "40vh",
    width: "20rem",
    borderRadius:"20px",
  },
};

Modal.setAppElement("#root"); // Setting the app root element for accessibility

function App() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="flex justify-center items-center gap-3">
        Filter
        <span>
          <HiMenuAlt2 className="scale-125" />
        </span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={filterModal}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between mb-5 items-center ">
          <h2 className="text-[#6522ad] text-xl font-semibold ">Filter</h2>
          <button
            className="hover:bg-[#6522ad] hover:rounded-full w-6 h-6 flex justify-center items-center hover:text-white"
            onClick={closeModal}
          >
            <MdOutlineClose />
          </button>
        </div>
        <div>I am a modal</div>

      </Modal>
    </div>
  );
}

export default App;
