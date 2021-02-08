import axios from 'axios'

/* eslint-disable no-console */
export function Post (url = '', data = {}, params = {}) {
  return axios.post(url, data, {
    headers: {
      token: '',
    },
    params,
    timeout: 3 * 1000,
  }).then(res => res.data)
}

export async function SubmitForm (username, phone) {
  const result = await Post(
    '/api/submit-form',
    {
      name: username,
      phone,
      client: new Date(),
    }).then(res => res.data)
  return result || {}
}
