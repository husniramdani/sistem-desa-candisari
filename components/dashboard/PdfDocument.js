import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

export const PdfDocument = ({ props }) => {
  return (
    <Document>
      <Page size="FOLIO" style={s.body}>
        <View style={s.headerContainer}>
          <Image style={s.image} src="/images/logo-desa.png" />
          <View style={s.headerTextContainer}>
            <Text style={s.header1}>PEMERINTAH KABUPATEN MAGELANG</Text>
            <Text style={s.header1}>KECAMATAN WINDUSARI</Text>
            <Text style={s.header2}>DESA CANDISARI</Text>
            <Text style={[s.textBasic, s.mt5]}>
              JL. Lettu Subandi 0.5 Truni, Candisari, Windusari, Magelang KP.56152 telp.081327082787
            </Text>
            {/* <Text style={[s.textBasic, s.mt2]}>
              www.patukgawemulyo.id - Email:
            </Text> */}
          </View>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <View style={[s.lineDividerBold, s.mt30]} />
        </View>
        <View style={[s.headerContentContainer, s.mt10]}>
          <Text style={s.header3}>SURAT KETERANGAN</Text>
          <Text style={s.header4}>
            NOMOR : {props?.nomor_surat || ""}
          </Text>
        </View>
        <View style={s.contentContainer}>
          <View style={[s.contentBasic]}>
            <Text style={s.textBasic}>
              Yang bertanda tangan dibawah ini :
            </Text>
            {/* nama lengkap */}
            <View style={[s.textField, s.mt10]}>
              <Text style={s.labelField}>Nama</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>{props?.nama_perangkat_desa || ""}</Text>
            </View>
            {/* jabatan */}
            <View style={[s.textField, s.mt5]}>
              <Text style={s.labelField}>Jabatan</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>{props?.jabatan || ""}</Text>
            </View>
          </View>

          <View style={[s.contentBasic]}>
            <Text style={s.textBasic}>
              Dengan ini menerangkan bahwa :
            </Text>
            {/* nama lengkap */}
            <View style={[s.textField, s.mt10]}>
              <Text style={s.labelField}>Nama</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>{props?.nama || ""}</Text>
            </View>
            {/* jenis kelamin */}
            <View style={[s.textField, s.mt5]}>
              <Text style={s.labelField}>Jenis Kelamin</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>
                {props?.jenis_kelamin || ""}
              </Text>
            </View>
            {/* tempat tgl lahir */}
            <View style={[s.textField, s.mt5]}>
              <Text style={s.labelField}>Tempat/Tanggal Lahir</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>
                {props?.tempat_lahir || ""}/{props?.tgl_lahir || ""}
              </Text>
            </View>
            {/* kewarganegaraan */}
            <View style={[s.textField, s.mt5]}>
              <Text style={s.labelField}>Kewarganegaraan</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>
                {props?.warga_negara || ""}
              </Text>
            </View>
            {/* agama */}
            <View style={[s.textField, s.mt5]}>
              <Text style={s.labelField}>Agama</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>{props?.agama || ""}</Text>
            </View>
            {/* pekerjaan */}
            <View style={[s.textField, s.mt5]}>
              <Text style={s.labelField}>Pekerjaan</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>{props?.pekerjaan || ""}</Text>
            </View>
            {/* tempat tinggal */}
            <View style={[s.textField, s.mt5]}>
              <Text style={s.labelField}>Alamat/ Tempat Tinggal</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>{props?.tempat_tinggal || ""}</Text>
            </View>
            <View style={[s.contentBasic]}>
              <Text style={s.textBasic}>
                Surat bukti diri :
              </Text>
              {/* nik */}
              <View style={[s.textField, s.mt5]}>
                <Text style={s.labelField}>NIK.</Text>
                <Text style={s.contentField}>{props?.nik || ""}</Text>
              </View>
              {/* no kk */}
              <View style={[s.textField, s.mt5]}>
                <Text style={s.labelField}>No.KK. </Text>
                <Text style={s.contentField}>{props?.no_kk || ""}</Text>
              </View>
            </View>
            {/* keperluan */}
            <View style={[s.textField, s.mt20]}>
              <Text style={s.labelField}>Keperluan</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>{props.keperluan}</Text>
            </View>
            <View style={[s.textField, s.mt20]}>
              <Text style={s.labelField}>Berlaku</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>{props.start_date} s/d {props.end_date}</Text>
            </View>
            {/* keterangan */}
            <View style={[s.textField, s.mt5]}>
              <Text style={s.labelField}>Keterangan lain</Text>
              <Text style={s.dividerField}>:</Text>
              <Text style={s.contentField}>{props?.keterangan || ""}</Text>
            </View>
          </View>
          <Text style={[s.textBasic, s.mt20]}>
            Demikian Surat Keterangan ini dibuat untuk dipergunakan seperlunya.
          </Text>

          <View style={[s.ttdContainer, s.mt20]}>
            <View style={[s.ttdPemegangSurat, s.mt15]}>
              <Text style={[s.textBasic]}></Text>
              <Text style={[s.textBasic, s.namaPenandatangan]}></Text>
            </View>
            <View style={[s.ttdContent]}>
              <Text style={[s.textBasic]}>
                {props.tempat_surat}
              </Text>

              <Text style={[s.textBasic]}>
                {props.jabatan}
              </Text>
              <Text style={[s.textBasic, s.namaPenandatangan]}>
                {props.nama_perangkat_desa}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
};

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
