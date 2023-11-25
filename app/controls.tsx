import { useState } from "react"
import Select, { SingleValue } from "react-select"
import { SortDirection } from "./types/sort";

export type ControlProps = {
  onSortChange: (field: string, direction: SortDirection) => void;
}

const Controls = ({ onSortChange }: ControlProps) => {
  const [sortField, setSortField] = useState("")
  const [sortDirection, setSortDirection] = useState<SortDirection>("ascending")

  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ]
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ]


  const handleFieldChange = (selectedOption: SingleValue<{ label: string, value: string }>) => {
    if (!selectedOption) return;
    const field = selectedOption.value;
    setSortField(field);
    onSortChange(field, sortDirection);
  };

  const handleDirectionChange = (selectedOption: SingleValue<{ label: string, value: SortDirection }>) => {
    if (!selectedOption) return;
    const direction = selectedOption.value;
    setSortDirection(direction);
    onSortChange(sortField, direction);
  };

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          onChange={handleFieldChange}
          inputId="sort-field"
          className="input"
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          onChange={handleDirectionChange}
          inputId="sort-direction"
          className="input"
        />
      </div>
    </div>
  )
}

export default Controls
