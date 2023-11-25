export default class Quarto {
    id: number | null;
    nome: string;
    status: string;

    constructor(id: number | null, nome: string,
    status: string) {
    this.id = id;
    this.nome = nome;
    this.status = status;
 }


static geraQuartosMock() {
    return [ new Quarto(1, "Quarto 302",
    "VAGO",
    ),
    new Quarto(2, "Quarto 301",
    "RESERVADO",
    )
    ]
}

static vazio(): Quarto {
    return new Quarto(null, "", "");
   }
   

}