import { createStyles } from "@mantine/core";

export const useResumeStyles = createStyles({
  resume_container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },

  left_section: {
    width: "1px",
    height: "100%",
    transition: "width 0.5s ease",
    position: 'relative',
  },

  left_section_open: {
    width: "45vw",
    overflowX: "hidden",
    padding: 12
  },

  right_section: {
    flexGrow: 1,
    backgroundColor: "#ecf0f1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  left_section_buttonOpened: {
    position: "absolute",
    width: "10px",
    right: "10px",
    top: "15px",
    height: "10px",
    backgroundColor: 'lightsteelblue',
    color: "white",
    fontWeight: 'bolder'
  },

  left_section_buttonClosed: {
    height: "100vh",
    backgroundColor: 'lightsteelblue',
    boxShadow: '8px 7px 7px 3px lightgrey',
    border: 'none',
    ":active": {
      boxShadow: 'inset -2px 8px 16px 1px lightgrey',
    }
  }

});
