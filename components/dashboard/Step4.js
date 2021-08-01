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

const Step4 = ({ }) => {
  return (
    <>
      <Form.Item
        {...tailLayout}
        label="Nomor Surat"
        name="nomor_surat"
        rules={[
          {
            required: true,
            message: 'Nomor surat tidak boleh kosong!',
          },
        ]}
      >
        <Input placeholder="451/008/03/VII/2021" />
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            {...tailLayout}
            label="Tempat"
            name="tempat_surat"
            rules={[
              {
                required: true,
                message: 'Tempat tidak boleh kosong!',
              },
            ]}
          >
            <Input placeholder="Masukkan Tempat" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...tailLayout}
            name="tgl_surat"
            label="Tanggal Surat"
            rules={[
              {
                required: true,
                message: 'Tanggal surat tidak boleh kosong!',
              },
            ]}
          >
            <DatePicker
              className="full-width"
              format={"DD MMMM YYYY"}
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

export default connect((state) => state)(Step4)
