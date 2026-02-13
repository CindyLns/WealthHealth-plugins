export function ModalDialog ({ isOpen, openModal, closeModal, message }) {
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <div
            isOpen={isOpen}
            onClose={closeModal}
            >
                {isOpen && (
                    <div>
                        <button onClick={closeModal}>Close Modal</button>
                        <p>{message}</p>
                    </div>
                )}
               
            </div>
        </div>

    )
}

