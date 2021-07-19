import { connect } from 'react-redux';
import { Form, Input, Radio, InputNumber, Select } from "antd";
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

const Step1 = ({ }) => {
  return (
    <>
      <Form.Item
        {...tailLayout}
        label="Nama Lengkap"
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
        name="gender"
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
        name="usia"
        label="Usia"
        rules={[
          {
            required: true,
            message: 'Usia tidak boleh kosong!',
          },
        ]}
      >
        <InputNumber className="full-width" placeholder="Masukkan usia" />
      </Form.Item>
      <Form.Item
        {...tailLayout}
        label="Status"
        name="status"
        rules={[
          {
            required: true,
            message: 'Status tidak boleh kosong!',
          },
        ]}
      >
        <Select placeholder="Pilih Status">
          <Select.Option value="3">Cerai/Duda/Janda</Select.Option>
          <Select.Option value="4">Belum Menikah</Select.Option>
          <Select.Option value="5">Menikah</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        {...tailLayout}
        label="Jumlah Tanggungan"
        name="tanggungan"
        rules={[
          {
            required: true,
            message: 'Jumlah tanggungan tidak boleh kosong!',
          },
        ]}
      >
        <Select placeholder="Pilih Jumlah Tanggungan">
          <Select.Option value="5">Tidak ada</Select.Option>
          <Select.Option value="4">1</Select.Option>
          <Select.Option value="3">2</Select.Option>
          <Select.Option value="2">3</Select.Option>
          <Select.Option value="1">Lebih dari 4</Select.Option>
        </Select>
      </Form.Item>
    </>
  )
}

export default connect((state) => state)(Step1)
