let n = 1

function takeANumber(katzDeliLine){
  katzDeliLine.push(n)
  n++  
  return `Welcome ticket number ${n-1}. You are number ${katzDeliLine.indexOf(n-1)+1} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    return `Currently serving ${katzDeliLine.shift()}.`
    } else {
    return "There is nobody waiting to be served!"
    }
  }
  
  function currentLine(katzDeliLine){
    if(katzDeliLine.length>0){
      let str = `The line is currently:`
      for(let i=0;i<katzDeliLine.length;i++){
        str = str.concat(" ", `${i+1}. ${katzDeliLine[i]},`)
      }
      return str.replace(/,\s*$/, "");

    } else {
      return "The line is currently empty."
    }
  }