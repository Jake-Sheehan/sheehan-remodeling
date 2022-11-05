import React, { useState } from "react"
import styles from "./MainLayout.module.scss"
//components
import Nav from "../components/Nav/Nav"
import NavMenu from "../components/NavMenu/NavMenu"

interface Props {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleMenuClick: React.MouseEventHandler = event => {
    event.preventDefault()
    setMenuOpen(prev => !prev)
  }

  return (
    <>
      <header className={styles.header}>
        <Nav handleMenuClick={handleMenuClick} />
      </header>
      <main className={styles.main}>
        {menuOpen && <NavMenu onClose={handleMenuClick} />}
        {children}
      </main>
      <footer className={styles.footer}></footer>
    </>
  )
}

export default MainLayout
