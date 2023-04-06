const Select = ({id, label, options, handleSelectChange, defaultValue}) => {
  return (
    <select
      id={id}
      onChange={handleSelectChange}
      defaultValue={defaultValue}
      className="border border-solid border-slate-300 rounded-md p-1 min-w-[200px] sm:min-w-[150px]"
    >
      <option value='0'>{label}</option>
      {options.map((option) => (
        <option key={option.key} value={option.value}>{option.text}</option>
      ))}
    </select>
  )
}

export default Select;