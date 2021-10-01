export default function Select({
  idComponent = "SelectId",
  labelDescription = "Descrição da Label:",
  onSelectChange = null
}) {

 const years = [];
  for (let index = 2003; index <= 2015; index++) {
    years.push(index);
  }

  function handleSelectChange({ currentTarget }) {
    if (onSelectChange) {
      const newValue = currentTarget.value;
      onSelectChange(newValue);
    }
  }

  return (
    <div className="m-4">
      <h3 className="font-bold">{labelDescription}</h3>
      <select className="border border-black ph-2 m-4" id={idComponent} onChange={handleSelectChange}>
        {years.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
}
