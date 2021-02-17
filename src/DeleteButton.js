const DeleteButton = ({ handleSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        placeholder="Location..."
        style={{
          width: "20rem",
          backgroundColor: "#f4f9f4",
        }}
      />
      <Button
        variant="outline-warning"
        className="mybutton"
        onClick={() => handleSearchTerm(searchTerm, setSearchTerm)}
      >
        Search Location
      </Button>
    </div>
  );
};

export default DeleteButton;
