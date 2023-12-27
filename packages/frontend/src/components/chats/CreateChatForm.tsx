import { createSignal } from "solid-js";
import { api } from "~/utils/api";
import { Chat } from "types";

type Props = {
  submitOk: (chat: Chat) => void;
};

interface CreateChatInput {
  email: string;
  name: string;
}

function CreateChatForm(props: Props) {
  const [formData, setFormData] = createSignal<CreateChatInput>({
    email: "",
    name: "",
  });

  const [formErrors, setFormErrors] = createSignal<CreateChatInput>({
    email: "",
    name: "",
  });

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
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
        <label for="email">Correo electrónico del usuario</label>
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
        <label for="name">Nombre del chat</label>
        <input
          class="w-full border rounded p-1 text-sm"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData().name}
        />
        <p class="text-red-500 text-sm">{formErrors()?.name}</p>
      </div>
      <div>
        <button class="primary-button">Crear chat</button>
      </div>
    </form>
  );
}

export default CreateChatForm;
