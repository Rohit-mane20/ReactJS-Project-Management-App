import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProject({onAddProject,onCancel}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef()

  function handleSave(){
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value
    if(title.trim() === "" || description.trim() === "" || dueDate.trim() === ""){
        modalRef.current.open();
        return;
    }
    onAddProject({
        title,description,dueDate
    })

  }
 


  return (
    <>
    <Modal ref={modalRef} buttonCaption="Close">
        <h2  className="text-xl font-bold text-stone-700  my-4"> Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please provide a valid value for every input field</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>

        <li>
          <button onClick={handleSave} className="px-6 py-2 rounded bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="title" isTextArea={false} />
        <Input type="text" ref={descriptionRef} label="Description" isTextArea={true} />
        <Input type="date" ref={dueDateRef} label="Due Date" isTextArea={false} />
      </div>
    </div>
    </>
  );
}
