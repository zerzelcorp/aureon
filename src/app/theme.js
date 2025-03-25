import { blue, green, grey, lime, orange, red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { esES, frFR, itIT, ptBR, ptPT, zhCN } from "@mui/material/locale";
import { Geist, Wix_Madefor_Display, Bellefair } from "next/font/google";

const bellefair = Bellefair({
  variable: "--font-bellfair",
  subsets: ["latin"],
  weight: ["400"],
});

export const theme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        // main: '#0000',
        main: grey[900],
        light: grey[100],
        // dark: grey[900],
        // contrastText: grey[50],
      },
      secondary: {
        main: grey[50],
      },
      background: {
        // default: '#ffffff', // White background for pages
        default: "#0000", // White background for pages
        // dark: grey[900],
        light: grey[200],
        hover: grey[800], // Light gray for cards, containers
      },
      text: {
        primary: grey[50], // Dark text for readability
        muted: grey[400], // Light Gray for secondary text
        dark: grey[900], // Gray for secondary text
        // contrastText
      },
      info: {
        main: blue[500], // Red for errors
      },
      dark: {
        main: grey[900], // Red for errors
      },
      error: {
        main: red[500], // Red for errors
      },
      warning: {
        main: orange[600], // Red for errors
      },
      success: {
        main: "#00c853", // Green for success messages
      },
      //  action:{
      //  active:,
      //  onhover:'',
      //  selected:''
      //  disabled:''
      //  }
    },
    typography: {
      fontFamily: "var(--font-bellefair),sans-serif",
      h1: {
        // fontSize: "7.5rem",
        // fontWeight: 700,
        // color: '#1a1a1a',
      },
      // h2: {
      //   fontSize: '2rem',
      //   fontWeight: 600,
      // },
      // h6: {
      //   fontSize: '1.5rem',
      // },
      // subtitle1: {
      //   fontSize: '1.5rem',
      //   fontWeight: 500,
      // },
      body1: {
        // fontSize: "1.2rem",
        // lineHeight: 1.6,
      },
      //   bodybig: {
      //     fontSize: '1.4rem',
      //     lineHeight: 1.6,
      //   },
    },
    components: {
    MuiCssBaseline:{
        styleOverrides: {
            body: {
              '&::-webkit-scrollbar': {
                width: '12px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#111',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#666',
                borderRadius: '10px',
                border: '3px solid transparent',
                backgroundClip: 'content-box',
              },
              '&::-webkit-scrollbar-button': {
                display: 'none',
            },
         }
       }
      },
      MuiSvgIcon: {
        styleOverrides: {
          fontSizeMega: {
            fontSize: "10rem",
          },
          root: {
            fontSize: "1rem", // Default size for ALL icons
            fontSizeSmall: {
              fontSize: "1rem", // Adjust small size
            },
            fontSizeMedium: {
              fontSize: "3rem", // Adjust medium size
            },
            fontSizeLarge: {
              fontSize: "5rem", // Adjust large size
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "var(--font-bellefair)",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "white",
            fontFamily: "var(--font-bellefair)",
          },
          sizeSmall: {
            width: 32,
            height: 32,
            "& svg": { fontSize: 20 }, // Target the icon size inside the button
          },
          sizeMedium: {
            width: 48,
            height: 48,
            "& svg": { fontSize: 30 },
          },
          sizeLarge: {
            width: 64,
            height: 64,
            "& svg": { fontSize: 40 },
          },
        },
        // MuiButton: {
        //   styleOverrides: {
        //     root: {
        //       borderRadius: "8px",
        //       padding: "10px 20px",
        //       textTransform: "none",
        //     },
        //   },
        // },
        // MuiCard: {
        //   styleOverrides: {
        //     root: {
        //       // backgroundColor: "background.paper",
        //       boxShadow: "0px",
        //       elevation:0
        //     },
        //  },
        // },
        //     MuiContainer: {
        //       styleOverrides: {
        //         root: {
        //           padding: 0, // Remove default padding (as discussed earlier)
        //           margin: 0,
        //         },
        //       },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            transition:'all 200ms ease-out',
            "& label": {
              color: grey[100], // Default label color
            },
            "& label.Mui-focused": {
              color: grey[200], // Label stays black on focus
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: grey[800], // Default border color
              },
              "&:hover fieldset": {
                borderColor: grey[300], // Border on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: grey[100], // Border on focus
                borderWidth: "2px",
              },
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            transition: "all 300ms easeOut",
            color: "#fff", // Text color
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: grey[700], // Default border
              transition: "border-color 200ms ease-in-out",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: grey[100], // On hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: grey[50], // On focus
            },
          },
          icon: {
            color: "#fff", // Dropdown icon color
            transition: "color 300ms ease", // optional
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: grey[400],
            "&.Mui-focused": {
              color: grey[50],
            },
          },
        },
      },
      MuiMenu: {
        defaultProps: {
          disableScrollLock: true,
        },
        styleOverrides: {
          paper: {
            backgroundColor: grey[900],
            color: grey[50],
            marginTop: 0
          },
          list: {
            padding: 0, 
          },
        },
        MuiPopover: {
          defaultProps: {
            disableScrollLock: true,
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              fontFamily: "var(--font-bellefair)",
              borderRadius: "4px",
              // fontSize:'1rem',
              padding: "10px",
            },
          },
        },
        // MuiCard: {
        //   styleOverrides: {
        //     root: {
        //       // backgroundColor: "background.paper",
        //       boxShadow: "0px",
        //       elevation:0
        //     },
        //  },
        // },
        //     MuiContainer: {
        //       styleOverrides: {
        //         root: {
        //           padding: 0, // Remove default padding (as discussed earlier)
        //           margin: 0,
        //         },
        //       },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            p: 0,
            m:0,
            "&:hover": {
              backgroundColor: "#111",
              transition: "all 200ms ease-in-out"
            },
          },
        },
      },
    },
     },
  esES,
  frFR,
  itIT,
  zhCN,
  ptPT,
  ptBR
);
