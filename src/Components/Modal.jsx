import { createPortal } from "react-dom"
import { forwardRef, useImperativeHandle, useRef } from "react"
import { Button } from "./Button"

const Modal = forwardRef(({ children, buttonText }, ref) => {
  const dialogRef = useRef()
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal()
      },
    }
  })
  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 shadow-md">
      {children}
      <form className="mt-4 text-right" method="dialog">
        <Button>{buttonText}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  )
})
export default Modal
