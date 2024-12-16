const createLocationAnswer=({hour,minute,period,diff})=>{
    let answerHour = hour + diff;
    let answerMinute= minute;
    let answerPeriod = period;
    if(answerHour===0){
        answerHour=12;
    }
    if(answerHour<0){
        answerHour+=12;
        answerPeriod = (answerPeriod==="오전"?"오후":"오전");
    }
    if(answerHour>12){
        answerHour-=12;
        answerPeriod = (answerPeriod==="오후"?"오전":"오후");
    }
    
    return {hour:answerHour,minute:answerMinute,period:answerPeriod};
}

const makeAnswerObj=({hour,minute,period,setAnswerObj})=>{
    const BangkokAnswer= createLocationAnswer({hour,minute,period,diff:-2});
    const DubaiAnswer= createLocationAnswer({hour,minute,period,diff:-5});
    const AlaskaAnswer= createLocationAnswer({hour,minute,period,diff:+7});
    const AussieAnswer= createLocationAnswer({hour,minute,period,diff:+1});
    console.log(BangkokAnswer,DubaiAnswer,AlaskaAnswer,AussieAnswer);
    setAnswerObj({
        Bangkok:BangkokAnswer,
        Dubai: DubaiAnswer,
        Alaska: AlaskaAnswer,
        Aussie: AussieAnswer,
    })
}

export default makeAnswerObj;