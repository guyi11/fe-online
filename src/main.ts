// import orgApi from './api/org'
// import userApi from './api/user'
// import './style.css'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <h1>Hixtrip FE Online Quiz</h1>
//     <h2>Users:<h2>
//     <p class="read-the-docs" id="user">
//     </p>
//     <h2>Orgs:<h2>
//     <p class="read-the-docs" id="org">
//     </p>
//   </div>
// `

// userApi.query({}).then((users) => {
//   document.getElementById('user')!.innerHTML = JSON.stringify(users)
// })

// orgApi.query('1').then((users) => {
//   document.getElementById('org')!.innerHTML = JSON.stringify(users)
// })
import { createApp } from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; 
const  app=createApp(App)
app.use(DatePicker);
app.mount('#app')