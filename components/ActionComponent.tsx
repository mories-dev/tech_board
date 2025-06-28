"use client"

import { useActionState } from "react";

type Props = {
    action: (prevState: string, formData: FormData) => Promise<any>
}

export const ActionComponent = ({action}: Props) => {
const [state, formAction, isPending] = useActionState(action, "");
    return (
    <form action={formAction}>
        <input name="address" type="text" />
        {isPending ? "Loading" : state}
        <button type="submit">検索</button>
    </form>
    )
}