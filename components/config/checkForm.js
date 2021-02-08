/** 检查两个输入框的是否满足要求
 * @author Jonham.Chen <me@jonham.cn>
 * @date 2019-11-30
 * @export
 * @param {string} username
 * @param {string} phone
 */
export function CheckForm (username, phone) {
  if (!username) {
    throw new TypeError('请先输入姓名')
  }
  if (!phone) {
    throw new TypeError('请先输入手机号码')
  }

  if (!phone.match(/^1\d{10}$/)) {
    throw new TypeError('手机号码格式有误，请输入11位有效手机号码')
  }
}
