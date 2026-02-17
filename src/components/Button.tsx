interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="mt-4 border-2 border-[#BF925B] px-10 py-4 text-sm uppercase 
    tracking-widest hover:bg-[#BF925B] transition-all duration-300 cursor-pointer active:scale-[0.9]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
