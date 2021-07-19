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

export default function Step4({}) {
    return (
        <>
            <Form.Item
                {...tailLayout}
                label="Besarnya Gaji"
                name="gaji"
                rules={[
                    {
                        required: true,
                        message: 'Besarnya gaji tidak boleh kosong!',
                    },
                ]}
            >
                <Select placeholder="Pilih Besaran Gaji">
                    <Select.Option value="1">{`< 2 juta`}</Select.Option>
                    <Select.Option value="2">2-5 juta</Select.Option>
                    <Select.Option value="3">5-10 juta</Select.Option>
                    <Select.Option value="4">11-20 juta</Select.Option>
                    <Select.Option value="5">{`> 20 juta`}</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                {...tailLayout}
                label="Amount (banyaknya pengajuan kredit)"
                name="amount"
                rules={[
                    {
                        required: true,
                        message: 'amount tidak boleh kosong!',
                    },
                ]}
            >
                <Select placeholder="Pilih Besaran Amount">
                    <Select.Option value="4">{`< 20 juta`}</Select.Option>
                    <Select.Option value="3">20-30 juta</Select.Option>
                    <Select.Option value="2">20-50 juta</Select.Option>
                    <Select.Option value="1">Lebih dari 50 juta</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                {...tailLayout}
                label="Repayment (sumber pembayaran kembali)"
                name="repayment"
                rules={[
                    {
                        required: true,
                        message: 'Repayment tidak boleh kosong!',
                    },
                ]}
            >
                <Select placeholder="Pilih Repayment">
                    <Select.Option value="4">Cash Flow</Select.Option>
                    <Select.Option value="3">Disposition of a Single Asset</Select.Option>
                    <Select.Option value="2">Anticipated Income</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                {...tailLayout}
                label="Insurance (jaminan)"
                name="insurance"
                rules={[
                    {
                        required: true,
                        message: 'Insurance tidak boleh kosong!',
                    },
                ]}
            >
                <Select placeholder="Pilih Insurance">
                    <Select.Option value="6">Rumah/tanah/properti</Select.Option>
                    <Select.Option value="5">Mobil</Select.Option>
                    <Select.Option value="4">Motor</Select.Option>
                    <Select.Option value="3">Mesin Pabrik/Produk Investasi/Emas</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                {...tailLayout}
                label="Tujuan Kredit Motor"
                name="tujuan"
                rules={[
                    {
                        required: true,
                        message: 'Tujuan Kredit tidak boleh kosong!',
                    },
                ]}
            >
                <Select placeholder="Pilih tujuan kredit">
                    <Select.Option value="5">Alat Pencaharian</Select.Option>
                    <Select.Option value="3">Sekolah/Kuliah</Select.Option>
                    <Select.Option value="1">Gaya Hidup</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                {...tailLayout}
                label="Pengambilan Kredit ke berapa ?"
                name="kredit_ke"
                rules={[
                    {
                        required: true,
                        message: 'Tidak boleh kosong!',
                    },
                ]}
            >
                <Select placeholder="Pilih Keterangan">
                    <Select.Option value="5">Ke-1</Select.Option>
                    <Select.Option value="4">ke-2</Select.Option>
                    <Select.Option value="3">Lebih dari 2</Select.Option>
                </Select>
            </Form.Item>
        </>
    )
}