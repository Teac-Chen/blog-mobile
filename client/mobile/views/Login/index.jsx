import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Form,
  Input,
  Button,
  Icon,
} from 'antd'
import Logo from '@m/assest/images/logo.svg'

import './index.scss'


const Login = ({ form, dispatch }) => (
  <div className="login_container">
    <img src={Logo} alt="TEAC" />
    <Form onSubmit={(e) => {
      e.preventDefault()
      form.validateFields((err, values) => {
        if (!err) {
          dispatch({
            type: 'LOGIN',
            token: JSON.stringify(values),
          })
        }
      })
    }}
    >
      <Form.Item>
        {form.getFieldDecorator('userName', {
          rules: [{ required: true, message: '请输入用户名' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />,
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入密码' }],
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          登录
        </Button>
        没有账号？
        <Link to="/register">立即注册</Link>
      </Form.Item>
    </Form>
  </div>
)

Login.propTypes = {
  form: PropTypes.shape({
    validateFields: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Form.create({})(Login))
