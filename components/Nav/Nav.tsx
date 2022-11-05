import React from "react"
import styles from "./Nav.module.scss"
import { Menu } from "@mui/icons-material"

interface Props {
  handleMenuClick: React.MouseEventHandler
}

const Nav: React.FC<Props> = ({ handleMenuClick }) => {
  return (
    <nav className={styles.container}>
      <figure className={styles.logo}>
        <h1>Sheehan Remodeling</h1>
      </figure>

      <button
        type="button"
        className={styles.menuBtn}
        onClick={handleMenuClick}
      >
        <Menu sx={{ fontSize: 50 }} />
      </button>
    </nav>
  )
}

export default Nav
