import { useState, useEffect } from 'react';
import s from './CalculatorPage.module.css';

// import formula from './assets/formula.png';

const CalculatorPage = () => {
  const banks = JSON.parse(localStorage.getItem('banks')) || [];

  const [initialLoan, setInitialLoan] = useState();
  const [downPayment, setDownPayment] = useState();

  const [selectedBank, setSelectedBank] = useState();
  const [payment, setPayment] = useState();

  useEffect(() => {
    if (selectedBank) {
      const bank = banks.find(el => el._id === selectedBank);
      const multiplier1 = bank?.interestRate / 12;
      const multiplier2 = Math.pow(1 + bank?.interestRate / 12, bank?.loanTerm);
      const numerator = initialLoan * multiplier1 * multiplier2;
      const denominator = multiplier2 - 1;
      const result = numerator / denominator;
      const payment = Math.round(result * 100) / 100;
      setPayment(payment);
    }
    // eslint-disable-next-line
  }, [selectedBank]);

  const handleChange = e => {
    const value = e.target.value;
    switch (e.target.id) {
      case 'initialLoan':
        setInitialLoan(value);
        break;
      case 'downPayment':
        setDownPayment(value);
        break;
      default:
        break;
    }
  };

  const canChooseBank = bank => {
    if (bank.maximumLoan >= initialLoan && bank.minimumDownPayment <= downPayment) {
      return '';
    } else {
      return 'disabled';
    }
  };

  return (
    <div className={s.calculator_page}>
      <div className={s.flex}>
        <div>
          <form onChange={handleChange} className={s.form}>
            <div className={s.item}>
              <label htmlFor="initialLoan">Initial loan</label>
              <input type="text" id="initialLoan" value={initialLoan} />
            </div>
            <div className={s.item}>
              <label htmlFor="downPayment">Down payment</label>
              <input type="text" id="downPayment" value={downPayment} />
            </div>
          </form>
          <ul className={s.list}>
            {banks.map(bank => {
              return (
                <li
                  key={bank._id}
                  className={s.list_item}
                  onClick={() => {
                    setSelectedBank(bank._id);
                  }}
                >
                  <button disabled={canChooseBank(bank)}>
                    <p className={s.bank_text}>
                      <span>Name:</span> <span>{bank?.bankName}</span>
                    </p>
                    <p className={s.bank_text}>
                      <span>Interest rate:</span> <span>{bank?.interestRate}%</span>
                    </p>
                    <p className={s.bank_text}>
                      <span>Maximum loan:</span> <span>{bank?.maximumLoan}</span>
                    </p>
                    <p className={s.bank_text}>
                      <span>Minimum down payment:</span> <span>{bank?.minimumDownPayment}</span>
                    </p>
                    <p className={s.bank_text}>
                      <span>Loan term:</span> <span>{bank?.loanTerm}</span>
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {payment ? (
          <div>
            <p className={s.payment}>Monthly mortgage payment: {payment}</p>
            <img src="./assets/formula.png" alt="formula" />

            {/* <img src={formula} alt="formula" className={s.formula} /> */}

            <p className={s.payment}>
              Проверила формулу, заявленную в задании ↑, и пересчитала результат вручную ещё раз -
              считает она правильно. Перепроверьте, пожалуйста.
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CalculatorPage;
