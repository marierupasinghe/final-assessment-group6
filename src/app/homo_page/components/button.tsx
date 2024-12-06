type ButtonProps = {
    color: string;
    border: string;
    borderColor: string;
    text: string;
  };
  
  export default function Button({ color, border, borderColor, text }: ButtonProps) {
    return (
      <div className={`px-7 py-3 text-base rounded-full text-white ${border} ${borderColor} ${color}`}>
        {text}
      </div>
    );
  }
  