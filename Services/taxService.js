const calculeNetImposable = (data)=> {
    let totalNet = data.salaire * 12
    if(data.situation === '1'){
        totalNet = totalNet / (1 + (+data.nbenfant*0.5) );
    }else if(data.situation === '2'){
        totalNet =totalNet / (2+(+data.nbenfant*0.5)) ;
    }
    return totalNet
}
module.exports = calculeNetImposable;