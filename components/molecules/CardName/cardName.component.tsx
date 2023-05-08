import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { CardNameProps } from "./cardName.model"
import styles from "./cardName.module.scss"
import Link from "next/link"

export const CardNameComponent = ({ id, name }: CardNameProps) => (
  <Link href={`/pokemon/${id}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={styles.card__name}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  </Link>
)
