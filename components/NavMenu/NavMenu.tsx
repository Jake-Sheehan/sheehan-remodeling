import React from "react"
import styles from "./NavMenu.module.scss"
import { Close } from "@mui/icons-material"

interface Props {
  onClose: React.MouseEventHandler
}

const NavMenu: React.FC<Props> = ({ onClose }) => {
  return (
    <section className={styles.container}>
      <button className={styles.closeBtn} type="button" onClick={onClose}>
        <Close />
      </button>

      <div className={styles.navList}>
        <p className={styles.listItem}>Home</p>
        <p className={styles.listItem}>Our Story</p>
        <p className={styles.listItem}>Portfolio</p>
        <p className={styles.listItem}>Contact Us</p>
      </div>
    </section>
  )
}

export default NavMenu
