function Portfolio() {
    return (
        <>
            <section className="border w-full h-screen flex flex-col items-center justify-center">
                <h1 className="mb-72 font-extrabold text-5xl lg:text-9xl">
                    portfólio
                </h1>
                <div className="w-full h-24 -mb-92 flex flex-col ">
                    <p className="text-sm font-semibold ml-6">Lucas Santana</p>
                    <div className="text-gray-400 flex items-center">
                        <p className="text-sm  ml-6">Desenvolvedor | Suporte</p>
                        <hr className="w-2xl ml-2 mt-2"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;