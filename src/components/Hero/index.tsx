import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-[120px] dark:bg-gray-dark xl:pb-[50px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Empoderando el Uso Sostenible del Agua con Tecnología y Educación
                </h1>
                <p className="text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Un portal interactivo que conecta a las personas con el conocimiento y las
                  herramientas necesarias para cuidar los recursos hídricos de Cajamarca.
                </p>

              </div>
              <div className="relative aspect-[200/100] items-center justify-center mt-5">
                <Image src="/images/hero/000627827W.jpg" alt="video image" fill />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
