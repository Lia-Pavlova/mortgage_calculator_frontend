import React from 'react'

import s from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={s.main}>
      <h2 className={s.page_title}>Home</h2>

      <div className={s.page_content}>
        <div className={s.paragraph_container}>
          <p className={s.paragraph}>Welcome to the Mortgage calculator!</p>
          <p className={s.paragraph}>
            In this web application you can create/edit/delete banks an
            calculate your mortgage payment plan.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
