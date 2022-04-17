import { deleteBank, listBanks } from '../../service/bank.js'
import { useEffect, useState } from 'react'
import Modal from '../../components/Modal.js'
import FormBank from '../../components/BankForm.js'
import s from './BanksPage.module.css'

const BanksPage = () => {
  const [banks, setBanks] = useState(JSON.parse(localStorage.getItem('banks')))
  const [modalShow, setModalShow] = useState(false)
  const [selectedBank, setSelectedBank] = useState(null)

  const toggleModal = () => {
    setModalShow((prev) => {
      if (prev === true) {
        setSelectedBank(null)
      }
      return !prev
    })
  }

  useEffect(() => {
    const listFromLS = JSON.parse(localStorage.getItem('banks'))
    if (listFromLS?.length > 0) {
      return
    }
    listBanks().then((data) => {
      if (data) {
        setBanks(data)
      }
    })
  }, [])

  const handleEdit = (el) => {
    setSelectedBank(el)
    toggleModal()
  }

  const handleDelete = (id) => {
    deleteBank(id).then((data) => {
      if (data) {
        const filterBanks = banks.filter((el) => el._id !== id)
        setBanks(filterBanks)
      }
    })
  }

  return (
    <div className={s.banks_page}>
      <div className={s.main}>
        <div className={s.page_content}>
          <div className={s.paragraph_container}>
            <p className={s.paragraph_title}>
              Welcome to the Mortgage calculator!
            </p>
            <p className={s.paragraph}>
              In this web application you can create, edit, delete banks and
              calculate your mortgage payment plan.
            </p>
            <p className={s.paragraph_foot}>Enjoy it!</p>
          </div>
        </div>
      </div>
      {banks?.length > 0 ? (
        <>
          <button
            className={s.btn_add}
            onClick={() => {
              toggleModal()
            }}
          >
            Add bank
          </button>
          <ul className={s.list}>
            {banks.map((el) => {
              return (
                <li key={el._id} className={s.list_item}>
                  <div>
                    <p>
                      <span className={s.item}>Name:</span> {el?.bankName}
                    </p>
                    <p>
                      <span className={s.item}>Interest rate:</span>{' '}
                      {el?.interestRate}%
                    </p>
                    <p>
                      <span className={s.item}>Maximum loan:</span>{' '}
                      {el?.maximumLoan}
                    </p>
                    <p>
                      <span className={s.item}>Minimum down payment:</span>{' '}
                      {el?.minimumDownPayment}{' '}
                    </p>
                    <p>
                      <span className={s.item}>Loan term:</span> {el?.loanTerm}{' '}
                    </p>
                  </div>
                  <div className={s.btn_group}>
                    <button
                      className={s.btn}
                      onClick={() => {
                        handleEdit(el)
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={s.btn}
                      onClick={() => {
                        handleDelete(el._id)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </>
      ) : (
        <>
          <p className={s.not_title}>You don’t have any banks yet.</p>
          <button
            className={s.btn_add}
            onClick={() => {
              toggleModal()
            }}
          >
            Add bank
          </button>
        </>
      )}
      {modalShow ? (
        <Modal onToggle={toggleModal}>
          <FormBank
            onToggle={toggleModal}
            setBanks={setBanks}
            selectedBank={selectedBank}
          />
        </Modal>
      ) : (
        ''
      )}
    </div>
  )
}

export default BanksPage
