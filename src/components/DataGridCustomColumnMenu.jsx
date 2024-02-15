import {
  GridColumnMenuColumnsItem,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuColumnsItem
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridColumnMenuFilterItem onClick={hideMenu} column={currentColumn} />
      <GridColumnMenuHideItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuColumnsItem>
  );
};

export default CustomColumnMenu;
