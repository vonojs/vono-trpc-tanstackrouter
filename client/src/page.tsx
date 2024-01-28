import { trpc } from "~/client/utils/trpc"

export default function Page(){
  const test = trpc.hello.useQuery()
  return <div>{test.data}</div>
}
