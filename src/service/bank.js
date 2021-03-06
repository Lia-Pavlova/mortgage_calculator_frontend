import axios from 'axios'
import { toast } from 'react-toastify'

const createBank = async (bankData) => {
  try {
    const { data } = await axios.post('/bank/create', bankData)
    const banks = JSON.parse(localStorage.getItem('banks')) || []
    localStorage.setItem('banks', JSON.stringify([...banks, data.data]))
    toast.success('Successfully created')
    return data.data
  } catch (err) {
    toast.error('An error occurred, please try again later')
  }
}

const editBank = async (bankData) => {
  try {
    const { data } = await axios.put(`/bank/edit/${bankData._id}`, bankData)
    toast.success('Successfully updated')
    return data.data
  } catch (err) {
    toast.error('An error occurred, please try again later')
  }
}

const deleteBank = async (id) => {
  try {
    const { data } = await axios.delete(`/bank/delete/${id}`)
    toast.success('Successfully deleted')
    const banksList = JSON.parse(localStorage.getItem('banks'))
    const newBanksList = banksList.filter((bank) => bank._id !== id)
    localStorage.setItem('banks', JSON.stringify(newBanksList))

    return data.data
  } catch (err) {
    toast.error('An error occurred, please try again later')
  }
}

const listBanks = async () => {
  try {
    const { data } = await axios.get('/bank')
    localStorage.setItem('banks', JSON.stringify(data.data))
    return data.data
  } catch (err) {
    toast.error('An error occurred, please try again later')
  }
}

export { createBank, editBank, deleteBank, listBanks }
