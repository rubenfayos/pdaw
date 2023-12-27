import { createSignal } from "solid-js";
import { LoginInput, User } from "types";
import { api } from "~/utils/api";
import { loginSchema } from "./schemas";
import { ZodError } from "zod";
import { useGlobalStore } from "~/state/globalStore";

function LoginForm() {
  const { login } = useGlobalStore();

  const [formData, setFormData] = createSignal<LoginInput>({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = createSignal<LoginInput>({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    setFormErrors({ email: "", password: "" });

    try {
      const comparation = loginSchema.parse(formData());
    } catch (error: any) {
      if (error instanceof ZodError) {
        const errors = error.flatten().fieldErrors;
        Object.keys(errors).forEach((key) => {
          if (errors[key]) {
            console.log(errors[key][0]);
            setFormErrors({ ...formErrors(), [key]: errors[key][0] });
          }
        });
      }
    }

    // console.log(comparation);

    login({ email: "a", name: "a", password: "a" }, "1234");
    window.location.reload();

    // const res = await api.post<{ user: User; token: string }>(
    //   "/auth/login",
    //   formData()
    // );

    // La peticion es correcta, guarda el token y el usuario en el estado
    // if (res.status === 200) {
    //   store.login(res.data.user, res.data.token);
    // }
  };

  // Cambia el estado del input
  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    setFormData({ ...formData(), [target.id]: target.value });
  }

  return (
    <form class="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <div>
        <label for="email">Email</label>
        <br />
        <input
          required
          class="w-full border rounded p-1 text-sm"
          type="email"
          id="email"
          onChange={handleChange}
          value={formData().email}
        />
        <p class="text-sm text-red-500">{formErrors().email}</p>
      </div>
      <div>
        <label for="password">Contraseña</label>
        <br />
        <input
          required
          class="w-full border rounded p-1 text-sm"
          type="password"
          id="password"
          onChange={handleChange}
          value={formData().password}
        />
        <p class="text-sm text-red-500">{formErrors().password}</p>
      </div>
      <div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
