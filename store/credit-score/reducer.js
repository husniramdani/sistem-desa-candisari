import { formActionTypes } from './action'

const formInitialState = {
  nama: "",
  gender: "pria",
  tgl_lahir: "",
  usia: "",
  status: "",
  tanggungan: "",

  pendidikan: "",
  pekerjaan: "",
  lama_bekerja: "",
  level_bekerja: "",

  tempat_tinggal: "",

  gaji: "",
  amount: "",
  repayment: "",
  insurance: "",
  tujuan: "",
  kredit_ke: "",
}

export default function reducer(state = formInitialState, action) {
  switch (action.type) {
    case formActionTypes.ADD_STEP_1:
      return Object.assign({}, state, {
        nama: action.data.nama,
        gender: action.data.gender,
        tgl_lahir: action.data.tgl_lahir,
        usia: action.data.usia,
        status: action.data.status,
        tanggungan: action.data.tanggungan,
      })
    case formActionTypes.ADD_STEP_2:
      return Object.assign({}, state, {
        pendidikan: action.data.pendidikan,
        pekerjaan: action.data.pekerjaan,
        lama_bekerja: action.data.lama_bekerja,
        level_bekerja: action.data.level_bekerja,
      })
    case formActionTypes.ADD_STEP_3:
      return Object.assign({}, state, {
        tempat_tinggal: action.data.tempat_tinggal,
      })
    case formActionTypes.ADD_STEP_4:
      return Object.assign({}, state, {
        gaji: action.data.gaji,
        amount: action.data.amount,
        repayment: action.data.repayment,
        insurance: action.data.insurance,
        tujuan: action.data.tujuan,
        kredit_ke: action.data.kredit_ke,
      })
    default:
      return state
  }
}
