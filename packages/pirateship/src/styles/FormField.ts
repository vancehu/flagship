import { color, fontSize, padding } from './variables';

const kJustifyContent = 'space-between';

export default {
  formGroup: {
    normal: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: kJustifyContent,
      backgroundColor: color.white,
      marginBottom: 0,
      paddingTop: 6,
      paddingBottom: 1,
      borderBottomWidth: 1,
      borderBottomColor: color.lightGray
    },
    error: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: kJustifyContent,
      backgroundColor: color.white,
      marginBottom: 0,
      paddingTop: 6,
      paddingBottom: 1,
      borderBottomWidth: 1,
      borderBottomColor: color.lightGray
    }
  },
  textboxView: {
    normal: {
      flex: 1,
      flexGrow: 1,
      flexBasis: 200,
      marginRight: padding.wide,
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: kJustifyContent
    },
    error: {
      flex: 1,
      flexGrow: 1,
      flexBasis: 200,
      marginRight: padding.base,
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: kJustifyContent
    }
  },
  textbox: {
    normal: {
      flexGrow: 1,
      borderWidth: 0,
      fontSize: fontSize.base,
      marginBottom: 0
    },
    error: {
      flexGrow: 1,
      borderWidth: 0,
      fontSize: fontSize.base,
      marginBottom: 0
    }
  },
  controlLabel: {
    normal: {
      width: 100,
      fontWeight: 'bold',
      fontSize: fontSize.small,
      marginLeft: padding.wide
    },
    error: {
      width: 100,
      fontWeight: 'bold',
      fontSize: fontSize.small,
      marginLeft: padding.wide,
      color: color.red
    }
  },
  errorBlock: {
    fontSize: fontSize.small,
    flexGrow: 1,
    marginLeft: padding.wide,
    marginRight: padding.base,
    color: color.red
  },
  helpBlock: {
    normal: {
      fontSize: fontSize.small,
      lineHeight: fontSize.large,
      marginLeft: padding.wide,
      marginRight: padding.base,
      paddingTop: padding.base,
      paddingBottom: padding.base,
      color: color.lightGray
    },
    error: {
      fontSize: fontSize.small,
      lineHeight: fontSize.large,
      marginLeft: padding.wide,
      marginRight: padding.base,
      paddingTop: padding.base,
      paddingBottom: padding.base,
      color: color.red
    }
  },
  selectContainer: {
    normal: {
      flex: 1
    },
    error: {
      flex: 1
    }
  },
  select: {
    normal: {
      flex: 1,
      flexGrow: 1,
      flexBasis: 200,
      borderWidth: 0,
      marginBottom: padding.narrow,
      paddingLeft: 7
    },
    error: {
      flex: 1,
      flexGrow: 1,
      flexBasis: 200,
      borderWidth: 0,
      marginBottom: padding.narrow,
      paddingLeft: 7
    }
  },
  selectButtonStyle: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0
  },
  selectPlaceholder: {
    normal: {
      color: color.darkGray,
      fontSize: fontSize.base
    },
    error: {
      fontSize: fontSize.base
    }
  },
  selectLabel: {
    normal: {
      color: color.darkGray,
      fontSize: fontSize.base
    },
    error: {
      fontSize: fontSize.base
    }
  }
};
