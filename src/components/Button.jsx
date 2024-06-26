export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-gray-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100"
      {...props}
    >
      {" "}
      {children}
    </button>
  );
}
