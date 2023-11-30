const BankingPageStyle = {
  parent: {
    backgroundColor: "#ffffff",
    height: "100%",
    border: "1px solid #000000",
    borderRadius: "13px",
  },
  breadcrumb: {
    height: "5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: "5px",
  },
  tabStyle: {
    backgroundColor: "rgb(209 201 201 / 23%)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  tabLabelStyle: {
    fontSize: "17px",
    fontFamily: "'Roboto Mono'",
    fontWeight: "bold",
  },
  tabsParentDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "18rem",
  },

  //userDetails
  UserDetailsTabDev: {
    marginTop: "6rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  userDetailsCard1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: "large",
    paddingBottom: "1rem",
  },
  userDetailGrid1: {
    display: "grid",
    gridTemplateRows: "3rem",
    gridTemplateColumns: "auto auto",
    columnGap: "2rem",
    marginTop: "2px",
  },

  BankDetailsTabDev: {
    marginTop: "0rem",
  },
  Addbank: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: "1rem",
  },

  //NoRecords

  NoRecords: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "20rem",
    border: "1px solid rgb(0 0 0 / 20%)",
    backgroundColor: "rgb(204 210 255)",
    color: "#ff3333d9",
  },
};

export default BankingPageStyle;
