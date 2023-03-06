import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
//moment
import moment from "moment-jalaali";

//font
import IRANSansFont from "./../../../../../../assets/fonts/pdfFont/IRANSansFont.ttf";

// Create styles
// Register Font
Font.register({
  family: "Iranian Sans",
  src: IRANSansFont,
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 30,
  },
  body: {
    fontFamily: "Iranian Sans",
    fonts: [
      {
        src: IRANSansFont,
        fontWeight: 400,
      },
    ],
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "right",
    display: "flex",
    flexDirection: "row-reverse",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
const Form2PDF = ({ data }) => {
  moment.loadPersian({ usePersianDigits: true });

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          this is title
        </Text>
        <Text style={styles.text}>
          کارآموز {data?.student?.first_name + " " + data?.student?.last_name}{" "}
          با شماره دانشجویی {data?.student?.faculty_name} در رشته تحصیلی
          {data?.student?.faculty_name}
          در مقطع تحصیلی کارشناسی با معرفی نامه شماره{" "}
          {data?.form2.introduction_letter_number}
          در مورخ
          {moment(data?.form2.created_at).format("jYYYY/jMM/jDD")}
          برای تایید فرستاده شده است،که اطلاعات بیشتر به شرح ذیل است:
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};
export default Form2PDF;
