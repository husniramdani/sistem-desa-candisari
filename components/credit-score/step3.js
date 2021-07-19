import { Form, Select } from "antd";

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

export default function Step3({}) {
    return (
        <>
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
                <Select placeholder="Pilih status tempat tinggal">
                    <Select.Option value="8">Rumah Milik Sendiri</Select.Option>
                    <Select.Option value="7-ROT">Rumah Orang Tua</Select.Option>
                    <Select.Option value="7-RS">Rumah Saudara</Select.Option>
                    <Select.Option value="7-RD">Rumah Dinas</Select.Option>
                    <Select.Option value="6">Rumah Teman</Select.Option>
                    <Select.Option value="5">Rumah Milik Sendiri (KPR)</Select.Option>
                    <Select.Option value="4">Rumah Sewa (Kontrakan)</Select.Option>
                    <Select.Option value="3">Kost/Asrama</Select.Option>
                </Select>
            </Form.Item>
        </>
    )
}