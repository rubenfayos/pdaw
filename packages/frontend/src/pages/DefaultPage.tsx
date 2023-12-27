type Props = {};

function DefaultPage({}: Props) {
  return (
    <div class="h-full flex flex-1">
      <div class="m-auto text-center max-w-96">
        <h1 class="display-2 font-bold mb-2 text-3xl">Bienvenido</h1>
        <p class="text-gray-800 text-xl">
          Selecciona un chat en el menú de la izquierda o añade uno pulsando en
          +
        </p>
      </div>
    </div>
  );
}

export default DefaultPage;
