
export default function Hero() {
  return (
    <section className="relative bg-cover w-full h-[70vh] sm:h-[75vh] lg:h-[85vh]  background-anim">
      <div className="absolute inset-0 px-4 pt-14 sm:pt-20 flex flex-col items-start justify-center text-left pl-3 sm:pl-10">
      <button className="bg-white rounded-xl text-gray-800 text-sm sm:text-lg font-bold px-3 py-2 sm:px-5 sm:py-3  opacity-40 hover:opacity-100 transition duration-300 mb-5 sm:mb-6 ">
      ADVENTURE
</button>
        <h1 className="text-white text-3xl leading-[36px] font-bold mb-5 sm:mb-6 max-w-120 sm:max-w-3xl sm:text-5xl sm:leading-[58px]">
        The Thought Vault
        </h1>
        <p className="text-white text-sm leading-relaxed max-w-96 sm:max-w-3xl sm:text-xl">
        Unlocking ideas, one post at a time. Dive into a collection of essays, insights, and reflections on everything from philosophy to pop culture.
        </p>
      </div>
    </section>
  );
}

