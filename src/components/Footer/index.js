import { section, link } from './footer.module.scss'

const Footer = () => (
  <footer className={section}>
    <a
      className={link}
      href="https://github.com/vadimgaidai/merehead-test"
      target="_blank"
      rel="noopener noreferrer"
    >
      @github
    </a>
  </footer>
)

export default Footer
