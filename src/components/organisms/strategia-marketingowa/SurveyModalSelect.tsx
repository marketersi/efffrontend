import Select from 'react-select'

export default function SurveyModalSelect(props) {
  return (
    <Select
      options={props.options}
      placeholder="Wybierz"
      isSearchable={false}
      styles={{
        clearIndicator: (baseStyles, state) => ({
          ...baseStyles,
          display: "none",
        }),
        indicatorSeparator: (baseStyles, state) => ({
          ...baseStyles,
          display: "none",
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          width: "500px",
          paddingLeft: "10px",
          borderRadius: "20px",
          paddingBlock: "3px",
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          color: "white",
          position: "relative",
          paddingLeft: "16px",
          ":before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30px",
            height: "30px",
            backgroundColor: "#d31e00",
            borderRadius: "50%",
          },
        }),
      }}
    />
  );
}
