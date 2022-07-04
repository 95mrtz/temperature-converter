const Title = () => {
  return (
    <section className="flex flex-col justify-center items-center my-5">
      <h1 className="text-4xl	mb-2"> Celsius a Fahrenheit </h1>
      <button className="bg-red-300 px-6 py-5 text-lg rounded-xl flex flex-row">
        {" "}
        invertir{" "}
        <svg
          class="mx-3 h-8 w-8 text-gray-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="16 3 20 7 16 11" />{" "}
          <line x1="10" y1="7" x2="20" y2="7" />{" "}
          <polyline points="8 13 4 17 8 21" />{" "}
          <line x1="4" y1="17" x2="13" y2="17" />
        </svg>{" "}
      </button>
    </section>
  );
};

export default Title;
