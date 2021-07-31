import { connect } from 'react-redux';
import { Form, Input, Radio, Select } from "antd";
import DatePicker from "@components/DatePicker";

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

const Step2 = ({ }) => {
  return (
    <>
      <Form.Item
        {...tailLayout}
        label="Nama"
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
      <Form.Item
        {...tailLayout}
        name="jenis_kelamin"
        label="Jenis Kelamin"
        rules={[
          {
            required: true,
            message: 'Jenis kelamin tidak boleh kosong!',
          },
        ]}
      >
        <Radio.Group initialValue="pria">
          <Radio value="pria">Pria</Radio>
          <Radio value="wanita">Wanita</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        {...tailLayout}
        label="Tempat Lahir"
        name="tempat_lahir"
        rules={[
          {
            required: true,
            message: 'Tempat lahir tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan Tempat Lahir" />
      </Form.Item>
      <Form.Item
        {...tailLayout}
        name="tgl_lahir"
        label="Tanggal Lahir"
        rules={[
          {
            required: true,
            message: 'Tanggal lahir tidak boleh kosong!',
          },
        ]}
      >
        <DatePicker
          className="full-width"
          format={"DD MMM YYYY"}
        />
      </Form.Item>
      <Form.Item
        {...tailLayout}
        label="Warga Negara"
        name="warga_negara"
        rules={[
          {
            required: true,
            message: 'Warga negara tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan warga negara" />
      </Form.Item>
      <Form.Item
        {...tailLayout}
        label="Agama"
        name="agama"
        rules={[
          {
            required: true,
            message: 'Agama tidak boleh kosong!',
          },
        ]}
      >
        <Select placeholder="Pilih Agama">
          <Select.Option value="Islam">Islam</Select.Option>
          <Select.Option value="Kristen">Kristen</Select.Option>
          <Select.Option value="Katolik">Katolik</Select.Option>
          <Select.Option value="Hindu">Hindu</Select.Option>
          <Select.Option value="Budha">Budha</Select.Option>
          <Select.Option value="Konghucu">Konghucu</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        {...tailLayout}
        label="Pekerjaan"
        name="pekerjaan"
        rules={[
          {
            required: true,
            message: 'Pekerjaan tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan pekerjaan" />
      </Form.Item>
      <Form.Item
        {...tailLayout}
        label="Tempat Tinggal"
        name="tempat_tinggal"
        rules={[
          {
            required: true,
            message: 'Tempat tinggal tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan tempat tinggal" />
      </Form.Item>
      <Form.Item
        {...tailLayout}
        label="NIK"
        name="nik"
        rules={[
          {
            required: true,
            message: 'NIK tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan nik" />
      </Form.Item>
    </>
  )
}

export default connect((state) => state)(Step2)
