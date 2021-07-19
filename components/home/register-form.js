import { Form, Input, Button } from "antd";

const layout = {
  layout: "vertical",
  size: "large",
};


export default function RegisterForm({ setView }) {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);

  };
  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };
  const onFormDone = () => {
    // message.success('Processing complete!');
    // console.log(form)
  }

  return (
    <>
      <p className="text-3xl font-bold text-center">Daftar</p>
      <Form
        {...layout}
        form={form}
        name="basic"
        initialValues={{
          // nama: props.nama,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="NIK (Nomor Induk Keluarga)"
          name="nik"
          rules={[
            {
              required: true,
              message: 'NIK tidak boleh kosong!',
            },
          ]}
        >
          <Input
            placeholder="Masukkan NIK"
          // type="number"
          />
        </Form.Item>
        <Form.Item
          label="Nama KTP"
          name="nama"
          rules={[
            {
              required: true,
              message: 'Nama KTP tidak boleh kosong!',
            },
          ]}
        >
          <Input
            placeholder="Masukkan Nama Sesuai KTP"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Password tidak boleh kosong!',
            },
          ]}
        >
          <Input.Password
            placeholder="Masukkan Password"
          />
        </Form.Item>
        <Form.Item
          label="Konfirmasi Password"
          name="konfirmasi_password"
          rules={[
            {
              required: true,
              message: 'Konfirmasi Password tidak boleh kosong!',
            },
          ]}
        >
          <Input.Password
            placeholder="Masukkan Konfirmasi Password"
          />
        </Form.Item>
        <p>Sudah punya akun ? <Button type="link" onClick={() => setView("login")}>Masuk</Button></p>
        <Form.Item>
          <Button block type="primary" htmlType="submit" onClick={() => onFormDone()}>
            Daftar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
