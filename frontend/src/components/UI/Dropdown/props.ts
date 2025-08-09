
interface dropDownOption {
  label: string;
  value: string | React.ReactNode;
  children?: dropDownOption[];
}

export interface props {
  title: string | React.ReactNode;
  options: dropDownOption[];
  isSubMenu?: boolean;
  handleOption: (param: string) => void;
}