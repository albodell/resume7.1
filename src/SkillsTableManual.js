import {
  TableRow,
  TableCell,
  convertInchesToTwip,
  AlignmentType,
  WidthType,
  TextRun
} from "docx";

export default function getTextPara(textElement1, textElement2, textElement3) {
  var docx = require("docx");

  // var cleanTextArray = textElement;
  var arrayOne = textElement1.split("\n");
  var arrayTwo = textElement2.split("\n");
  var arrayThree = textElement3.split("\n");
  //THESE NEED TO BE IN PARAGRAPH AND TEXTRUN
  var one = new TableCell({
    children: arrayOne,
    width: {
      size: 33.3,
      type: WidthType.PERCENTAGE
    },
    height: {
      size: 0.2
    },
    margins: {
      left: convertInchesToTwip(0.1),
      right: convertInchesToTwip(0.1)
    },
    borders: {
      left: {
        size: 3
      }
    }
  });

  var two = new TableCell({
    children: arrayTwo,
    width: {
      size: 33.3,
      type: WidthType.PERCENTAGE
    },
    height: {
      size: 0.2
    },
    margins: {
      left: convertInchesToTwip(0.1),
      right: convertInchesToTwip(0.1)
    }
  });

  var three = new TableCell({
    children: arrayThree,
    width: {
      size: 33.3,
      type: WidthType.PERCENTAGE
    },
    height: {
      size: 0.2
    },
    margins: {
      left: convertInchesToTwip(0.1),
      right: convertInchesToTwip(0.1)
    },
    borders: {
      right: {
        size: 3
      }
    }
  });

  const tableRow = new TableRow({
    children: [one, two, three]
  });

  return new docx.Table({
    alignment: AlignmentType.CENTER,
    rows: [tableRow],
    width: {
      size: 100,
      type: WidthType.PERCENTAGE
    },
    borders: {
      top: {
        size: 3
      },
      bottom: {
        size: 3
      }
    }
  });
}
