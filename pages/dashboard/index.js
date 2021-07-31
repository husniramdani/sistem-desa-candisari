import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router';
import { login, logout } from '@store/auth/action';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfDocument from '@components/admin/PdfDocument';
import { Form, Steps, Button } from 'antd';
import Step1 from '@components/admin/Step1';
import Step2 from '@components/admin/Step2';
import Layout from "@components/layout";
import { addStep1, addStep2, addStep3, addStep4 } from '@store/admin/action'

const { Step } = Steps;

const layout = {
  layout: "vertical",
  size: "large",
  labelCol: {
    // span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    // offset: 8,
    // span: 16,
  },
};

const steps = [
  {
    title: "Pengisian Data Perangkat Desa",
    content: <Step1 />,
  },
  {
    title: 'Pengisian Data Surat',
    content: <Step2 />,
  },
  {
    title: 'Step 3',
    content: <Step1 />,
  },
  {
    title: 'Step 4',
    content: <Step1 />,
  },
];

const Dashboard = (props, { }) => {
  const router = useRouter()
  // ini nanti ya
  // const [showPdf, onShowPdf] = useState(false)
  // const [visible, setVisible] = useState(false);
  // const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState('Content of the modal');
  // const showModal = () => {
  //   setVisible(true);
  // };
  // const handleOk = () => {
  //   setModalText('The modal will be closed after two seconds');
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     setVisible(false);
  //     setConfirmLoading(false);
  //   }, 2000);
  // };
  // const handleCancel = () => {
  //   console.log('Clicked cancel button');
  //   setVisible(false);
  // };

  // skarang ini dulu
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("values", values)
    increase();
    if(step===0){
      props.addStep1(values);
    }
    // else if (step===2){
    //   props.addStep2(values);
    // } else if (step===3){
    //   props.addStep3(values);
    // } else if (step===4){
    //   props.addStep4(values);
    // }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const increase = () => {
    if (current < 3) setCurrent(current + 1)
  };
  const decrease = () => {
    if (current > 0) setCurrent(current - 1)
  };

  const onFormDone = () => {
    // message.success('Processing complete!');
    // console.log(form)
  }

  useEffect(() => {
    if (!props.isLogin) {
      router.push("/")
    }
  })

  const onChange = current => {
    setCurrent(current)
  };

  return (
    <>
      <Layout title="Desa Candisari">
        <div className="px-32 py-16 hidden lg:block">
          <h2 className="lg:hidden text-4xl font-bold">Buka di laptop ya!</h2>
          <h2 className="mb-0 text-2xl font-bold">Surat Keterangan Umum</h2>
          <h5 className="">Pemerintah Desa Candisari</h5>
          {/* <hr className="mt-8"/> */}
          <div className="flex flex-row mt-8 border">
            <div className="w-3/12 border-r pl-5 py-10">
              <Steps
                progressDot
                current={current}
                onChange={(e) => onChange(e)}
                direction="vertical"
                className=""
              >
                <Step title="Tahap 1" description="Data Perangkat Desa" />
                <Step title="Tahap 2" description="Data Surat" />
                <Step title="Tahap 3" description="Pemberian Tanda Tangan" className="wrapper-stepper" />
                <Step title="Tahap 4" description="Cetak Surat" />
              </Steps>
            </div>
            <Form
              {...layout}
              form={form}
              name="basic"
              initialValues={{
                nama_perangkat_desa: props.nama_perangkat_desa,

                nama: props.nama,
                jenis_kelamin: props.jenis_kelamin,
                tempat_lahir: props.tempat_lahir,
                tgl_lahir: props.tgl_lahir,
                warga_negara: props.warga_negara,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="w-full"
            >

              <div className="w-6/12 px-10 pt-10 pb-5">
                <p>Tahap {current + 1}/5</p>
                <h3 className="mb-0 text-2xl font-bold">{steps[current].title}</h3>
                {/* <h5>{steps[current].description}</h5> */}
                <hr className="mt-8" />
                {steps[current].content}
              </div>
              <div className="w-6/12 px-10 pb-5 flex justify-end">
                <Form.Item {...tailLayout}>
                  {current > 0 && current < steps.length && (
                    <Button className="mr-3" onClick={() => decrease()}>
                      Kembali
                    </Button>
                  )}
                  {current < steps.length - 1 &&
                    <Button type="primary" htmlType="submit">
                      Lanjut
                    </Button>
                  }
                  {current + 1 === steps.length && (
                    <Button type="primary" htmlType="submit" onClick={() => onFormDone()}>
                      Done
                    </Button>
                  )}
                  {/* {current + 1 === steps.length && (
                  <Button success type="primary" className="mr-3" onClick={() => onFormReset()}>
                    Reset Form
                    </Button>
                )} */}
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </Layout>
      {/* <p className="text-3xl font-bold text-center">INI ADALAH DASHBOARD</p> */}

      {/* Modal export pdf */}
      {/* <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      > */}
      {/* <div className="bg-yellow-400">
        <button onClick={() => window.location.reload()}>show pdf</button>

        <PDFViewer width="400" height="600">
          <PdfDocument />
        </PDFViewer>
      </div>
      </Modal>
      <PDFDownloadLink
        document={
          <PdfDocument />
        }
        fileName={`Surat Keterangan Umum Nomor.pdf`}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Export PDF"
        }
      </PDFDownloadLink> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  username: state.auth.username,
  isLogin: state.auth.isLogin,

  nama: state.admin.nama,
  jenis_kelamin: state.admin.jenis_kelamin,
  tempat_lahir: state.admin.tempat_lahir,
  tgl_lahir: state.admin.tgl_lahir,
  warga_negara: state.admin.warga_negara,
})

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
    logout: bindActionCreators(logout, dispatch),
    addStep1: bindActionCreators(addStep1, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
