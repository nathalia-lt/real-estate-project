function CardImovel({imovel}) {

    return (
        <div>
            <p>{imovel.titulo}</p>
            <img src={imovel.imgUrl} alt={imovel.titulo} />
            <div className="flex flex-col gap-y-1.5">
                <div className="flex gap-x-2">
                    <p> Quarto:{imovel.quartos}</p>
                    <p> Suíte:{imovel.suites}</p>                        
                </div>
                <div className="flex gap-x-3">
                    <p> Area:{imovel.areaTotal}</p>
                    <p> Vagas:{imovel.vagasGaragem}</p>
                </div>
                <p> Preço:{imovel.preco}</p>
                <p> Endereço{imovel.endereco}</p>
            </div>
        </div>
    )
}

export default CardImovel;