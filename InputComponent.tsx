type InputComponentProps =
{
  number1: string;
  number2: string;
  operation: string;
  onNumber1Change: (value: string) => void;
  onNumber2Change: (value: string) => void;
  onOperationChange: (value: string) => void;
};

export default function InputComponent(
  {
    number1,
    number2,
    operation,
    onNumber1Change,
    onNumber2Change,
    onOperationChange,
  }: InputComponentProps
)
{
  return (
    <div className="input-group">
      <input
        type="number"
        value={number1}
        onChange={(e) => onNumber1Change(e.target.value)}/>

      <select
        value={operation}
        onChange={(e) => onOperationChange(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input
        type="number"
        value={number2}
        onChange={(e) => onNumber2Change(e.target.value)}/>
    </div>
  );
}
