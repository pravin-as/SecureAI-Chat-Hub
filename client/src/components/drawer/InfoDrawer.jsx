import { Box, Drawer, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import Profile from "./Profile";

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const drawerstyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

const Component = styled(Box)`
  background: #ededed;
  height: 100%;
`;

const Text = styled(Typography)`
  font-size: 18px;
`;

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerstyle }}
      style={{ zIndex: 1500 }}
    >
      <Box>
        <Header>
          <ArrowBack
            onClick={() => {
              setOpen(false);
            }}
          />
          <Text>Profile</Text>
        </Header>

        <Component>
          <Profile />
        </Component>
      </Box>
    </Drawer>
  );
};

export default InfoDrawer;
