function Todoitem1(){
    let todoName='ByMilk';
    let todoDate='4/10/2023'
    return <div className="container ">
  
    <div className="row kg-row">
      <div className="col-6">
       {todoName}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-danger kg-btn">Delete</button>
      </div>
    </div>
    </div>
}
export default Todoitem1;