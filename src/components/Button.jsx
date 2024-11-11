const Button = ({ children, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 rounded-full border-none transition-all duration-200 ease-in-out
          hover:opacity-80 active:scale-95 active:opacity-90 focus:outline-none ${className}`}>
			{children}
		</button>
	);
};

export default Button;
