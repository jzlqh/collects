import { LitElement, html, css } from "lit";
import { customElement } from 'lit/decorators.js';
import axios from 'axios'

@customElement('lit-foo')
export class Foo extends LitElement {

  constructor() {
    super();
  }

  @property()
  datas = [];

  getData() {
    axios.get('https://api2.bybit.com/fiat/public/channel/support-coins')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  }
  // 定义模版并渲染
  render() {
    return html`
      
      <button @click=${this.getData}>get Coins</button>
    `;
    }
}
// 为组件添加样式
Foo.styles = css`
  
`;