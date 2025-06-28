import { notFound } from "next/navigation"

export const HomeTemplate = async () => {
    const response = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=5560014")
    if (!response.ok) {
        notFound()
    }
    const data = await response.json()
    return <div>{data.results[0].address1}{data.results[0].address2}{data.results[0].address3}</div>
}