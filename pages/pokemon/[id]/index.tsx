import { Detail } from "@/components/modules/Detail"
import { useRouter } from "next/router"

const DetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  return <Detail id={id} />
}

export default DetailPage
