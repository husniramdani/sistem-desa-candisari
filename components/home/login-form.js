import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const layout = {
  layout: "vertical",
  size: "large",
  labelCol: {
    // span: 8,
  },
  wrapperCol: {
    // span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    // offset: 8,
    // span: 16,
  },
};


export default function LoginForm({ setView }) {
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
      <p className="text-3xl font-bold text-center">Masuk</p>
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
          {...tailLayout}
          label="NIK / Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'NIK / Username tidak boleh kosong!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Masukkan NIK/Username"
          />
        </Form.Item>
        <Form.Item
          {...tailLayout}
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
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Masukkan Password"
          />
        </Form.Item>
        <p>Belum punya akun ? <Button type="link" onClick={() => setView("register")}>Daftar</Button></p>
        <Form.Item {...tailLayout}>
          <Button block type="primary" htmlType="submit" onClick={() => onFormDone()}>
            Masuk
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}