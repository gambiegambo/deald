import { Image } from 'react-bootstrap'
import headerStyles from '../styles/header.module.css'

export default function HeaderSection() {
    return (
        <Image src="https://firebasestorage.googleapis.com/v0/b/deald-45cd6.appspot.com/o/assets%2Fheader.jpg?alt=media&token=b363e316-912c-499c-ab6f-631a2f7319a4"
            className={headerStyles.header} />
    )
}