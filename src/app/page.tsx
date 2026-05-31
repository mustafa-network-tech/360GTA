import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";

export default function HomePage() {
  // Demo: kök adres doğrudan giriş ekranına yönlendirir.
  redirect(ROUTES.login);
}
