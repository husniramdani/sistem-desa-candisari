import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router';
import { login, logout } from '@store/auth/action';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfDocument from '@components/admin/PdfDocument';
import { Steps, Button } from 'antd';
import Step1 from '@components/admin/Step1';

const { Step } = Steps;

const steps = [
  {
    title: 'Step 1',
    content: <Step1 />,
  },
  {
    title: 'Step 2',
    content: <Step1 />,
  },
  {
    title: 'Step 3',
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

  // skarang ini dulu
  const [current, setCurrent] = useState(0);

  const onLogout = () => {
    props.logout();
    router.push("/")
  }

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

  useEffect(() => {
    if (!props.isLogin) {
      router.push("/")
    }
  })

  const onChange = current => {
    console.log('onChange:', current);
    setCurrent(current)
  };

  return (
    <>
      <div className="px-32 py-20">
        <h2>Surat Keterangan Umum</h2>
        <h5>Desa Candisari</h5>
        <hr />
        <div className="bg-gray-300 flex flex-row">
          <div className="bg-yellow-400 w-3/12">
            <Steps progressDot current={current} onChange={(e) => onChange(e)} direction="vertical">
              <Step title="Step 1" description="This is a description." />
              <Step title="Step 2" description="This is a description." />
              <Step title="Step 3" description="This is a description." />
            </Steps>
          </div>
          <div className="bg-green-400 w-full">
            <b>{steps[current].title}</b>
            {steps[current].content}
          </div>
        </div>
      </div>
      {/* <p className="text-3xl font-bold text-center">INI ADALAH DASHBOARD</p>
      <button onClick={() => onLogout()}>
      Logout
      </button> */}
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
})

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
    logout: bindActionCreators(logout, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
