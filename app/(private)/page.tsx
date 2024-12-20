import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function MainPage() {
  const user = await getSession();
  if (user)
    redirect(
      user.role == "admin" ? "/admin/registration" : "/user/personal-info"
    );
  return "Not logged in";
}
