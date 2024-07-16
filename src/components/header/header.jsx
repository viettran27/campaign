import { Box, Button, Container } from "@mui/material";

const Header = ({ handleClick }) => {
  return (
    <Container sx={{ borderBottom: "1px solid gray" }}>
      <Box py={2} display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Header;
