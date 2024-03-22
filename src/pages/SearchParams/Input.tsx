const Input = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <input
        className="border rounded-lg p-2 mb-2"
        placeholder="name"
      />
      <input
        className="border rounded-lg p-2 mb-2"
        placeholder="age"
      />
      <input
        className="border rounded-lg p-2 mb-2"
        placeholder="color"
      />
    </div>
  );
};

export default Input;
