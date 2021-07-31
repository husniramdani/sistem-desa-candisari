import { formActionTypes } from './action'

const formInitialState = {
  nama_perangkat_desa: "",
  jabatan: "",

  nama: "",
  jenis_kelamin: "pria",
  tempat_lahir: "",
  tgl_lahir: "",
  warga_negara: "Indonesia",
}

export default function reducer(state = formInitialState, action) {
  switch (action.type) {
    case formActionTypes.ADD_STEP_1:
      return Object.assign({}, state, {
        nama_perangkat_desa: action.data.nama_perangkat_desa,
        jabatan: action.data.jabatan,
      })
    case formActionTypes.ADD_STEP_2:
      return Object.assign({}, state, {

      })
    case formActionTypes.ADD_STEP_3:
      return Object.assign({}, state, {
      })
    case formActionTypes.ADD_STEP_4:
      return Object.assign({}, state, {
      })
    default:
      return state
  }
}
