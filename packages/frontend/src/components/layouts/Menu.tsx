import { Match, Switch, createSignal } from "solid-js";
import LogoutModal from "../Modals/LogoutModal";
import CreateChatModal from "../Modals/CreateChatModal";

function Menu() {
  const [isOpen, setIsOpen] = createSignal(false);

  const [showLogoutModal, setShowLogoutModal] = createSignal(false);

  const handleShowLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const handleHideLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const [showCreateChatModal, setShowCreateChatModal] = createSignal(false);

  const handleShowCreateChatModal = () => {
    setShowCreateChatModal(true);
  };

  const handleHideCreateChatModal = () => {
    setShowCreateChatModal(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen());
  };

  return (
    <>
      <div class="bg-blue-500 text-white flex justify-between">
        <div class="p-2 ">
          <button
            class="material-icons hover:text-gray-200 rounded-xl p-2"
            onClick={toggleMenu}
          >
            menu
          </button>

          {isOpen() && (
            <div class="absolute bg-white mt-1 rounded-md shadow-md">
              <ul>
                <li
                  onClick={handleShowLogoutModal}
                  role="button"
                  class="py-3 px-2 hover:bg-gray-100 hover:rounded-md"
                >
                  <span class="text-black rounded">Cerrar sesión</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div class="p-2">
          <button
            class="material-icons hover:text-gray-200 rounded-xl p-2"
            onClick={handleShowCreateChatModal}
          >
            add
          </button>
        </div>
      </div>
      <Switch>
        <Match when={showLogoutModal()}>
          <LogoutModal open handleClose={handleHideLogoutModal} />
        </Match>
        <Match when={showCreateChatModal()}>
          <CreateChatModal open handleClose={handleHideCreateChatModal} />
        </Match>
      </Switch>
    </>
  );
}

export default Menu;
