import React from 'react'
import { useDispatch } from 'react-redux';
import { Form, Input, Checkbox, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { logined } from '../../reducers/userReducers'
import './index.less';
function Welcome(props) {
	const dispatch = useDispatch();
	const onFinish = async(values) => {
		let d = await axios.post('/',{body:{a:1}})
		console.log(d,'Success:', values);
		dispatch(logined(true))
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className='welcome-body father-box'>
			<div className='title-content-box'>
				<div>
					你好！欢迎了解本产品的使用
				</div>
			</div>
			<div className='login-box'>

				<div className='input-box'>
					<div className='input-box-title'>
						登陆您的鹰眼账号
					</div>
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
					>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: 'Please input your Username!',
								},
							]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your Password!',
								},
							]}
						>
							<Input.Password
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
							/>
						</Form.Item>
						<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
							<Form.Item
								name="agreement"
								valuePropName="checked"
								rules={[
									{
										validator: (_, value) =>
											value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
									},
								]}
							>
								<Checkbox>
									I have read the <a href="">agreement</a>
								</Checkbox>
							</Form.Item>

							<a className="login-form-forgot" href="">
								Forgot password
							</a>
						</div>

						<Form.Item>
							<Button style={{ display: 'block', width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
								Log in
							</Button>
							Or <a href="">register now!</a>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default Welcome