class Taxe {
    taxe = []
    constructor(){}
    getTaxe(id){
    
        return this.taxe.find((item)=> item.id === id)
    }
    addTaxe(data){
       
        this.taxe = [...this.taxe,data]
        console.log('taxe',this.taxe)
    }
}
module.exports = Taxe;
