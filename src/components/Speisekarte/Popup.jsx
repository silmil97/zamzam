import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '90vh',
    width: '90%',
    marginTop: '60px',
  },
};

Modal.setAppElement('#___gatsby');

export default function Popup(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function closeModal(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="sm:mr-9 mr-3"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c79c60"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M20.4 14.5L16 10 4 20" />
        </svg>
      </button>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div className="flex mt-0 w-full justify-end">
          <button
            type="button"
            className="-mr-1 h-4 text-2xl hover:text-tertiary"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <img
          alt="Bild vom Essen"
          className="mx-auto mt-4"
          style={{ maxHeight: '70vh' }}
          src={props.url}
        />
      </Modal>
    </>
  );
}
