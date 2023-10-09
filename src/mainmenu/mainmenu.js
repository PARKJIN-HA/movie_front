import { Link } from "react-router-dom";
import styles from "./mainmenu.module.css";
import React, { useState } from "react";
import Logo from "../image/logo.jpeg";
import CustomModal from "../component/modal";
import { Box, Button, Typography } from "@mui/material";

const MainMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={styles.RootDiv}>
      <table className={styles.Talbe}>
        <th>
          <tr className={styles.Row}>
            <Link to="/chart">영화</Link>
          </tr>
        </th>
        <th>
          <tr className={styles.Row}>
            <Link to="/reservation">예매</Link>
          </tr>
        </th>
        <th>
          <tr className={styles.Row}>
            <Link to="/">
              <img src={Logo} alt="메인로고"></img>
            </Link>
          </tr>
        </th>
        <th>
          <tr className={styles.Row}>
            <Button onClick={openModal}>Open modal</Button>
            <CustomModal isOpen={isModalOpen} closeModal={closeModal}>
              <Box>
                <Typography variant="h6" component="h2">
                  hi
                </Typography>
                <Typography sx={{ mt: 2 }}>it's me</Typography>
              </Box>
            </CustomModal>
          </tr>
        </th>
        <th>
          <tr className={styles.Row}>
            <Button onClick={openModal}>Open modal</Button>
            <CustomModal isOpen={isModalOpen} closeModal={closeModal}>
              <Box>
                <Typography variant="h6" component="h2">
                  hi
                </Typography>
                <Typography sx={{ mt: 2 }}>it's me</Typography>
              </Box>
            </CustomModal>
          </tr>
        </th>
      </table>
    </div>
  );
};

export default MainMenu;
