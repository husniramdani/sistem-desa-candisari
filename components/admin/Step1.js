import { connect } from 'react-redux';
import { Form, Input, Radio } from "antd";

const tailLayout = {
  labelCol: {
    xs: {
      span: 24,
    }
  },
  wrapperCol: {
    xs: {
      span: 24,
    }
  },
};

const Step1 = ({ }) => {
  return (
    <>
      <Form.Item
        {...tailLayout}
        label="Nama Perangkat Desa"
        name="nama_perangkat_desa"
        rules={[
          {
            required: true,
            message: 'Nama tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan Nama Perangkat Desa" />
      </Form.Item>
      <Form.Item
        {...tailLayout}
        label="Jabatan"
        name="jabatan"
        rules={[
          {
            required: true,
            message: 'Jabatan tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan Jabatan Perangkat Desa" />
      </Form.Item>
    </>
  )
}

export default connect((state) => state)(Step1)
