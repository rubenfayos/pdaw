import { Match, Switch, createSignal } from "solid-js";
import { UpdateUserInput, User } from "types";
import DeleteUserModal from "../modals/DeleteUserModal";

type Props = {
  user: User;
};

function UserComponent({ user }: Props) {
  const [formActive, serFormActive] = createSignal(false);

  const handleActiveForm = () => {
    serFormActive(true);
  };

  const handleInactiveForm = () => {
    setFormData({
      name: user.name,
      password: "",
      new_password: "",
    });
    serFormActive(false);
  };

  const [formData, setFormData] = createSignal<UpdateUserInput>({
    name: user.name,
    password: "",
    new_password: "",
  });

  return (
    <>
      <DeleteUserModal handleClose={() => null} />
      <form>
        <div>
          <label for="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData().name}
            class={formActive() ? "" : "pointer-events-none"}
          />
        </div>
        <Switch>
          <Match when={formActive()}>
            <>
              <div>
                <label for="password">Contraseña anterior</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData().password}
                />
              </div>
              <div>
                <label for="new_password">Nueva contraseña</label>
                <input
                  type="password"
                  name="new_password"
                  id="new_password"
                  value={formData().new_password}
                />
              </div>
            </>
          </Match>
          <Match when={!formActive()}>
            <div>
              <label for="name">Correo electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                class={formActive() ? "" : "pointer-events-none"}
              />
            </div>
            <div>
              <label for="createdAt">Fecha de creación</label>
              <input
                type="createdAt"
                name="createdAt"
                id="createdAt"
                value={user.createdAt.toString()}
                class={formActive() ? "" : "pointer-events-none"}
              />
            </div>
          </Match>
        </Switch>
        <div class="flex ml-auto gap-2">
          <Switch>
            <Match when={formActive()}>
              <>
                <button
                  type="button"
                  class="red-button"
                  onclick={handleInactiveForm}
                >
                  Cancelar
                </button>
                <button type="submit" class="primary-button">
                  Guardar
                </button>
              </>
            </Match>
            <Match when={!formActive()}>
              <button type="button" class="red-button">
                Eliminar
              </button>
              <button
                type="button"
                onClick={handleActiveForm}
                class="primary-button"
              >
                Actualizar
              </button>
            </Match>
          </Switch>
        </div>
      </form>
    </>
  );
}

export default UserComponent;
