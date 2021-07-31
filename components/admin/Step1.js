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
        label="Nama Kepala Desa"
        name="nama"
        rules={[
          {
            required: true,
            message: 'Nama tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan Nama" />
      </Form.Item>
    </>
  )
}

export default connect((state) => state)(Step1)
