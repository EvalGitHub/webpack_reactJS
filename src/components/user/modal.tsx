import * as React from 'react';
import { Input,Button, Modal, Row, Col } from 'antd';
interface initProps {
  showModalFun: (modalType:string) => void,
  record: any
};
interface SureInfoConfig {
  title: string,
  content: string,
  cancelBtnText: string,
  sureBtnText: string,
  sureCallBack: () => void,
  cancelCallBack: () => void
};

export function MiaoCommandModal (props: initProps) {
    function closeModal () {
      props.showModalFun('noModal')
    };
    return (
        <Modal
          closable={false}
          centered={true}
          visible={true}
          title=''
          footer={null}>
          <ul style={{textAlign: 'center'}}>
            <li style={{marginBottom: '15px'}}>
              <Row gutter={8} justify={'center'}>
                <Col span={2}>记录</Col>
                <Col span={15}>更新时间</Col>
                <Col span={7}>
                  操作  
                </Col>
              </Row>
            </li>
            <li style={{marginBottom: '10px'}}>
              <Row gutter={8} justify={'center'}>
                <Col span={2}>1</Col>
                <Col span={15}>yyyy-mm-dd hh:mm:ss</Col>
                <Col span={7}>
                <Button style={{borderRadius: '20px', height: '25px', cursor: 'pointer'}} type='primary'>复制下载口令</Button>  
                </Col>
              </Row>
            </li>
            <li style={{marginTop: '20px'}}>
              <Button onClick={closeModal} type='link'>关闭</Button>  
            </li>
          </ul>
        </Modal>
      )
};

export function AlterRecommendModal (props: initProps) {
    function closeModal () {
        props.showModalFun('noModal')
    };
    return (
        <Modal
            closable={false}
            centered={true}
            visible={true}
            title=''
            width={'400px'}
            footer={null}>
            <div style={{textAlign: 'center'}}>
            <p>xxxxxxx作品名字</p>
            <section>
                <p>推荐封面</p>
                <img  src='https://static-k12edu.codemao.cn/codesailing/build/img/2d1a44c417a0a3bc824084c4bbf63249.png' 
                alt='作品封面图'/>
                <Button style={{marginBottom: '30px', marginTop: '17px', width: '140px', height: '40px', cursor: 'pointer'}} type='primary'>更换</Button>
            </section>
            <section>
                <p style={{textAlign: 'left'}}>推荐语：</p>
                <Input style={{borderRadius: '10px', marginBottom: '50px'}} placeholder='默认推荐语'/>
                <div style={{paddingTop: '20px'}}>
                <Button style={{marginRight: '20px', width: '100px', height: '36px', cursor: 'pointer'}} type='primary' onClick={closeModal}>取消</Button>
                <Button style={{marginRight: '20px', width: '100px', height: '36px', cursor: 'pointer'}} type='primary' >确定</Button>
                </div>
            </section>
            </div>
        </Modal>
    )
};

export function DeleteWorksModal (props: initProps) {
    function closeModal () {
        props.showModalFun('noModal')
    };
    return (
        <Modal
          width={'400px'}
          centered={true}
          closable={false}
          visible={true}
          title=''
          footer={null}>
          <div style={{textAlign: 'center'}}>
            {}
            <p style={{marginBottom: '20px'}}>将作品 '杨过小龙女' 删除</p>
            <Input style={{borderRadius: '10px'}} placeholder='请输入删除原因'/>
            <div style={{paddingTop: '20px'}}>
              <Button style={{marginRight: '20px'}} type='primary' onClick={closeModal}>取消</Button>
              <Button type='primary' disabled={true} >确定</Button>
            </div>
          </div>
        </Modal>
      );
};

export function SureInfo (config:SureInfoConfig) {
  const { confirm } = Modal;
  return (
    confirm({
      title: config.title,
      content: config.content,
      okText: config.sureBtnText,
      cancelText: config.cancelBtnText,
      onOk () {
        config.sureCallBack();
      },
      onCancel() {
        config.cancelCallBack();
      },
    })
  )
};