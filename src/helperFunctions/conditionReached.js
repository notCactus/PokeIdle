export default function conditionReached(conditionFunc){
  return new Promise((resolve, reject) => {
    const i = setInterval(
      () => {
        if(conditionFunc()){
          resolve();
          clearInterval(i);
        }
      }
      , 100
    )
  })
}
