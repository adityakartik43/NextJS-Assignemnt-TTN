import { revalidateImages } from "../actions/revalidateImages";

export default function RevalidateButton() {
  return (
    <form action={revalidateImages} >
      <button type="submit" className="bg-blue-900 rounded-xl">
        Revalidate Images Cache
      </button>
    </form>
  );
}