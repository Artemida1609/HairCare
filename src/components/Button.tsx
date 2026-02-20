interface ButtonProps {
  text: string;
  onClick?: () => void;
  type: "submit" | "reset" | "button" | undefined;
  styles: string;
}

export const Button = ({ text, onClick, type, styles }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`mt-4 border-2 border-[#BF925B] px-10 py-4 text-sm uppercase ${styles}
    tracking-widest hover:bg-[#BF925B] transition-all duration-300 cursor-pointer active:scale-[0.9]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
