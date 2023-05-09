import Link from "next/link"
import { Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import styles from "./footer.module.scss"

export const FooterComponent = () => (
  <footer className={styles.container}>
    <div>
      <Typography variant="h6" sx={{ color: "#4C596D" }}>
        Made by Maxi Pezzotta
      </Typography>
    </div>
    <div className={styles.container__social}>
      <Link href="https://github.com/claudioacevedo25">
        <GitHubIcon />
      </Link>
      <Link href="https://www.linkedin.com/in/mpezzotta-software-engineer/">
        <LinkedInIcon />
      </Link>
    </div>
  </footer>
)
