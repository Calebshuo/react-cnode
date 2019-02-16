export function reducer(state={num:0}, action) {
  console.log('###index.redux',state,action)
  switch(action.type) {
    case 'add':
      return {num:state.num+1}
    case 'remove':
      return {num:state.num-1}
    default:
      return {num:10}
  }
}

export function add() {
  return {type:'add'}
}

export function remove() {
  return {type:'remove'}
}

export function asyncAdd() {
  return (dispatch, getState)=>{
    // console.log(getState())
    setTimeout(() => {
      return dispatch({type:'add'})
    }, 2000);
  }
}

export function addTwice() {
  return [{type:'add'}, asyncAdd()]
}