import React, { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, message, Button, Progress } from 'antd';
import moment from "moment";

import { wrapper } from '@store/store'
import { addStep1, addStep2, addStep3, addStep4 } from '@store/credit-score/action'

import Layout from "@components/layout";
import Step1 from "@components/credit-score/step1";
import Step2 from "@components/credit-score/step2";
import Step3 from "@components/credit-score/step3";
import Step4 from "@components/credit-score/step4";
import Step5 from "@components/credit-score/step5";

const steps = [
  {
    title: 'Biodata',
    content: <Step1 />,
  },
  {
    title: 'Pendidikan dan Pekerjaan',
    content: <Step2 />,
  },
  {
    title: 'Tempat Tinggal',
    content: <Step3 />,
  },
  {
    title: 'Pendapatan dan lain-lain',
    content: <Step4 />,
  },
  {
    title: '',
    content: <Step5 />,
  },
];

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

const CreditScorePage = (props) => {
  const [step, setStep] = useState(1);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    increase();
    if(step===1){
      props.addStep1(values);
    } else if (step===2){
      props.addStep2(values);
    } else if (step===3){
      props.addStep3(values);
    } else if (step===4){
      props.addStep4(values);
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const increase = () => {
    if (step < 5) setStep(step + 1)
  };
  const decrease = () => {
    if (step > 1) setStep(step - 1)
  };

  const onFormDone = () => {
    // message.success('Processing complete!');
    // console.log(form)
  }

  const onFormReset = () => {
    const defaultStep1 = {
      nama: "",
      gender: "pria",
      tgl_lahir: "",
      usia: "",
      status: "",
      tanggungan: "",
    };
    const defaultStep2 = {
      pendidikan: "",
      pekerjaan: "",
      lama_bekerja: "",
      level_bekerja: "",
    };
    const defaultStep3 = {
      tempat_tinggal: "",
    };
    const defaultStep4 = {
      gaji: "",
      amount: "",
      repayment: "",
      insurance: "",
      tujuan: "",
      kredit_ke: "",
    };
    setStep(1);
    props.addStep1(defaultStep1);
    props.addStep2(defaultStep2);
    props.addStep3(defaultStep3);
    props.addStep4(defaultStep4);
    location.reload();
  }

  return (
    <Layout title="Credit Score">
      <div className="p-5 md:px-20 bg-white min-h-screen h-full">
        <div className="sm:w-120 m-auto">
          <p className="text-lg font-semibold mb-2">
            Cek Credit Score
          </p >
          <p className="">
            Langkah {step} dari {steps.length}
          </p>
          <div className="my-5">
            <Progress strokeWidth={15} percent={step * 20} showInfo={false} />
          </div>
          <Form
            {...layout}
            form={form}
            name="basic"
            initialValues={{
              nama: props.nama,
              gender: "pria",
              tgl_lahir: props.tgl_lahir ? moment(props.tgl_lahir) : null,
              usia: props.usia,
              status: props.status,
              tanggungan: props.tanggungan,

              pendidikan: props.pendidikan,
              pekerjaan: props.pekerjaan,
              lama_bekerja: props.lama_bekerja,
              level_bekerja: props.level_bekerja,

              tempat_tinggal: props.tempat_tinggal,

              gaji: props.gaji,
              amount: props.amount,
              repayment: props.repayment,
              insurance: props.insurance,
              tujuan: props.tujuan,
              kredit_ke: props.kredit_ke,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="steps-content mb-10">
              <b>{steps[step - 1].title}</b>
              {steps[step - 1].content}
            </div>
            <Form.Item {...tailLayout}>
              {step < steps.length-1 &&
                <Button className="mr-3" type="primary" htmlType="submit">
                  Lanjut
                </Button>
              }
              {step === steps.length-1 && (
                <Button className="mr-3" type="primary" htmlType="submit" onClick={() => onFormDone()}>
                  Done
                </Button>
              )}
              {step === steps.length && (
                <Button success type="primary" className="mr-3" onClick={() => onFormReset()}>
                  Reset Form
                </Button>
              )}
              {step > 1 && step <= steps.length && (
                <Button onClick={() => decrease()}>
                  Kembali
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  nama: state.creditScore.nama,
  tgl_lahir: state.creditScore.tgl_lahir,
  usia: state.creditScore.usia,
  status: state.creditScore.status,
  tanggungan: state.creditScore.tanggungan,

  pendidikan: state.creditScore.pendidikan,
  pekerjaan: state.creditScore.pekerjaan,
  lama_bekerja: state.creditScore.lama_bekerja,
  level_bekerja: state.creditScore.level_bekerja,

  tempat_tinggal: state.creditScore.tempat_tinggal,

  gaji: state.creditScore.gaji,
  amount: state.creditScore.amount,
  repayment: state.creditScore.repayment,
  insurance: state.creditScore.insurance,
  tujuan: state.creditScore.tujuan,
  kredit_ke: state.creditScore.kredit_ke,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addStep1: bindActionCreators(addStep1, dispatch),
    addStep2: bindActionCreators(addStep2, dispatch),
    addStep3: bindActionCreators(addStep3, dispatch),
    addStep4: bindActionCreators(addStep4, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditScorePage)