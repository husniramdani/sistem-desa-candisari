import { connect } from 'react-redux';
import { Form, Input, Row, Col } from "antd";
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

const Step3 = ({ }) => {
  return (
    <>
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
      <Form.Item
        {...tailLayout}
        label="No KK"
        name="no_kk"
        rules={[
          {
            required: true,
            message: 'No KK tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan No KK" />
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            {...tailLayout}
            label="Berlaku Mulai Tanggal"
            name="start_date"
            rules={[
              {
                required: true,
                message: 'Tanggal mulai tidak boleh kosong!',
              },
            ]}
            className="w-full"
          >
            <DatePicker
              className="full-width"
              format={"DD MMMM YYYY"}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...tailLayout}
            label="Berlaku Sampai Tanggal"
            name="end_date"
            rules={[
              {
                required: true,
                message: 'Tanggal berakhir tidak boleh kosong!',
              },
            ]}
            className="w-full"
          >
            <DatePicker
              className="full-width"
              format={"DD MMMM YYYY"}
            />
          </Form.Item>
        </Col>

      </Row>
      <Form.Item
        {...tailLayout}
        label="Keperluan"
        name="keperluan"
        rules={[
          {
            required: true,
            message: 'Keperluan tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan Keperluan" />
      </Form.Item>
      <Form.Item
        {...tailLayout}
        label="Keterangan Lain"
        name="keterangan"
        rules={[
          {
            required: false,
            message: 'Keterangan tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="Masukkan keterangan lain" />
      </Form.Item>
    </>
  )
}

export default connect((state) => state)(Step3)
