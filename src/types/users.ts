export type Users = {
  id: string
  email: string
  name: string
  role: "admin" | "user"
}



export type InputsModalType = {
  name: string
  label: string
  type: string
  placeholder: string
  options?: { value: string; label: string }[]
}