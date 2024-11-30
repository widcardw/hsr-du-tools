import { DialogTrigger, Dialog } from './index'

const Dlg = () => {
  return (
    <>
      <Dialog trigger={<DialogTrigger>Open</DialogTrigger>}>
        Hello from Dialog
      </Dialog>
    </>
  )
}

export default Dlg
