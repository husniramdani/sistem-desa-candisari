import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router';
import { login, logout } from '@store/auth/action';
import { BlobProvider, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfDocument from '@components/dashboard/PdfDocument';
import { Form, Steps, Button } from 'antd';
import Step1 from '@components/dashboard/Step1';
import Step2 from '@components/dashboard/Step2';
import Step3 from '@components/dashboard/Step3';
import Step4 from '@components/dashboard/Step4';
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

const steps = [
  {
    title: "Pengisian Data Perangkat Desa",
    content: <Step1 />,
  },
  {
    title: 'Pengisian Data Pemohon',
    content: <Step2 />,
  },
  {
    title: 'Pengisian Data Kependudukan',
    content: <Step3 />,
  },
  {
    title: 'Pemberian tanda tangan',
    content: <Step4 />,
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
    increase();
    console.log(values)
    if (current === 0) {
      props.addStep1(values);
    } else if (current === 1) {
      props.addStep2(values);
    } else if (current === 2) {
      props.addStep3(values);
    } else if (current === 3) {
      // props.addStep4(values);
    }
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
    // form.resetFields()
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

  console.log("props", props)
  return (
    <>
      <Layout title="Desa Candisari">
        {/* <div className="w-full text-center mt-32">
          <h2 className="lg:hidden text-4xl font-bold">Buka di laptop ya!</h2>
        </div> */}
        <div className="w-4/6 py-16 mx-auto">
          <h2 className="mb-0 text-2xl font-bold">Surat Keterangan Umum</h2>
          <h5 className="">Pemerintah Desa Candisari</h5>
          {/* <hr className="mt-8"/> */}
          <div className="flex flex-row mt-8 border">
            <div className="w-4/12 border-r pl-5 py-10">
              <Steps
                progressDot
                current={current}
                onChange={(e) => onChange(e)}
                direction="vertical"
                className=""
              >
                <Step title="Tahap 1" description="Data Perangkat Desa" />
                <Step title="Tahap 2" description="Data Pemohon" />
                <Step title="Tahap 3" description="Data Kependudukan" />
                <Step title="Cetak" description="Pemberian Tanda Tangan" />
              </Steps>
            </div>
            <Form
              {...layout}
              form={form}
              name="basic"
              initialValues={{
                nama_perangkat_desa: props.nama_perangkat_desa,
                jabatan: props.jabatan,

                nama: props.nama,
                jenis_kelamin: props.jenis_kelamin,
                tempat_lahir: props.tempat_lahir,
                tgl_lahir: props.tgl_lahir,
                agama: props.agama,
                pekerjaan: props.pekerjaan,
                tempat_tinggal: props.tempat_tinggal,

                warga_negara: props.warga_negara,
                nik: props.nik,
                no_kk: props.no_kk,
                start_date: props.start_date,
                end_date: props.end_date,
                keperluan: props.keperluan,
                keterangan: props.keterangan,

                nomor_surat: props.nomor_surat,
                tempat_surat: props.tempat_surat,
                tgl_surat: props.tgl_surat,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="w-full"
            >

              <div className="px-10 pt-10 pb-5">
                <p>Tahap {current + 1}/5</p>
                <h3 className="mb-0 text-2xl font-bold">{steps[current].title}</h3>
                {/* <h5>{steps[current].description}</h5> */}
                <hr className="mt-8" />
                {steps[current].content}
              </div>
              <div className="px-10 pb-5 flex justify-between">
                <div>
                  <BlobProvider document={<PdfDocument props={props} />}>
                    {({ blob, url, loading, error }) => {
                      // Do whatever you need with blob here
                      return loading ? <a>Loading...</a> : <a href={url}>{url}</a>
                    }}
                  </BlobProvider>
                  {/* {current + 1 === steps.length && (
                    <PDFDownloadLink
                      document={<PdfDocument props={props} />}
                      fileName={`Surat Keterangan Umum Nomor.pdf`}
                      className="bg-green-500 text-white px-4 py-2 border border-green-500 hover:bg-white hover:text-green-500 float-left"
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Export PDF"
                      }
                    </PDFDownloadLink>
                  )} */}
                </div>
                <div>
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
                      Simpan
                    </Button>
                  )}
                </div>
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

  nama_perangkat_desa: state.admin.nama_perangkat_desa,
  jabatan: state.admin.jabatan,

  nama: state.admin.nama,
  jenis_kelamin: state.admin.jenis_kelamin,
  tempat_lahir: state.admin.tempat_lahir,
  tgl_lahir: state.admin.tgl_lahir,
  agama: state.admin.agama,
  pekerjaan: state.admin.pekerjaan,
  tempat_tinggal: state.admin.tempat_tinggal,

  warga_negara: state.admin.warga_negara,
  nik: state.admin.nik,
  no_kk: state.admin.no_kk,
  start_date: state.admin.start_date,
  end_date: state.admin.end_date,
  keperluan: state.admin.keperluan,
  keterangan: state.admin.keterangan,

  nomor_surat: state.admin.nomor_surat,
  tempat_surat: state.admin.tempat_surat,
  tgl_surat: state.admin.tgl_surat,
})

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
    logout: bindActionCreators(logout, dispatch),

    addStep1: bindActionCreators(addStep1, dispatch),
    addStep2: bindActionCreators(addStep2, dispatch),
    addStep3: bindActionCreators(addStep3, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
