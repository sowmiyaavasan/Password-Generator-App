const Checkbox = ({ index, title, onChange, state }) => {
  return (
    <div key={index}>
      <input type="checkbox" checked={state} onChange={onChange} />
      <label>{title}</label>
    </div>
  );
};

export default Checkbox;
