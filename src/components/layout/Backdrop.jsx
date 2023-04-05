const Backdrop = ({ close }) => {
  return <div className="bg-slate-800 bg-opacity-30 fixed top-0 left-0 right-0 bottom-0 z-10 md:hidden" onClick={close}></div>
}

export default Backdrop;