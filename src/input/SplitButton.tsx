import { Button, ButtonProps } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React from "react";

interface SplitButtonInputOption {
  name: string;
  id: string;
}

interface SplitButtonInputProps {
  name: string;
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  options: SplitButtonInputOption[];
  onOptionClick: (option: SplitButtonInputOption) => void;
}

const SplitButton: React.FC<SplitButtonInputProps & ButtonProps> = ({  
  options,
  name,
  label = name,
  onClick,
  onOptionClick,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const _onOptionClick = (option: SplitButtonInputOption) => {
    setOpen(false);
    onOptionClick(option);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup
          variant="contained"
          color="primary"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button onClick={onClick}>{label}</Button>
          {options?.length > 0 && (
            <Button
              color="primary"
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          )}
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option) => (
                      <MenuItem
                        key={option.id}
                        onClick={() => _onOptionClick(option)}
                      >
                        {option.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};

export type { SplitButtonInputProps };
export default SplitButton;
