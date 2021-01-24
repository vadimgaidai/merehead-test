import { AlertCircle } from 'react-feather'
import { section, content, icon, caption } from './notFound.module.scss'

const NotFound = () => (
  <main className={section}>
    <div className={content}>
      <AlertCircle className={icon} size={250} />
      <h1 className={caption}>Page Not Found</h1>
    </div>
  </main>
)

export default NotFound
