type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`text-white rounded-xl p-6 transform transition-transform duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
