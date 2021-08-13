import { formActionTypes } from './action'

const formInitialState = {
  current_step: 0,

  nama_perangkat_desa: "",
  jabatan: "",

  nama: "",
  jenis_kelamin: "Laki-laki",
  tempat_lahir: "",
  tgl_lahir: null,
  agama: "",
  pekerjaan: "",
  tempat_tinggal: "",

  warga_negara: "Indonesia",
  nik: "",
  no_kk: "",
  start_date: null,
  end_date: null,
  keperluan: "",
  keterangan: "",

  nomor_surat: "451/008/03/VII/2021",
  tempat_surat: "Candisari",
  tgl_surat: new Date(),
}

export default function reducer(state = formInitialState, action) {
  switch (action.type) {
    case formActionTypes.RESET_FORM:
      return Object.assign({}, state, formInitialState)
    case formActionTypes.SET_STEP:
      return Object.assign({}, state, {
        current_step: action.data,
      })
    case formActionTypes.ADD_STEP_1:
      return Object.assign({}, state, {
        nama_perangkat_desa: action.data.nama_perangkat_desa,
        jabatan: action.data.jabatan,
      })
    case formActionTypes.ADD_STEP_2:
      return Object.assign({}, state, {
        nama: action.data.nama,
        jenis_kelamin: action.data.jenis_kelamin,
        tempat_lahir: action.data.tempat_lahir,
        tgl_lahir: action.data.tgl_lahir,
        agama: action.data.agama,
        pekerjaan: action.data.pekerjaan,
        tempat_tinggal: action.data.tempat_tinggal,
      })
    case formActionTypes.ADD_STEP_3:
      return Object.assign({}, state, {
        warga_negara: action.data.warga_negara,
        nik: action.data.nik,
        no_kk: action.data.no_kk,
        start_date: action.data.start_date,
        end_date: action.data.end_date,
        keperluan: action.data.keperluan,
        keterangan: action.data.keterangan,
      })
    case formActionTypes.ADD_STEP_4:
      return Object.assign({}, state, {
        nomor_surat: action.data.nomor_surat,
        tempat_surat: action.data.tempat_surat,
        tgl_surat: action.data.tgl_surat,
      })
    default:
      return state
  }
}
