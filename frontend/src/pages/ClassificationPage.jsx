import Header from "../components/Header";
import Main from "../components/Main";
import { useState, useEffect } from "react";
import { getFinalClassification } from "../services/apiService";
import ClassificationTable from "../components/ClassificationTable";
import Select from "../components/Select";

export default function ClassificationPage() {
  const [finalClassification, setFinalClassification] = useState([]);
  const [yearSelected, setYearSelected] = useState(2003);

  function handleSelectChange(year) {
    setYearSelected(year);
  }

  useEffect(() => {
    (async function getClassification(){
      const data = await getFinalClassification(yearSelected);
      setFinalClassification(data);
      })()
  }, [yearSelected]);

  return (
    <div>
      <Header>React Brasileirão</Header>
      <Main>
        <Select idComponent="years" labelDescription="Select Championship" onSelectChange={handleSelectChange}/>
        <ClassificationTable>{finalClassification}</ClassificationTable>
      </Main>
    </div>
  );
}
