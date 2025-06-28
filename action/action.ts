'use server' 

export const getAddress = async (_: string, formData: FormData) => {
    const zipcode = formData.get("address");
    const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
    if (!response.ok) {
        return "failed"
    }
    const data = await response.json()
    if (data.results == null) {
        return "検索結果なし"
    }
    return data.results[0].address1 + data.results[0].address2 + data.results[0].address3;
}