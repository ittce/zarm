import React, { Component } from 'react';
import Header from '../components/Header';
import { Panel, Cell, Switch, Button, Modal, Confirm } from '../../components';

import '../styles/pages/ModalPage';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  open(key) {
    this.setState({
      [`${key}`]: true,
    });
  }

  close(key) {
    this.setState({
      [`${key}`]: false,
    });
  }

  render() {
    const { modal } = this.state;

    return (
      <div className="modal-page">
        <Header title="模态框 Modal" />
        <main>
          <Panel>
            <Panel.Header>
              <Panel.Title>基本</Panel.Title>
            </Panel.Header>
            <Panel.Body>
              <Cell
                description={
                  <Button
                    size="xs"
                    onClick={() => this.open('modal1')}>开启</Button>
                }>普通</Cell>

              <Cell
                description={
                  <Button
                    size="xs"
                    onClick={() => this.open('modal3')}>开启</Button>
                }>
                圆角
              </Cell>

              <Cell
                description={
                  <Button
                    size="xs"
                    onClick={() => this.open('modal2')}>开启</Button>
                }>
                遮罩层可关闭
              </Cell>

              <Cell
                description={
                  <Button
                    size="xs"
                    onClick={() => this.open('modal4')}>开启</Button>
                }>无头部</Cell>

              <Cell
                description={
                  <Button
                    size="xs"
                    onClick={() => this.open('modal5')}>开启</Button>
                }>动画效果</Cell>
            </Panel.Body>
          </Panel>

          <Panel>
            <Panel.Header>
              <Panel.Title>特定场景</Panel.Title>
            </Panel.Header>
            <Panel.Body>
              <Cell
                description={
                  <Button
                    size="xs"
                    theme="warning"
                    onClick={() => this.open('alert')}>开启</Button>
                }>
                警告框 Alert
              </Cell>

              <Cell
                description={
                  <Button
                    size="xs"
                    theme="warning"
                    onClick={() => this.open('confirm')}>开启</Button>
                }>
                确认框 Confirm
              </Cell>
            </Panel.Body>
          </Panel>

          <Modal visible={this.state.modal1}>
            <Modal.Header title="标题" onClose={() => this.close('modal1')} />
            <Modal.Body>
              模态框内容
            </Modal.Body>
          </Modal>

          <Modal visible={this.state.modal2} onMaskClick={() => this.close('modal2')}>
            <Modal.Header title="标题" />
            <Modal.Body>
              点击遮罩层关闭
            </Modal.Body>
          </Modal>

          <Modal radius visible={this.state.modal3}>
            <Modal.Header title="标题" onClose={() => this.close('modal3')} />
            <Modal.Body>
              模态框内容
            </Modal.Body>
          </Modal>

          <Modal visible={this.state.modal4} onMaskClick={() => this.close('modal4')}>
            <Modal.Body>
              无头部
            </Modal.Body>
          </Modal>

          <Modal visible={this.state.modal5} animationType="rotate" onMaskClick={() => this.close('modal5')}>
            <Modal.Body>
              支持多种动画效果。<br />
              当前使用的是rotate旋转效果。
            </Modal.Body>
          </Modal>

          <Modal radius visible={this.state.alert}>
            <Modal.Header title="警告" />
            <Modal.Body>
              这是一个警告提示框
            </Modal.Body>
            <Modal.Footer>
              <Button bordered onClick={() => this.close('alert')}>关闭</Button>
            </Modal.Footer>
          </Modal>

          <Confirm
            radius
            visible={this.state.confirm}
            title="多个按钮情况"
            message="这里有好多个按钮, 你试试"
            onOk={() => alert('click ok')}
            onCancel={() => this.close('confirm')}
            />
        </main>
      </div>
    );
  }
}

const ModalDemo = (props) => {
  const { visible, title, onClose, children, others } = props;

  return (
    <Modal visible={visible} {...others}>
      <Modal.Header title={title} onClose={onClose} />
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default Page;
