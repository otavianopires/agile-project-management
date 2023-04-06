const BoardRadio = ({ board, onChange, selected }) => {

  const inputClassName = `peer/${board.id} form-radio`;
  const labelClassName = selected === board.id ? 'font-bold text-sky-600' : 'text-slate-600';
  return (
    <div className="flex items-center gap-2">
      <input
        id={board.id}
        className={inputClassName}
        type="radio"
        name="board"
        onChange={onChange}
        checked={selected === board.id}
      />
      <label className={`${labelClassName} text-sm`} htmlFor={board.id}>
        {board.name}
      </label>
    </div>
  )
}

export default BoardRadio;