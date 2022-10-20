import { useRouter } from 'next/router'

export default function Profile() {
  const router = useRouter()
  console.log(router)
  const { username } = router.query
  //return<div>Hello{router.query.username}</div>
  return <div> Hello {username}! </div>
}
