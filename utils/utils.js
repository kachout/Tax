const calculeTax = (data)=> {
    if(data.situation === '1'){
        totalTaxe =data.salaire * 12 ;
    }else if(data.situation === '2'){
        totalTaxe = data.salaire * 12 / (2*(data.nbenfant*0.5)) ;

    }
    return totalTaxe
}
module.exports = calculeTax;