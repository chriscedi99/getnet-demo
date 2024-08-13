interface Props {
  icon: string;
}

export const IconHeader = ({ icon }: Props) => {
  return <img src={icon} style={{ height: "30px" }} />;
};
