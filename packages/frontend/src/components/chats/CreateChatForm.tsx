import { createSignal } from "solid-js";
import { api } from "~/utils/api";
import { Chat } from "types";

type Props = {
  submitOk: (chat: Chat) => void;
};

interface CreateChatInput {
  email: string;
}

function CreateChatForm(props: Props) {
  const [formData, setFormData] = createSignal<CreateChatInput>({
    email: "",
  });

  const [formErrors, setFormErrors] = createSignal<CreateChatInput>({
    email: "",
  });

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    console.log({ ...formData(), [target.name]: target.value });
    setFormData({ ...formData(), [target.name]: target.value });
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    // Envía una solicitud a la api
    const res = await api.post<Chat>("/chats", formData());

    // Peticion correcta
    if (res.status === 201) {
      props.submitOk(res.data);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="email">Correo electrónico</label>
        <input
          class="w-full border rounded p-1 text-sm"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData().email}
        />
        <p class="text-red-500 text-sm">{formErrors()?.email}</p>
      </div>
      <div>
        <button class="primary-button">Crear chat</button>
      </div>
    </form>
  );
}

export default CreateChatForm;
