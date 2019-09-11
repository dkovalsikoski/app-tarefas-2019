class Categorias{
  constructor(){
    this._categorias = []
  }

  adicionar(categoria){
    this.categorias.push(categoria)
  }

  listar(){
    return this._categorias
  }

  limpar(){
    this._categorias = []
  }
}
