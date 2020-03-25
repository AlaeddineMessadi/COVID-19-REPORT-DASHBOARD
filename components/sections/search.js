import Select from 'react-select'


const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={ groupStyles }>
    <span>{ data.label }</span>
    <span style={ groupBadgeStyles }>{ data.options.length }</span>
  </div>
);

const optionss = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawbe1rry', label: 'Strawberry' },
  { value: 'strawber2ry', label: 'Strawberry' },
  { value: 'strawberr3y', label: 'Strawberry' },
  { value: 'straberry4', label: 'Strawberry' },
  { value: '5strawberry', label: 'Strawberry' },
  { value: 's6trawberry', label: 'Strawberry' },
  { value: 'st7rawberry', label: 'Strawberry' },
  { value: 'str8awberry', label: 'Strawberry' },
  { value: 'stra9wberry', label: 'Strawberry' },
  { value: 'straw0berry', label: 'Strawberry' },
  { value: 'strawb8erry', label: 'Strawberry' },
  { value: 'vanill06a', label: 'Vanilla' }
]

const InputSearch = ({ selected = 'US', options, onChange }) => {

  return <Select
    instanceId="country"
    placeholder="Search..."
    options={ options }
    // formatGroupLabel={ formatGroupLabel }
    onChange={ onChange }
  />
}

export default InputSearch;
