interface Prop {
    children: string;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Prop) => {
    return (
        <div className="alert alert-warning alert-dismissible">
            {children}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={onClose}></button>
        </div>
    );
};

export default Alert;
