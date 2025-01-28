function CardImovel({imovel}) {

    return (
        <div className="">
            <h2 className="p-2 text-xl font-bold">{imovel.titulo}</h2>
            <img className="h-full w-full object-cover rounded-md" src={imovel.imgUrl} alt={imovel.titulo} />
            <div className="flex flex-col gap-y-1.5 p-4 bg-[#fafafa]">
                <div className="flex gap-x-2 rounded p-1">
                    <p> Quarto:{imovel.quartos}</p>
                    <p> Suíte:{imovel.suites}</p>                        
                </div>
                <div className="flex gap-x-3 p-1">
                    <p> Area:{imovel.areaTotal} m²</p>
                    <p> Vagas:{imovel.vagasGaragem}</p>
                </div>
                <p className="p-1"> Preço:{imovel.preco}</p>
                <p className="p-1"> Endereço{imovel.endereco}</p>
            </div>
        </div>
    )
}

export default CardImovel;