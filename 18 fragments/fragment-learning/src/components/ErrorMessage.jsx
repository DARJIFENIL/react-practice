const ErrorMessage = ({ items }) => {
  //   let foodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee"];

  return <>{items.length === 0 ? <h3>i am hungry</h3> : null}</>;
};
export default ErrorMessage;
