import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

export const PdfDocument = ({  }) => (
  <Document>
    <Page size="FOLIO" style={s.body}>
      <View style={s.headerContainer}>
        <Image style={s.image} src="/images/logo-desa.png" />
        <View style={s.headerTextContainer}>
          <Text style={s.header1}>PEMERINTAH KABUPATEN KEBUMEN</Text>
          <Text style={s.header1}>KECAMATAN MIRIT</Text>
          <Text style={s.header2}>DESA PATUKGAWEMULYO</Text>
          <Text style={[s.textBasic, s.mt5]}>
            Alamat: Dk. Krajan II RT 1 RW 2 Telp. 081328202278 Kode Pos 54395
          </Text>
          <Text style={[s.textBasic, s.mt2]}>
            www.patukgawemulyo.id - Email:
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <View style={[s.lineDividerBold, s.mt30]} />
      </View>
      <View style={[s.headerContentContainer, s.mt10]}>
        <Text style={s.header3}>SURAT PENGANTAR/ KETERANGAN</Text>
        <Text style={s.header4}></Text>
      </View>
      <View style={s.contentContainer}>
        <View style={[s.contentBasic]}>
          <Text style={s.textBasic}>
            Yang bertanda tangan dibawah ini Kepala Desa Patukgawemulyo,
            Kecamatan Mirit, Kabupaten Kebumen, Provinsi Jawa Tengah menerangkan
            dengan sebenarnya bahwa:
          </Text>
          {/* nama lengkap */}
          <View style={[s.textField, s.mt10]}>
            <Text style={s.labelField}>Nama Lengkap</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}></Text>
          </View>
          {/* nik / no ktp */}
          <View style={[s.textField, s.mt5]}>
            <Text style={s.labelField}>NIK / No KTP</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}></Text>
          </View>
          {/* tempat tgl lahir */}
          <View style={[s.textField, s.mt5]}>
            <Text style={s.labelField}>Tempat dan Tgl. Lahir</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}>
            </Text>
          </View>
          {/* jenis kelamin */}
          <View style={[s.textField, s.mt5]}>
            <Text style={s.labelField}>Jenis Kelamin</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}>
            </Text>
          </View>
          {/* tempat tinggal */}
          <View style={[s.textField, s.mt5]}>
            <Text style={s.labelField}>Alamat/ Tempat Tinggal</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}></Text>
          </View>
          {/* agama */}
          <View style={[s.textField, s.mt5]}>
            <Text style={s.labelField}>Agama</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}></Text>
          </View>
          {/* status */}
          <View style={[s.textField, s.mt5]}>
            <Text style={s.labelField}>Status</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}></Text>
          </View>
          {/* pendidikan */}
          <View style={[s.textField, s.mt5]}>
            <Text style={s.labelField}>Pendidikan</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}></Text>
          </View>
          {/* pekerjaan */}
          <View style={[s.textField, s.mt5]}>
            <Text style={s.labelField}>Pekerjaan</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}></Text>
          </View>
          {/* kewarganegaraan */}
          <View style={[s.textField, s.mt5]}>
            <Text style={s.labelField}>Kewarganegaraan</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}>
            </Text>
          </View>
          {/* keterangan */}
          <View style={[s.textField, s.mt5]}>
            <Text style={s.labelField}>Keterangan</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}></Text>
          </View>
          {/* keperluan */}
          <View style={[s.textField, s.mt20]}>
            <Text style={s.labelField}>Keperluan</Text>
            <Text style={s.dividerField}>:</Text>
            <Text style={s.contentField}></Text>
          </View>
        </View>
        <Text style={[s.textBasic, s.mt20]}>
          Demikian surat keterangan ini dibuat dengan sebenar-benarnya agar
          dapat dipergunakan dengan semestinya.
        </Text>

        <View style={[s.ttdContainer, s.mt20]}>
          <View style={[s.ttdPemegangSurat, s.mt15]}>
            <Text style={[s.textBasic]}>Pemegang Surat</Text>
            <Text style={[s.textBasic, s.namaPenandatangan]}>
            </Text>
          </View>
          <View style={[s.ttdContent]}>
            <Text style={[s.textBasic]}>
            </Text>

            <Text style={[s.textBasic]}></Text>
            <Text style={[s.textBasic, s.namaPenandatangan]}>
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

const s = StyleSheet.create({
  body: {
    paddingTop: 55,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  headerContainer: {
    marginHorizontal: 30,
  },
  image: {
    width: 75,
    height: 90,
  },
  headerTextContainer: {
    textAlign: "center",
    position: "absolute",
    left: 100,
    width: 360,
  },
  header1: {
    fontSize: 16,
    fontFamily: "Times-Roman",
  },
  header2: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: "Times-Bold",
  },
  alamatDesa: {
    marginTop: 5,
    fontSize: 10,
    fontFamily: "Times-Italic",
  },
  mt2: {
    marginTop: 2,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mt30: {
    marginTop: 30,
  },
  lineDividerThin: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
  lineDividerBold: {
    height: 3,
    width: "100%",
    backgroundColor: "black",
  },

  headerContentContainer: {
    textAlign: "center",
  },
  header3: {
    fontFamily: "Times-Bold",
    fontSize: 16,
    textDecoration: "underline",
  },
  header4: {
    fontFamily: "Times-Bold",
    fontSize: 16,
  },

  contentContainer: {
    marginHorizontal: 30,
  },
  contentBasic: {
    marginTop: 20,
  },
  textBasic: {
    fontFamily: "Times-Roman",
    fontSize: 12,
  },
  textField: {
    fontFamily: "Times-Roman",
    fontSize: 12,
    flexDirection: "row",
  },
  labelField: {
    width: 130,
  },
  dividerField: {
    width: 16,
  },
  contentField: {
    maxWidth: 320
  },

  contentUsaha: {
    marginTop: 20,
  },

  ttdContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ttdContent: {
    width: 200,
    textAlign: "center",
  },
  ttdPemegangSurat: {
    width: 200,
    textAlign: "center",
  },
  namaPenandatangan: {
    fontFamily: "Times-Bold",
    marginTop: 50,
  },
});

export default PdfDocument
