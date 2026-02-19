export function ModalDialog ({ isOpen, title, closeModal, message }) {
    return (
        <div className="modal">
            <div
            isOpen={isOpen}
            onClose={closeModal}
            >
                {isOpen && (
                    <div className="dialog">
                        <button className="modal-close" onClick={closeModal}>⨯</button>
                        <div className="modal-content">
                            <h2>{title}</h2>
                            <p>{message}</p>
                        </div>      
                    </div>
                )}
               
            </div>
        </div>

    )
}

