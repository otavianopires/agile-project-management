const Backdrop = ({ onClick, classes }) => {
  const classNames = `bg-slate-900 bg-opacity-40 fixed top-0 left-0 right-0 bottom-0 z-10${classes ? ` ${classes}` : ''}`;
  return <div className={classNames} onClick={onClick}></div>
}

export default Backdrop;