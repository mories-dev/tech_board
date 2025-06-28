import { getAddress } from "@/action/action";
import { ActionComponent } from "./ActionComponent";

export const SearchTemplate = () => {
    return (
    <ActionComponent action={getAddress} />
    )
}