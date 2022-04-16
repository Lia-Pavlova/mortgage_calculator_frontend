import s from './components.module.css'

const Footer = () => {
  return (
    <div className={s.footer}>
      <p className={s.text}>
        &copy; 2022
        <a
          className={s.link}
          href="https://github.com/Lia-Pavlova"
          rel="noopener noreferer  "
        >
          Lia Pavlova
        </a>
      </p>
    </div>
  )
}
export default Footer
