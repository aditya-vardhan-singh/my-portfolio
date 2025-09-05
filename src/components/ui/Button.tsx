type ButtonProps = {
  label: string;
};

export default function Button({ label }: ButtonProps) {
  return (
    <div
      className="
        border-2 border-green-400 
        text-green-400 
        rounded-lg 
        px-3 py-0.5 
        bg-transparent 
        hover:bg-green-400 
        group-hover:text-transparent
        group-hover:bg-clip-text 
        transition-colors 
        duration-300
        cursor-pointer
        uppercase
        font-extrabold
      "
    >
      {label}
    </div>
  );
}
