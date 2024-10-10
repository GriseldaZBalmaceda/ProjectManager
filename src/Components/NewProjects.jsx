import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal"

export const NewProjects = ({ onAdd, onCancel }) => {
  const modal = useRef()
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const dateRef = useRef(null)
  const handleSave = () => {
    const enteredTitle = titleRef.current.value
    const enteredDescription = descriptionRef.current.value
    const enteredDate = dateRef.current.value

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open()
      return
    }
    //validation
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate,
    })
  }
  return (
    <>
      <Modal ref={modal} buttonText="Ok">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-500 mb-4">Missing data</p>
        <p className="text-stone-500 mb-4">Please enter data for all options</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li className="text-stone-800 ">
            <button onClick={onCancel}>Cancel</button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-stone-800 text-stone-50 rounded-md pointer cursor-pointer"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label={"Title"} />
          <Input ref={descriptionRef} label={"Description"} textarea={true} />
          <Input type="date" id="start" ref={dateRef} label={"Due Date"} />
        </div>
      </div>
    </>
  )
}
